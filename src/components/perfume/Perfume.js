import React from 'react'
import  { useEffect, useState } from "react";
import "../products/Products.css";
import { Card, CardBody, CardFooter,Stack ,Image ,Text,Divider,Button,ButtonGroup, Center} from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react';
import { Header } from "../../global/header/Header";
import axios from "axios";
export const Perfume = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.post('http://localhost:5000/api/products/searchByCategory?key=Perfume').then((res)=>{
      setProducts(res.data);
    })
  },[])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Change as needed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    <div className="products">
      <Header/>
      {currentItems.map((product)=>(
      <Card maxW="sm" mt={100}>
        <CardBody>
          <Image
            src={`images/${product.image}`}
            borderRadius="lg" width={200} height={150} 
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text className="product-description" >
              {product.description}
            </Text>
            <Text color="pink.600" fontSize="2xl" >
              {product.price}DT
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="pink">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="pink">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>))}
      </div>
      <div>
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
          <Button key={index} onClick={() => paginate(index + 1)} className="btn">
            {index + 1}
          </Button>
        ))}
      
    </div>
    </>
  );
}
