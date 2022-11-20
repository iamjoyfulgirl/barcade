import React from "react";
import { Box, Input, FormControl, Button, ButtonGroup, Container, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Chat() {
    const chatWindow = { // will need to insert functions for feed
    }

    return (
    <>

    <Box d= {"flex"} justifyContent={"space-between"} w={"100%"} h={"91.5vh"} p={"10px"}>
       <Text fontSize={'2xl'}>Placeholder for chat feed</Text>
        <Box p='6'>
          <Box display={'flex'} alignItems={'baseline'}>
          </Box>
          <FormControl>
              <Input
                placeholder={"Enter Message"}
                mb={3}
                // onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                rightIcon={<ChevronRightIcon/>}
                colorScheme={"red"}
                variant={"solid"}>
               </Button>
            </FormControl>
        </Box>
      </Box>
      </>
    )
  }

export default Chat;