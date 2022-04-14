import Nullstack from "nullstack";
import "./Form.scss";

class Input extends Nullstack {
  title = "";

  type = "text";

  prepare({ title, value, type }) {
    this.title = title;
    this.value = value;
    this.type = type;
  }

  render() {
    return (
      <div class="input-wrapper">
        <p>{this.title}</p>
        <input autocomplete="none" type={this.type} bind={this.value} />
      </div>
    );
  }
}

const Button = function ({ text, onclick }) {
  return (
    <button class="form-button" onclick={onclick}>
      {text}
    </button>
  );
};

export default {
  Input,
  Button,
};
