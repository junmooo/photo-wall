import { useRef } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const images = mock.map((e) => {
    const imageEle = new Image();
    imageEle.src = e.URL;
    ctn.current?.appendChild(imageEle);
  });
  return <div ref={ctn} className="masonry"></div>;
}

export default Demo2;
