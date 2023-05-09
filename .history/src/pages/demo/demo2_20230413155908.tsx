import "./demo2.less";
import mock from "./mock.json";
function Demo2() {
  return (
    <div className="masonry">
      {mock.map((e) => {
        return (
          <div className="item">
            <img
              className="lazy"
              src={e.URL.replace(
                "http://124.222.27.22",
                "https://qingbing.top"
              )}
              alt="ssss"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Demo2;
