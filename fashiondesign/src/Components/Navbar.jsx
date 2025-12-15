import {
  Box,
  Flex,
  Link,
  IconButton,
  Stack,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import { FaAdjust, FaCross, FaHamburger, FaPhoneAlt, FaPhoneVolume, FaStore, FaStoreAlt, FaSun } from "react-icons/fa";


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box
      bg="#fff"
      backdropFilter="saturate(180%) blur(10px)"
      px={6}
      position="fixed"
      top={0}
      w="100%"
      zIndex={100}
      boxShadow="sm"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box
          fontWeight="bold"
          fontSize="2xl"
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
        >
          <Image h="60px" w="60px" src='/fashion-logo.png' alt="fashion-design-logo"/>
        </Box>

        {/* Desktop Links */}
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <Link
            px={4}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{
              textDecoration: "none",
             bgGradient:"linear(90deg, #0047AB , #ffffff79)",
              color:"white",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#"
          >
            Home
          </Link>
          <Link
            px={4}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{
              textDecoration: "none",
             bgGradient:"linear(90deg, #0047AB, #ffffff79)",
              color:"white",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#coffee-menu"
          >
           About US
          </Link>
          <Link
            px={4}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{
              textDecoration: "none",
             bgGradient:"linear(90deg, #0047AB , #ffffff79)",
              color:"white",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#about-us"
          >
            Catalog
          </Link>
          <Link
            px={4}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{
              textDecoration: "none",
             bgGradient:"linear(90deg,#0047AB , #ffffff79)",
              color:"white",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#about-us"
          >
            Contact
          </Link>
        </Flex>

        {/* Right side buttons */}
        <Flex alignItems="center">
          {/* Dark mode toggle */}

          <Button>
            <FaPhoneAlt/>

          </Button>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <FaCross/> : <FaHamburger/>}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            _hover={{ bg: "#0047AB", color: "white" }}
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box py="1rem" display={{ md: "none" }}  align="center" justify="center">
          <Link
            px={2}
            py={2}
            rounded="md"
            fontWeight="semibold"
            fontSize={{base:"1rem",}}
            _hover={{
              bgGradient:"linear(90deg, #0047AB , #ffffff79)",
              textDecoration: "none",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#"
          >
            Home
          </Link>
          <Link
            px={2}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{
              textDecoration: "none",
              bgGradient:"linear(90deg, #0047AB, #ffffff79)",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#coffee-menu"
          >
            About Us
          </Link>
          <Link
            px={2}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{
              textDecoration: "none",
            bgGradient:"linear(90deg, #0047AB , #ffffff79)",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#about-us"
          >
            Catalog
          </Link>
          <Link
            px={2}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{
              textDecoration: "none",
               bgGradient:"linear(90deg, #0047AB , #ffffff79)",
              transform: "scale(1.05)",
              transition: "all 0.2s ease-in-out",
            }}
            href="#about-us"
          >
            Contact
          </Link>
        </Box>
      )}
    </Box>
  );
}
