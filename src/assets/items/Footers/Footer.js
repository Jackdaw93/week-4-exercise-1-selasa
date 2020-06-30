import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div class="container-lima">
        <div class="contact satu">
          <foot class="foot">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">List</a>
              </li>
              <li>
                <a href="/">Tutorial</a>
              </li>
              <li>
                <a href="/">Download</a>
              </li>
            </ul>
          </foot>
        </div>
        <div class="contact satu">
          <div class="square">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0516593282764!2d106.81246881476928!3d-6.256925395471076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17f0bda2d5f%3A0x198e08030d45c3e5!2sJl.%20Kemang%20Raya%20No.10%2C%20RT.3%2FRW.2%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sid!2sid!4v1592226037081!5m2!1sid!2sid"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <span>Jl. Kemang Raya, No. 11</span>
            <span>Jaksel - 145550</span>
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
