import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function ContactForm() {

  const [formValue, setformValue] = React.useState({
    name: '',
    phone: '',
    email: '',
    imageURL: '',
  });

  const handleSubmit = async() => {
    // we will fill this in the coming paragraph
    const loginFormData = new FormData();
    loginFormData.append("name", formValue.name)
    loginFormData.append("phone", formValue.phone)
    loginFormData.append("email", formValue.email)
    loginFormData.append("imageURL", formValue.imageURL)

    api.post('/contacts', {
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

  return (
    <Flex flexDirection={'column'} w={'40%'} m={'0'}>
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
      <Text fontSize='xl' m={'0'}>Add Contact</Text>
      </Button>
    </form>
    </Flex>
  )
}
