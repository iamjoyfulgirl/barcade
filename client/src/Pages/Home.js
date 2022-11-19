import { Flex, Image, Stack, Text, Box } from "@chakra-ui/react";
import "../App.css";

export default function Home() {
  return (
    <Stack className="/" id="Home">
      <Flex flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}></Stack>
      </Flex>
      <Box className="insideimage">
        <Image
          className="imgblur"
          mt={2}
          borderRadius={"15"}
          alt={"Barcade"}
          objectFit={"cover"}
          src={"https://pbs.twimg.com/media/EUZbHlbUEAANCyD.jpg:large"}
        />
        <Text
          color={"Purple"}
          as={"span"}
          position={"relative"}
          className="quoutes orderup fade"
          align={"center"}
        >
          Barcade's
          <br></br>
          Soup of the day - Beer
        </Text>
      </Box>
    </Stack>
  );
}
