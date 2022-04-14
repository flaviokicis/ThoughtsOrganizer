import Toastify from "toastify-js";

const showSuccess = (text) => {
  toast(text, "green");
};

const showError = (text) => {
  toast(text, "red");
};

function toast(text, color) {
  const obj = Toastify({
    text: text,
    position: "left",
    style: { background: color },
  });
  obj.showToast();
}

export default {
  showSuccess,
  showError,
};
