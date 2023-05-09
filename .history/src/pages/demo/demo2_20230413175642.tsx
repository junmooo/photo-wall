import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [imgsHeight, setImgsHeight] = useState<any[]>([]);
  const [imgs, setImages] = useState<any[]>([]);

  useEffect(() => {
    mock.forEach((e, index) => {
      if (index % 4 === 0) {
        c1.push(e);
      } else if (index % 4 === 1) {
        c2.push(e);
      } else if (index % 4 === 2) {
        c3.push(e);
      } else {
        c4.push(e);
      }
    });
  }, []);

  const c1: string[] = [];
  const c2: string[] = [];
  const c3: string[] = [];
  const c4: string[] = [];

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

  return (
    <div className="masonry">
      <div className="col">
        {c1.map((e, i) => {
          getImageList(e, i);
        })}
      </div>
      <div className="col">
        {c1.map((e, i) => {
          getImageList(e, i);
        })}
      </div>
      <div className="col">
        {c1.map((e, i) => {
          getImageList(e, i);
        })}
      </div>
      <div className="col">
        {c1.map((e, i) => {
          getImageList(e, i);
        })}
      </div>
    </div>
  );
}

export default Demo2;
