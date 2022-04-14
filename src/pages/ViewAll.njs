import Nullstack from "nullstack";
import "./ViewAll.scss";
import Sidebar from "../components/Sidebar";
import Thoughts from "../components/Thoughts";
import ThoughtManager from "../database/ThoughtManager";
import moment from "moment";

class ViewAll extends Nullstack {
  orderBy = "";

  // Call database
  static async loadAll() {
    return await ThoughtManager.loadAllThoughts();
  }

  // Load
  async hydrate() {
    this.allThoughts = await ViewAll.loadAll();
    this.showThoughts = this.allThoughts.slice(0);
  }

  order({ orderBy }) {
    const today = moment().startOf("day");
    if (orderBy === "upcoming") {
      this.showThoughts = this.showThoughts.filter((obj) => {
        if (obj.due && moment(obj.due).startOf("day").isSameOrAfter(today)) {
          return true;
        }
        return false;
      });
    } else {
      this.showThoughts = this.allThoughts.slice(0);
    }
    this.showThoughts.sort((a, b) => {
      switch (orderBy) {
        case "theme_alphabetically":
          if (!a.theme) return 1;
          if (!b.theme) return -1;
          return a.theme.localeCompare(b.theme);
        case "title_alphabetically":
          return a.title.localeCompare(b.title);
        case "upcoming":
          return a.due.valueOf() > b.due.valueOf() ? 1 : -1;
        case "created":
          return a.createdAt > b.createdAt ? 1 : -1;
      }
      return 0;
    });
  }

  render({ self }) {
    return (
      <article class="viewall-container">
        <header class="default-header">My thoughts</header>
        <select
          class="sort-dropdown"
          value={this.orderBy}
          onchange={({ event }) => {
            this.orderBy = event.target.value;
            this.order({ orderBy: this.orderBy });
          }}
        >
          <option value="theme_alphabetically">Themes alphabetically</option>
          <option value="title_alphabetically">Titles alphabetically</option>
          <option value="upcoming">Upcoming due dates</option>
          <option value="created">Creation date</option>
        </select>

        <main>
          {self.hydrated ? (
            this.showThoughts.length !== 0 ? (
              this.showThoughts.map((thought) => {
                return (
                  <Thoughts.ThoughtBox
                    title={thought.title}
                    theme={thought.theme}
                    date={thought.due}
                    id={thought._id}
                  />
                );
              })
            ) : (
              <>No thoughts yet :)</>
            )
          ) : (
            <>Loading...</>
          )}
        </main>
        <div class="create-icon">
          <p>Create new thought</p>
          <Sidebar.NavigateButton
            title={"New thought"}
            link="create"
            emoji="📝"
          />
        </div>
        <div class="home-icon">
          <p>Home</p>
          <Sidebar.NavigateButton title={"Home"} link="" emoji="🏠" />
        </div>
      </article>
    );
  }
}

export default ViewAll;
