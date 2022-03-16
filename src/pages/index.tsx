import React from 'react';
import { Box, Wrap } from '@chakra-ui/react';
import '../style/style.css';
import ContactForm from '../components/contactForm';
import ContactInfo from '../components/ContactInfo';


const IndexPage = () => {
  return (
    <div className='container'>
      <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <div className='box-main'>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <ContactInfo />
                <ContactForm />
            </Wrap>
          </div>
        </Box>
    </div>
  );
}
export default IndexPage