import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "@/pages/error/NotFound";
import Demo3 from "@/pages/demo/Demo3";

const routeConfig = [
  {
    path: "/",
    element: <Demo3 />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
] as RouteObject[];

export default routeConfig;
