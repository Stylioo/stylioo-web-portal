import { useState } from "react";
import { Box, Button, FormControl, FormControlLabel, Switch, TextField, Typography } from "@mui/material";

import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../redux/store"
import { setUser } from "../../redux/features/authSlice";

import im from '@/assets/images/signIn.png'

import axios from "@/axios";
import useAuth from "@/hooks/useAuth";

function LoginPage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useAuth()

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Please fill all the fields');
      return
    }

    try {
      const response = await axios.post('/auth/signin', {
        email: email,
        password: password,
        type: 'EMPLOYEE'
      })

      if (response.status === 200) {
        if (response.data.success) {
          const data = response.data.data;
          console.log(data);
          dispatch(setUser({
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            role: data.role,
          }));
          navigate(from, { replace: true })

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

  if (!auth.isAuthenticated) {
    return (
      <Box className="mainContainer" >
        <Box
          className="signInBox"
        >
          <Typography
            variant="h4"
          >Sign In
          </Typography>
          <Typography
          // variant="h6"
          >Welcome back! Please enter your details
          </Typography>
          <Box className="signInForm">
            <FormControl >
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Box className='rememberMe'>
              <FormControlLabel
                control={<Switch color="default" />}
                label={
                  <Typography variant="body2" style={{ fontSize: '14px' }}>
                    Remember me
                  </Typography>
                }
                labelPlacement="end"
                color="default"
              />
              {/* <Link ref="#" underline="always" style={{ fontSize: '14px' }}>
              {'Forgot Password?'}
            </Link> */}
            </Box>
            <Button
              variant="contained"
              color="success"
              onClick={(e) => {
                // navigate('/auth/classes')
                handleSubmit(e)
              }}
            >Sign In
            </Button>
            <Box className='signUp'>
              <Typography style={{ fontSize: '14px', marginRight: '10px' }}>
                Don't you have an account?
              </Typography>
              {/* <Link href="/auth/signup" underline="always" style={{ fontSize: '14px' }}>
              {'Sign Up'}
            </Link> */}
            </Box>
          </Box>
        </Box>
        <Box className="imageBox" >
          <img src={im} alt="" className="signInImg" />
        </Box>
      </Box >
    )
  } else {
    return (
      <Navigate to={from} />
    )
  }
}

export default LoginPage;
