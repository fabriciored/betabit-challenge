import { Box, Flex, Spacer, Center, Heading, Image } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'


export default function Header() {
    return (
<Center m={'10px'} h={'50px'}>
  <Box p='4'  bg='red.400'>
      <Image src={Logo} w='15rem'/>
  </Box>
 
  <Box p='4'  bg='green.400'>
  <Heading fontSize={'50px'}>PhoneBook</Heading>
  </Box>
</Center>
    );
}