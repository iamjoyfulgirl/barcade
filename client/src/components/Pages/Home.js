// import React from "react";

// import { Box } from "@chakra-ui/react";

// };

// export default Home;

import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack className="/" id="Home">
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "2xl" }}
            textAlign={"center"}
          >
            <Text as={"span"} position={"relative"}>
              Barcade
            </Text>
            <br />{" "}
            <Text color={"black"} as={"span"}>
              some good quoutes here
            </Text>{" "}
          </Heading>
        </Stack>
      </Flex>
      <Image
        mt={2}
        borderRadius={"15"}
        alt={"Barcade"}
        objectFit={"cover"}
        src={"https://pbs.twimg.com/media/EUZbHlbUEAANCyD.jpg:large"}
      />
    </Stack>
  );
}
