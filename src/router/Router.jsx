import { useRoutes } from "react-router-dom";
import Content from "../pages/Content";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

const Router = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const routes = [
    {
      path: `${import.meta.env.BASE_URL}`,
      element: <Main />,
    },
    {
      path: `${import.meta.env.BASE_URL}content`,
      element: <Content />,
    },
    { path: "*", element: <NotFound /> },
  ]

  return useRoutes(routes);
};
export default Router;
