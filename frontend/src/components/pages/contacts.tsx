import ContactCard from "../ui/contactCard";
import React, { useEffect, useState } from "react";
import api from '../../services/api';

// @ts-nocheck

import { Flex } from "@chakra-ui/react";
import ContactForm from "../sections/ContactForm";


// function ContactsListTest() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     api.get("/contacts/").then((response) => {
//       setContacts(response.data);
//     });
//   }, []);

//   const Objectify = (contacts: Array<string>, i: number) => {
//     return contacts[i] as Object;
//   };

//   return (
//     <>
//       {
//         /* @ts-ignore */
//         console.log(Objectify(contacts, 1))

//         /* @ts-ignore */
//       }
//       <p>{`Ola ${contacts[1]}`}</p>
//       <br />
//       {/* @ts-ignore */}
//       <p>{`Ola ${contacts[0]}`}</p>
//       <br />
//       {/* @ts-ignore */}
//       <p>{`Ola ${contacts.email}`}</p>
//       <br />
//       {/* @ts-ignore */}
//       <p>{`Ola ${contacts.image}`}</p>
//       <br />
     
//     </>
//   );
// }

function ContactsList() {
  const [contacts, setContacts] = useState([
    {
      id: 0,
      name: '',
      phone: '',
      email: '',
      image: '',
    }
  ]);

  useEffect(() => {
    api.get("/contacts/").then((response) => {
      setContacts(response.data);
    });
  }, []);

    return (
      <Flex m={''} flexDirection={'column'} gap={'2rem'} alignContent={'center'} justifyContent={'center'}>
        <ContactForm/>
        <div>
      {contacts.map(contact => (
        <ContactCard 
        id={contact.id}
        key={contact.phone}
        name={contact.name}
        phone={contact.phone}
        email={contact.email}
        image={contact.image}
        ></ContactCard>
      ))}
      </div>
    </Flex>
    )
  
}


export default function Contacts() {
  return (
  
      <Flex w={"100%"} h={"100%"} m={"30px"} gap={"30px"} p={"4"}>
         <ContactsList/>
      </Flex>

  );
}
