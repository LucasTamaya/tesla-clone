import React, { useState } from "react";

import "./Header.scss";
import teslaLogo from "../../../assets/tesla.svg";
import Nav from "../Nav/Nav";

function Header() {
  // Show / hide the menu on small screen
  const [styleMenu, setStyleMenu] = useState("hide");

  return (
    <header className="header">
      <img src={teslaLogo} alt="tesla logo" className="header__img" />
      <button className="header__btn" onClick={() => setStyleMenu("show")}>
        Menu
      </button>
      <Nav styleMenu={styleMenu} setStyleMenu={setStyleMenu} />
    </header>
  );
}

export default Header;
