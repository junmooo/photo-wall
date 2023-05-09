import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/error/NotFound";
import Demo from "@/pages/demo";

const routeConfig = [
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
] as RouteObject[];

export default routeConfig;
