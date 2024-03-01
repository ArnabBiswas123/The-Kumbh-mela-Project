import React from "react";
import { Box, Text } from "@chakra-ui/react";
import AdminHeader from "../DashboardPage/AdminHeader";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Sections from "./Sections";
export default function CreateSection() {
  const toast = useToast();
  const [input, setInput] = useState("");
  const [pic, setPic] = useState("");
  const [des, setDes] = useState("");
  const [error, setError] = useState({ input: "", des: "" });
  const [loading,setLoading]=useState(false)


  const inputChange = (e) => {
    setInput(e.target.value);
    setError({ ...error, input: "" });
  };
  const picChange = async (e) => {
    setPic(e.target.value);
  };
  const desChange = async (e) => {
    setDes(e.target.value);
    setError({ ...error, des: "" });
  };
  const submitHandler = async () => {
  
    let errors = {};

    if (input === "") {
      errors.input = "Enter Title";
    }
    if (des === "") {
      errors.des = "Enter Description";
    }

    if (input === "" || des === "") {
      setError(errors);
      toast({
        title: "Enter all fields",
        description: "Please enter title and description ",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }else{
      console.log(process.env.REACT_APP_BACKEND_URL)
      setLoading(true);
      const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/createabout`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title:input,
          image:pic?pic:"NA",
          description:des
        }),
      })
      setLoading(false);
      const data=await response.json();
      if(data.success===true){
        toast({
          title: "Successfully created",
          description: "Section is created successfully",
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      else{
        toast({
          title: data.msg,
          description: "Error occured",
          position: "top",
          status: "error",
          duration: 2000,
          isClosable: true,})
      }

    }
  };

  return (
    <Box w={"100vw"} minH={"100vh"} bgColor={"white"} overflow={"hidden"}>
      <AdminHeader></AdminHeader>
      <Box
        w={"100vw"}
        minH={"90%"}
        bgColor={"#FFDEAD"}
        overflow={"hidden"}
        display={"flex"}
        flexDirection={"row"}
      >
        <Sections></Sections>
        <Box width={"80%"} ml={4} my={4} textAlign={"center"}>
          <FormControl>
            <FormLabel fontFamily={"Georgia, serif"}>Section Header</FormLabel>
            <Input
              type="text"
              bgColor={"white"}
              mb={4}
              borderWidth={2}
              borderColor={error.input ? "red" : "white"}
              value={input}
              onChange={inputChange}
            />
            <FormLabel fontFamily={"Georgia, serif"}>Section Image</FormLabel>
            <Input
              type="file"
              bgColor={"white"}
              mb={4}
              value={pic}
              onChange={picChange}
            />
            <Text mb="8px" fontFamily={"Georgia, serif"} textAlign={"left"}>
              Section Description
            </Text>
            <Textarea
              borderColor={error.des ? "red" : "white"}
              borderWidth={2}
              placeholder="Enter Section Description"
              size="lg"
              bgColor={"white"}
              style={{ height: "200px" }}
              fontFamily={"Georgia, serif"}
              onChange={desChange}
              value={des}
              // resize={resize}
            />
            <Button
              isLoading={loading}
              loadingText='Submitting'
              colorScheme={"#EF3131"}
              bgColor={"#EF3131"}
              color={"white"}
              size="lg"
              m={4}
              onClick={submitHandler}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
