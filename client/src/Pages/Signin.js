import {
  Flex,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import Auth from "../utils/auth";
// import { Link } from "react-router-dom";
// export default function Signin() {
const Signin = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [logIn, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await logIn({
        variables: formState,
      });
      await Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  }; 
  return (
    <Flex
     
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>Sign In</Heading>
          <Text fontSize={"lg"} color={"gray.600"} textAlign={"center"}>
            Barcadia
          </Text>
          <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {/* {need to add in data rendering of pages} */}
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <HStack>
                <Box>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.500"}>Forgot password?</Link>
                </Stack>
                <Button colorScheme={"blue"} variant={"solid"} type="submit">
                  Sign in
                </Button>
              </Stack>
              </Box>
              </HStack>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        
          </Box>
        </Stack>
      {/* </Flex> */}
      <Flex flex={1}>
        {/* <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.squarespace-cdn.com/content/v1/571fbc190442624a67dfb062/1517428106778-QHMJ33CQ8TD9207IRMYN/paddys-pub-set-2.JPG"
          }
        /> */}
      </Flex>
    </Stack>
    </Flex>
  );
}

export default Signin;