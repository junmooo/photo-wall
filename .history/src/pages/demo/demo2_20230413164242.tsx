import { useRef } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef();
  const images = mock.map((e) => {});
  return <div ref={ctn} className="masonry"></div>;
}

export default Demo2;
