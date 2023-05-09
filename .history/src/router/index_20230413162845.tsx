import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "@/pages/error/NotFound";
import Demo from "@/pages/demo";

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
    path: "*",
    element: <NotFound />,
  },
] as RouteObject[];

export default routeConfig;
