import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [imgs, setImages] = useState<any[]>([]);

  useEffect(() => {
    const tempArr = imgs;

    mock.map((e) => {
      const imageEle = new Image();
      imageEle.src = `https://qingbing.top/imgs/${e.trim()}`;
      tempArr.push(imageEle);
      setImages(tempArr);
      ctn.current?.children;
    });
  }, []);

  return <div ref={ctn} className="masonry"></div>;
}

export default Demo2;
