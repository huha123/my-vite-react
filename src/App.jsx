import { useEffect } from "react";
import Router from "/src/router/Router";
import "/src/css/Main.css";

const App = () => {
  useEffect(() => {
    console.log("### App mounted !!");
    return () => {
      console.log("### clear App unmount !!");
    };
  }, []);


  return <Router />;
}

export default App;
