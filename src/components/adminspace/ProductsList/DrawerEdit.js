import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    Box,
    FormLabel,
    Input,
    Select,
    Textarea,
  } from "@chakra-ui/react";
  import './Draweer.css';
  import { useDisclosure } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  
  function EditProductDrawer({ product, onClose }) {
    const { isOpen, onOpen, onClose: closeDrawer } = useDisclosure();
    const firstField = React.useRef();
    const [data, setData] = useState({
      name: "",
      price: "",
      image: "",
      description: "",
      categoryName: "",
    });
  
    useEffect(() => {
      if (product) {
        setData(product);
        onOpen();
      }
    }, [product, onOpen]);
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:5000/api/products/${product._id}`, data)
        .then((response) => {
          console.log(response.data);
          alert('Product updated successfully');
          closeDrawer();
          if (onClose) onClose();
          window.location.reload();
        })
        .catch((error) => {
          alert(`Error updating product: ${error.response?.data?.message || error.message}`);
        });
    };
  
    return (
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={() => {
          closeDrawer();
          if (onClose) onClose();
        }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Edit Product</DrawerHeader>
          <form onSubmit={handleSubmit}>
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    onChange={handleChange}
                    value={data.name}
                    ref={firstField}
                    id="name"
                    name="name"
                    placeholder="Please enter product name"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="price">Price</FormLabel>
                  <Input
                    onChange={handleChange}
                    value={data.price}
                    id="price"
                    name="price"
                    placeholder="Please enter product price"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="image">Image</FormLabel>
                  <Input
                    onChange={handleChange}
                    value={data.image}
                    id="image"
                    name="image"
                    placeholder="Image URL"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="categoryName">Category Name</FormLabel>
                  <Select
                    placeholder="Select option"
                    name="categoryName"
                    onChange={handleChange}
                    value={data.categoryName}
                  >
                    <option value="MakeUp">MakeUp</option>
                    <option value="BodyCare">BodyCare</option>
                    <option value="SkinCare">SkinCare</option>
                    <option value="HairCare">HairCare</option>
                    <option value="Perfume">Perfume</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Textarea
                    onChange={handleChange}
                    value={data.description}
                    id="description"
                    name="description"
                    placeholder="Please enter product description"
                  />
                </Box>
              </Stack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={() => {
                closeDrawer();
                if (onClose) onClose();
              }}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">Save</Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    );
  }
  
  export default EditProductDrawer;
  