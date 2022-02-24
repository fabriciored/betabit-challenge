import { Box, Button, Flex, Heading, Image, Input, Spacer, Text } from "@chakra-ui/react";
import { XSquare } from 'react-feather';
import api from "../../services/api";

import Modal from "react-modal";
import { useState } from "react";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ContactProps {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: string;
}

const HandleDelete = (id: number) => {
  api
    .delete(`/contacts/${id}`)
    .then(function (response) {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
};




export default function ContactCard(props: ContactProps) {
  const [formValue, setformValue] = useState({
    id: `${props.id}`,
    name: `${props.name}`,
    phone: `${props.phone}`,
    email: `${props.email}`,
    imageURL: `${props.image}`,
  });
  const handleSubmit = async() => {
    // we will fill this in the coming paragraph
    const loginFormData = new FormData();
    loginFormData.append("id", formValue.id)
    loginFormData.append("name", formValue.name)
    loginFormData.append("phone", formValue.phone)
    loginFormData.append("email", formValue.email)
    loginFormData.append("imageURL", formValue.imageURL)
  
    api.put('/contacts/' + formValue.id, {
      name: formValue.name,
      phone: formValue.phone,
      email: formValue.email,
      image: formValue.imageURL,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const handleChange = (event: any) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
    console.log(formValue)
  }

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Flex w={"50rem"}>
      <Flex
        bg="black"
        m="10px"
        w="100%"
        gap={"3rem"}
        margin={"auto"}
        p={10}
        color="white"
      >
        <Image w={"100px"} src={props.image}></Image>
        <Flex flexDirection={"column"} gap={"10px"}>
          <Text fontSize="xl" m={"0"}>
            Name: {props.name}
          </Text>
          <Text fontSize="xl" m={"0"}>
            Phone: {props.phone}
          </Text>
          <Text fontSize="xl" m={"0"}>
            Email: {props.email}
          </Text>
        </Flex>
        <Spacer></Spacer>
        <Button height={"30px"} onClick={() => HandleDelete(props.id)}>
          Delete
        </Button>
        <Button height={"30px"} onClick={openModal}>
          Edit
        </Button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>I am a modal</div>
          <form onSubmit={handleSubmit}>
      <Heading>New Contact</Heading>
      <Input w={'12rem'} h={'2rem'} m={'5px'} border={'1px solid'} borderRadius={'5px'}
        type="name"
        name="name"
        placeholder="Name"
        value={formValue.name}
        onChange={handleChange}
        required={true}
      />
      
      <Input w={'12rem'} h={'2rem'} m={'5px'} border={'1px solid'} borderRadius={'5px'}
        type="number"
        name="phone"
        placeholder="Phone number"
        value={formValue.phone}
        onChange={handleChange}
        required={true}
      />
        <Input w={'12rem'} h={'2rem'} m={'5px'} border={'1px solid'} borderRadius={'5px'}
        type="email"
        name="email"
        placeholder="Email"
        value={formValue.email}
        onChange={handleChange}
        required={true}
      />
        <Input w={'12rem'} h={'2rem'} m={'5px'} border={'1px solid'} borderRadius={'5px'}
        type="imageURL"
        name="imageURL"
        placeholder="Image URL"
        value={formValue.imageURL}
        onChange={handleChange}
      />
      <Button type="submit" m={'10px'} colorScheme='cyan'>
      <Text fontSize='xl' m={'0'}>Edit Contact</Text>
      </Button>
      
    </form>
    <Button h={'50px'} onClick={closeModal}><p><XSquare color="red"/> Close</p></Button>
        </Modal>
      </Flex>
    </Flex>
  );
}
