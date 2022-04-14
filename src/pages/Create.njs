import Nullstack from "nullstack";
import "./Create.scss";
import Form from "../components/Form";
import moment from "moment";

class Create extends Nullstack {
  title = "";

  theme = "";

  dateValue = "";

  getDate() {
    return moment(this.dateValue);
  }

  static async saveNewThought() {}

  render() {
    return (
      <article class="create-container">
        <header class="default-header">New Thought</header>
        <main class="form-wrapper">
          <Form.Input title="Title" value={this.title} type="text" />
          <Form.Input title="Theme" value={this.title} type="text" />
          <Form.Input title="Due date" value={this.dateValue} type="date" />
        </main>
        <Form.Button text="Add" onclick={() => {}} />
        <p class="subtext">What is going on in your beautiful mind?</p>
      </article>
    );
  }
}

export default Create;
