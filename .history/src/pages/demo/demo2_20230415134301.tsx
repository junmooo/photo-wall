import { useEffect, useState } from "react";
import "./demo2.less";
import MockData from "./mock.json";

const Demo2 = () => {
  const mock = MockData;
  const [colData, setColData] = useState<any[][]>([[], [], [], []]);

  useEffect(() => {
    const temp = [...colData];
    mock.splice(0, 12).forEach((e, i) => {
      temp[i % 4].push(e);
    });
    setColData(temp);
  }, []);

  const onScroll = () => {
    console.log(
      document.getElementById("hello-0")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-1")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-2")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-3")?.getBoundingClientRect().y.toFixed(0)
    );
  };

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
            <div id={`hello-${i}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Demo2;
