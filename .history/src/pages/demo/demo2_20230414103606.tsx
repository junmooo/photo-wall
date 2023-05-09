import { useEffect, useRef, useState } from "react";
import "./demo2.less";
import mock from "./mock.json";
import { message } from "antd";
import { throttle } from "lodash";

function Demo2() {
  const [heights, setHeights] = useState<number[]>([0, 0, 0, 0]);
  const [colData, setColData] = useState<string[][]>([[], [], [], []]);

  const tempMock = mock;
  /**
   * 加载更多
   * 此函数内进行接口请求等操作
   */
  const handleLoadMore = (heights: number[]) => {
    // 为测试效果临时使用 message
    message.info("触底了~");
    const tc = [...colData];
    const tempHeights = [...heights];
    console.log("tempHeights", tempHeights);

    tempMock.splice(0, 1).forEach((e) => {
      let min = tempHeights[0];
      //声明了个变量 保存下标值
      let minIdx = 0;
      for (var i = 1; i < heights.length; i++) {
        if (min > heights[i]) {
          min = heights[i];
          minIdx = i;
        }
      }
      console.log("minIdx", minIdx);

      tc[minIdx].push(e);
    });
    setColData(tc);
  };

  /**
   * 判断是否触底
   * 此函数进行判断是否触底
   * @param    handler  必填  判断后执行的回调函数
   * @returns  null
   */
  const isTouchBottom = (handler: { (heights: number[]): void; (): void }) => {
    console.log("47", heights);

    // 文档显示区域高度
    const showHeight = window.innerHeight;
    // 网页卷曲高度
    const scrollTopHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    // 所有内容高度
    const allHeight = document.body.scrollHeight;
    // (所有内容高度 = 文档显示区域高度 + 网页卷曲高度) 时即为触底
    if (allHeight <= showHeight + scrollTopHeight) {
      handler(heights);
    }
  };
  /**
   * 节流 判断是否触底
   * 将是否触底函数进行 节流 处理
   * @returns  function
   */
  const useFn = () => {
    console.log("67", heights);
    // 此处调用 加载更多函数
    isTouchBottom(() => handleLoadMore(heights));
  };

  useEffect(() => {
    const tc = [...colData];
    tempMock.splice(0, 10).forEach((e, index) => {
      const tempIndex = index % 4;
      tc[tempIndex].push(e);
    });
    setColData(tc);
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
      <div key={e}>
        {index}
        <img
          width={"400px"}
          style={{ border: "1px solid" }}
          onLoad={(imageEl) => {
            const tempHeights = [...heights];
            const rate =
              imageEl.currentTarget.height / imageEl.currentTarget.width;
            tempHeights[col] += rate;
            setHeights(tempHeights);
          }}
          src={src}
        />
      </div>
    );
  };

  console.log("heights", colData, heights);

  return (
    <div className="masonry">
      {colData.map((_, idx) => {
        return (
          <div className="col" key={idx}>
            {colData[idx].map((e, i) => {
              return getImageList(e, i, idx);
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Demo2;
