import React from "react";
import { Box, Wrap } from "@chakra-ui/react";
import "../style/style.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const IndexPage = () => {
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
            <ContactForm />
          </div>
        </div>
      </Box>
    </div>
  );
};
export default IndexPage;
