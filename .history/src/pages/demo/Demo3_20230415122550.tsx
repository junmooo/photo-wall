import { useEffect, useState } from "react";
import "./demo3.less";
import MockData from "./mock.json";
// import MagicGrid from "magic-grid";
import Waterfall from "waterfall-react";

const Demo3 = () => {
  const [colData, setColData] = useState<any>();

  useEffect(() => {
    setColData(
      MockData.map((e, i) => {
        return [e, `message${i}`];
      })
    );
    // let magicGrid = new MagicGrid({
    //   container: document.getElementById("container") as HTMLElement, // Required. Can be a class, id, or an HTMLElement
    //   static: false, // Required for static content. Default: false.
    //   items: 30, // Required for dynamic content. Initial number of items in the container.
    //   gutter: 30, // Optional. Space between items. Default: 25(px).
    //   maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
    //   useMin: true, // Optional. Prioritize shorter columns when positioning items? Default: false.
    //   useTransform: true, // Optional. Position items using CSS transform? Default: True.
    //   animate: true, // Optional. Animate item positioning? Default: false.
    // });
    // magicGrid.ready();
    // magicGrid.listen();
  }, []);

  console.log("111");

  return (
    <div id="container">
      <Waterfall column="3" image={colData || []} />
      {/* {MockData.map((url) => {
        return <img src={url} alt={url} />;
      })} */}
    </div>
  );
};

export default Demo3;
