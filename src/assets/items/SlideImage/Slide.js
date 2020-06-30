import React from "react";
import "./Slide.css";
import Caffe from "../../Images/caffe.jpg";

function Slide() {
  return (
    <div>
      <div className="container-satu">
        <div className="header">
          <img src={Caffe} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slide;
