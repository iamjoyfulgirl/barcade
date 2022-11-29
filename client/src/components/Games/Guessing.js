import React from "react";
import "./guessingStyle.css";
import { useState } from "react";
import {
  FormControl,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Box,
  VStack,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { ADD_SCORE } from "../../utils/mutation";
import { useMutation, useQuery } from "@apollo/client";
import Auth from '../../utils/auth';
import { QUERY_USER } from '../../utils/queries';

export default function Guessing() {
  // {Generating random number}
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  const [number, setNumber] = useState(secretNumber);
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(number);
  const [msg, setMsg] = useState("");
  const [lowHighMsg, setlowHighMsg] = useState("");
  const [score, setScore] = useState(20);
  const [topScores, settopScores] = useState();

  const [addScore, { loading, error }] = useMutation(ADD_SCORE);

  let userId;

  if (Auth.loggedIn()) {
    userId = Auth.getProfile().data._id;
  } 
  
  const { data } = useQuery(QUERY_USER, {
      variables: { userId: userId },
    });

  const user = data?.user || {};

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("called submitHandler");
    // e.preventDefault();
    if (!guess) {
      console.log("guess1", guess);
      setlowHighMsg("❌ No Number");
      msg("");
    } else if (guess == number) {
      setMsg("💃🏼 You Win");
      setNumber(number);
      // {topScores Saved here needs to be pushed up}
      settopScores(score);
      setlowHighMsg("");

      if (score > topScores) {
        // {displaying score as the new topScores}

        console.log("high", topScores, "score", score);
      }
    } else if (guess > number) {
      console.log("number", number, "guess", guess);

      setlowHighMsg("this is too high");
      setScore(score - 1);
      if (score === 0) {
        setScore(0);
        setlowHighMsg("");
        setMsg("You loose");
      }
    }
    // else if (score === 0) {
    //   setMsg("You loose");
    //   setlowHighMsg("");
    // }
    if (guess < number) {
      setScore(score - 1);
      setlowHighMsg("this is too low");
      if (score === 0) {
        setScore(0);
        setlowHighMsg("");
        setMsg("You loose");
      }
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    console.log("target", e.target.value);
    const guess = e.target.value;
    setGuess(guess);
    console.log("guess", guess);
  };

  const restartGame = (e) => {
    e.preventDefault();
    console.log("called restartGame");
    // setDisabled(false);
    setMsg("");
    setScore(score);
    setRandomNumber(setNumber);
    settopScores(score);
  };

  const saveScore = async () => {
    try{ 
     await addScore({
    variables: {
      userId: user?._id,
      username: user?.username,
      gameName: "Guessing Game",
      score: score,
    }})
    } catch (e) {
      console.error(e);
    }};

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
              <form onSubmit={submitHandler}>
                <Box
                  direction={{ base: "column", md: "row" }}
                  w={"full"}
                  maxW={"md"}
                >
                  <FormControl>
                    <Input
                      value={guess.guess}
                      onChange={onChange}
                      type="text"
                      padding={"2.5rem"}
                      textAlign={"center"}
                      fontSize={"5rem"}
                    />
                  </FormControl>
                  <Button type="submit" className="btn check">
                    Check!
                  </Button>

                  <Button
                    onClick={saveScore}
                    className="btn check"
                  >
                    Save score!
                  </Button>
                </Box>
              </form>
              <Box className="right" w={"52rem"} fontSize={"2rem"}>
                <Text mb={"2rem"} h={"3rem"}>
                  {msg}
                  {lowHighMsg}
                </Text>
                <Text mb={"2rem"}>
                  💯 Score: <span className="score">{score}</span>
                </Text>
                <Text className="label-topScores">
                  🥇 topScores: <span className="topScores">{topScores}</span>
                </Text>
              </Box>
            </Flex>
          </Stack>
        </VStack>
      </Grid>
    </Box>
  );
};

// export default Guessing;
