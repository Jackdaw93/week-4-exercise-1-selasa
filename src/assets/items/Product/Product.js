import React from "react";
import "../Product/Product.css";
import Tubruk from "../../Images/2.jpg";

function Product() {
  return (
    <div>
      <div class="container-empat">
        <div class="card">
          <div class="header">
            <h2>Coffe Tubruk</h2>
          </div>
          <div class="content">
            <img src={Tubruk} alt="" />
          </div>
          <div class="footer">
            <button>Orde Now</button>
          </div>
        </div>
        <div class="card">
          <div class="header">
            <h2>Latte</h2>
          </div>
          <div class="content">
            <img src={Tubruk} alt="" />
          </div>
          <div class="footer">
            <button>Orde Now</button>
          </div>
        </div>
        <div class="card">
          <div class="header">
            <h2>Coffe Mocca</h2>
          </div>
          <div class="content">
            <img src={Tubruk} alt="" />
          </div>
          <div class="footer">
            <button>Orde Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
