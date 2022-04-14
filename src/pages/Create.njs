import Nullstack from "nullstack";
import "./Create.scss";
import Form from "../components/Form";
import moment from "moment";
import Sidebar from "../components/Sidebar";
import ThoughtManager from "../database/ThoughtManager";
import Notifications from "../utils/notifications";

class Create extends Nullstack {
  title = "";

  theme = "";

  dateValue = "";

  // Client calls Server
  saveThought = () => {
    if (!this.title) {
      Notifications.showError("Title cannot be empty.");
      return;
    }
    Notifications.showSuccess("Thought successfully created!");
    Create.saveNewThought({
      title: this.title,
      theme: this.theme,
      date: this.dateValue,
    });
  };

  setTitle = ({ event }) => {
    this.title = event.target.value;
  };

  setTheme = ({ event }) => {
    this.theme = event.target.value;
  };

  setDate = ({ event }) => {
    this.dateValue = event.target.value;
  };

  // Add thought to Database
  static async saveNewThought({ title, theme, date, environment }) {
    const momentObject = moment(date, "YYYY-MM-DD");

    ThoughtManager.createNewThought(
      title,
      theme,
      momentObject,
      environment.development
    );
  }

  render() {
    return (
      <article class="create-container">
        <header class="default-header">New Thought</header>
        <main class="form-wrapper">
          <Form.Input title="Title" type="text" onchange={this.setTitle} />
          <Form.Input title="Theme" type="text" onchange={this.setTheme} />
          <Form.Input title="Due date" type="date" onchange={this.setDate} />
        </main>
        <a href="/all">
          <Form.Button
            text="Add"
            onclick={() => {
              this.saveThought();
            }}
          />
        </a>
        <p class="subtext">What is going on in your beautiful mind?</p>
        <div class="view-icon">
          <p>See all thoughts</p>
          <Sidebar.NavigateButton
            title={"See all thoughts"}
            link="all"
            emoji="👀"
          />
        </div>
      </article>
    );
  }
}

export default Create;
