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
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Sections from "./Sections";

import EditMetaModal from "./EditMetaModal";

export default function EditMetaTags() {
  const [sections, setSections] = useState([]);
  const toast = useToast();
 
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [modalEditData, setModalEditData] = useState("");
  const [fetchAgain, setFetchAgain] = useState(false);

 
  const handleOpenEditModal = (data) => {
    setModalEditData(data);
    setIsEditOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditOpen(false);
    setFetchAgain(prev=>!prev);
  };
  const fetchdata = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/getmetatags`
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
    } catch (error) {
      console.log(error);
    }

  
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/deletemetatag/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === true) {
        toast({
          title: "Successfully deleted",
          description: "Section is deleted successfully",
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setFetchAgain((prev) => !prev);
        return;
      }
      toast({
        title: data.msg,
        description: "Some error happened",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  
  };

  useEffect(() => {
    fetchdata();
  }, [fetchAgain]);

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
                  <Th fontFamily="Georgia, serif">Meta Title</Th>
             
                  <Th fontFamily="Georgia, serif">Edit</Th>
                  <Th fontFamily="Georgia, serif">Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sections.length > 0
                  ? sections.map((item, index) => {
                      return (
                        <Tr key={index}>
                          <Td fontFamily="Georgia, serif">{item.meta_title}</Td>
                         
        
                          <Td
                            cursor={"pointer"}
                            onClick={() => handleOpenEditModal(item)}
                          >
                            {" "}
                            <Image
                              src="./assets/edit.png"
                              alt="edit"
                              h={"20px"}
                              w={"20px"}
                              ml={2}
                            ></Image>
                          </Td>
                          {isEditOpen && modalEditData && (
                            <EditMetaModal
                              isOpen={isEditOpen}
                              onClose={handleCloseEditModal}
                              data={modalEditData}
                            ></EditMetaModal>
                          )}

                          <Td
                            cursor={"pointer"}
                            onClick={() => handleDelete(item._id)}
                          >
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
                      );
                    })
                  : ""}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>)
}
