import React, { useReducer, useState } from "react";
import {
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import "../style/style.css";
import { addJob, initState, reducer } from "../pages";

export default function ContactForm({ setValueForm }: any) {
  const [state, dispatch]: any = useReducer<any>(reducer, initState);
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [mess, setMess] = useState<string>("");

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
  );
}
