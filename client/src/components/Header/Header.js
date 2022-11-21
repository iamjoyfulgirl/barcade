import React from "react";
import { Image } from "@chakra-ui/react";

const Header = () => {
  const Barcade = new URL("../../images/Barcade.gif", import.meta.url);
  return (
    <div className="gameOn" id="gameOn">
      <Image src={Barcade} alt="hero-image" />
    </div>
  );
};

export default Header;
