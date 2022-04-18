import React from "react";
import { useMediaQuery } from "react-responsive";

import "./TeslaProductsList.scss";
import teslaProducts from "../../utils/teslaProducts";
import TeslaProduct from "../TeslaProduct/TeslaProduct";
import TeslaAccessories from "../TeslaProduct/TeslaAccessories";

function TeslaProductsList() {
  // Détecte lorsqu'on est sur un grand écran
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 600px)",
  });

  // Détecte lorsqu'on est sur un petit écran
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <>
      {isSmallScreen && (
        <div className="teslaProducts__container">
          {teslaProducts.map((product) => (
            <TeslaProduct
              key={product.title}
              bgUrl={product.mobileBgUrl}
              title={product.title}
              description={product.description}
              leftBtn={product.leftBtn}
              rightBtn={product.rightBtn}
            />
          ))}
          <TeslaAccessories bgUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories" />
        </div>
      )}

      {isLargeScreen && (
        <div className="teslaProducts__container">
          {teslaProducts.map((product) => (
            <TeslaProduct
              key={product.title}
              bgUrl={product.laptopBgUrl}
              title={product.title}
              description={product.description}
              leftBtn={product.leftBtn}
              rightBtn={product.rightBtn}
            />
          ))}
          <TeslaAccessories bgUrl="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories" />
        </div>
      )}
    </>
  );
}

export default TeslaProductsList;
