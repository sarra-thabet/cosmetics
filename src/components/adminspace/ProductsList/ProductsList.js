import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Img,
} from "@chakra-ui/react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DrawerExample from "./Drawer";
import {EditIcon,DeleteIcon } from "@chakra-ui/icons";
import EditDrawer from "./DrawerEdit";
import EditProductDrawer from "./DrawerEdit";
export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/api/products/").then((response) => {
      setProducts(response.data);
    });
  });
  const delProduct = (id) => {
    const userConfirmed = window.confirm('Are you sure you want to delete this product?');
    if (userConfirmed) {
      axios.delete(`http://localhost:5000/api/products/${id}`)
        .then(result => {
          console.log('Product deleted:', result.data);
          window.location.reload();
        })
        .catch(error => {
          console.error('Error deleting product:', error);
          alert(`Error deleting product: ${error.response?.data?.message || error.message}`);
        });
    }
  };
  const navigate = useNavigate();
  const nav = () => {
    navigate("/dashboard");
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products">
      <DrawerExample />
      <TableContainer paddingTop={20}>
        <Table variant="simple" width={1300}>
          <TableCaption>Products list</TableCaption>

          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>price</Th>
              <Th>image</Th>
              <Th className="wrap-text">description</Th>
              <Th>categoryName</Th>
              <Th>edit</Th>
              <Th>delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((product) => (
              <Tr key={product.key}>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td>
                  <img
                    className="img-product"
                    src={`/images/${product.image}`}
                  ></img>
                </Td>
                <Td className="wrap-text ">{product.description}</Td>
                <Td>{product.categoryName}</Td>
                <td>
                <Button><EditIcon  fontSize={20} onClick={() => setEditProduct(product)} > </EditIcon></Button>
                </td>
                <td>
                  <button onClick={() => delProduct(product._id)}><DeleteIcon  fontSize={20} /></button>
                </td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div>
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map(
          (_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              className="btn"
            >
              {index + 1}
            </Button>
          )
        )}
        <button className="back" onClick={nav}>
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <span>Back </span>
        </button>
      </div>
      {editProduct && (
        <EditProductDrawer
          product={editProduct}
          onClose={() => setEditProduct(null)}
        />
      )}
    </div>
  );
};
