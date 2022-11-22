import { Stack, Avatar, Box, Heading, Text } from "@chakra-ui/react";
import Stats from "../components/Stats/Stats";
import BarDrinks from "../components/BarChoices/BarDrinks";
import JukeBox from "../components/JukeBox/JukeBox";
import Guessing from "../components/Games/Guessing";

const Game = () => {
  // to remove once finalised these 2 images and commented out codes
  // const test = new URL("../../images/test.png", import.meta.url);
  // const tryOut = new URL("../../images/tryout.png", import.meta.url);
  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        justify={"center"}
      >
        <div className="gameOn" id="gameOn">
          {/* <Image src={test} alt="hero-image" /> */}
          <Stats />
        </div>

        <Box>
          {/* <Box boxSize="sm">
            <img src={tryOut} alt="tryout" />
          </Box> */}
          <Avatar
            size={"xxl"}
            src={
              "https://bbts1.azureedge.net/images/p/full/2020/09/fd93e035-5bb3-4b73-b296-934b545c534e.jpg"
            }
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"} textAlign={"center"}>
            Welcome
          </Heading>
          <Text className="quoutes" textAlign={"center"}>
            Day Man
          </Text>
        </Box>

        {/* //checklist better option */}
        <BarDrinks />
        {/* <Button
          size="lg"
          colorScheme="green"
          mb={5}
          rounded={"full"}
          _hover={{
            textDecoration: "none",
            bg: "white",
            color: "green",
          }}
          width="100%"
        >
          <Link href={"all-list"}>Choose your drink</Link>
        </Button> */}
      </Stack>
      {/* //testout for JukeBox */}
      {/* <JukeBox /> */}
      <Guessing />
    </>
  );
};

export default Game;
