import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";
import { message } from "antd";
import { throttle } from "lodash";

function Demo2() {
  const ctn = useRef<HTMLDivElement>(null);
  const [heights, setHeights] = useState<number[]>([0, 0, 0, 0]);
  const [c1, setC1] = useState<string[]>([]);
  const [c2, setC2] = useState<string[]>([]);
  const [c3, setC3] = useState<string[]>([]);
  const [c4, setC4] = useState<string[]>([]);
  /**
   * 加载更多
   * 此函数内进行接口请求等操作
   */
  const handleLoadMore = () => {
    // 为测试效果临时使用 message
    message.info("触底了~");
  };
  /**
   * 判断是否触底
   * 此函数进行判断是否触底
   * @param    handler  必填  判断后执行的回调函数
   * @returns  null
   */
  const isTouchBottom = (handler: { (): void; (): void }) => {
    // 文档显示区域高度
    const showHeight = window.innerHeight;
    // 网页卷曲高度
    const scrollTopHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    // 所有内容高度
    const allHeight = document.body.scrollHeight;
    // (所有内容高度 = 文档显示区域高度 + 网页卷曲高度) 时即为触底
    if (allHeight <= showHeight + scrollTopHeight) {
      handler();
    }
  };
  /**
   * 节流 判断是否触底
   * 将是否触底函数进行 节流 处理
   * @returns  function
   */
  const useFn = throttle(() => {
    // 此处调用 加载更多函数
    isTouchBottom(handleLoadMore);
  }, 500);
  const tempMock = mock;

  useEffect(() => {
    const tc1: string[] = [];
    const tc2: string[] = [];
    const tc3: string[] = [];
    const tc4: string[] = [];
    tempMock.splice(0, 10).forEach((e, index) => {
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
    setC2(tc2);
    setC3(tc3);
    setC4(tc4);
    // 开启侦听器,监听页面滚动
    window.addEventListener("scroll", useFn);

    // 组件销毁时移除侦听器
    return () => {
      window.removeEventListener("scroll", useFn);
    };
  }, []);

  const getImageList = (e: string, index: number, col: number) => {
    const src = `https://qingbing.top/imgs/${e.trim()}`;
    return (
      <div>
        {index}
        <img
          width={"400px"}
          style={{ border: "1px solid" }}
          key={e}
          onLoad={(imageEl) => {
            const rate =
              imageEl.currentTarget.height / imageEl.currentTarget.width;
            heights[col] += rate;
          }}
          src={src}
        />
      </div>
    );
  };

  console.log("c1", c1, heights);

  return (
    <div className="masonry">
      <div className="col">
        {c1.map((e, i) => {
          return getImageList(e, i, 0);
        })}
      </div>
      <div className="col">
        {c2.map((e, i) => {
          return getImageList(e, i, 1);
        })}
      </div>
      <div className="col">
        {c3.map((e, i) => {
          return getImageList(e, i, 2);
        })}
      </div>
      <div className="col">
        {c4.map((e, i) => {
          return getImageList(e, i, 3);
        })}
      </div>
    </div>
  );
}

export default Demo2;
