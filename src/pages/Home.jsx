import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("### Home mounted !!!");
    return () => {
      console.log("### clear Home unmount !!");
    };
  }, []);

  return <div>Home</div>;
};

export default Home;
