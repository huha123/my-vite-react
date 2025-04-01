import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  onValue,
  orderByKey,
  push,
  query,
  ref,
  update
} from "firebase/database";
import React, { useEffect, useState } from "react";
import CardList from "./CardList";

const Main = () => {
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
  const [listData, setListData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  /* firebase realtime database get */
  const getData = () => {
    const postQuery = query(ref(db, "/posts"));
    onValue(postQuery, (snapshot) => {
      if (snapshot.val()) {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          setListData((prevState) => ({ ...prevState, [childKey]: childData }));
        });
      } else {
        setListData([]);
      }
    });
  };

  /* firebase realtime database push */
  const putData = () => {
    if (Object.keys(formData).length < 2) {
      alert("empty value");
      return;
    }

    // Get a key for a new Post.
    const key = push(child(ref(db), "posts")).key;
    // const uid = crypto.randomUUID();

    const data = {
      ...formData,
      uid: key,
      count: 0,
    };

    const updates = {};
    updates["/posts/" + key] = data;
    update(ref(db), updates);
    setFormData({});
  };

  /* firebase realtime database remove */
  const removeData = () => {
    const updates = {};
    updates["/posts/"] = null;
    update(ref(db), updates);
  };

  /* firebase realtime database update */
  const updateData = (data) => {
    const updates = {};
    updates["/posts/" + data.uid] = data;
    update(ref(db), updates);
  };

  const onChangeFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const countUp = (event, data) => {
    data = {
      ...data,
      count: ++data.count,
    };
    updateData(data);
  };
  const countDown = (event, data) => {
    data = {
      ...data,
      count: --data.count,
    };
    updateData(data);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Word"
          name="word"
          onChange={onChangeFormData}
          value={formData?.word || ""}
          required
          maxLength={15}
        />
        <input
          type="text"
          placeholder="Diction"
          name="diction"
          onChange={onChangeFormData}
          value={formData?.diction || ""}
          required
          maxLength={15}
        />
        <div>
          <button onClick={putData}>submit</button>
          {/* <button onClick={removeData}>remove data test</button> */}
        </div>
      </div>
      <hr />
      <div className="card-container">
        {Object.entries(listData).map(([key, value], idx) => (
          <CardList
            key={idx}
            data={value}
            countUp={countUp}
            countDown={countDown}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
