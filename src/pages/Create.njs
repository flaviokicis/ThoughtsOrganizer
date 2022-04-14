import Nullstack from "nullstack";
import "./Create.scss";
import Form from "../components/Form";
import moment from "moment";
import ThoughtModel from "../database/models/ThoughtModel";

class Create extends Nullstack {
  title = "";

  theme = "";

  dateValue = "";

  saveThought = () => {
    console.log(this.dateValue);
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

  static async saveNewThought({ title, theme, date }) {
    let due;
    const momentObject = moment(date, "YYYY-MM-DD");

    console.log(
      await ThoughtModel.create({
        title,
        theme,
        ...(momentObject.isValid() && { due: momentObject.valueOf() }),
      })
    );
  }

  render({ instances }) {
    return (
      <article class="create-container">
        <header class="default-header">New Thought</header>
        <main class="form-wrapper">
          <Form.Input title="Title" type="text" onchange={this.setTitle} />
          <Form.Input title="Theme" type="text" onchange={this.setTheme} />
          <Form.Input title="Due date" type="date" onchange={this.setDate} />
        </main>
        <Form.Button
          text="Add"
          onclick={() => {
            this.saveThought();
          }}
        />
        <p class="subtext">What is going on in your beautiful mind?</p>
      </article>
    );
  }
}

export default Create;
