import {
  Stack,
  ModalBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import Flappybird from "../components/Games/Flappybird";
import Guessing from "../components/Games/Guessing";
import { useState } from "react";
import { TbBrandAppleArcade } from "react-icons/tb";
import { ImCross } from "react-icons/im";

const Arcade = () => {
  const [currentGame, setCurrentGame] = useState("none");

  const OverlayOne = () => (
    <ModalOverlay
      position="auto"
      bg={"blue"}
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [showModal, setShowModal] = useState(false);
  console.log(currentGame);
  switch (currentGame) {
    case "guessing":
      return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="full">
          {overlay}
          <ModalContent>
            <ModalBody>
              <ModalHeader>
                <button variant="primary" onClick={onClose}>
                  <ImCross className="coolStuff" size="xl" />
                </button>
              </ModalHeader>

              <Guessing handleModalClose={() => setShowModal(false)} />
            </ModalBody>{" "}
            <ModalFooter>
              <Button onClick={() => onClose && setCurrentGame("Arcade")}>
                Cancel
              </Button>
            </ModalFooter>{" "}
          </ModalContent>
        </Modal>
      );

    case "flappybird":
      return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="full">
          {overlay}
          <ModalContent>
            <ModalBody>
              <ModalHeader>
                <button variant="primary" onClick={onClose}>
                  <ImCross className="coolStuff" size="xl" />
                </button>
              </ModalHeader>

              <Flappybird handleModalClose={() => setShowModal(false)} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => onClose && setCurrentGame("Arcade")}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );

    case "Arcade":
      return (
        <Stack
          className="/Arcade"
          id="Arcade"
          textAlign={"center"}
          direction={{ base: "column", md: "row" }}
          display={"flex"}
          justifyContent={"space-between"}
          margin={"20%"}
          position={"relative"}
        >
          <div>
            <Text color={"Purple"} className="quoutes">
              Play Guessing Game!
            </Text>
            <button
              variant="primary"
              onClick={() => {
                setCurrentGame("guessing") && setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <TbBrandAppleArcade className="coolStuff" size="xl" />
            </button>
          </div>
          ;
          <div>
            <Text color={"Purple"} className="quoutes">
              Play Flappy Bird!
            </Text>
            <button
              variant="primary"
              onClick={() => {
                setCurrentGame("flappybird") && setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <TbBrandAppleArcade className="coolStuff" size="xl" />
            </button>
          </div>
          ;
        </Stack>
      );

    default:
      return (
        <Stack
          background={"orange"}
          className="/Arcade"
          id="Arcade"
          textAlign={"center"}
          direction={{ base: "column", md: "row" }}
          display={"flex"}
          justifyContent={"space-between"}
          margin={"20%"}
          position={"relative"}
        >
          <div>
            <Text color={"Purple"} className="quoutes">
              Play Guessing Game!
            </Text>
            <button
              variant="primary"
              onClick={() => {
                setCurrentGame("guessing") && setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <TbBrandAppleArcade className="coolStuff" size="xl" />
            </button>
          </div>
          ;
          <div>
            <Text color={"Purple"} className="quoutes">
              Play Flappy Bird!
            </Text>
            <button
              variant="primary"
              onClick={() => {
                setCurrentGame("flappybird") && setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <TbBrandAppleArcade className="coolStuff" size="xl" />
            </button>
          </div>
          ;
        </Stack>
      );
  }
};

export default Arcade;
