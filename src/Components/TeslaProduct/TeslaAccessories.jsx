import React from "react";
import "./TeslaProduct.scss";

function TeslaAccessories({ bgUrl }) {
  return (
    <div
      className="teslaProduct__bg"
      style={{
        background: `url(${bgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="teslaProduct__info">
        <div className="teslaProduct__text">
          <h1 className="teslaProduct__title">Accessories</h1>
        </div>
        <div className="teslaProduct__btnContainer">
          <button className="teslaProduct__btn--black">Shop now</button>
        </div>
      </div>
    </div>
  );
}

export default TeslaAccessories;
