import "./demo2.less";
import mock from "./mock.json";
import Waterfall from "waterfall-react";

function Demo2() {
  const images = mock.map((e) => {
    if (e.URL.startsWith("https:")) {
      return e.URL;
    }
  });
  return (
    <div className="masonry">
      {}
      <Waterfall
        column="5"
        image={images}
        clickNumber={(index) => {
          console.log("index", index);
        }}
      />
    </div>
  );
}

export default Demo2;
