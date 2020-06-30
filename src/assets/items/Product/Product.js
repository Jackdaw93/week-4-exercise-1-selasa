import React from "react";
import "../Product/Product.css";
import Tubruk from "../../Images/2.jpg";

function Product() {
  return (
    <div>
      <div className="container-empat">
        <div className="card">
          <div className="header">
            <h2>Coffe Tubruk</h2>
          </div>
          <div className="content">
            <img src={Tubruk} alt="" />
          </div>
          <div className="footer">
            <button>Orde Now</button>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <h2>Latte</h2>
          </div>
          <div className="content">
            <img src={Tubruk} alt="" />
          </div>
          <div className="footer">
            <button>Orde Now</button>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <h2>Coffe Mocca</h2>
          </div>
          <div className="content">
            <img src={Tubruk} alt="" />
          </div>
          <div className="footer">
            <button>Orde Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
