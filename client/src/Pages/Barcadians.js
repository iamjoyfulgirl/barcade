import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,


  useColorModeValue,
  IconButton
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Barcadians = () => {
  return (
    <div div className="/Barcadians" id="Barcadians">
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        justify={"center"}
      >
        <Center>
        <Box  textAlign={"center"} bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            >
    <Avatar
    size={"xl"}
    src={
      "imghere"
    }
    alt={"Avatar Alt"}
    mb={4}
    pos={"relative"}
  />
  <Heading fontSize={"2xl"} fontFamily={"body"}>
    Sherri Knight
  </Heading>

  <Text
    textAlign={"center"}
    color={useColorModeValue("gray.700", "gray.400")}
    px={3}
  >
    Software Enginer, Front End Engineer, Full Stack Web Developer{" "}
  </Text>
  <Stack mt={8} justify={"center"} spacing={4}>
              <IconButton
            
                as="a"
                href="https://github.com/iamjoyfulgirl"
                aria-label="GitHub-for-Sherri"
                icon={<FaGithub />}
              >
                Github
              </IconButton>
              <IconButton
               
               
                as="a"
                href="https://www.linkedin.com/in/sherri-knight-95bb898/"
                aria-label="LinkedIn-for-Sherri"
                icon={<FaLinkedinIn />}
              >
                LinkedIn
              </IconButton>
            </Stack>
  </Box>
  </Center>
  <Center>
  <Box  textAlign={"center"} bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}>
    <Avatar
    size={"xl"}
    src={
      "imghere"
    }
    alt={"Avatar Alt"}
    mb={4}
    pos={"relative"}
  />
  <Heading fontSize={"2xl"} fontFamily={"body"}>
  Michael Rugh
  </Heading>

  <Text
    textAlign={"center"}
    color={useColorModeValue("gray.700", "gray.400")}
    px={3}
  >
    Software Enginer, Front End Engineer, Full Stack Web Developer{" "}
  </Text>
  <Stack mt={8} justify={"center"} spacing={4}>
  <IconButton
            
            as="a"
            href="https://github.com/DA-Mike"
            aria-label="GitHub-for-Mike"
            icon={<FaGithub />}
          >
            Github
          </IconButton>
          <IconButton
           
           
            as="a"
            href="https://www.linkedin.com/in/michaelrugh/"
            aria-label="LinkedIn-for-Mike"
            icon={<FaLinkedinIn />}
          >
            LinkedIn
          </IconButton>
            </Stack>
  </Box>
  </Center>
  <Center>
  <Box textAlign={"center"}  bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}>
    <Avatar
    size={"xl"}
    src={
      "imghere"
    }
    alt={"Avatar Alt"}
    mb={4}
    pos={"relative"}
  />
  <Heading fontSize={"2xl"} fontFamily={"body"}>
    Cassie Kisse
  </Heading>

  <Text
    textAlign={"center"}
    color={useColorModeValue("gray.700", "gray.400")}
    px={3}
  >
    Software Enginer, Front End Engineer, Full Stack Web Developer{" "}
  </Text>
  <Stack mt={8} justify={"center"} spacing={4}>
  <IconButton
            
            as="a"
            href="https://github.com/cassandrakise"
            aria-label="GitHub-for-Cassie"
            icon={<FaGithub />}
          >
            Github
          </IconButton>
          <IconButton
           
           
            as="a"
            href="https://www.linkedin.com/in/cassandrakise/"
            aria-label="LinkedIn-for-Cassie"
            icon={<FaLinkedinIn />}
          >
            LinkedIn
          </IconButton>
            </Stack>
  </Box>
  </Center>
  <Center>
  <Box textAlign={"center"} bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}>
    <Avatar
    size={"xl"}
    src={
      "imghere"
    }
    alt={"Avatar Alt"}
    mb={4}
    pos={"relative"}
  />
  <Heading fontSize={"2xl"} fontFamily={"body"}>
    Luan Pham
  </Heading>

  <Text
    textAlign={"center"}
    color={useColorModeValue("gray.700", "gray.400")}
    px={3}
  >
    Software Enginer, Front End Engineer, Full Stack Web Developer{" "}
  </Text>
  <Stack mt={8} justify={"center"} spacing={4}>
  <IconButton
            
            as="a"
            href="https://github.com/Luan-Pham"
            aria-label="GitHub-for-pj"
            icon={<FaGithub />}
          >
            Github
          </IconButton>
          <IconButton
           
           
            as="a"
            href="https://www.linkedin.com/in/luan-pham3/"
            aria-label="GitHub-for-pj"
            icon={<FaLinkedinIn />}
          >
            LinkedIn
          </IconButton>
              
            </Stack>
  </Box>
  </Center>
  <Center>
  <Box textAlign={"center"} bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}>
    <Avatar
    size={"xl"}
    src={
      "https://media-exp1.licdn.com/dms/image/C4D03AQFwoXR0bgHYWw/profile-displayphoto-shrink_800_800/0/1668041483470?e=1673481600&v=beta&t=fFJWrzplEEIP6R1xjEntZNissdq-2jwu0tLAv0Nmzr8"
    }
    alt={"Avatar Alt"}
    mb={4}
    pos={"relative"}
  />
  <Heading fontSize={"2xl"} fontFamily={"body"}>
    Phinjock Sherpa(PJ)
  </Heading>

  <Text
    textAlign={"center"}
    color={useColorModeValue("gray.700", "gray.400")}
    px={3}
  >
    Software Enginer, Front End Engineer, Full Stack Web Developer{" "}
  </Text>
  <Stack mt={8} justify={"center"} spacing={4}>
  <IconButton
            
            as="a"
            href="https://github.com/pjsherpa"
            aria-label="GitHub-for-pj"
            icon={<FaGithub />}
          >
            Github
          </IconButton>
          <IconButton
           
           
            as="a"
            href="https://www.linkedin.com/in/phinjock-sherpa/"
            aria-label="GitHub-for-pj"
            icon={<FaLinkedinIn />}
          >
            LinkedIn
          </IconButton>
            </Stack>
  </Box>
  </Center>
  </Stack>
  </div>
  )
}

export default Barcadians
