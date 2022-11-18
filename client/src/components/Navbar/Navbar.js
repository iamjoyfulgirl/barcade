import { Tabs, TabList, Tab, Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";
import Header from "../Header/Header";

const Navbar = () => {
  return (
    <div>
      <Tabs variant="soft-rounded">
        <TabList>
          <Header />
          <Flex
            align="center"
            pos="relative"
            justify="end"
            boxSize="full"
            position="static"
          >
            <Tab>
              <Link
                className="text-light scroll"
                to="/"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h1 className="m-0">Home</h1>
              </Link>
            </Tab>
            <Tab>
              <Link
                className="text-light scroll"
                to="gameOn"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h1 className="m-0">Game</h1>
              </Link>
            </Tab>
            <Tab>
              <Link
                className="text-light scroll"
                to="barcadians"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h1 className="m-0">Barcadians</h1>
              </Link>
            </Tab>
            <Tab>
              <Link
                className="text-light scroll"
                to="barcadians"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h1 className="m-0">Chat Area</h1>
              </Link>
            </Tab>
            <Tab>
              <Link
                className="text-light scroll"
                to="barcadians"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h1 className="m-0">About</h1>
              </Link>
            </Tab>
            {/* {to check if these are going to be in react-route} */}
            <Tab>
              <Link
                className="text-light scroll"
                to="barcadians"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h1 className="m-0">Login</h1>
              </Link>
            </Tab>
            <Tab>
              <Link
                className="text-light scroll"
                to="barcadians"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <h1 className="m-0">Signup</h1>
              </Link>
            </Tab>
          </Flex>
        </TabList>
      </Tabs>
    </div>
  );
};

export default Navbar;
