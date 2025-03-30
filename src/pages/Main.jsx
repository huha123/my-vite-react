import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    console.log("### Main mounted !!!");
    return () => {
      console.log("### clear Main unmount !!");
    };
  }, []);
  return (
    <div className="container">
      <div>Main page11</div>
    </div>
  );
};

export default Main;
