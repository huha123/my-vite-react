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
      <div>VITE_SOME_KEY_1 : {import.meta.env.VITE_SOME_KEY_1}</div>
    </div>
  );
};

export default Main;
