import { useRoutes } from "react-router-dom";
import Content from "../pages/Content";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "content",
      element: <Content />,
    },
    { path: "*", element: <NotFound /> },
  ]

  return useRoutes(routes);
};
export default Router;
