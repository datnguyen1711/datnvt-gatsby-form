import React, { useReducer, useState } from "react";
import {
  Box,
  Wrap,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import "../style/style.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export const initState = {
  person: "",
  persons: [],
};

const SET_PERSON = "SET_PERSON";
const ADD_PERSON = "ADD_PERSON";

export const addJob = (payload: any) => {
  return {
    type: ADD_PERSON,
    payload,
  };
};

export const reducer = (state: any, action: any) => {
  let newState;
  switch (action.type) {
    case SET_PERSON:
      newState = {
        ...state,
        person: action.payload,
      };
      break;
    case ADD_PERSON:
      newState = {
        ...state,
        persons: [...state.persons, action.payload],
      };
      break;
    default:
      throw new Error("Invalid action.");
  }
  return newState;
};

const IndexPage = () => {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [mess, setMess] = useState<string>("");
  const [state, dispatch]: any = useReducer<any>(reducer, initState);
  const { person, persons }: any = state;

  const handleInputName = (event: any) => {
    setName(event.target.value);
  };
  const handleInputMail = (event: any) => {
    setMail(event.target.value);
  };
  const handleInputMess = (event: any) => {
    setMess(event.target.value);
  };

  const handleClick = () => {
    dispatch(addJob({ name: name, mail: mail, mess: mess }));
  };
  return (
    <div className="container">
      <Box
        bg="#02054B"
        color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <div className="box-main">
          <div className="box-content">
            <ContactInfo />
            <div className="box-form">
              <div className="box-form-main">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input
                        type="text"
                        size="md"
                        value={name}
                        onChange={handleInputName}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input
                        type="text"
                        size="md"
                        value={mail}
                        onChange={handleInputMail}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="message"
                      value={mess}
                      onChange={handleInputMess}
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button
                      variant="solid"
                      bg="#0D74FF"
                      color="white"
                      _hover={{}}
                      onClick={handleClick}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        bg="#02054B"
        color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 8 }}
      >
        <div className="box-title">List contact</div>
        <div className="box-lists">
          <div className="box-list">
            {persons.map((item: any, index: number) => {
              return (
                <div className="box-item" key={index}>
                  <div className="box-name">{item.name}</div>
                  <div className="box-mail">{item.mail}</div>
                  <div className="box-mess">{item.mess}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </div>
  );
};
export default IndexPage;
