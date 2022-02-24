import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex h={'30px'} m={"10px"}>
      <Box p="4" m={"10px"} bg="red.400">
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </Box>
      <Box p="4" m={"10px"} bg="red.400">
        <Link to="/contacts">
          <h3>Contacts</h3>
        </Link>
      </Box>
      <Box p="4" m={"10px"} bg="green.400">
        <Link to="/about">
          <h3>About the Dev</h3>
        </Link>
      </Box>
    </Flex>
  );
}
