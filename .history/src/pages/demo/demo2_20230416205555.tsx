/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import "./demo2.less";
import MockData from "./mock.json";
import { throttle } from "lodash";
import { message } from "antd";

const Demo2 = () => {
  const mock = MockData;
  const [colData, setColData] = useState<any[][]>([[], [], [], []]);

  useEffect(() => {
    const interval = setInterval(() => {
      const heights = [0, 1, 2, 3].map((i) => getPosition(`hello-${i}`));
      let minIdx = 0;
      const temp = [...colData];
      heights.forEach((e, i) => {
        if (e < heights[minIdx]) {
          minIdx = i;
        }
      });
      if (heights[minIdx] < document.body.offsetHeight + 1000) {
        mock.splice(0, 1).forEach((e, i) => {
          temp[minIdx].push(e);
        });
      }
      setColData(temp);
    }, 1000);
    fetchData();
    return () => {
      clearInterval(interval);
    };
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

  const onScroll = useCallback(
    throttle(() => {
      // const heights = [0, 1, 2, 3].map((i) => getPosition(`hello-${i}`));
      // let minIdx = 0;
      // const temp = [...colData];
      // heights.forEach((e, i) => {
      //   if (e < heights[minIdx]) {
      //     minIdx = i;
      //   }
      // });
      // if (heights[minIdx] < document.body.offsetHeight + 1000) {
      //   mock.splice(0, 1).forEach((e, i) => {
      //     temp[minIdx].push(e);
      //   });
      // }
      // console.log(heights, minIdx);
      // setColData(temp);
    }, 500),
    []
  );

  return (
    <div className="main" onScroll={onScroll} id="main">
      {colData.map((col, i) => {
        return (
          <div className="col" key={i}>
            {col.map((url) => {
              return <img src={url} alt={url} />;
            })}
            <div id={`hello-${i}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Demo2;
