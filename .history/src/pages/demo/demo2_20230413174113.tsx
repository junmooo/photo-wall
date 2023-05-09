import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [imgsHeight, setImages] = useState<any[]>([]);

  useEffect(() => {}, []);

  const getImageList = mock.map((e, index) => {
    const src = `https://qingbing.top/imgs/${e.trim()}`;
    return (
      <div>
        {index}
        <img
          width={"400px"}
          style={{ border: "1px solid" }}
          key={e}
          onLoad={(imageEl) => {
            console.log(imageEl.currentTarget.width);
            console.log(imageEl.currentTarget.height);
          }}
          src={src}
        />
      </div>
    );
  });

  return <div className="masonry">{getImageList}</div>;
}

export default Demo2;
