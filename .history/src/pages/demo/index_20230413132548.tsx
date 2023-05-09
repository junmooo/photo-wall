import React, { useState } from "react";
import { Button, Tree, message } from "antd";
import "./demo.less";

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div>
      <div id="waterfull">
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/1.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/2.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/3.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/4.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/5.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/6.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/7.gif" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/8.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/9.jpg" alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box_image">
            <img src="waterfull_images/10.jpg" alt="" />
          </div>
        </div>
      </div>
      {contextHolder}
    </div>
  );
};

export default App;
