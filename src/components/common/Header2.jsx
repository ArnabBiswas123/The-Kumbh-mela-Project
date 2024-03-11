import { Box, Image, Button, UnorderedList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
 
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";






export default function Header2() {
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef =useRef()
  return (
    <>
     <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> <Image
        src="./assets/gd logo.gif"
        height={"80%"}
        width={"60%"}
        m={2}
        cursor={"pointer"}
      ></Image></DrawerHeader>

          <DrawerBody>
          <UnorderedList      fontFamily={"Georgia, serif"} display={"flex"} flexDirection={'column'} gap={4} color={'black'}>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="#">About Us</NavLink>
          <NavLink to="#">Packages</NavLink>
          <NavLink to="#">Dates</NavLink>
        </UnorderedList>
          </DrawerBody>


        </DrawerContent>
      </Drawer>
    <Box
      minW={"100%"}
      display={"flex"}
      bgColor={'#0b223a'}
      // gap={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
    <NavLink to={'/'}>
      <Image
        src="/assets/gd logo.gif"
        height={"50px"}
        width={"100px"}
        m={2}
        cursor={"pointer"}
      ></Image>
      </NavLink>
      {isLargerThan980 ? (
        <UnorderedList      fontFamily= {"Georgia, serif"} display={"flex"} gap={4} color={'white'}>
          <Link to="/">Home</Link>
          <Link to="#">About Us</Link>
          <Link href="#packages">Packages</Link>
          <Link href="#accomodations">Accomodations</Link>
          <Link href="#dates">Dates</Link>
        </UnorderedList>
      ) : (
        ""
      )}
      <Button colorScheme='#EF3131' bgColor={"#EF3131"} color={"white"} m={2}>
        ENQUIRY NOW
      </Button>
      {isLargerThan980 ? (
        ""
      ) : (
        <Image
          src="/assets/BurgerNav.svg"
          height={"60px"}
          m={2}
          cursor={"pointer"}
          ref={btnRef}
          onClick={onOpen}
        ></Image>
      )}
    </Box>
    </>
  );
}
