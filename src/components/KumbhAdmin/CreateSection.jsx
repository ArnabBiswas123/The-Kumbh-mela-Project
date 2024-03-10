import React from "react";
import { Box, Text } from "@chakra-ui/react";
import AdminHeader from "../DashboardPage/AdminHeader";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import Sections from "./Sections";
export default function CreateSection() {
  const toast = useToast();
  const editor = useRef(null);
  const [input, setInput] = useState("");
  const [pic, setPic] = useState("");
  const [des, setDes] = useState("");
  const [error, setError] = useState({ input: "", des: "" });
  const [loading, setLoading] = useState(false);

  const inputChange = (e) => {
    setInput(e.target.value);
    setError({ ...error, input: "" });
  };


  

  const handleEditorChange = (value) => {
    setDes(value);
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
    } else {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/kumbh/createabout`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: input,
              image: pic ? pic : "NA",
              description: des,
            }),
          }
        );
        setLoading(false);
        const data = await response.json();
        if (data.success === true) {
          toast({
            title: "Successfully created",
            description: "Section is created successfully",
            position: "top",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: data.msg,
            description: "Error occured",
            position: "top",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  const config = useMemo(() => ({
    zIndex: 0,
    readonly: false,
    activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
    toolbarButtonSize: "middle",
    theme: "default",

    allowResizeY: false,
    enableDragAndDropFileToEditor: true,
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: false,
    height: 380,
    direction: "ltr",
    language: "pt_BR",
    debugLanguage: false,
    i18n: "en",
    tabIndex: 1,
    toolbar: true,
    enter: "P",
    useSplitMode: false,
    colorPickerDefaultTab: "background",
    imageDefaultWidth: 100,
    removeButtons: ["about", "print", "file"],
    disablePlugins: ["paste", "stat", "speech-recognize", "video"],
    // events: {},
    textIcons: false,
    placeholder: "Enter text here",
    showXPathInStatusbar: false,
  }),[]);

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
            <Text mb="8px" fontFamily={"Georgia, serif"} textAlign={"left"}>
              Section Description
            </Text>

            <JoditEditor
              placeholder="Your placeholder text"
              ref={editor}
              value={des}
              config={config}
              onChange={handleEditorChange}
            />

            <Button
              isLoading={loading}
              loadingText="Submitting"
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
