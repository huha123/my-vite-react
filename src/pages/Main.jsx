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
      <hr />
      <div>==== .env file</div>
      <div>VITE_LOCAL_VAL_1 : {import.meta.env.VITE_LOCAL_VAL_1}</div>
      <div>VITE_SECRET_KEY : {import.meta.env.VITE_SECRET_KEY}</div>
      <div>VITE_SOME_KEY_1 : {import.meta.env.VITE_SOME_KEY_1}</div>
      <hr />
      <div>==== static.yml file</div>
      <div>TEST_PUBLIC_KEY_2 : {import.meta.env.TEST_PUBLIC_KEY_2}</div>
      <div>VITE_PUBLIC_KEY_ENV : {import.meta.env.VITE_PUBLIC_KEY_ENV}</div>
      <div>VITE_PUBLIC_KEY_ENV : {import.meta.env.VITE_PUBLIC_KEY_ENV}</div>
      <hr />
      <div>==== static.yml echo</div>
      <div>VITE_SECRET_ENV_ECHO : {import.meta.env.VITE_SECRET_ENV_ECHO}</div>
      <div>VITE_TEST_PUBLIC_KEY_ECHO : {import.meta.env.VITE_TEST_PUBLIC_KEY_ECHO}</div>
      <div>VITE_SOME_KEY_1_ECHO : {import.meta.env.VITE_SOME_KEY_1_ECHO}</div>

    </div>
  );
};

export default Main;
