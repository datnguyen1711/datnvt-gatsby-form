import React from "react";
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

export default function ContactForm() {
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
              <Input type="text" size="md" />
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Mail</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineEmail color="gray.800" />}
              />
              <Input type="text" size="md" />
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
            />
          </FormControl>
          <FormControl id="name" float="right">
            <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
              Send Message
            </Button>
          </FormControl>
        </VStack>
      </div>
    </div>
  );
}
