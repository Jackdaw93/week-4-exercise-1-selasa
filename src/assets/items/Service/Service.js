import React from "react";
import "assets/items/Service/Service.css";
import Cozzy from "assets/Images/cozzy.jpg";

function Service() {
  return (
    <div>
      <div class="container-dua">
        <div class="service satu">
          <div class="square">
            <img src={Cozzy} alt="" />
            <p>Cozzy Place</p>
          </div>
        </div>
        <div class="service satu">
          <div class="square">
            <img src={Cozzy} alt="" />
            <p>Cozzy Place</p>
          </div>
        </div>
        <div class="service satu">
          <div class="square">
            <img src={Cozzy} alt="" />
            <p>Cozzy Place</p>
          </div>
        </div>
      </div>
      <h3>OUR PRODUCT</h3>
    </div>
  );
}

export default Service;
