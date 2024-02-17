import {
  Box,
  VStack,
  ListItem,
  UnorderedList,
  List,
  Image,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Box
        minW={"100%"}
        display={"flex"}
        bgColor={"#683434"}
        flexDirection={['column','column','column','row']}
        gap={3}
        color={"white"}
        justifyContent={"space-between"}
        // alignItems={"center"}
        p={"5%"}
        px={"8%"}
      >
        <VStack>
          <h3>USEFUL LINKS</h3>
          <UnorderedList>
            <ListItem>
              {" "}
              <NavLink to="#">Home</NavLink>
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">About Us</NavLink>
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">Dates</NavLink>
            </ListItem>
            <ListItem>
              {" "}
              <NavLink to="#">Contact</NavLink>
            </ListItem>
          </UnorderedList>
        </VStack>

        <VStack>
          <h3>CONTACT INFO</h3>
          <List spacing={2}>
            <ListItem display={"flex"} gap={1}>
              <Image src="./assets/Location.svg" />P 9 First Floor, Padhav
              Nagar, Mayur Vihar,Delhi
            </ListItem>

            <ListItem display={"flex"} gap={1}>
              <Image src="./assets/Mail.svg" />
              info@globalduniya.ca
            </ListItem>

            <ListItem display={"flex"} gap={1}>
              <Image src="./assets/Phone.svg" />
              Phone: +91 8989920981
            </ListItem>
          </List>
        </VStack>

        <VStack>
          <h3>PACKAGES</h3>
          <UnorderedList>
            <ListItem>1 Night 2 Days Kumbh Mela Package</ListItem>

            <ListItem>Kumbh Mela Package 2 Nights 3 Days</ListItem>

            <ListItem>3 Night 4 Days Kumbh Mela Package</ListItem>
            <ListItem>Kumbh Mela Shahi Snan Package</ListItem>
          </UnorderedList>
        </VStack>
      </Box>
      <Text textAlign={'center'}   color={'white'} pb={2}   bgColor={"#683434"}>
        Copyright @Globefirst innovative Traveltech Inc. Canada (Travel Agent
        license: 73581, CLIA membership No. 00578350) Made by: WebTrends Ai Inc.
      </Text>
    </>
  );
}
