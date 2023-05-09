import { useEffect, useState } from "react";
import "./demo2.less";
import "./mock.json";

const Demo2 = () => {
  const [colData, setColData] = useState<any[]>([]);
  useEffect(() => {}, []);
  return <div className="main"></div>;
};

export default Demo2;
