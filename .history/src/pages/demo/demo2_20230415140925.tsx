import { useEffect, useState } from "react";
import "./demo2.less";
import MockData from "./mock.json";
import { throttle } from "lodash";
import { message } from "antd";

const Demo2 = () => {
  const mock = MockData;
  const [colData, setColData] = useState<any[][]>([[], [], [], []]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const temp = [...colData];
    mock.splice(0, 12).forEach((e, i) => {
      temp[i % 4].push(e);
    });
    setColData(temp);
  };
  const getPosition = (id: string) => {
    return parseInt(
      document.getElementById(id)?.getBoundingClientRect().y.toFixed(0) || "0"
    );
  };

  const onScroll = throttle(() => {
    const heights = [0, 1, 2, 3].map((i) => getPosition(`hello-${i}`));

    let minIdx = 0;
    heights.forEach((e, i) => {
      if (e < heights[minIdx]) {
        minIdx = i;
      }
      if (heights[minIdx] < document.body.offsetHeight + 200) {
        fetchData();
      }
    });
    console.log(heights);
  }, 500);

  return (
    <div className="main" onScroll={onScroll}>
      {colData.map((col, i) => {
        return (
          <div className="col">
            {col.map((url) => {
              return (
                <div key={url}>
                  <img src={url} alt={url} />
                </div>
              );
            })}
            <div id={`hello-${i}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Demo2;
