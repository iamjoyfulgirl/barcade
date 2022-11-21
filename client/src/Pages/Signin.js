import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import Auth from "../utils/auth";
// import { Link } from "react-router-dom";
// export default function Signin() {
const Signin = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: formState,
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign In</Heading>
          {/* {need to add in data rendering of pages} */}
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <FormControl id="username">
                <FormLabel>User name</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={formState.username}
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
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
          <Stack pt={6}>
            <Text align={"center"}>
              Need to sign up? <Link to="/signup" color={"blue.400"}>Sign Up</Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.squarespace-cdn.com/content/v1/571fbc190442624a67dfb062/1517428106778-QHMJ33CQ8TD9207IRMYN/paddys-pub-set-2.JPG"
          }
        />
      </Flex>
    </Stack>
  );
}

export default Signin;