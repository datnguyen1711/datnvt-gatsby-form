import React from "react";
import { Text, IconButton, Button, VStack, HStack } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from "react-icons/md";
import { BsGithub, BsDiscord } from "react-icons/bs";
import "../style/style.css";

export default function ContactInfo() {
  return (
    <div className="box-contact">
      <h2 className="box-title">Contact</h2>
      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
        Fill up the form below to contact
      </Text>
      <div className="box-info">
        <VStack pl={0} spacing={3} alignItems="flex-start">
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdPhone color="#1970F1" size="20px" />}
          >
            +84-774405582
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdEmail color="#1970F1" size="20px" />}
          >
            dat@gmail.com
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
          >
            Da Nang, Viet Nam
          </Button>
        </VStack>
      </div>
      <HStack
        mt={{ lg: 10, md: 10 }}
        spacing={5}
        px={5}
        alignItems="flex-start"
      >
        <IconButton
          aria-label="facebook"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "#0D74FF" }}
          icon={<MdFacebook size="28px" />}
        />
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "#0D74FF" }}
          icon={<BsGithub size="28px" />}
        />
        <IconButton
          aria-label="discord"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "#0D74FF" }}
          icon={<BsDiscord size="28px" />}
        />
      </HStack>
    </div>
  );
}
