import React, { useState } from "react";
import { Box, Text, Image, Center } from "@chakra-ui/react";
import AdminHeader from "../DashboardPage/AdminHeader";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useToast
} from "@chakra-ui/react";
import { useEffect } from "react";
import Sections from "./Sections";
import ViewSection from "./ViewSection";
export default function EditSection() {

  const [sections,setSections]=useState([]);
  const toast=useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleOpenModal = (data) => {
    setModalData(data);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const fetchdata=async()=>{
    const res=await fetch(`${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getabout`);
    const data=await res.json();
    if(data.success===false){
      toast({
        title: data.msg,
        description: "Some erroe happened",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    // console.log(data);
    setSections(data.data);
  }
 
  useEffect(()=>{
      fetchdata();
  },[])



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
          <TableContainer>
            <Table variant="simple">
              <Thead bgColor={"white"}>
                <Tr>
                  <Th fontFamily="Georgia, serif"> Section Title</Th>
                  <Th fontFamily="Georgia, serif" >View</Th>
                  <Th fontFamily="Georgia, serif">Edit</Th>
                  <Th fontFamily="Georgia, serif">Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sections.length>0? sections.map((item,index)=>{
                  return(
                    <Tr key={index}>
                    <Td fontFamily="Georgia, serif">{item.title}</Td>
                    <Td cursor={'pointer'} onClick={() => handleOpenModal(item)}>
                      <Image
                        src="./assets/eye.png"
                        alt="view"
                        h={"20px"}
                        w={"20px"}
                        ml={2}
                      ></Image>
                    </Td>
                    <ViewSection isOpen={isOpen} onClose={handleCloseModal} data={modalData} />
                    <Td cursor={'pointer'}>
                      {" "}
                      <Image
                        src="./assets/edit.png"
                        alt="edit"
                        h={"20px"}
                        w={"20px"}
                        ml={2}
                      ></Image>
                    </Td>
                    <Td cursor={'pointer'}>
                      {" "}
                      <Image
                        src="./assets/bin.png"
                        alt="delete"
                        h={"20px"}
                        w={"20px"}
                        ml={2}
                      ></Image>
                    </Td>
                  </Tr>
                  )
                }):''}

              
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
