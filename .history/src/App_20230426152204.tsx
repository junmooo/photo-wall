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
            fontFamily:
              '"方正等线",apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          },
        }}
      >
        <RouterGurad routes={routeConfig} />
      </ConfigProvider>
    </React.Suspense>
  );
};

export default App;
