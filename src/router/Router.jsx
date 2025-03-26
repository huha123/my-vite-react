import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "../pages/Content";
import Main from "../pages/Main";

const Router = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="content" element={<Content />} />
    <Route path="nested" element={<Content />} />
  </Routes>
);

export default Router;
