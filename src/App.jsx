import { Link } from "react-router-dom";
import "./App.css";
import Router from "/src/router/Router";
import Footer from "./pages/Footer";
import LeftSide from "./pages/LeftSide";
import RightSide from "./pages/RightSide";
import { useEffect } from "react";

const App = () => {
  return (
    <>
      <header>
        {/* <nav>
          <ul>
            <li>
              <Link to={import.meta.env.BASE_URL}>home</Link>
            </li>
            <li>
              <Link to={`${import.meta.env.BASE_URL}content`}>content</Link>
            </li>
          </ul>
        </nav> */}
        <h1>Super Diction</h1>
      </header>
      <main>
        {/* <aside>
          <LeftSide />
        </aside> */}
        <section>
          <Router />
        </section>
        {/* <aside>
          <RightSide />
        </aside> */}
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};

export default App;
