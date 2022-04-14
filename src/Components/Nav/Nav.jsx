import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import "./Nav.scss";

function Nav({ styleMenu, setStyleMenu }) {
  return (
    <nav className={`nav ${styleMenu}`}>
      {/* Nav on small screen */}
      <div className="nav--sm">
        <CloseIcon className="nav__icon" onClick={() => setStyleMenu("hide")} />
        <h5 className="nav__item">Model S</h5>
        <h5 className="nav__item">Model 3</h5>
        <h5 className="nav__item">Model X</h5>
        <h5 className="nav__item">Model Y</h5>
        <h5 className="nav__item">Solar Roof</h5>
        <h5 className="nav__item">Solar Panels</h5>
        <h5 className="nav__item">Existing Inventory</h5>
        <h5 className="nav__item">Used Inventory</h5>
        <h5 className="nav__item">Trade-In</h5>
        <h5 className="nav__item">Test Drive</h5>
        <h5 className="nav__item">Powerwall</h5>
        <h5 className="nav__item">Commercial Energy</h5>
        <h5 className="nav__item">Utilities</h5>
        <h5 className="nav__item">Charging</h5>
        <h5 className="nav__item">Find Us</h5>
        <h5 className="nav__item">Support</h5>
      </div>
      {/* Nav on large screen */}
      <div className="nav--lg">
        <div className="nav__center">
          <h5 className="nav__item">Model S</h5>
          <h5 className="nav__item">Model 3</h5>
          <h5 className="nav__item">Model X</h5>
          <h5 className="nav__item">Model Y</h5>
          <h5 className="nav__item">Solar Roof</h5>
          <h5 className="nav__item">Solar Panels</h5>
        </div>
        <div className="nav__right">
          <h5 className="nav__item">Shop</h5>
          <h5 className="nav__item">Account</h5>
          <h5 className="nav__item">Menu</h5>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
