import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import { GiSewingMachine, GiSewingNeedle } from "react-icons/gi";
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';


const Hero = () => {
  return (
         
    // The Hero box
    <Box w="100%" h="90vh" display="flex" alignItems="center" justifyContent="center" bgGradient="linear(to-r,lightgrey,white,lightgrey)">
       {/* Navbar component */}
              <Navbar />
             
<Box  bg="transparent" h="calc(100vh - 4rem)" w="100%" display="flex" alignItems="end" justifyContent="center" position="absolute" top="0" left="0">
  {/* Right box */}
  <Box mr={{base:"-80px", sm:"0"}} w="90%" h="85%" display="flex" flexDirection="column" alignItems="center" justifyContent="center"  bg="transparent" zIndex="2" textAlign="center" >
    {/* Object */}
           <Box position="absolute" top="20%" left="5%"   >
      <Flex><Box  m="0.1rem" bg="blue" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /></Flex>
      <Flex><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="blue" h="10px" w="10px" borderRadius="30px" /><Box   m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /></Flex>
      <Flex><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box m="0.1rem" bg="blue" h="10px" w="10px" borderRadius="30px" /></Flex>
      
    </Box>
    <Text as="h1"  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="black" mb="20px"    fontFamily="'Playfair Display', serif"
  lineHeight="1.1">
      Elevate Your   <Text
    as="span"
    bgGradient="linear-gradient(45deg, #0047AB, #4FC3F7)"
    bgClip="text"
    fontWeight="bold"
  >
    Style 
  </Text> with Our Exclusive Fashion <Text
    as="span"
    bgGradient="linear-gradient(45deg, #0047AB, #4FC3F7)"
    bgClip="text"
    fontWeight="bold"
  >
    Design
  </Text>
    </Text>
    <Text
            as="p"
            fontSize={{ base: "sm", md: "md" }}
            color="gray.700"
            maxW="600px"
            mb="20px"
      >            Custom fashion design, tailoring, and creative styling for individuals
            and brands seeking elegance, confidence, and uniqueness.</Text>
    <Flex w="100%" h="100px" bg="transparent" align="center" justify="space-evenly">
    <Box  border="2px black" borderStyle="dashed" w="42%" p="0.1rem">
      <Button  as="a" p="1.3rem" w="100%" bg="transparent"  borderRadius="none" border="2px black" borderStyle="dashed" rightIcon={<GiSewingNeedle/>}>
        Our Works
      </Button>
    </Box>
    <Box  border="2px black" borderStyle="dashed" w="42%" p="0.1rem">
      <Button as="a"  p="1.3rem" color="#fff" bg="#000" w="100%" 
        borderRadius="none" border="2px black" borderStyle="dashed"
        leftIcon={<GiSewingMachine/>}>
        Hire Us 
      </Button>
    </Box>

    </Flex>
  </Box>
   {/* Flex used to position the image and the rhombus object */}
        <Flex w="fit-content" h="100%"  bg="transparent" align="end" position="relative" maxW="300px" minW="230px"  zIndex="1">
          {/* The image */}
            <Image src="/Hero-page-backg.png" alt="Fashion designer showcasing elegant handcrafted clothing"  h={{base:"70%", md:"85%"}}  bgGradient="linear-gradient(45deg, #0047AB, #4FC3F7)" borderTopLeftRadius="200px"  borderTopRightRadius="200px"  /> 
<Box
  w="45px"
  h="45px"
  position="absolute"
  top="15%"
  right="2%"
  aria-hidden="true"
>
  <svg width="45" height="45" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
    </defs>
    <path
      d="M22.5 0 L27 17.5 L45 22.5 L27 27.5 L22.5 45 L18 27.5 L0 22.5 L18 17.5 Z"
      fill="url(#grad)"
    />
  </svg>
</Box>
  
        </Flex>
          {/* Right box */}
  <Box  w="50%" h="85%" display={{base:"none", md:"block"}} alignItems="center" justifyContent="space-between"  bg="transparent" position="relative" >
    {/* <Box h="300px" w="60%" bg="blackAlpha.100" m="auto" mt="auto" bgImage="/store.webp" bgPosition="center" bgSize="cover" bgRepeat="no-repeat">

    </Box> */}
    <Flex flexDirection="column"  bg="transparent" w="30px" h="100%" position="absolute"  align="center" justify="center" left="90%" top="0" >
      <Divider orientation="vertical" borderColor="black" borderWidth="1.3px" w="1px" />
      <FaTwitter fontSize="50px"  cursor="pointer" m="1rem"/>
      <FaWhatsapp fontSize="50px" cursor="pointer" m="1rem" />
      <Divider orientation="vertical" borderColor="black" borderWidth="1.3px" w="1px"  mb="2rem" />
    </Flex>
  </Box>
</Box>   
        {/* Add more content or components as needed */}
    </Box>
  )
}

export default Hero
