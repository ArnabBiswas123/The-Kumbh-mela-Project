import React from "react";
import { Center, Heading, Text,useToast } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {useState ,useEffect } from "react";

export default function KumbhInfo() {
  const [sections, setSections] = useState([]);
  const toast=useToast();
  const fetchdata = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getabout`
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
    setSections(data.data);
  };

  useEffect(()=>{
      fetchdata();
  },[])


  return (
    <Center width={"100%"} my={4} overflow={"hidden"}>
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




       
        
        {/* <Heading
          as="h1"
          fontFamily="Georgia, serif"
          fontSize="4xl"
          fontWeight="bold"
          my={4}
        >
          Mythology
        </Heading> */}
        {/* <LazyLoadImage
          src="./assets/SamudraManthan.png"
          height={"100%"}
          width={"60%"}
        ></LazyLoadImage> */}
        {/* <Text
          fontFamily="Georgia, serif"
          fontSize="lg"
          lineHeight="taller"
          m={8}
        >
          Many Hindus believe that the Kumbh Mela originated in times immemorial
          and is attested in the Hindu mythology about Samudra Manthana found in
          the Vedic texts.Historians, in contrast, reject these claims as none
          of the ancient or medieval era texts that mention the Samudra Manthana
          legend ever link it to a "mela" or festival. According to Giorgio
          Bonazzoli – a scholar of Sanskrit Puranas, these are anachronistic
          explanations, an adaptation of early legends to a later practice by a
          "small circle of adherents" who have sought roots of a highly popular
          pilgrimage and festival.The first page of Prayag Snana Vidhi
          manuscript . It describes methods to complete a bathing pilgrimage at
          Prayag. The manuscript (1674 CE) has a colophon, which states "Copied
          by Sarvottama, son of Vishvanatha Bhatta, Samvat 1752".This Hindu
          legend describes the creation of a "pot of amrita (nectar of
          immortality)" after the forces of good and evil churn the ocean of
          creation. The gods and demons fight over this pot, the "kumbha", of
          nectar in order to gain immortality. In a later day extension to the
          legend, the pot is spilled at four places, and that is the origin of
          the four Kumbha Melas. The story varies and is inconsistent, with some
          stating Vishnu as Mohini avatar, others stating Dhanavantari or Garuda
          or Indra spilling the pot.This "spilling" and associated Kumbh Mela
          story is not found in the earliest mentions of the original legend of
          Samudra Manthana such as the Vedic era texts (pre-500 BCE).Nor is this
          story found in the later era Puranas (3rd to 10th-century CE).
        </Text> */}
        {/* <Heading
          as="h1"
          fontFamily="Georgia, serif"
          fontSize="4xl"
          fontWeight="bold"
          my={4}
        >
          History
        </Heading> */}
        {/* <Text
          fontFamily="Georgia, serif"
          fontSize="lg"
          lineHeight="taller"
          m={8}
        >
          The earliest mention of Prayag and the bathing pilgrimage is found in
          Rigveda Pariśiṣṭa (supplement to the Rigveda).It is also
          mentioned in the Pali canons of Buddhism, such as in section 1.7 of
          Majjhima Nikaya, wherein the Buddha states that bathing in Payaga
          (Skt: Prayaga) cannot wash away cruel and evil deeds, rather the
          virtuous one should be pure in heart and fair in action.The
          Mahabharata mentions a bathing pilgrimage at Prayag as a means of
          prāyaścitta (atonement, penance) for past mistakes and guilt.In
          Tirthayatra Parva, before the great war, the epic states "the one who
          observes firm [ethical] vows, having bathed at Prayaga during Magha, O
          best of the Bharatas, becomes spotless and reaches heaven."In
          Anushasana Parva, after the war, the epic elaborates this bathing
          pilgrimage as "geographical tirtha" that must be combined with
          Manasa-tirtha (tirtha of the heart) whereby one lives by values such
          as truth, charity, self-control, patience and others.There are
          other references to Prayaga and river-side festivals in ancient Indian
          texts, including at the places where present-day Kumbh Melas are held,
          but the exact age of the Kumbh Mela is uncertain. The 7th-century
          Buddhist Chinese traveller Xuanzang (Hiuen Tsang) mentions king Harsha
          and his capital of Prayag, which he states to be a sacred Hindu city
          with hundreds of "deva temples" and two Buddhist institutions. He also
          mentions the Hindu bathing rituals at the junction of the rivers.
          According to some scholars, this is the earliest surviving historical
          account of the Kumbh Mela, which took place in present-day Prayag in
          644 CE.
        </Text> */}
      </Center>
    </Center>
  );
}
