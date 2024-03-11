import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery, Text, Center, Image } from "@chakra-ui/react";
import Header from "../components/common/Header";
import Header2 from "../components/common/Header2";
import MobileHeader from "../components/common/MobileHeader";
import Footer from "../components/common/Footer";
import { Helmet } from "react-helmet";
export default function PackageDetails() {
  const { title } = useParams();
  const [packageTitle, setPackageTitle] = useState("");;
  const [pic, setPic] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDes, setMetaDes] = useState("");
  const [packageAbout, setPackageAbout] = useState("");
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

  const fetchData = async () => {
    try {
      // console.log(title)
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getpackagebytitle/${title}`
      );
      const data = await response.json();
      console.log(data)
      if (data.success === true) {
        setPackageTitle(data.data.title);
        setPic(data.data.image);
        setMetaTitle(data.data.meta_title);
        setMetaDes(data.data.meta_description);
        setPackageAbout(data.data.about);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDes} />
      </Helmet>
      {!isLargerThan980 ? <MobileHeader></MobileHeader> : <Header></Header>}
      <Header2></Header2>
      <Center display={"flex"} flexDirection={"column"} m={8} gap={8}>
        <Text
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily="Georgia, serif"
          fontSize={40}
        >
          {packageTitle}
        </Text>
        {console.log(pic)}
        <Image src={pic} height={"30%"} width={"50%"}></Image>
        <div
          dangerouslySetInnerHTML={{ __html: packageAbout }}
          style={{ width: "80%" }}
        ></div>
      </Center>

      <Footer></Footer>
    </>
  );
}
