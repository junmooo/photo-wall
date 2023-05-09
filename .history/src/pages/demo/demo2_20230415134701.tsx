import { useEffect, useState } from "react";
import "./demo2.less";
import MockData from "./mock.json";

const Demo2 = () => {
  const mock = MockData;
  const [colData, setColData] = useState<any[][]>([[], [], [], []]);
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
   * @param  handler 必填 判断后执行的回调函数
   * @returns null
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
   * @returns function
   */
  const useFn = throttle(() => {
    // 此处调用 加载更多函数
    isTouchBottom(handleLoadMore);
  }, 500);
  useEffect(() => {
    const temp = [...colData];
    mock.splice(0, 12).forEach((e, i) => {
      temp[i % 4].push(e);
    });
    setColData(temp);
    // 开启侦听器,监听页面滚动
    window.addEventListener("scroll", useFn);

    // 组件销毁时移除侦听器
    return () => {
      window.removeEventListener("scroll", useFn);
    };
  }, []);

  const onScroll = () => {
    console.log(
      document.getElementById("hello-0")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-1")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-2")?.getBoundingClientRect().y.toFixed(0),
      document.getElementById("hello-3")?.getBoundingClientRect().y.toFixed(0)
    );
  };

  return (
    <div className="main" onScroll={onScroll}>
      {colData.map((col, i) => {
        return (
          <div className="col">
            {col.map((url) => {
              return (
                <div key={url}>
                  <img
                    src={url}
                    alt={url}
                    // onLoad={() => {
                    //   document
                    //     .getElementById(`col-${i}`)
                    //     ?.childNodes.forEach((e, j) => {
                    //       const temp = e as HTMLImageElement;
                    //       console.log(`col-${i}-${j}`, temp?.clientHeight);
                    //     });
                    // }}
                  />
                </div>
              );
            })}
            <div id={`hello-${i}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Demo2;
