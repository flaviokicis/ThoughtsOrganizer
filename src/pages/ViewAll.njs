import Nullstack from "nullstack";
import "./ViewAll.scss";
import Spinner from "../components/Spinner";
import Sidebar from "../components/Sidebar";
import Thoughts from "../components/Thoughts";
import ThoughtManager from "../database/ThoughtManager";

class ViewAll extends Nullstack {
  // Call database
  static async loadAll() {
    return await ThoughtManager.loadAllThoughts();
  }

  // Load
  async hydrate() {
    this.allThoughts = await ViewAll.loadAll();
  }

  render({ self }) {
    return (
      <article class="viewall-container">
        <header class="default-header">My thoughts</header>
        <main>
          {self.hydrated ? (
            this.allThoughts.map((thought) => {
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
      </article>
    );
  }
}

export default ViewAll;
