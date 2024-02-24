import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import AdminHeader from '../components/DashboardPage/AdminHeader'
import Sections from '../components/KumbhAdmin/Sections'

export default function KumbhAdmin() {
  return (
    <Box w={"100vw"} minH={"100vh"} bgColor={"#FFDEAD"} overflow={'hidden'}>
          <AdminHeader></AdminHeader>
          <Text
          fontWeight={"bold"}
          textAlign={"center"}
          fontFamily="Georgia, serif" 
          fontSize={25}
          color={'#4169E1'}
          textDecoration="underline"
          m={4}
        >
          KUMBH MELA PRAYAGRAJ
        </Text>

          <Sections></Sections>
    </Box>
  )
}
