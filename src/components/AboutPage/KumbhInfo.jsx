import React from "react";
import { Center, Heading, Text,useToast } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {useState ,useEffect } from "react";
import {Helmet} from "react-helmet";

export default function KumbhInfo() {
  const [sections, setSections] = useState([]);
  const [metas, setMetas] = useState([]);
  const toast=useToast();
  const fetchdata = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getallabout`
    );
    const data = await res.json();
    if (data.success === false) {
      toast({
        title: data.msg,
        description: "Some error happened",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    // console.log(data);
    setSections(data.sections);
    setMetas(data.meta_tags)
  };

  useEffect(()=>{
      fetchdata();
  },[])


  return (
    <Center width={"100%"} my={4} overflow={"hidden"}>
          {/* <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
    </Helmet> */}
      <Center
        width={["100%", "90%", "80%", "60%"]}
        display={"flex"}
        flexDir={"column"}
      >
  {sections.length > 0?sections.map((item,index)=>{
    return (
      <>
       <Heading
          as="h1"
          fontFamily="Georgia, serif"
          fontSize="4xl"
          fontWeight="bold"
          my={4}
        >{item.title}</Heading>
        <Text fontFamily="Georgia, serif" fontSize="lg" lineHeight="taller"  m={8}>
          {item.description}
        </Text>
      </>
    )
  }):''}
      </Center>
    </Center>
  );
}
