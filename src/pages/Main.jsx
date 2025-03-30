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
      <div>base url : {import.meta.env.BASE_URL}</div>
      <div>VITE_SECRET_KEY : {import.meta.env.VITE_SECRET_KEY}</div>
      <div>VITE_SOME_KEY_1 : {import.meta.env.VITE_SOME_KEY_1}</div>
      <div>VITE_SOME_KEY_2 : {import.meta.env.VITE_SOME_KEY_2}</div>
      <div>TEST_PUBLIC_KEY_2 : {import.meta.env.TEST_PUBLIC_KEY_2}</div>
    </div>
  );
};

export default Main;
