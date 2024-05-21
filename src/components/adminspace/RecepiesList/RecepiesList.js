import React, { useEffect, useState } from "react";
import "./RecepiesList.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
export const RecepiesList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/recepes/").then((response) => {
      setRecipes(response.data);
    });
  }, []);
  return (
    <div className="recipes">
      {" "}
      <TableContainer>
        <Table variant="simple" width={1200} >
          <TableCaption>recipes list</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>SkinType</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {recipes.map((recipe) => (
              <Tr key={recipe.key}>
                <Td >{recipe.name}</Td>
                <Td>{recipe.skinType}</Td>
                <Td className="wrap-text" >{recipe.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
