import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SiChakraui } from "react-icons/si";

const Footer = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: "12",
        md: "16",
      }}
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.youtube.com/watch?v=VCvr6tzZPTU"
              aria-label="Day-Man"
              icon={<FiYoutube fontSize="5.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/iamjoyfulgirl/barcade"
              aria-label="GitHub-for-barcade"
              icon={<FaGithub fontSize="5.25rem" />}
            />
            <IconButton
              as="a"
              href="https://chakra-ui.com/getting-started"
              aria-label="chakra"
              icon={<SiChakraui fontSize="5.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="xl" color="subtle" textAlign={"center"}>
          &copy; {new Date().getFullYear()} Barcade reserved.
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
