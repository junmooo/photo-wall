import { useEffect, useState } from "react";
import "./demo3.less";
import MockData from "./mock.json";
import { Menu, MenuProps } from "antd";
const items: MenuProps["items"] = [
  {
    label: "作品集",
    key: "mail",
  },
  {
    label: "关于",
    key: "app",
  },
  {
    label: "子菜单",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://baidu.com" target="_blank" rel="noopener noreferrer">
        Links
      </a>
    ),
    key: "alipay",
  },
];
const Demo3 = () => {
  const [colData, setColData] = useState<any>();
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  useEffect(() => {
    setColData(
      MockData.map((e, i) => {
        return [e, `message${i}`];
      })
    );
  }, []);

  return (
    <div id="container">
      <div className="header">
        <div className="title">个人摄影作品展</div>
        <Menu
          theme={"dark"}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </div>
  );
};

export default Demo3;
