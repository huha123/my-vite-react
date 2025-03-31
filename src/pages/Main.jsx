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
      <div>VITE_SECRET_KEY : {import.meta.env.VITE_SECRET_KEY}</div>
      <div>VITE_PUBLIC_KEY : {import.meta.env.VITE_PUBLIC_KEY}</div>
    </div>
  );
};

export default Main;
