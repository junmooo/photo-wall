import { useEffect, useState } from "react";
import "./demo3.less";
import MockData from "./mock.json";
import { Carousel } from 'antd';

const Demo3 = () => {
  const [colData, setColData] = useState<any>();

  useEffect(() => {
    setColData(
      MockData.map((e, i) => {
        return [e, `message${i}`];
      })
    );
  }, []);



  return (
    <div id="container">
      <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
  );
};

export default Demo3;
