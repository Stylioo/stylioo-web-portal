import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";
import axios from "axios"

import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../redux/store"
import { setUser, isLoggedIn } from "../../redux/features/authSlice";

function LoginPage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Please fill all the fields');
      return
    }

    try {
      const response = await axios.post('https://stylioo-api-e55c1372a17b.herokuapp.com/auth/login', {
        email: email,
        password: password,
        type: 'EMPLOYEE'
      })

      if (response.status === 200) {
        if (response.data.success) {
          const data = response.data.data;
          console.log(data);
          dispatch(setUser({
            uid: data.uid,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            role: data.role,
          }));
          navigate(`/${data.role.toLowerCase()} `);
        }
        else {
          alert('Invalid credentials');
        }
      } else {
        alert('Invalid credentials');
      }

    } catch (err) {
      console.log(err);
    }



  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <form style={{ paddingTop: "50px", justifyContent: "center" }}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          border={'1px solid #ccc'}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            {isSignup ? "Signup" : "Login"}
          </Typography>
          <TextField
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            margin="normal"
            type="password"
            variant="outlined"
            placeholder="Password"
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          {/* <Button onClick={() => setIsSignup(!isSignup)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
          </Button> */}
        </Box>
      </form>
    </div>
  );
}

export default LoginPage;
