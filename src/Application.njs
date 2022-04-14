import Nullstack from "nullstack";
import "./Application.scss";
import Create from "./pages/Create.njs";
import Home from "./pages/Home";

class Application extends Nullstack {
  prepare({ page }) {
    page.title = `Thoughts Organizer`;
    page.description = `Made using Nullstack :)`;
    page.locale = "en-US";
  }

  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kurale&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
        <Create route="/create" />
      </main>
    );
  }
}

export default Application;
