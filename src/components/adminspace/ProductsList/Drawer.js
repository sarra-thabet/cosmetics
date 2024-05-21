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
import { AddIcon } from "@chakra-ui/icons";
import React, {  useState } from "react";
import axios from "axios";
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [data, setData] = useState({
    name:"",
    price:"",
    image:"",
    description:"",
    categoryName:"",
  });
  const handleChange=(e)=>{
   setData({...data,[e.target.name]:e.target.value});
  }
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/products', data).then(function (response) {
        console.log(response.data);
        window.location.reload();
      })
      .catch(function (error) {
        alert(`Error submitting form: ${error.response?.data?.message || error.message}`);
      });



}

  return (
    <div div className="drawer">
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Add new product
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new Product
          </DrawerHeader>
          <form onSubmit={handleSubmit}>
          <DrawerBody>
         
            <Stack spacing="24px">
            
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input onChange={handleChange} value={data.name}
                  ref={firstField}
                  id="name"
                  name="name"
                  placeholder="Please enter product name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="Price">Price</FormLabel>
                <Input
                 onChange={handleChange} value={data.price}
                 ref={firstField}
                 id="price"
                 name="price"
                 placeholder="Please enter product price"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="image">image</FormLabel>
                <Input
                  ref={firstField}
                  id="image"
                  name="image"
                  placeholder="image" onChange={handleChange} value={data.image}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="categoryName">Category Name</FormLabel>
                <Select placeholder="Select option" name="categoryName" onChange={handleChange} value={data.categoryName}>
                  <option value="MakeUp">MakeUp</option>
                  <option value="BodyCare">BodyCare</option>
                  <option value="SkinCare">SkinCare</option>
                  <option value="Perfume">Perfume</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" onChange={handleChange} name="description" value={data.description} />
              </Box>
             
            </Stack>
          
          </DrawerBody>
    
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">Submit</Button>
          </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
export default DrawerExample;