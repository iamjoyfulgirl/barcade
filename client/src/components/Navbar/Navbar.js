import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  IconButton,
  Show,
  Hide,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import Auth from "../../utils/auth";
import SignUpForm from "../../Pages/Signup";
import LoginForm from "../../Pages/Signin";
import "../../App.css";

import Header from "../Header/Header";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const closeMenu = () => setClick(false);
  const breakpoints = { lg: "62em" };

  return (
    <>
      <div className="headers quoutes">
        <Tabs variant="line">
          <TabList>
            <Header />
            <Hide below="lg">
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
                    to="Home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={closeMenu}
                  >
                    <h1 className="m-0">Home</h1>
                  </Link>
                </Tab>
                <Tab>
                  <Link
                    className="text-light scroll"
                    to="Chat"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    onClick={closeMenu}
                  >
                    <h1 className="m-0">Chat</h1>
                  </Link>
                </Tab>
                <Tab>
                  <Link
                    className="text-light scroll"
                    to="Lobby"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={closeMenu}
                  >
                    <h1 className="m-0">Lobby</h1>
                  </Link>
                </Tab>
                <Tab>
                  <Link
                    className="text-light scroll"
                    to="Arcade"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    onClick={closeMenu}
                  >
                    <h1 className="m-0">Arcade</h1>
                  </Link>
                </Tab>
                <Tab>
                  <Link
                    className="text-light scroll"
                    to="Barcadians"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={closeMenu}
                  >
                    <h1 className="m-0">Barcadians</h1>
                  </Link>
                </Tab>

                {Auth.loggedIn() ? (
                  <Tab>
                    <Link
                      className="text-light scroll"
                      to="barcadians"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={Auth.logout}
                    >
                      <h1>Logout</h1>
                    </Link>
                  </Tab>
                ) : (
                  <Tab>
                    <Link
                      className="text-light scroll"
                      to="barcadians"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => (setOverlay(<OverlayOne />), onOpen())}
                    >
                      <h1 className="m-0">Login/Sign Up</h1>
                    </Link>
                  </Tab>
                )}
              </Flex>
            </Hide>
            {/* mobile menu */}
            <Show below="lg">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>
                    <Link
                      className="text-light scroll"
                      to="Home"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={closeMenu}
                    >
                      <h1 className="m-0">Home</h1>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="text-light scroll"
                      to="Chat"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      onClick={closeMenu}
                    >
                      <h1 className="m-0">Chat</h1>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="text-light scroll"
                      to="Lobby"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={closeMenu}
                    >
                      <h1 className="m-0">Lobby</h1>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="text-light scroll"
                      to="Arcade"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={closeMenu}
                    >
                      <h1 className="m-0">Arcade</h1>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="text-light scroll"
                      to="Barcadians"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      onClick={closeMenu}
                    >
                      <h1 className="m-0">Barcadians</h1>
                    </Link>
                  </MenuItem>
                  {Auth.loggedIn() ? (
                    <MenuItem>
                      <Link
                        className="text-light scroll"
                        to="barcadians"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={Auth.logout}
                      >
                        <h1>Logout</h1>
                      </Link>
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Link
                        className="text-light scroll"
                        to="barcadians"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => (setOverlay(<OverlayOne />), onOpen())}
                      >
                        <h1 className="m-0">Login/Sign Up</h1>
                      </Link>
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </Show>
          </TabList>
        </Tabs>
      </div>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="md">
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs size="md" variant="enclosed">
              <TabList>
                <ModalHeader>Cheers!</ModalHeader>
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <LoginForm handleModalClose={() => setShowModal(false)} />
                </TabPanel>
                <TabPanel>
                  <SignUpForm handleModalClose={() => setShowModal(false)} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
