import { useEffect, useState } from "react";
import "./demo2.less";
import MockData from "./mock.json";

const Demo2 = () => {
  const [colData, setColData] = useState<any[][]>([[], [], [], []]);
  useEffect(() => {
    const temp = [...colData];
    MockData.splice(0, 12).forEach((e, i) => {
      temp[i % 4].push(e);
    });
  }, []);
  return <div className="main"></div>;
};

export default Demo2;
