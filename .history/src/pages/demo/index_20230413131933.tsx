import React, { useState } from "react";
import { Button, Tree, message } from "antd";
import macy from "@/types/common";
import Macy from "macy";

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [masonry, setMasonry] = useState();

  const getMacy = () => {
    if (masonry) {
    } else {
      let masonry = new Macy({
        container: ".macy-container", // 图像列表容器
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        margin: { x: 13, y: 4 }, // 设计列与列的间距
        columns: 3, // 设置列数
      });
      setMasonry(masonry);
    }
  };
  return <div>{contextHolder}</div>;
};

export default App;
