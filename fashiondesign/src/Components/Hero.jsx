import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { Suspense } from 'react';
import Navbar from './Navbar'
import { GiSewingMachine, GiSewingNeedle } from "react-icons/gi";
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';


const Hero = () => {
  return (     
    // The Hero box
    <Box w="100%" h="90vh" display="flex" alignItems="center" justifyContent="center" bgGradient="linear(to-r,lightgrey,white,lightgrey)">
       {/* Navbar component */}
              <Navbar />
             
<Box  bg="transparent"
  position={{ base: "relative", md: "absolute" }}
  h={{ base: "auto", md: "calc(100vh - 4rem)" }}
 w="100%" display="flex" alignItems="end" justifyContent="center" 
  top="0" left="0">
        {/*  cube object design  */}
    <Box position="absolute" top="10%" left="5%"   >
      <Flex><Box  m="0.1rem" bg="blue" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /></Flex>
      <Flex><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="blue" h="10px" w="10px" borderRadius="30px" /><Box   m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /></Flex>
      <Flex><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box  m="0.1rem" bg="grey" h="10px" w="10px" borderRadius="30px" /><Box m="0.1rem" bg="blue" h="10px" w="10px" borderRadius="30px" /></Flex>
    </Box>
  {/* Left box */}
  <Box mr={{base:"-100px", sm:"0"}} w="90%" h="85%" display="flex" flexDirection="column" alignItems="center" justifyContent="center"  bg="transparent" zIndex="2" textAlign="center" >

    <Text as="h1"  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="bold" color="black" mb="20px"    fontFamily="'Playfair Display', serif"
  lineHeight="1.1">
      Elevate Your
      {/* Text span to add gradient effect */}
      <Text
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
    <Flex w="100%" h="100px" bg="red" align="center" justify="space-evenly">
    <Box  border="2px black" borderStyle="dashed" w="42%" p="0.1rem">
      <Button  as="a" href="#" p="1.3rem" w="100%" bg="transparent"  borderRadius="none" border="2px black" borderStyle="dashed" rightIcon={<GiSewingNeedle/>}>
        Our Works
      </Button>
    </Box>
    <Box  border="2px black" borderStyle="dashed" w="42%" p="0.1rem">
      <Button as="a" href="#"  p="1.3rem" color="#fff" bg="#000" w="100%" 
        borderRadius="none" border="2px black" borderStyle="dashed"
        leftIcon={<GiSewingMachine/>}>
        Hire Us 
      </Button>
    </Box>

    </Flex>
  </Box>
   {/* Flex used to position the image and the rhombus object */}
        <Flex w="fit-content" h="100%"  bg="transparent" align="end" position="relative" maxW="300px" minW="200px"  zIndex="1">
          {/* The image */}
            <Image src="/Hero-page-backg.webp" alt="Fashion designer showcasing elegant handcrafted clothing" loading="eager"  h={{base:"70%", md:"85%"}}  bgGradient="linear-gradient(45deg, #0047AB, #4FC3F7)" borderTopLeftRadius="200px"  borderTopRightRadius="200px"  /> 
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
        <stop offset="0%" stopColor="blue" />
        <stop offset="100%" stopColor="blue" />
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
<Box
  position="relative"   // important for absolute children
  flexDirection="row"
  align="center"
  justify="center"
  border="1px solid blue"
  h="200px"
  w="200px"
  display={{ base: "none", xl: "block" }}
  bg="transparent"
  p="0.7rem"
  m="auto"
  mt="25%"
  bgPosition="center"
  bgSize="cover"
  bgRepeat="no-repeat"
  borderRadius="30px"
>
  {/* Top SVG */}
  <svg
    width="20"
    height="20"
    viewBox="0 0 45 45"
    style={{
      position: "absolute",
      top: "-10px",       
      left: "50%",
      transform: "translateX(-50%)",
    }}
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="blue" />
        <stop offset="100%" stopColor="blue" />
      </linearGradient>
    </defs>
    <path
      d="M22.5 0 L27 17.5 L45 22.5 L27 27.5 L22.5 45 L18 27.5 L0 22.5 L18 17.5 Z"
      fill="url(#grad)"
    />
  </svg>

  {/* Image */}
  <Image
    src="/workpiece.webp"
    alt="Fashion design element"
    loading="eager"
    h="100%"
    w="100%"
    borderRadius="30px"
  />

  {/* Bottom SVG */}
  <svg
    width="20"
    height="20"
    viewBox="0 0 45 45"
    style={{
      position: "absolute",
      bottom: "-10px",    // half of svg height to sit on border
      left: "50%",
      transform: "translateX(-50%)",
    }}
  >
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="blue" />
        <stop offset="100%" stopColor="blue" />
      </linearGradient>
    </defs>
    <path
      d="M22.5 0 L27 17.5 L45 22.5 L27 27.5 L22.5 45 L18 27.5 L0 22.5 L18 17.5 Z"
      fill="url(#grad2)"
    />
  </svg>
</Box>

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
