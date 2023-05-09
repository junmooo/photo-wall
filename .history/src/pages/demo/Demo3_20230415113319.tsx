import { useEffect, useState } from "react";
import "./demo2.less";
import MockData from "./mock.json";
import MagicGrid from "magic-grid";

const Demo2 = () => {
  const [colData, setColData] = useState<any[][]>([[], [], [], []]);

  let magicGrid = new MagicGrid({
    container: "#container", // Required. Can be a class, id, or an HTMLElement.
    items: 20, // For a grid with 20 items. Required for dynamic content.
    animate: true, // Optional.
  });

  magicGrid.listen();

  useEffect(() => {
    let magicGrid = new MagicGrid({
      container: "#container", // Required. Can be a class, id, or an HTMLElement.
      items: 20, // For a grid with 20 items. Required for dynamic content.
      animate: true, // Optional.
    });

    magicGrid.listen();
  }, []);

  console.log("111");

  return (
    <div className="main">
      {colData.map((col, i) => {
        return (
          <div className="col" id={`col-${i}`}>
            {col.map((url) => {
              return (
                <img
                  src={url}
                  alt={url}
                  onLoad={() => {
                    document
                      .getElementById(`col-${i}`)
                      ?.childNodes.forEach((e, j) => {
                        const temp = e as HTMLImageElement;
                        console.log(`col-${i}-${j}`, temp?.clientHeight);
                      });
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Demo2;
