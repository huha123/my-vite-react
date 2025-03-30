import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log("### Content mounted !!!");
    console.log("### searchParams:", searchParams);
    searchParams.forEach((v) => {
      console.log("@@@ foreach v:", v);
    });
    return () => {
      console.log("### clear Content unmount !!");
    };
  }, []);
  return <div className="container">Content page</div>;
};

export default Content;
