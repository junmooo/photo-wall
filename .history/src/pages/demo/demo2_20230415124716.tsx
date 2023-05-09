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
  }, []);

  const onScroll = () => {
    console.log("hello-0", document.getElementById("hello-0")?.offsetHeight);
  };
  console.log("111");

  return (
    <div className="main" onScroll={onScroll}>
      {colData.map((col, i) => {
        return (
          <div className="col" id={`col-${i}`} onScroll={onScroll}>
            {col.map((url) => {
              return (
                <img
                  src={url}
                  alt={url}
                  key={url}
                  // onLoad={() => {
                  //   document
                  //     .getElementById(`col-${i}`)
                  //     ?.childNodes.forEach((e, j) => {
                  //       const temp = e as HTMLImageElement;
                  //       console.log(`col-${i}-${j}`, temp?.clientHeight);
                  //     });
                  // }}
                />
              );
            })}
            <div id={`hello-${i}`}>{i}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Demo2;
