import React, { useEffect } from "react";
import "/src/css/Main.css";

const Main = () => {
  useEffect(() => {
    console.log("### Home mounted !!!");
    return () => {
      console.log("### clear Main unmount !!");
    };
  }, []);
  return (
    <div className="container">
      <div className="">main content 1</div>
      <div className="">main content 2</div>
      <div className="">main content 3</div>
      <div className="">main content 4</div>
      <div className="">main content 5</div>
    </div>
  );
};

export default Main;
