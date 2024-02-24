import {
  Center,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function KumbhMelaAccommodation() {
  return (
    <>
      <Text
        fontWeight={"bold"}
        textAlign={"center"}
        fontFamily="'Noto Sans', sans-serif"
        fontSize={25}
        m={"2%"}
      >
        KUMBH MELA ACCOMMODATION
      </Text>
      <Center
        backgroundColor={"white"}
        display={"flex"}
        minW={"100%"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={3}
        mb={"5%"}
      >
        <Card maxW={["90%","60%","50%","20%"]} maxH={["40%","40%","40%","40%"]} p={0} backgroundColor={"white"} shadow={'dark-lg'}>
          <LazyLoadImage
            src="./assets/Accommodation1.jpeg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md">Dormitory Tent</Heading>
              <Text>
                Dormitories Tent Booking are the best option to book Budget
                Camp/accommodations in Kumbh Mela Prayagraj.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"center"}>
            <Text
              color={"red"}
              h={"10%"}
              w={"50%"}
              textAlign={"center"}
              cursor={"pointer"}
            >
              View Details
            </Text>
          </CardFooter>
        </Card>
        <Card maxW={["90%","60%","50%","20%"]} maxH={["40%","40%","40%","40%"]} p={0} backgroundColor={"white"} shadow={'dark-lg'}>
          <LazyLoadImage
            src="./assets/Accommodation2.jpeg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md"> Economy Tent</Heading>
              <Text>
                Economy Tents are the best option to stay individually in Kumbh
                Mela Prayagraj in your budget and visit 2025 Kumbh Mela
              </Text>
            </Stack>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"center"}>
            <Text
              color={"red"}
              h={"10%"}
              w={"50%"}
              textAlign={"center"}
              cursor={"pointer"}
            >
              View Details
            </Text>
          </CardFooter>
        </Card>
        <Card maxW={["90%","60%","50%","20%"]} maxH={["40%","40%","40%","40%"]} p={0} backgroundColor={"white"} shadow={'dark-lg'}>
          <LazyLoadImage
            src="./assets/Accommodation3.jpeg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
            borderTopRadius={"md"}
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md">Deluxe Tent</Heading>
              <Text>
                Deluxe Tents offering more amenities as the guest requirement.
                This tent includes double bed mattress with attached bath
              </Text>
            </Stack>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"center"}>
            <Text
              color={"red"}
              h={"10%"}
              w={"50%"}
              textAlign={"center"}
              cursor={"pointer"}
            >
              View Details
            </Text>
          </CardFooter>
        </Card>
        <Card maxW={["90%","60%","50%","20%"]} maxH={["40%","40%","40%","40%"]} p={0} backgroundColor={"white"} shadow={'dark-lg'}>
          <LazyLoadImage
            src="./assets/Accommodation4.jpeg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
            borderTopRadius={"md"}
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md">Luxury Tent</Heading>
              <Text>
                Luxury Cottage are one of the finest Luxurious camping in Kumbh
                Mela 2025. This Cottage includes compete features as the
              </Text>
            </Stack>
          </CardBody>
          <CardFooter display={"flex"} justifyContent={"center"}>
            <Text
              color={"red"}
              h={"10%"}
              w={"50%"}
              textAlign={"center"}
              cursor={"pointer"}
            >
              View Details
            </Text>
          </CardFooter>
        </Card>
      </Center>
    </>
  );
}
