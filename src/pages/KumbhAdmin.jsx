import React from 'react'
import { Box } from '@chakra-ui/react'
import AdminHeader from '../components/DashboardPage/AdminHeader'
import Sections from '../components/KumbhAdmin/Sections'



export default function KumbhAdmin() {
//  console.log(process.env.REACT_APP_BACKEND_URL)

  return (
    <Box w={"100vw"} minH={"100vh"} bgColor={"white"} overflow={'hidden'}>
    {/* <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
    </Helmet> */}
          <AdminHeader></AdminHeader>
          <Box w={"100vw"} minH={"90%"} bgColor={"#FFDEAD"} overflow={'hidden'} display={'flex'} flexDirection={'row'}>
          <Sections></Sections>

          </Box>
    </Box>
  )
}
