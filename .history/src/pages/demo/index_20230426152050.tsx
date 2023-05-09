import { UIEventHandler, useCallback, useEffect, useState } from "react";
import "./style.less";
import MockData from "./mock.json";
import { Image, Menu, MenuProps, Spin, message } from "antd";
import albumApi from "@/api/album";
import { useRequest } from "ahooks";
import { Album, AlbumVO, Photo } from "@/types";
import moment from "moment";
import { getPreUrl } from "@/utils/common";

const Demo = () => {
  const [current, setCurrent] = useState<Photo[]>();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<Album[]>([]);

  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };

  const { loading: queryByPageLoading, run: runQueryAll } = useRequest(
    albumApi.queryAll,
    {
      onSuccess(records: AlbumVO[]) {
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
    runQueryAll({});
  }, []);

  return (
    <Spin spinning={queryByPageLoading}>
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
            return album?.photos?.length && album.photos.length > 0 ? (
              <div className="album" key={album.id}>
                <div className="img">
                  <Image
                    preview={{ visible: false }}
                    src={album?.photos?.[0]?.url}
                    onClick={() => {
                      setCurrent(album.photos);
                      setVisible(true);
                    }}
                    placeholder={
                      <Image
                        preview={false}
                        src={getPreUrl(album?.photos?.[0]?.url || "")}
                        width={200}
                      />
                    }
                  />
                </div>
                <div className="desc">
                  <div className="title">{album.albumTitle}</div>
                  <div className="subtitle">{album.albumSubTitle}</div>
                  <div className="time">
                    {moment(album.timeCreated).format("yyyy/MM/DD")}
                  </div>
                  <div className="description">{album.albumDesc}</div>
                </div>
              </div>
            ) : null;
          })}
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
            >
              {current?.map((e) => {
                return (
                  <Image
                    key={e.id}
                    preview={{
                      mask: <div style={{ backgroundColor: "red" }}>xxxx</div>,
                      maskClassName: "img-mask",
                    }}
                    src={e.url}
                    placeholder={
                      <Image
                        preview={false}
                        src={getPreUrl(e.url || "")}
                        width={200}
                      />
                    }
                  />
                );
              })}
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Demo;
