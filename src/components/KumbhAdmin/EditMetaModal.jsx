import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  Text,
  Box
} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Button,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from 'react';

export default function EditMetaModal({ isOpen, onClose, data }) {
  
    const toast = useToast();
    const id=data._id;
    const [input, setInput] = useState(data.meta_title);
    const [des, setDes] = useState(data.meta_description);
    const [error, setError] = useState({ input: "", des: "" });
    const [loading,setLoading]=useState(false)
    

    const inputChange = (e) => {
      setInput(e.target.value);
      setError({ ...error, input: "" });
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
      try {
        setLoading(true);
        const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/editmetatag`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id:id,
            meta_title:input,
            meta_description:des
          }),
        })
        setLoading(false);
        const data=await response.json();
        if(data.success===true){
          toast({
            title: "Successfully edited",
            description: "Section is edited successfully",
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
      } catch (error) {
        console.log(error)
      }
       
  
      }
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backgroundColor={"rgba(0, 0, 0, 0.2)"}></ModalOverlay>
      <ModalContent  >
        <ModalHeader fontFamily={"Georgia, serif"} textAlign={"center"}>
          Edit Section
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Center>
          <Box width={"80%"} ml={4} my={4} textAlign={"center"}>
          <FormControl>
            <FormLabel fontFamily={"Georgia, serif"}>Meta Title</FormLabel>
            <Input
              type="text"
              bgColor={"white"}
              mb={4}
              borderWidth={2}
              borderColor={error.input ? "red" : "gray"}
              value={input}
              onChange={inputChange}
            />
            <Text mb="8px" fontFamily={"Georgia, serif"} textAlign={"left"}>
              Meta Description
            </Text>
            <Textarea
              borderColor={error.des ? "red" : "gray"}
              borderWidth={2}
              placeholder="Enter Section Description"
              size="lg"
              bgColor={"white"}
              style={{ height: "200px" }}
              fontFamily={"Georgia, serif"}
              onChange={desChange}
              value={des}
         
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
              Edit
            </Button>
          </FormControl>
        </Box>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
