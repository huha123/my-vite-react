import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "../pages/Content.jsx";
import Main from "../pages/Main.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="content" element={<Content />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
