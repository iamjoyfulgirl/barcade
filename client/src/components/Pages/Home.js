import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import "../../App.css";

export default function Home() {
  return (
    <Stack className="/" id="Home">
      <Flex flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}></Stack>
      </Flex>
      <Image
        mt={2}
        borderRadius={"15"}
        alt={"Barcade"}
        objectFit={"cover"}
        src={"https://pbs.twimg.com/media/EUZbHlbUEAANCyD.jpg:large"}
      />
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "2xl" }}
        textAlign={"center"}
      >
        <Text as={"span"} position={"relative"} className="quoutes">
          Barcade
        </Text>
        <br />{" "}
        <Text color={"black"} as={"span"} className="quoutes">
          Soup of the day - Beer
        </Text>{" "}
      </Heading>
    </Stack>
  );
}
