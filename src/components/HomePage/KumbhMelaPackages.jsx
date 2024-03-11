import {
  Center,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function KumbhMelaPackages() {
  const [packages, setPackages] = useState([]);
  const navigate=useNavigate();
  const fetchData = async (req, res) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallfrontpagedata`
      );
      const data = await res.json();
      setPackages(data.packages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Text
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize={25}
        m={"2%"}
        fontFamily="Georgia, serif"
        id="packages"
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
        {packages.length>0?packages.map((item)=>{
            return(
              <Card
              maxW={["90%", "60%", "50%", "20%"]}
              maxH={["40%", "40%", "40%", "40%"]}
              p={0}
              backgroundColor={"white"}
              shadow={"dark-lg"}
              cursor={"pointer"}
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.3s ease-in-out"
            >
              
              <LazyLoadImage
                src={item.image}
                alt="packages"
                style={{ height: "200px", borderRadius: "2%" }}
              ></LazyLoadImage>
              <CardBody>
                <Stack>
                  <Heading fontFamily="Georgia, serif" size="md">
                    {item.title}
                  </Heading>
                  <Text fontFamily="Georgia, serif" fontSize="md">
                    {item.description}
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
                  onClick={()=>{navigate(`/packages/${item.title}`)}}
                >
                  View Details
                </Text>
              </CardFooter>
            </Card>
            )
        }):''}


      </Center>
    </>
  );
}
