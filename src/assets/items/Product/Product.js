import React from "react";
import "assets/items/Product/Product.css";
import Tubruk from "assets/Images/1.jpg";

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
            <h2>Coffe Tubruk</h2>
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