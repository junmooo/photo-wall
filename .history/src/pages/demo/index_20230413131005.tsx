import React, { useState } from "react";
import { Button, Tree, message } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import { DownOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return <div>{contextHolder}</div>;
};

export default App;
