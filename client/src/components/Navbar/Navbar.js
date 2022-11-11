import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <Tabs variant="soft-rounded">
        <TabList>
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
        </TabList>
      </Tabs>
    </div>
  );
};

export default Navbar;
