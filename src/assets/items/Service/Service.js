import React from "react";
import "./Service.css";
import Park from "../../Images/free_park.jpg";
import Wifi from "../../Images/free_wifi.jpg";
import Easy from "../../Images/easy.png";

function Service() {
  return (
    <div>
      <div className="our">
        <h3 className="h3">OUR FACILITY</h3>
      </div>
      <div className="container-dua">
        <div className="square">
          <img src={Park} alt="" />
        </div>

        <div className="square">
          <img src={Wifi} alt="" />
        </div>

        <div className="square">
          <img src={Easy} alt="" />
        </div>
      </div>
      <h3 className="h3">OUR PRODUCT</h3>
    </div>
  );
}

export default Service;
