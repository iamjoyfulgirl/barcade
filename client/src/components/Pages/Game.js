// import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const test = new URL("../../images/test.png", import.meta.url);

const Game = () => {
  return (
    <div className="gameOn" id="gameOn">
      <Image src={test} alt="hero-image" />
    </div>
  );
};

export default Game;
