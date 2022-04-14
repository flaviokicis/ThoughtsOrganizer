import Nullstack from "nullstack";
import "./Form.scss";

const Input = function ({ title, type, onchange, value }) {
  return (
    <div class="input-wrapper">
      <p>{title}</p>
      {value !== undefined ? (
        <input type={type} onchange={onchange} value={value} />
      ) : (
        <input type={type} onchange={onchange} />
      )}
    </div>
  );
};

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
