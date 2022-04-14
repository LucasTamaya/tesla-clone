import React from "react";
import "./TeslaProduct.scss";

function TeslaProduct({ bgUrl, title, description, leftBtn, rightBtn }) {
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
          <h1 className="teslaProduct__title">{title}</h1>
          <p className="teslaProduct__description">{description}</p>
        </div>
        <div className="teslaProduct__btnContainer">
          <button className="teslaProduct__btn--gray">{leftBtn}</button>
          <button className="teslaProduct__btn--white">{rightBtn}</button>
        </div>
      </div>
    </div>
  );
}

export default TeslaProduct;
