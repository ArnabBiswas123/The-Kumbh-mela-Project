import { Box, Image, Button, UnorderedList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
export default function Header2() {
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");
  return (
    <Box
      minW={"100%"}
      display={"flex"}
      // gap={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image
        src="./assets/gd logo.gif"
        height={"50px"}
        width={"100px"}
        m={2}
        cursor={"pointer"}
      ></Image>
      {isLargerThan980 ? (
        <UnorderedList display={"flex"} gap={4}>
          <NavLink to="#">Home</NavLink>
          <NavLink to="#">About Us</NavLink>
          <NavLink to="#">Packages</NavLink>
          <NavLink to="#">Dates</NavLink>
        </UnorderedList>
      ) : (
        ""
      )}
      <Button bgColor={"#EF3131"} color={"white"} m={2}>
        ENQUIRY NOW
      </Button>
      {isLargerThan980 ? (
        ""
      ) : (
        <Image
          src="./assets/BurgerNav.svg"
          height={"60px"}
          m={2}
          cursor={"pointer"}
        ></Image>
      )}
    </Box>
  );
}
