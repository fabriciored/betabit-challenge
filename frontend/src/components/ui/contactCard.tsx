import { Box } from "@chakra-ui/react";

interface ContactProps {
    name: string;
    phone: string;
    email: string;
    image: string;
}


export default function ContactCard(props: ContactProps) {
  return (
    <div>
      <Box bg="black" m="10px" w="100%" p={4} color="white">
          <p>{props.phone}</p>
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{props.image}</p>     
      </Box>
    </div>
  );
}
