import {
  Stack,
  ModalBody,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Flappybird from "./Flappybird";
import Guessing from "../components/Games/Guessing";
import { useState } from "react";
import { TbBrandAppleArcade } from "react-icons/tb";

const Arcade = () => {
  const [currentGame, setCurrentGame] = useState("none");
  // const [overlay, setOverlay] = React.useState(<OverlayOne />);
  // const OverlayOne = () => (
  //   <ModalOverlay
  //     bg="none"
  //     backdropFilter="auto"
  //     backdropInvert="80%"
  //     backdropBlur="2px"
  //   />
  // );

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
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="md">
          {overlay}
          <ModalContent>
            <ModalBody>
              <Guessing handleModalClose={() => setShowModal(true)} />
            </ModalBody>
          </ModalContent>
        </Modal>
      );
    case "flappybird":
      return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="full">
          {overlay}
          <ModalContent>
            <ModalBody>
              <Flappybird handleModalClose={() => setShowModal(true)} />
            </ModalBody>
          </ModalContent>
        </Modal>
      );
    case "none":
    default:
      return (
        <Stack
          textAlign={"center"}
          direction={{ base: "column", md: "row" }}
          display={"flex"}
          justifyContent={"space-between"}
          margin={"20%"}
        >
          <div>
            <Text color={"Purple"} className="quoutes">
              Play Guessing Game!
            </Text>
            <button
              onClick={() => {
                setCurrentGame("guessing") && setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <TbBrandAppleArcade size="xl" />
            </button>
          </div>
          ;
          <div>
            <Text color={"Purple"} className="quoutes">
              Play Flappy Bird!
            </Text>
            <button
              onClick={() => {
                setCurrentGame("flappybird") && setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <TbBrandAppleArcade size="xl" />
            </button>
          </div>
          ;
        </Stack>
      );
  }
};

export default Arcade;
