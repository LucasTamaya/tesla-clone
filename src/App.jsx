import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import teslaProducts from "./utils/teslaProducts";
import Header from "./Components/Header/Header";
import TeslaProduct from "./Components/TeslaProduct/TeslaProduct";
import TeslaAccessories from "./Components/TeslaProduct/TeslaAccessories";
import TeslaProductsList from "./Components/TeslaProductsList/TeslaProductsList";

function App() {
  // Détecte lorsqu'on est sur un grand écran
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 600px)",
  });

  // Détecte lorsqu'on est sur un petit écran
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <main>
      <Header />

      <TeslaProductsList />
    </main>
  );
}

export default App;
