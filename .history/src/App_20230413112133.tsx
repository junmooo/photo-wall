import React, { useState } from "react";
import routeConfig from "./router";
import RouterGurad from "./router/RouterGurad";
import "./App.css";

const App = () => {
  return (
    <React.Suspense fallback={<></>}>
      <RouterGurad routes={routeConfig} />
    </React.Suspense>
  );
};

export default App;
