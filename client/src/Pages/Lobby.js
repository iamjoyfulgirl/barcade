import { Stack, Avatar, Box, Heading, Text } from "@chakra-ui/react";
import Stats from "../components/Stats/Stats";

import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";

import { useQuery } from "@apollo/client";

const Lobby = () => {
  let userId;

  if (Auth.loggedIn()) {
    userId = Auth.getProfile().data._id;
  }

  const { data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  return (
    <>
      <Stack
        className="/Lobby"
        id="Lobby"
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        justify={"center"}
        justifyContent="space-evenly"
      >
        <div className="gameOn" id="gameOn">
          <Stats />
        </div>

        <Box className="border">
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
          {Auth.loggedIn() ? (
            <Text className="quoutes" textAlign={"center"}>
              {user?.username}
            </Text>
          ) : (
            <Text className="quoutes" textAlign={"center"}>
              Day Man
            </Text>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default Lobby;
