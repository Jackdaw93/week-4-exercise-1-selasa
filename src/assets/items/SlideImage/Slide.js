import React from "react";
import "./Slide.css";
import Caffe from "../../Images/caffe.jpg";

function Slide() {
  return (
    <div>
      <div class="container-satu">
        <div class="header">
          <img src={Caffe} alt="" />
        </div>
      </div>
      <h3>OUR SERVICE</h3>
    </div>
  );
}

export default Slide;
