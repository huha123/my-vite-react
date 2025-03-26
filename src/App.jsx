import { useEffect } from "react";
import "./App.css";
import Router from "/src/router/Router.jsx";
import SideBar from "/src/pages/SideBar.jsx";

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
        <div className="child"><SideBar/></div>
        <div className="child content"><Router /></div>
      </div>
      <div className="child">Footer</div>
    </div>
  );
};

export default App;
