import { useEffect, useState } from "react";
import "./style.less";
import MockData from "./mock.json";
import { Image, Menu, MenuProps, message } from "antd";
import albumApi from "@/api/album";
import { useRequest } from "ahooks";
import { Album, AlbumVO } from "@/types";
import moment from "moment";

const Demo = () => {
  const [colData, setColData] = useState<any>();
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<Album[]>([]);

  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };

  const { loading: queryByPageLoading, run: runQueryByPage } = useRequest(
    albumApi.queryByPage,
    {
      onSuccess({ records }: { records: AlbumVO[] }) {
        const albums = records.map((e) => ({ ...e.album, photos: e.photos }));
        setData(albums);
      },
      onError(err) {
        if (err.message) message.error(err.message);
      },
      manual: true,
    }
  );
  useEffect(() => {
    runQueryByPage({ pgNum: 1, pgSize: 100 });
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
        {/* <Menu
          theme={"dark"}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        /> */}
        <div className="left"></div>
      </div>
      <div className="body">
        {data.map((album) => {
          return (
            <div className="album">
              <div className="img">
                <Image
                  preview={{ visible: false }}
                  src={album?.photos?.[0]?.url}
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className="desc">
                <div className="title">{album.albumTitle}</div>
                <div className="subtitle">{album.albumSubTitle}</div>
                <div className="time">
                  {moment(album.timeCreated).format("yyyy/MM/DD")}
                </div>
                <div className="description">
                  作品描述xxx，作品描述xxx，作品描述xxx，作品描述xxx，作品描述xxx，作品描述xxx，作品描述xxx，作品描述xxx，
                </div>
              </div>
            </div>
          );
        })}

        <div className="album">
          <div className="img">
            <Image
              preview={{ visible: false }}
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              onClick={() => setVisible(true)}
            />
          </div>
          <div className="desc">
            <div className="title">作品集名称</div>
            <div className="subtitle">副标题</div>
          </div>
        </div>
        <div className="album">
          <div className="img">
            <Image
              preview={{ visible: false }}
              src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
              onClick={() => setVisible(true)}
            />
          </div>
          <div className="desc">
            <div className="title">作品集名称</div>
            <div className="subtitle">副标题</div>
          </div>
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

export default Demo;
