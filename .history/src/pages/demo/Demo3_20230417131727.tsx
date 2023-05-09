import { useEffect, useState } from "react";
import "./demo3.less";
import MockData from "./mock.json";
import { Image, Menu, MenuProps } from "antd";
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
  const [visible, setVisible] = useState(false);

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
    <div className="container">
      <div className="header">
        <div className="left">个人摄影作品展</div>
        <Menu
          theme={"dark"}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <div className="left"></div>
      </div>
      <div className="body">
        <div className="album">
          <div className="desc">
            <div className="title">作品集名称</div>
            <div className="subtitle">副标题</div>
          </div>
          <Image
            preview={{ visible: false }}
            className="img"
            src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
            onClick={() => setVisible(true)}
          />
        </div>
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
};

export default Demo3;
