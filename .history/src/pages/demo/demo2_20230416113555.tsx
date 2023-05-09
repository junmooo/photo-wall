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
    fetchData();
  }, []);

  const fetchData = () => {
    const temp = [...colData];
    mock.splice(0, 12).forEach((e, i) => {
      temp[i % 4].push(e);
    });
    setColData(temp);
  };

  /*** root是要监听的根元素，我们要对root节点内的img元素进行监听* 这里用到Promise.all*/
  // const onAllImgLoaded = async (root: any) => {
  //   const imgNodes =
  //     root instanceof HTMLImageElement ? [root] : root.querySelectorAll("img");
  //   //为了使用Array的map方法
  //   let imgArr = Array.prototype.slice.call(imgNodes);
  //   return await Promise.all(
  //     imgArr.map((img) => {
  //       return new Promise((resolve) => {
  //         img.addEventListener("load", () => resolve(img));
  //       });
  //     })
  //   );
  // };

  // useEffect(() => {
  //   onAllImgLoaded(document.getElementById("main")).then((img) => {
  //     console.log("img", img);
  //   });
  // }, [colData]);

  const getPosition = (id: string) => {
    return parseInt(
      document.getElementById(id)?.getBoundingClientRect().y.toFixed(0) || "0"
    );
  };

  const onScroll = useCallback(
    throttle(() => {
      const heights = [0, 1, 2, 3].map((i) => getPosition(`hello-${i}`));

      let minIdx = 0;
      heights.forEach((e, i) => {
        if (e < heights[minIdx]) {
          minIdx = i;
        }
        if (heights[minIdx] < document.body.offsetHeight + 500) {
          const temp = [...colData];
          mock.splice(0, 1).forEach((e, i) => {
            console.log(heights, minIdx);
            temp[minIdx].push(e);
          });
          setColData(temp);
        }
      });
    }, 1000),
    []
  );

  return (
    <div className="main" onScroll={onScroll} id="main">
      {colData.map((col, i) => {
        return (
          <div className="col" key={i}>
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
