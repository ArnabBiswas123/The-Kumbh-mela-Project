import {
  Box,
  Image,
  Button,
  UnorderedList,
  Input,
  FormControl,
  
  Textarea,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  Center,
  FormLabel,
  ModalBody,
  Text,
  ModalCloseButton,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function Header2() {
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");
  const [name, setName] = useState("");
  const [nameBook, setNameBook] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileBook, setMobileBook] = useState("");
  const [email, setEmail] = useState("");
  const [emailBook, setEmailBook] = useState("");
  const [noOfPerson, setnoOfPerson] = useState("");
  const [noOfPersonBook, setnoOfPersonBook] = useState("");
  const [date, setDate] = useState("");
  const [dateBook, setDateBook] = useState("");
  const [duration, setDuration] = useState("");
  const [durationBook, setDurationBook] = useState("");
  const toast = useToast();
  const [message, setMessage] = useState("");
  const [messageBook, setMessageBook] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [errorsBook, setErrorsBook] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    isOpen: isModalBookOpen,
    onOpen: onModalBookOpen,
    onClose: onModalBookClose,
  } = useDisclosure();

  const handlesubmit = async () => {
    let newerrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (name === "") newerrors.name = "Name is required";
    if (mobile === "") newerrors.mobile = "Mobile Number is required";
    if (email==="") {
      newerrors.email = "Email is required";
  } else 
  if (emailRegex.test(email) === false) {
      newerrors.email = "Invalid email format";
  }
  setErrors(newerrors);
  
  if (Object.keys(newerrors).length === 0)  {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/customer/createcustomer`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              mobile: mobile,
              email: email,
              no_of_person: noOfPerson,
              date: date,
              duration: duration,
              message: message,
            }),
          }
        );
        setLoading(false);
        const data = await res.json();
        if (data.success === true) {
          toast({
            title: "We will contact you shortly",
            description: "Your details are saved",
            position: "top",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          onModalClose();
        } else {
          toast({
            title: data.msg,
            description: "Something Error Happened",
            position: "top",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          onModalClose();
        }
      } catch (error) {
        setLoading(false);
        onModalClose();
        console.log(error);
      }
    }
  };
  const handlesubmitBook = async () => {
    let newerrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (nameBook === "") newerrors.nameBook = "Name is required";
    if (mobileBook === "") newerrors.mobileBook = "Mobile Number is required";
    if (emailBook==="") {
      newerrors.emailBook = "Email is required";
  } else 
  if (emailRegex.test(emailBook) === false) {
      newerrors.emailBook = "Invalid email format";
  }
  setErrorsBook(newerrors);
  
  if (Object.keys(newerrors).length === 0)  {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/customer/createcustomer`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: nameBook,
              mobile: mobileBook,
              email: emailBook,
              no_of_person: noOfPersonBook,
              date: dateBook,
              duration: durationBook,
              message: messageBook,
            }),
          }
        );
        setLoading(false);
        const data = await res.json();
        if (data.success === true) {
          toast({
            title: "We will contact you shortly",
            description: "Your details are saved",
            position: "top",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          onModalBookClose();
        } else {
          toast({
            title: data.msg,
            description: "Something Error Happened",
            position: "top",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          onModalBookClose();
        }
      } catch (error) {
        setLoading(false);
        onModalBookClose();
        console.log(error);
      }
    }
  };

  const handleModalClose = () => {
    // Close the modal
    setName("");
    setMobile("");
    setEmail("");
    setDate("");
    setDuration("");
    setMessage("");
    setErrors({
      name: "",
      mobile: "",
      email: "",
    });
    onModalClose();
   
  };
  const handleModalBookClose = () => {
    // Close the modal
    setNameBook("");
    setMobileBook("");
    setEmailBook("");
    setDateBook("");
    setDurationBook("");
    setMessageBook("");
    setErrorsBook({
      nameBook: "",
      mobileBook: "",
      emailBook: "",
    });
    onModalBookClose();
   
  };

  const btnRef = useRef();
  return (
    <>
      <Modal isOpen={isModalOpen} size={"lg"} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent py={4}>
          <Center m={4} display={"flex"} flexDirection={"column"}>
            <Text
              fontSize={"larger"}
              fontWeight={"bold"}
              fontFamily={"Georgia, serif"}
              color={"#EF3131"}
              textDecoration={"underline"}
            >
              ENQUIRY FORM
            </Text>
            <Text
              fontSize={"larger"}
              // fontWeight={"bold"}
              fontFamily="Verdana, sans-serif"
              color={"#EF3131"}
            >
              Call Us Now at +91 8989920981
            </Text>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
            >
              <FormControl isInvalid={errors.name}>
                <Input
                  type="text"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter your name"
                  focusBorderColor="white"
                  variant="filled"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({ ...errors, name: "" });
                  }}
                />
                {errors.name ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errors.name}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isInvalid={errors.mobile}>
                <Input
                  type="number"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter your mobile number"
                  focusBorderColor="white"
                  variant="filled"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    setErrors({ ...errors, mobile: "" });
                  }}
                />
                {errors.mobile ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errors.mobile}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
            >
              <FormControl isInvalid={errors.email}>
                <Input
                  type="email"
                  fontFamily={"Georgia, serif"}
                  focusBorderColor="white"
                  variant="filled"
                  value={email}
                  placeholder="Enter your Email Id"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                />
                {errors.email ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errors.email}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl>
                <Input
                  type="number"
                  fontFamily={"Georgia, serif"}
                  placeholder="No of person"
                  value={noOfPerson}
                  focusBorderColor="white"
                  variant="filled"
                  onChange={(e) => {
                    setnoOfPerson(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                w={["100%", "50%", "50%", "50%"]}
              >
                <FormLabel fontFamily={"Georgia, serif"}>Travel Date</FormLabel>
                <Input
                  type="date"
                  fontFamily={"Georgia, serif"}
                  placeholder="travel date"
                  variant="filled"
                  focusBorderColor="white"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                w={["100%", "50%", "50%", "50%"]}
              >
                <FormLabel fontFamily={"Georgia, serif"}>
                  Duration of stay
                </FormLabel>
                <Input
                  type="number"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter no of Days"
                  focusBorderColor="white"
                  variant="filled"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <Textarea
              placeholder="Message"
              focusBorderColor="white"
              fontFamily={"Georgia, serif"}
              variant="filled"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Center mt={4}>
              <Button
                colorScheme="red"
                fontFamily={"Georgia, serif"}
                onClick={handlesubmit}
                isLoading={loading}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isModalBookOpen} size={"lg"} onClose={handleModalBookClose}>
        <ModalOverlay />
        <ModalContent py={4}>
          <Center m={4} display={"flex"} flexDirection={"column"}>
            <Text
              fontSize={"larger"}
              fontWeight={"bold"}
              fontFamily={"Georgia, serif"}
              color={"#EF3131"}
              textDecoration={"underline"}
            >
             BOOK NOW
            </Text>
            <Text
              fontSize={"larger"}
              textAlign={'center'}
              // fontWeight={"bold"}
              fontFamily="Georgia, serif"
              color={"#EF3131"}
            >
               In order to request booking your package or allied services. Please fill the contact with maximum information
            </Text>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
            >
              <FormControl isInvalid={errorsBook.nameBook}>
                <Input
                  type="text"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter your name"
                  focusBorderColor="white"
                  variant="filled"
                  value={nameBook}
                  onChange={(e) => {
                    setNameBook(e.target.value);
                    setErrorsBook({ ...errors, nameBook: "" });
                  }}
                />
                {errorsBook.nameBook ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errorsBook.nameBook}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isInvalid={errorsBook.mobileBook}>
                <Input
                  type="number"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter your mobile number"
                  focusBorderColor="white"
                  variant="filled"
                  value={mobileBook}
                  onChange={(e) => {
                    setMobileBook(e.target.value);
                    setErrorsBook({ ...errors, mobileBook: "" });
                  }}
                />
                {errors.mobileBook ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errorsBook.mobileBook}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
            >
              <FormControl isInvalid={errorsBook.emailBook}>
                <Input
                  type="email"
                  fontFamily={"Georgia, serif"}
                  focusBorderColor="white"
                  variant="filled"
                  value={emailBook}
                  placeholder="Enter your Email Id"
                  onChange={(e) => {
                    setEmailBook(e.target.value);
                    setErrorsBook({ ...errors, emailBook: "" });
                  }}
                />
                {errorsBook.emailBook ? (
                  <FormErrorMessage fontSize={"x-small"}>
                    {errorsBook.emailBook}
                  </FormErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl>
                <Input
                  type="number"
                  fontFamily={"Georgia, serif"}
                  placeholder="No of person"
                  value={noOfPersonBook}
                  focusBorderColor="white"
                  variant="filled"
                  onChange={(e) => {
                    setnoOfPersonBook(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={["column", "row", "row", "row"]}
              gap={2}
              mb={4}
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                w={["100%", "50%", "50%", "50%"]}
              >
                <FormLabel fontFamily={"Georgia, serif"}>Travel Date</FormLabel>
                <Input
                  type="date"
                  fontFamily={"Georgia, serif"}
                  placeholder="travel date"
                  variant="filled"
                  focusBorderColor="white"
                  value={dateBook}
                  onChange={(e) => {
                    setDateBook(e.target.value);
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                w={["100%", "50%", "50%", "50%"]}
              >
                <FormLabel fontFamily={"Georgia, serif"}>
                  Duration of stay
                </FormLabel>
                <Input
                  type="number"
                  fontFamily={"Georgia, serif"}
                  placeholder="Enter no of Days"
                  focusBorderColor="white"
                  variant="filled"
                  value={durationBook}
                  onChange={(e) => {
                    setDurationBook(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <Textarea
              placeholder="Message"
              focusBorderColor="white"
              fontFamily={"Georgia, serif"}
              variant="filled"
              value={messageBook}
              onChange={(e) => {
                setMessageBook(e.target.value);
              }}
            />
            <Center mt={4}>
              <Button
                colorScheme="red"
                fontFamily={"Georgia, serif"}
                onClick={handlesubmitBook}
                isLoading={loading}
                loadingText="Submitting"
              >
               Book Now
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Image
              src="./assets/gd logo.gif"
              height={"80%"}
              width={"60%"}
              m={2}
              cursor={"pointer"}
            ></Image>
          </DrawerHeader>

          <DrawerBody>
            <UnorderedList
              fontFamily={"Georgia, serif"}
              display={"flex"}
              flexDirection={"column"}
              gap={4}
              color={"black"}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="#">About Us</NavLink>
              <NavLink to="#">Packages</NavLink>
              <NavLink to="#">Dates</NavLink>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box
        minW={"100%"}
        display={"flex"}
        bgColor={"#0b223a"}
        // gap={3}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <NavLink to={"/"}>
          <Image
            src="/assets/gd logo.gif"
            height={"50px"}
            width={"100px"}
            m={2}
            cursor={"pointer"}
          ></Image>
        </NavLink>
        {isLargerThan980 ? (
          <UnorderedList
            fontFamily={"Georgia, serif"}
            display={"flex"}
            gap={4}
            color={"white"}
          >
            <Link href="/">Home</Link>
            <Link to="#">About Us</Link>
            <Link href="#packages">Packages</Link>
            <Link href="#accomodations">Accomodations</Link>
            <Link href="#dates">Dates</Link>
          </UnorderedList>
        ) : (
          ""
        )}
        <Box display={'flex'} flexDirection={'row'}>
        <Button
          colorScheme="#EF3131"
          bgColor={"#EF3131"}
          color={"white"}
          m={2}
          onClick={onModalOpen}
        >
          ENQUIRY NOW
        </Button>
        <Button
          colorScheme="#EF3131"
          bgColor={"#EF3131"}
          color={"white"}
          m={2}
          onClick={onModalBookOpen}
        >
          BOOK NOW
        </Button>
        </Box>
        
        {isLargerThan980 ? (
          ""
        ) : (
          <Image
            src="/assets/BurgerNav.svg"
            height={"60px"}
            m={2}
            cursor={"pointer"}
            ref={btnRef}
            onClick={onOpen}
          ></Image>
        )}
      </Box>
    </>
  );
}
