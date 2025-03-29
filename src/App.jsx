import { Link } from "react-router-dom";
import "./App.css";
import Router from "/src/router/Router";

const App = () => {
  // return <>app page</>;
  return (
    <>
      {/* <div className="container">
        <div>header</div>
        <div>left</div>
        <div>
          <Router />
        </div>
      </div> */}
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
        <section>
          <Router />
        </section>
        <aside>aside</aside>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
