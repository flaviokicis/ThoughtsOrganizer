import Nullstack from "nullstack";
import "./ExactThought.scss";
import Form from "../components/Form";
import ThoughtManager from "../database/ThoughtManager";
import moment from "moment";
import Notifications from "../utils/notifications";
import Sidebar from "../components/Sidebar";

class ExactThought extends Nullstack {
  insight = "";

  theme = "";

  date = "";

  async initiate({ params }) {
    this.id = params.id;
  }

  static async loadInfo({ id }) {
    return await ThoughtManager.getThought(id);
  }

  static async updateInfo({ id, theme, date, insight, development }) {
    const data = {};
    if (theme) {
      data["theme"] = theme;
    }
    if (date) {
      data["due"] = moment(date, "yyyy-MM-dd").valueOf();
    }
    if (insight) {
      data["insight"] = insight;
    }
    await ThoughtManager.updateById(id, data, development);
  }

  static async deleteThought({ id }) {
    await ThoughtManager.deleteThought(id);
  }

  async hydrate() {
    if (!this.info) {
      this.info = await ExactThought.loadInfo({ id: this.id });
      this.theme = this.info.theme;
      this.insight = this.info.insight;
      this.date = this.info.due;
    }
    window.addEventListener("keydown", (event) => {
      if (this.show && event.key === "Escape") {
        this.show = false;
      }
    });
  }

  getShowState() {
    return this.show ? "" : " hidden";
  }

  async delete({}) {
    Notifications.showSuccess("Thought successfully deleted!");
    ExactThought.deleteThought({ id: this.id });
  }

  async updateData({ environment }) {
    Notifications.showSuccess("Thought successfully updated!");
    await ExactThought.updateInfo({
      id: this.id,
      theme: this.theme,
      date: this.date,
      insight: this.insight,
      development: environment.development,
    });
  }

  render({ self, environment }) {
    return (
      <>
        <div class={"confirm-delete" + this.getShowState()}>
          <div class="delete-box">
            <p>Are you sure you want to delete this thought?</p>
            <div class="buttons-box">
              <a href="/all">
                <Form.Button
                  text="Yep"
                  onclick={() => {
                    this.delete();
                  }}
                />
              </a>
              <Form.Button text="NO!" onclick={() => (this.show = false)} />
            </div>
          </div>
        </div>
        <article class="exact-thought-container">
          <header class="thought-header">
            {self.hydrated ? this.info.title : "..."}
          </header>
          <main class="exact-thought-info">
            <div class="settings">
              <Form.Input
                title="Theme"
                type="text"
                onchange={({ event }) => {
                  this.theme = event.target.value;
                }}
                value={this.theme}
              />
              {this.info?.due ? (
                <Form.Input
                  title="Due date"
                  type="date"
                  onchange={({ event }) => {
                    console.log(event.target.value);
                    this.date = event.target.value;
                  }}
                  value={
                    self.hydrated
                      ? this.date.toISOString().split("T")[0]
                      : "Loading"
                  }
                />
              ) : (
                <Form.Input
                  title="Due date"
                  type="date"
                  onchange={({ event }) => {
                    console.log(event.target.value);
                    this.date = event.target.value;
                  }}
                />
              )}
            </div>
            <div class="insight">
              <h1>Provide insight into your thought</h1>
              <textarea
                class="insight-input"
                onchange={({ event }) => (this.insight = event.target.value)}
              >
                {this.insight ? this.insight : ""}
              </textarea>
            </div>
            <div class="buttons-box-big">
              <a href="/all">
                <Form.Button
                  text="✅️"
                  onclick={() => {
                    this.updateData({ environment });
                  }}
                />
              </a>
              <Form.Button
                text="🗑️"
                onclick={() => {
                  this.show = true;
                }}
              />
            </div>
          </main>
          <div class="view-icon">
            <p>See all thoughts</p>
            <Sidebar.NavigateButton
              title={"See all thoughts"}
              link="all"
              emoji="👀"
            />
          </div>
        </article>
      </>
    );
  }
}

export default ExactThought;
