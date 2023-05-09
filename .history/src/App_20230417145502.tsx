import React, { useState } from "react";
import routeConfig from "./router";
import RouterGurad from "./router/RouterGurad";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <React.Suspense fallback={<></>}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#66666666",
            colorBgContainer: "#000",
          },
        }}
      >
        <RouterGurad routes={routeConfig} />
      </ConfigProvider>
    </React.Suspense>
  );
};

export default App;
