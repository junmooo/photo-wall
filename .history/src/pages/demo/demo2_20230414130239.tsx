import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";
import { message } from "antd";

function Demo2() {
  const [heights, setHeights] = useState<number[]>([0, 0, 0, 0]);
  const [colData, setColData] = useState<string[][]>([[], [], [], []]);
  const fn = () => {
    var wrap = document.getElementById("content-wrap");
    for (var i = 0; i < mock.length; i++) {
      //3.grid布局
      var item = document.createElement("div");
      item.setAttribute("class", "item");
      var itemChild = document.createElement("img");
      itemChild.setAttribute("class", "item-single");
      item.append(itemChild);
      itemChild.setAttribute(
        "src",
        `https://qingbing.top/imgs/${mock[i].trim()}`
      );
      wrap && wrap.append(item);
    }
  };
  useEffect(() => {
    fn();
  }, []);
  return (
    <div className="masonry">
      <div id="content-wrap"></div>
      <h2>Responsive Waterfall</h2>
      <div className="waterfall">
        {/* {mock.map((e) => (
          <div className="item" key={e}>
            <img src={`https://qingbing.top/imgs/${e.trim()}`} alt="ssss" />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Demo2;
