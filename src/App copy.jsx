import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { create } from "zustand";
import { useEffect } from "react";

export const userTestCountStore = create((set) => ({
  countStore: 0,
  arrayStore: [],
  addTestCount: (count) =>
    set((state) => ({ testCount: [...state.testCount, count] })),
}));

function App() {
  const [count, setCount] = useState(0);
  const testCountStore = userTestCountStore((state) => state);
  const { countStore, arrayStore } = userTestCountStore();

  useEffect(() => {
    console.log("### useEffect:", testCountStore.countStore);
    console.log("### useEffect:", testCountStore.arrayStore);
    return () => {
      console.log("### clear unmount");
    };
  }, []);

  useEffect(() => {}, [countStore]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React ::: userTestCountStore: {userTestCountStore}</h1>
      <h1>countStore: {countStore}</h1>
      <h1>arrayStore: {arrayStore}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
