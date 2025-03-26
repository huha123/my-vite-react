import React, { useEffect } from "react";
import reactLogo from "../assets/react.svg";

const Main = () => {
  useEffect(() => {
    console.log("### Home mounted !!!");
    return () => {
      console.log("### clear Main unmount !!");
    };
  }, []);
  //   return <div>Main</div>;
  return (
    <div className="container">
      {"### div > container"}
      <div className="layout">
        main 1-1<div className="purple-rect">puple 1</div>
      </div>
      <div className="layout">
        main 1-2<div className="purple-rect">puple 2</div>
      </div>
      <div className="auto-layout">
        main 2-1
        <div className="purple-rect">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </div>
      <div className="auto-layout">
        main 2-2
        <div className="purple-rect">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </div>
    </div>
  );
};

export default Main;
