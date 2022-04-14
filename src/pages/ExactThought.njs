import Nullstack from "nullstack";
import "./ExactThought.scss";
import Form from "../components/Form";

class ExactThought extends Nullstack {
  async initiate({ params }) {
    this.id = params.id;
  }

  async loadInfo() {
    return { theme: "abc" };
  }

  async hydrate() {
    this.info = await this.loadInfo();
  }

  render({ self }) {
    return (
      <article class="exact-thought-container">
        <header class="thought-header">Thought #{this.id}</header>
        <main class="exact-thought-info">
          <div class="settings">
            <Form.Input
              title="Theme"
              type="text"
              onchange={this.setTheme}
              value={self.hydrated ? this.info.theme : "Loading"}
            />
            <Form.Input
              title="Due date"
              type="date"
              onchange={this.setDate}
              value={self.hydrated ? this.info.date : "Loading"}
            />
          </div>
          <div class="insight">
            <h1>Provide insight into your thought</h1>
          </div>
        </main>
      </article>
    );
  }
}

export default ExactThought;
