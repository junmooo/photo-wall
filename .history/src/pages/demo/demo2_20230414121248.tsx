import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";
import { message } from "antd";

function Demo2() {
  const [heights, setHeights] = useState<number[]>([0, 0, 0, 0]);
  const [colData, setColData] = useState<string[][]>([[], [], [], []]);

  return (
    <div className="masonry">
      <h2>Responsive Waterfall</h2>
      <div className="waterfall"></div>
    </div>
  );
}

export default Demo2;
