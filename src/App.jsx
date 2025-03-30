import { Link } from "react-router-dom";
import "./App.css";
import Router from "/src/router/Router";
import Footer from "./pages/Footer";
import LeftSide from "./pages/LeftSide";
import RightSide from "./pages/RightSide";

const App = () => {
  // return <>app page</>;
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"content"}>content</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <aside>
          <LeftSide />
        </aside>
        <section>
          <Router />
        </section>
        <aside>
          <RightSide />
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
