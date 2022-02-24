import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { GitHub, Linkedin } from "react-feather";

export default function About() {
  return (
    <>
      <Center>
        <Heading textAlign={"center"}>
          Olá! Sou o fabrício, desenvolvedor de software aspirante a Full Stack,{" "}
          <br />
          atuo na área de web como analista jr. e estou interessado em mostrar
          do que sou capaz de fazer <br />
          com algumas linhas de código :)
          <br/>
          Foram 2 madrugas, várias linhas de documentação, 300 guias de StackOverflow e litros de café, mas consegui!
          <br/>
          <Text verticalAlign={'baseline'} fontSize="2xl">
          (Layout ficou feinho, mas um dia a mais juro que deixava bonitinho 😅)
          </Text>
        </Heading>
      </Center>
      <Center>
        <Text verticalAlign={'baseline'} fontSize="3xl">
          <a href="https://github.com/fabriciored" target={"_blank"}>
            <GitHub />
            GitHub
          </a>
          </Text>
          </Center>
          <Center>
          <Text fontSize="3xl">
          <a
            href="https://www.linkedin.com/in/fabriciojlsantos/"
            target={"_blank"}
          >
            <Linkedin />
            Linkedin
          </a>
        </Text>
      </Center>
    </>
  );
}
