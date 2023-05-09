import "./demo2.less";
import mock from "./mock.json";
function Demo2() {
  return (
    <div className="masonry">
      {mock.map((e) => {
        if (e.URL.startsWith("https:")) {
          return (
            <div className="item">
              <img className="lazy" src={e.URL} alt="ssss" />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Demo2;
