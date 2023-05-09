import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [imgs, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const tempArr = imgs;
    mock.forEach((e) => {
      const imageEle = new Image();
      imageEle.src = e.URL;
      tempArr.push(imageEle);
      setImages(tempArr);
    });
  }, []);

  return <div ref={ctn} className="masonry"></div>;
}

export default Demo2;
