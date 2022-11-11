import React from "react";

import { Box } from "@chakra-ui/react";

const tryOut = new URL("../../images/tryout.png", import.meta.url);

const Home = () => {
  return (
    <div className="/" id="Home">
      <h1>Home</h1>
      <Box boxSize="sm">
        <img src={tryOut} alt="tryout" />
      </Box>
    </div>
  );
};

export default Home;
