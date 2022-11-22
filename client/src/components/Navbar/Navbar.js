import React, { useState } from 'react';
import { Tabs, 
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
  useDisclosure } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Auth from "../../utils/auth";
import SignUpForm from '../../Pages/Signup';
import LoginForm from '../../Pages/Signin';

//Once Login Signupsetup we use the LinkRoute to render page from singin/Singup to the main page. If not the Scroll Feature and a lot of the Nav items wont appear. Sign out tab is created after signin and signup are set up in utils.
// import { LinkRoute } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {

  const [showModal, setShowModal] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)



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

            {/* {to check if these are going to be in react-route} */}
            {Auth.loggedIn() ? (
            <Tab>
              <Link
                className="text-light scroll"
                to="barcadians"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={Auth.logout}>
                <h1>Logout</h1>
              </Link>
            </Tab> ) : (
            <Tab>
              <Link
                className="text-light scroll"
                to="barcadians"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => { setOverlay(<OverlayOne />); onOpen()}}>
                <h1>Login/Sign Up</h1>
              </Link>
            </Tab> )}
          </Flex>
        </TabList>
      </Tabs>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size='md'>
          {overlay}
          <ModalContent>
            <ModalHeader>Cheers!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
          <Tabs size='md' variant='enclosed'>
            <TabList>
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
    </div>
  );
};

export default Navbar;
