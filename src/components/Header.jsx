import { Box, Image, Text } from "@chakra-ui/react";
export default function Header() {
  return (
    <Box
      minW={"100%"}
      bgColor={"#EF3131"}
      mt={0}
      display={"flex"}
      paddingX={2}
      paddingY={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      zIndex={1}
    >
      <Box display={"flex"} gap={3}>
        <Box display={"flex"} color={"white"} gap={1} cursor={"pointer"}>
          <Image
            src="./assets/Mail.svg"
            alt="Mail svg"
            h={"20px"}
            w={"20px"}
          ></Image>
          <Text>info@globalduniya.ca</Text>
        </Box>
        <Box display={"flex"} color={"white"} gap={1} cursor={"pointer"}>
          <Image
            src="./assets/Location.svg"
            alt="Location svg"
            h={"20px"}
            w={"20px"}
          ></Image>
          <Text whiteSpace="nowrap">
            P 9 First Floor, Padhav Nagar, Mayur Vihar,Delhi
          </Text>{" "}
        </Box>
        <Box display={"flex"} color={"white"} gap={1} cursor={"pointer"}>
          <Image
            src="./assets/Phone.svg"
            alt="Mail svg"
            h={"20px"}
            w={"20px"}
          ></Image>
          <Text>+91 8989920981</Text>{" "}
        </Box>
      </Box>
      <Box display={"flex"} gap={3} ml={"10%"}>
        <Image
          src="./assets/Twitter.svg"
          alt="Twitter svg"
          h={"20px"}
          w={"20px"}
          cursor={"pointer"}
        ></Image>
        <Image
          src="./assets/Youtube.svg"
          alt="Youtube svg"
          h={"20px"}
          w={"20px"}
          cursor={"pointer"}
        ></Image>
        <Image
          src="./assets/Facebook.svg"
          alt="Facebook svg"
          h={"20px"}
          w={"20px"}
          cursor={"pointer"}
        ></Image>
        <Image
          src="./assets/Linkedin.svg"
          alt="Linkedin svg"
          h={"20px"}
          w={"20px"}
          cursor={"pointer"}
        ></Image>
        <Image
          src="./assets/Whatsapp.svg"
          alt="Whatsapp svg"
          h={"20px"}
          w={"20px"}
          cursor={"pointer"}
        ></Image>
      </Box>
    </Box>
  );
}
