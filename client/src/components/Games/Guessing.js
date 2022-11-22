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
  VStack,
  // Container,
  Grid,
  Stack,

  // StackDivider,
  // SimpleGrid,
} from "@chakra-ui/react";

const Guessing = () => {
  const number = Math.trunc(Math.random() * 20) + 1;
  const [guess, setGuess] = useState();
  const [randomNumber, setRandomNumber] = useState("?");
  // const [disabled, setDisabled] = useState(false);
  const [msg, setMsg] = useState("Start guessing...");
  const [lowHighMsg, setlowHighMsg] = useState("");
  const [score, setScore] = useState(20);
  const [highScore, sethighScore] = useState();

  const submitHandler = () => {
    if (!guess) {
      setMsg("❌ No Number");
    } else if (Number(number) === Number(guess)) {
      setMsg("💃🏼 Correct Number");
      // setDisabled(true);
      setlowHighMsg("");

      if (score > highScore) {
        // {displaying score as the new highscore}
        sethighScore = setScore;
      }
    } else if (guess > number) {
      if (score > 0) {
        setlowHighMsg("this is too high");
        setScore(score - 1);
      }
    } else {
      setMsg("You Loose");
    }
    if (guess < number) {
      setScore(score - 1);
      setlowHighMsg("this is too low");
    }
  };

  const restartGame = () => {
    // setDisabled(false);
    setMsg("");
    setScore(20);
    setRandomNumber(number);
    setGuess();
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Stack className="body GameContainer" justify={"start"}>
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
              <Button className="btn again" onClick={restartGame}>
                Again!
              </Button>
              <div className="number">{randomNumber}</div>
            </Box>
            <Flex
              className="main"
              height={"65vh"}
              color={"white"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Box
                direction={{ base: "column", md: "row" }}
                w={"full"}
                maxW={"md"}
              >
                <Input
                  // disabled={disabled}
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
                  {lowHighMsg}
                </Text>
                <Text mb={"2rem"}>
                  💯 Score: <span className="score">{score}</span>
                </Text>
                <Text className="label-highscore">
                  🥇 Highscore: <span className="highscore">{highScore}</span>
                </Text>
              </Box>
            </Flex>
          </Stack>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Guessing;
