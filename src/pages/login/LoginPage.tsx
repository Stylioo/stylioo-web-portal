import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const handleChange = (e)=>{
  //   setInputs((prevState)=>{
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <div>
      <form>
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
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
            // onChange={handleChange}
            value={inputs.name}
              name="name"
              margin="normal"
              type="text"
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            name="email"
            value={inputs.email}
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
          />
          <TextField
          value={inputs.password}
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
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button onClick={()=>setIsSignup(!isSignup)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default LoginPage;
