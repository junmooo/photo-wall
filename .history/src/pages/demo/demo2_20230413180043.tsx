import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [imgsHeight, setImgsHeight] = useState<any[]>([]);
  const [c1, setC1] = useState<string[]>([]);
  const [imgs, setImages] = useState<any[]>([]);
  const [imgs, setImages] = useState<any[]>([]);
  const [imgs, setImages] = useState<any[]>([]);

  useEffect(() => {
    const tc1: string[] = [];
    const tc2: string[] = [];
    const tc3: string[] = [];
    const tc4: string[] = [];
    mock.forEach((e, index) => {
      if (index % 4 === 0) {
        tc1.push(e);
      } else if (index % 4 === 1) {
        tc2.push(e);
      } else if (index % 4 === 2) {
        tc3.push(e);
      } else {
        tc4.push(e);
      }
    });
    setC1(tc1);
  }, []);

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

  console.log("c1", c1);

  return (
    <div className="masonry">
      <div className="col">
        {c1.map((e, i) => {
          return getImageList(e, i);
        })}
      </div>
    </div>
  );
}

export default Demo2;
