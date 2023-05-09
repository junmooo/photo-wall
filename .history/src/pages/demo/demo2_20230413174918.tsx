import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [imgsHeight, setImgsHeight] = useState<any[]>([]);
  const [imgs, setImages] = useState<any[]>([]);

  useEffect(() => {}, []);

  mock.forEach(e)=>{
    
  }
  const getImageList = (e: string, index: number) => {
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
  };

  return <div className="masonry">{}</div>;
}

export default Demo2;
