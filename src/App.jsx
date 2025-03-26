import { useEffect } from "react";
import Router from "/src/router/Router";
import "./App.css";

const App = () => {
  useEffect(() => {
    console.log("### App mounted !!");
    return () => {
      console.log("### clear App unmount !!");
    };
  }, []);

  return (
    <div className="parent">
      <div className="child">Header</div>
      <div className="main">
        <div className="child">Sidebar</div>
        <div className="child content"><Router /></div>
      </div>
      <div className="child">Footer</div>
    </div>
  );
};

export default App;
