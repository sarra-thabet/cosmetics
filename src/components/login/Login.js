import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Stack, Button } from "@chakra-ui/react";
import { Header } from "../../global/header/Header";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleUserNameChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { name: user, password: pass }
      );
      console.log("login successful", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("login failed", error.response.data);
    }
  };

  return (
    <>
      <Header />
      <div className="login">
        <form method="Post" onSubmit={handleSubmit}>
          <Stack spacing={8}>
            <h1 className="sevillana-regular login-title">Login</h1>
            <Input
              variant="flushed"
              width={400}
              placeholder="Name"
              onChange={handleUserNameChange}
              name="name"
              value={user}
            />
            <Input
              variant="flushed"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              name="pass"
              value={pass}
            />
            <Button colorScheme="teal" variant="outline" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};
