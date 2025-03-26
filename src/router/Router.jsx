import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Content from "../pages/Content.jsx";
import Home from "../pages/Home.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="content" element={<Content />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
