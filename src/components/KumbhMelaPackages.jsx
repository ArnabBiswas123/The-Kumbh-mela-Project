import {
  Center,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function KumbhMelaPackages() {
  return (
    <>
      <Text
        fontWeight={"bold"}
        textAlign={"center"}
        fontFamily="'Noto Sans', sans-serif"
        fontSize={25}
        m={"2%"}
      >
        KUMBH MELA PACKAGES
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
            src="./assets/Packages.jpg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md">Kumbh Mela Package 1 Nights 2 Days</Heading>
              <Text>
                In this bundle of 1 nights and 2 days Kumbh Mela Tour Package in
                Prayagraj 2025, youll embark on a journey towards Nirv
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
            src="./assets/Package2.jpg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
            borderTopRadius={"md"}
            // loading="lazy"
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md">Kumbh Mela Package 2 Nights 3 Days</Heading>
              <Text>
                Come and savor every bit of spirituality at Kumbh Mela with our
                2 nights 3 days Kumbh Mela Package. Plan your Kumbh Mela
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
            src="./assets/Package3.jpg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md">Kumbh Mela Package 3 Nights 4 Days</Heading>
              <Text>
              Come and savor every bit of spirituality at Kumbh Mela with our
                2 nights 3 days Kumbh Mela Package. Plan your Kumbh Mela
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
            src="./assets/Package4.jpg"
            alt="packages"
            style={{height:'200px', borderRadius:'2%'}}
          ></LazyLoadImage>
          <CardBody>
            <Stack>
              <Heading size="md"> Kumbh Mela Shahi Snan Package</Heading>
              <Text>
                Immerse yourself in our sacred Shahi Snan Package or Kumbh Mela
                package for 4 nights and 5 days, where youll come and s
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
