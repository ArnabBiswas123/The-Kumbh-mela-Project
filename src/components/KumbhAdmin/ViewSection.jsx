import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  Text,
} from "@chakra-ui/react";

export default function ViewSection({ isOpen, onClose, data }) {
  console.log(data);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backgroundColor={"rgba(0, 0, 0, 0.2)"}></ModalOverlay>
      <ModalContent>
        <ModalHeader fontFamily={"Georgia, serif"} textAlign={"center"}>
          {data.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Text fontFamily={"Georgia, serif"}>{data.description}</Text>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
