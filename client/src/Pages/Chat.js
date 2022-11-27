import React, { useState, useEffect } from "react";
import useSocket from "use-socket.io-client";
import { useImmer } from "use-immer";
// the useImmer hook manages state of arrays and objects w/o mutating the original state -- combine useState and Immer to give immutable state management -- this is helpful for managing lists of ppl who are online and messages that need to be displayed
import {
  Box,
  Input,
  FormControl,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Messages = (props) =>
  props.data.map((m) =>
    m[0] !== "" ? (
      <li>
        <strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div>
      </li>
    ) : (
      <li className="update">{m[1]}</li>
    )
  );

const Online = (props) => props.data.map((m) => <li id={m[0]}>{m[1]}</li>);

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
     <Box
        maxW="md"
        maxH="md"
        borderWidth={"1px"}
        borderRadius={"lg"}
        overflow="hidden"
        >
        
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box id="messages-users-online">
          <Container id="messages">
            <Messages data={messages} />
          </Container>
          <Container id="online">
            {" "}
            &#x1f310; : <Online data={online} />{" "}
          </Container>
        </Box>
      </Box>
      <FormControl>
        <div id="sendform">
          <form onSubmit={(e) => handleSend(e)} style={{ display: "flex" }}>
            <Input id="m" onChange={(e) => setInput(e.target.value.trim())} />
            <Button
              colorScheme={"green"}
              style={{ width: "75px" }}
              type="submit"
            >
              Send
            </Button>
          </form>
        </div>
      </FormControl>
      </Box> 
    </>
  ) : (
    <>
      <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
        <FormControl>
          <form onSubmit={(event) => handleSubmit(event)}>
            <Input
              id="name"
              onChange={(e) => setUserName(e.target.value.trim())}
              required
              placeholder="What is your username?"
            />
            <br />
            <Input
              id="room"
              onChange={(e) => setRoom(e.target.value.trim())}
              placeholder="What bar are you meeting folks at?"
            />
            <br />
            <Button colorScheme={"green"} type="submit">
              Submit
            </Button>
          </form>
        </FormControl>
      </div>
    </>
  );
}

export default Chat;

//   // return id ? (
//   //   <>
//   //     <Box
//   //       maxW={"sm"}
//   //       maxH={"sm"}
//   //       borderWidth={"1px"}
//   //       borderRadius={"lg"}
//   //       overflow="hidden"

//   //     >
//   //       <Box
//   //         d={"flex"}
//   //         justifyContent={"space-between"}
//   //         w={"100%"}
//   //         h={"91.5vh"}
//   //         p={"10px"}
//   //       >
//   //         <Textarea
//   //           maxW={'flex'}
//   //           border="1px"
//   //           borderColor="gray.200"
//   //           boxShadow="xl"
//   //           isDisabled
//   //           placeholder="Here is a sample placeholder" // pass feed ie Chat Feed Component in through here -- will need to be updated
//   //         />
//   //       <Box p="6">
//   //       <Box display={"flex"} alignItems={"baseline"}></Box>
//   //         <form onSubmit={formSubmitHandler}>
//   //         <FormControl>
//   //             <Box>
//   //               <Input
//   //                 placeholder={"Enter Message"}
//   //                 name='message'
//   //                 value={messages}
//   //                 onChange={(e) => setMessages(e.target.value)}
//   //                 mb={3}
//   //                 _hover={{ fontWeight: 'semibold' }}
//   //               />
//   //               <Button
//   //                 type='submit'
//   //                 rightIcon={<ChevronRightIcon />}
//   //                 colorScheme={"red"}
//   //                 variant={"solid"}
//   //               ></Button>
//   //             </Box>
//   //           </FormControl>
//   //           </form>
//   //         </Box>
//   //       </Box>
//   //     </Box>
//   //   </>
//   // );
// // }
