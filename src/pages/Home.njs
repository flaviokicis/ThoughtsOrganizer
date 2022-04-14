import Nullstack from "nullstack";
import "./Home.scss";
import Logo from "nullstack/logo";
import Sidebar from "../components/Sidebar";

class Home extends Nullstack {
  render() {
    return (
      <article class="home">
        <aside>
          <Sidebar.NavigateButton
            title={"New thought"}
            link="create"
            emoji="📝"
          />
          <Sidebar.NavigateButton
            title={"See all thoughts"}
            link="all"
            emoji="👀"
          />
          <Sidebar.NavigateButton
            title={"Upcoming thoughts"}
            link="all?upcoming=true"
            emoji="⌛"
          />
        </aside>
        <div class="main-container">
          <header class="default-header">Thoughts Organizer</header>
          <main class="text-container">
            <p>
              This is a tool that can help you organize your thoughts as you're
              having them in a far more organized manner than just opening
              Notepad and saving it as “asokdjaks.txt”
            </p>
            <p>
              I decided to make this cause it's the type of tool i'm constantly
              using on a daily basis.
            </p>
          </main>
          <footer>
            Made using{" "}
            <a href="https://nullstack.app">
              <span>Nullstack</span>
            </a>
          </footer>
        </div>
      </article>
    );
  }
}

export default Home;
