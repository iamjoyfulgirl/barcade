import React from "react";
import "./guessingStyle.css";
import { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

const Guessing = () => {
  const number = Math.trunc(Math.random() * 20) + 1;
  const [guess, setGuess] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState("?");
  const [disabled, setDisabled] = useState(false);
  const [msg, setMsg] = useState("Start guessing...");

  const score = 20;
  const highScore = 0;

  const submitHandler = () => {
    if (Number(number) === Number(guess)) {
      setMsg("Congratulations");
      setDisabled(true);
    } else if (userCount === 4) {
      setMsg("Game Over");
      setDisabled(true);
    } else {
      setMsg("Wrong Guess");
    }
    setUserCount(userCount + 1);
  };

  return (
    <Stack className="body" display={"flex"}>
      <Box className="header" position={"relative"} height={"35vh"}>
        <Heading
          fontSize={"4rem"}
          textAlign={"center"}
          position={"absolute"}
          width={"100%"}
        >
          Guess My Number!
        </Heading>
        <Text
          display={"flex"}
          fontSize={"1.4rem"}
          position={"absolute"}
          top={"2rem"}
          right={"2rem"}
        >
          (Between 1 and 20)
        </Text>
        <Button className="btn again">Again!</Button>
        <div className="number">{randomNumber}</div>
      </Box>
      <Flex
        className="main"
        height={"65vh"}
        color={"white"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box direction={{ base: "column", md: "row" }} w={"full"} maxW={"md"}>
          <Input
            disabled={disabled}
            value={guess}
            type="number"
            padding={"2.5rem"}
            textAlign={"center"}
            fontSize={"5rem"}
          />
          <Button onClick={submitHandler} className="btn check">
            Check!
          </Button>
        </Box>
        <Box className="right" w={"52rem"} fontSize={"2rem"}>
          <Text mb={"2rem"} h={"3rem"}>
            {msg}
          </Text>
          <Text mb={"2rem"}>
            💯 Score: <span className="score">20</span>
          </Text>
          <Text className="label-highscore">
            🥇 Highscore: <span className="highscore">0</span>
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Guessing;
