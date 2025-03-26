import React, { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    console.log("### Home mounted !!!");
    return () => {
      console.log("### clear Content unmount !!");
    };
  }, []);
  return <div>Content</div>;
};

export default Content;
