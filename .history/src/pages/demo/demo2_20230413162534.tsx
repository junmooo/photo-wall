import "./demo2.less";
import mock from "./mock.json";
import Waterfall from "waterfall-react";

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
      <Waterfall
        column="5"
        image={images}
        clickNumber={this.clickNumber.bind(this)}
      />
    </div>
  );
}

export default Demo2;
