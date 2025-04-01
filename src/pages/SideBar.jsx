import React from "react";
import { NavLink } from "react-router-dom";
// import "/src/css/Main.css";

const SideBar = () => {
  return (
    <div className="container">
      <div className="">
        <NavLink to="/">main</NavLink>
      </div>
      <div className="">
        <NavLink to="/content">content</NavLink>
      </div>
      <div className="">
        <NavLink to="/nested">nested</NavLink>
      </div>
      <div className="">
        <NavLink to="/test">nested</NavLink>
      </div>
    </div>
  );
};

export default SideBar;
