import { Image, Text, Grid, GridItem } from "@chakra-ui/react";
export default function MobileHeader() {
  return (
    <Grid display={"flex"} w={"100%"}  position={'sticky'}
    top={0}
    zIndex={1}>
      <GridItem
        w="100%"
        h="5"
        bg="#EF3131"
        display={"flex"}
        justifyContent={"center"}
       
      >
        <Image src="./assets/MobilePhone.svg"></Image>
      </GridItem>
      <GridItem
        w="100%"
        h="5"
        bg="green"
        display={"flex"}
        justifyContent={"center"}
      >
        <Image src="./assets/MobileWhatsapp.svg"></Image>
      </GridItem>
      <GridItem
        w="100%"
        h="5"
        bg="#EF3131"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text color={"white"}>Book Now</Text>
      </GridItem>
    </Grid>
  );
}
