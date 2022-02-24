import ContactCard from "../ui/contactCard";

import { Flex, Grid, GridItem } from "@chakra-ui/react";

function ContactsList() {
    const contacts = [
        {
            phone: "11999999999",
            name: "Fabricio",
            email: "fabriciored@red.red",
            image: "red.png"
        },
        {
            phone: "11999999999",
            name: "Fabricio",
            email: "fabriciored@red.red",
            image: "red.png"
        },
        {
            phone: "11999999999",
            name: "Fabricio",
            email: "fabriciored@red.red",
            image: "red.png"
        },
        {
            phone: "11999999999",
            name: "Fabricio",
            email: "fabriciored@red.red",
            image: "red.png"
        },
    ]

    return (
        <>
        {contacts.map((contact) => (
            <ContactCard
            phone={contact.phone}
            name={contact.name}
            email={contact.email}
            image={contact.image}
          />
          
        ))}
        </>
    )
}

export default function Contacts() {
  return (
    <>
      <Flex w={"100%"} h={"100%"} m={"30px"} gap={"30px"} p={"4"}>
          <ContactsList/>
      </Flex>
    </>
  );
}
