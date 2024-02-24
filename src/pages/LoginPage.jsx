import React from 'react'
import {
  Center,
  Text,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Button,

} from "@chakra-ui/react";
export default function LoginPage() {
  return (
    <Center w={"100vw"} h={"100vh"} bgColor={"#FFDEAD"}>
    <Center
      h={"80%"}
      w={["100%", "80%", "80%", "40%"]}
      borderRadius={"2%"}
      display={"flex"}
      flexDirection={"row"}
      // justifyContent={"flex-start"}
      bgColor={"#FFF5EE"}
      gap={"20%"}
      boxShadow="dark-lg"
    >
      <VStack w={"60%"} spacing={"10px"}>
        <Text fontSize={"4xl"} as={"b"} mb={4}>
          {" "}
          Admin Login
        </Text>
       
        
        <FormControl id="username" isRequired 
        // isInvalid={errors.email}
        >
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="Enter your Username"
            // value={email}
            // onChange={emailChangeHandler}
            borderColor={"black"}
          />
          {/* {errors.email ? (
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          ) : (
            ""
          )} */}
        </FormControl>
        <FormControl id="Password" isRequired 
        // isInvalid={errors.mobile}
        >
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Enter your Password"
            // value={mobile}
            // onChange={mobileChangeHandler}
            borderColor={"black"}
          />
          {/* {errors.mobile ? (
            <FormErrorMessage>{errors.mobile}</FormErrorMessage>
          ) : (
            ""
          )} */}
        </FormControl>
        <Button
          colorScheme="blue"
          width="50%"
          style={{ marginTop: 15 }}
          // onClick={submitHandler}
          // isLoading={loading}
        >
          Submit
        </Button>
      </VStack>
    </Center>
  </Center>
  )
}
