import { useEffect, useState } from "react";
import "./demo2.less";
import MockData from "./mock.json";
import MagicGrid from "magic-grid";

const Demo3 = () => {
  const [colData, setColData] = useState<any[][]>([[], [], [], []]);

  let magicGrid = new MagicGrid({
    container: "#container", // Required. Can be a class, id, or an HTMLElement.
    items: 20, // For a grid with 20 items. Required for dynamic content.
    animate: true, // Optional.
  });

  magicGrid.listen();

  useEffect(() => {
    let magicGrid = new MagicGrid({
      container: "#container", // Required. Can be a class, id, or an HTMLElement
      static: false, // Required for static content. Default: false.
      items: 30, // Required for dynamic content. Initial number of items in the container.
      gutter: 30, // Optional. Space between items. Default: 25(px).
      maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
      useMin: true, // Optional. Prioritize shorter columns when positioning items? Default: false.
      useTransform: true, // Optional. Position items using CSS transform? Default: True.
      animate: true, // Optional. Animate item positioning? Default: false.
    });

    magicGrid.listen();
  }, []);

  console.log("111");

  return (
    <div className="container">
      {MockData.map((url) => {
        return <img src={url} alt={url} />;
      })}
    </div>
  );
};

export default Demo3;
