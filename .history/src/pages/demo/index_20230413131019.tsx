import React, { useState } from "react";
import { Button, Tree, message } from "antd";

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return <div>{contextHolder}</div>;
};

export default App;
