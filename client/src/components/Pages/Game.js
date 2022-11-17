import { Image, Link, Button, Stack, Box } from "@chakra-ui/react";
const test = new URL("../../images/test.png", import.meta.url);

const Game = () => {
  const tryOut = new URL("../../images/tryout.png", import.meta.url);
  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <div className="gameOn" id="gameOn">
          <Image src={test} alt="hero-image" />
        </div>

        <div>
          <Box boxSize="sm">
            <img src={tryOut} alt="tryout" />
          </Box>
        </div>
        <Button
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
          <Link href={"all-list"}>Your Data Base File</Link>
        </Button>
      </Stack>
    </>
  );
};

export default Game;
