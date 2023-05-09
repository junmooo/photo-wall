import { useRef } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const images = mock.map((e) => {
    ctn.current;
  });
  return <div ref={ctn} className="masonry"></div>;
}

export default Demo2;
