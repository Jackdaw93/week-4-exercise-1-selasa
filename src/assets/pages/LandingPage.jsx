import React from "react";
import Header from "assets/items/Headers/Header";
import Slide from "assets/items/SlideImage/Slide";
import Service from "assets/items/Service/Service";
import Product from "assets/items/Product/Product";
import Footer from "assets/items/Footers/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <Slide />
      <Service />
      <Product />
      <Footer />
    </div>
  );
}

export default LandingPage;
