import Nullstack from "nullstack";
import "./Sidebar.scss";

const NavigateButton = function ({ title, link, emoji }) {
  return (
    <a title={title} href={`/${link}`}>
      <div class="sidebar-button">{emoji}</div>
    </a>
  );
};

export default {
  NavigateButton,
};
