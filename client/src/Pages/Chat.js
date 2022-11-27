import React, { useState, useEffect } from "react";
import useSocket from "use-socket.io-client";
import { useImmer } from "use-immer";
// the useImmer hook manages state of arrays and objects w/o mutating the original state -- combine useState and Immer to give immutable state management -- this is helpful for managing lists of ppl who are online and messages that need to be displayed
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  FormControl,
  HStack,
  Input,
  List,
  ListItem,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const Messages = (props) =>
  props.data.map((m) =>
    m[0] !== "" ? (
      <List>
        <ListItem>
          <strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div>
        </ListItem>
      </List>
    ) : (
      <List>
        <ListItem>
          <li className="update">{m[1]}</li>
        </ListItem>
      </List>
    )
  );

const Online = (props) =>
  props.data.map((m) => (
    <List>
      <ListItem>
        <li id={m[0]}>{m[1]}</li>
      </ListItem>
    </List>
  ));

function Chat() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [input, setInput] = useState("");

  const [socket] = useSocket("https://desolate-island-83244.herokuapp.com", {
    transports: ["websocket"],
  });
  socket.connect();

  const [messages, setMessages] = useImmer([]);
  const [online, setOnline] = useImmer([]);

  useEffect(() => {
    // const socket = io("https://desolate-island-83244.herokuapp.com/");

    socket.on("connect", (event) => {
      console.log("connected", socket.connected);
    });

    socket.on("disconnect", (reason) => {
      console.log("disconnected", reason);
    });

    socket.on("message que", (nick, message) => {
      console.log("message feed", message);
      setMessages((draft) => {
        draft.push([nick, message]);
      });
    });

    socket.on("update", (message) =>
      setMessages((draft) => {
        console.log("update", message);
        draft.push(["", message]);
      })
    );

    socket.on("people-list", (people) => {
      let newState = [];
      for (let person in people) {
        newState.push([people[person].id, people[person].nick]);
      }
      setOnline((draft) => {
        draft.push(...newState);
      });
      console.log(online);
    });

    socket.on("add-person", (nick, id) => {
      console.log("add person", nick);
      setOnline((draft) => {
        draft.push([id, nick]);
      });
    });

    socket.on("remove-person", (id) => {
      setOnline((draft) => draft.filter((m) => m[0] !== id));
    });

    socket.on("chat message", (nick, message) => {
      console.log("chat message", message);
      setMessages((draft) => {
        draft.push([nick, message]);
      });
    });
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      return alert("Username can't be empty");
    }
    setId(userName);
    socket.emit("join", userName, room);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input !== "") {
      console.log("handleSend", input);
      socket.emit("chat message", input, room);
      setInput("");
    }
  };

  return id ? (
    <>
      <Center>
        <HStack spacing="24px">
          <Box
            bg="brown"
            textColor={"white"}
            alignItems="center"
            maxW="70%"
            maxH="md"
            h="md"
            borderWidth={"1px"}
            borderRadius={"lg"}
            overflow="auto"
            boxShadow={"xl"}
            sx={{
              "::-webkit-scrollbar": {
                display: "true",
              },
            }}
          >
            <Stack>
              <Box style={{ display: "flex"}}>
                <Container id="messages" listItem as="null">
                  <Messages data={messages} />
                </Container>
              </Box>
              <FormControl>
                <HStack padding="5" id="sendform">
                  <form
                    onSubmit={(e) => handleSend(e)}
                    style={{ display: "flex" }}
                  >
                    <Input
                      bg="white"
                      id="m"
                      onChange={(e) => setInput(e.target.value.trim())}
                      placeholder="Enter message"
                      textColor={'black'}
                    />
                    <Button
                      colorScheme={"green"}
                      style={{ width: "75px" }}
                      type="submit"
                    >
                      Send
                    </Button>
                  </form>
                </HStack>
              </FormControl>
            </Stack>
          </Box>
          <Box
            bg={"#9C4221"}
            textColor={"white"}
            maxW="30%"
            maxH="md"
            h="md"
            borderWidth={"1px"}
            borderRadius={"lg"}
            overflow="auto"
            boxShadow={"xl"}
            sx={{
              "::-webkit-scrollbar": {
                display: "true",
              },
            }}
          >
            <Container id="online">
              <HStack>
                <p> &#x1f310; :</p>
                <Online data={online} />{" "}
              </HStack>
            </Container>
          </Box>
        </HStack>
      </Center>
    </>
  ) : (
    <>
      <Center>
        <Box
          bg={"#9C4221"}
          w="lg"
          maxH="md"
          borderWidth={"1px"}
          borderRadius={"lg"}
          overflow="hidden"
          padding={"2"}
          boxShadow={"xl"}
        >
          <div
            style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}
          >
            <FormControl>
              <form onSubmit={(event) => handleSubmit(event)}>
                <Input
                  bg="white"
                  id="name"
                  onChange={(e) => setUserName(e.target.value.trim())}
                  required
                  placeholder="What is your username?"
                />
                <br />
                <Input
                  bg="white"
                  id="room"
                  onChange={(e) => setRoom(e.target.value.trim())}
                  placeholder="What bar are you meeting folks at?"
                />
                <br />
                <Button margin={"5"} colorScheme={"green"} type="submit">
                  Submit
                </Button>
              </form>
            </FormControl>
          </div>
        </Box>
      </Center>
    </>
  );
}

export default Chat;
