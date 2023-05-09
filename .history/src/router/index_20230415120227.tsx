import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "@/pages/error/NotFound";
import Demo from "@/pages/demo";
import Demo2 from "@/pages/demo/Demo2";
import Demo3 from "@/pages/demo/Demo3.jsx";

const routeConfig = [
  {
    path: "/",
    element: <Navigate to="/demo" replace />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/demo2",
    element: <Demo2 />,
  },
  {
    path: "/demo3",
    element: <Demo3 />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
] as RouteObject[];

export default routeConfig;
