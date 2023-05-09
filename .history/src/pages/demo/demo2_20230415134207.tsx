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
    setColData(temp);
    const body = document.getElementsByTagName("body");
    body[0].addEventListener("onScroll", onScroll);
  }, []);

  const onScroll = () => {
    console.log(
      document.getElementById("hello-0")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-1")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-2")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-3")?.getBoundingClientRect().y.toFixed(0)
    );
  };
  console.log("111");

  return (
    <div className="main" onScroll={onScroll}>
      {colData.map((col, i) => {
        return (
          <div className="col">
            {col.map((url) => {
              return (
                <div key={url}>
                  <img
                    src={url}
                    alt={url}
                    // onLoad={() => {
                    //   document
                    //     .getElementById(`col-${i}`)
                    //     ?.childNodes.forEach((e, j) => {
                    //       const temp = e as HTMLImageElement;
                    //       console.log(`col-${i}-${j}`, temp?.clientHeight);
                    //     });
                    // }}
                  />
                </div>
              );
            })}
            <div id={`hello-${i}`}>{"888888888888" + i}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Demo2;
