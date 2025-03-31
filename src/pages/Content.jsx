import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  update,
  remove,
} from "firebase/database";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  const [searchParams] = useSearchParams();

  const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    // databaseURL: import.meta.env.VITE_DATABASE_URL,
    databaseURL: "https://superbuild-dic.firebaseio.com",
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  };
  const app = initializeApp(config);
  const db = getDatabase();
  const id = crypto.randomUUID();
  // const list = ref(db, "/date");

  useEffect(() => {
    console.log("### Content mounted !!!");
    console.log(id);
    return () => {
      console.log("### clear Content unmount !!");
    };
  }, []);

  const getData = () => {
    const list = ref(db, "/title");
    onValue(ref(db, "/title"), (snapshot) => {
      console.log("@@@ snapshot:", snapshot.val());
    });
  };

  const setData = () => {
    const uid = crypto.randomUUID();
    const testData = {
      uid: uid,
      user: "user 1",
      title: "title 1",
      content: "content 1",
    };
    console.log("## testData:", testData);

    const newPostKey = push(child(ref(db), "posts")).key;
    console.log("## newPostKey:", newPostKey);

    const updates = {};
    updates["/posts/" + newPostKey] = testData;
    updates["/user-posts/" + uid + "/" + newPostKey] = testData;
    update(ref(db), updates);
  };

  const removeData = () => {
    const updates = {};
    updates["/posts/"] = null;
    updates["/user-posts/"] = null;
    update(ref(db), updates);
    // remove(ref(db, "/posts"));
  };

  return (
    <>
      <div className="container">
        <button onClick={getData}>get list</button>
        <button onClick={setData}>insert test</button>
        <button onClick={removeData}>remove test</button>
      </div>
      {/* <div className="container">{list}</div> */}
    </>
  );
};

export default Content;
