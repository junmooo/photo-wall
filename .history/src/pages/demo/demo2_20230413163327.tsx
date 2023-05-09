import "./demo2.less";
import mock from "./mock.json";
import { builder as waterfall } from "easy-waterfall";

function Demo2() {
  const images = mock.map((e) => {
    if (e.URL.startsWith("https:")) {
      return [e.URL, e.ID];
    }
  });
  return <div className="masonry"></div>;
}

export default Demo2;
