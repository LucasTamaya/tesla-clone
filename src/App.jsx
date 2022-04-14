import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import teslaProducts from "./utils/teslaProducts";
import Header from "./Components/Header/Header";
import TeslaProduct from "./Components/TeslaProduct/TeslaProduct";
import TeslaAccessories from "./Components/TeslaProduct/TeslaAccessories";

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

      {/* {teslaProducts.map((x) => (
        <>
          {isLargeScreen && (
            <TeslaProduct
              bgUrl={x.laptopBgUrl}
              title={x.title}
              description={x.description}
              leftBtn={x.leftBtn}
              rightBtn={x.rightBtn}
            />
          )}

          {isSmallScreen && (
            <TeslaProduct
              bgUrl={x.mobileBgUrl}
              title={x.title}
              description={x.description}
              leftBtn={x.leftBtn}
              rightBtn={x.rightBtn}
            />
          )}
        </>
      ))} */}
      {isSmallScreen && (
        <>
          {teslaProducts.map((x) => (
            <TeslaProduct
              bgUrl={x.mobileBgUrl}
              title={x.title}
              description={x.description}
              leftBtn={x.leftBtn}
              rightBtn={x.rightBtn}
            />
          ))}
          <TeslaAccessories bgUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories" />
        </>
      )}

      {isLargeScreen && (
        <>
          {teslaProducts.map((x) => (
            <TeslaProduct
              bgUrl={x.laptopBgUrl}
              title={x.title}
              description={x.description}
              leftBtn={x.leftBtn}
              rightBtn={x.rightBtn}
            />
          ))}
          <TeslaAccessories bgUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories" />
        </>
      )}

      {/* <TeslaAccessories /> */}
    </main>
  );
}

export default App;
