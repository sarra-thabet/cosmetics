import React, { useEffect, useState } from "react";
import "./UsersList.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
export const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/users/").then((Response) => {
      setUsers(Response.data);
    });
  });

  return (
    <div className="users">
      {" "}
      <TableContainer>
        <Table variant="simple" width={700}>
          <TableCaption>users list</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.key}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
