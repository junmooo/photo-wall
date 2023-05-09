import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [imgs, setImages] = useState<any[]>([]);

  useEffect(() => {
    const tempArr = imgs;
  }, []);

  const getImageList = () => {
    return (
      <div>
        {mock.map((e) => {
          const src = `https://qingbing.top/imgs/${e.trim()}`;
          return (
            <img
              onLoad={(imageEl) => {
                console.log(imageEl.currentTarget.width);
                console.log(imageEl.currentTarget.height);
              }}
              src={src}
            />
          );
        })}
      </div>
    );
  };

  return <div ref={ctn} className="masonry"></div>;
}

export default Demo2;
