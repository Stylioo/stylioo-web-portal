// import { useState } from "react";
// import { Box, Button, FormControl, FormControlLabel, Switch, TextField, Typography } from "@mui/material";

// import { Navigate, useLocation, useNavigate } from "react-router-dom";

// import { useAppDispatch } from "../../redux/store"
// import { setUser } from "../../redux/features/authSlice";


// import axios from "@/axios";
// import useAuth from "@/hooks/useAuth";

// function LoginPage() {

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const auth = useAuth()

//   const from = location.state?.from?.pathname || "/";

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     if (email === '' || password === '') {
//       alert('Please fill all the fields');
//       return
//     }

//     try {
//       const response = await axios.post('/auth/signin', {
//         email: email,
//         password: password,
//         type: 'EMPLOYEE'
//       })

//       if (response.status === 200) {
//         if (response.data.success) {
//           const data = response.data.data;
//           console.log(data);
//           dispatch(setUser({
//             id: data.id,
//             first_name: data.first_name,
//             last_name: data.last_name,
//             email: data.email,
//             role: data.role,
//           }));
//           navigate(from, { replace: true })

//         }
//         else {
//           alert('Invalid credentials');
//         }
//       } else {
//         alert('Invalid credentials');
//       }

//     } catch (err) {
//       console.log(err);
//     }



//   }

//   if (!auth.isAuthenticated) {
//     return (
//       <div className='flex items-start w-full h-screen'>
//         <div className='relative flex flex-col w-1/2 h-full'>
//           <div className='absolute top-[20%] left-[10%] flex flex-col'>
//             <h1 className='my-4 text-4xl font-extrabold text-[#E0E0E0]'>Embrassing your styles</h1>
//             <p className='text-xl font-normal text-[#E0E0E0]'>stating </p>
//           </div>
//           <img src={COVER_IMAGE} className="object-cover w-1/2 h-full" />
//           <div  className='w-full h-hull bg-[#E0E0E0] flex flex-col p-10'>
//             <h1 className='text-xl text-[#060606] font-semibold'>Welcome back! Please enter your details</h1>
//           </div>
        
//           <Typography
//             variant="h4"
//           >Sign In
//           </Typography>
//           <Typography
//           variant="h6"
//           >Welcome back! Please enter your details
//           </Typography>
//           <Box className="signInForm">
//             <FormControl >
//               <TextField
//                 fullWidth
//                 label="Email"
//                 variant="outlined"
//                 size="small"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}

//               />
//             </FormControl>
//             <FormControl>
//               <TextField
//                 fullWidth
//                 label="Password"
//                 variant="outlined"
//                 type="password"
//                 size="small"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormControl>
//             <Box className='rememberMe'>
//               <FormControlLabel
//                 control={<Switch color="default" />}
//                 label={
//                   <Typography variant="body2" style={{ fontSize: '14px' }}>
//                     Remember me
//                   </Typography>
//                 }
//                 labelPlacement="end"
//                 color="default"
//               />
//               {/* <Link ref="#" underline="always" style={{ fontSize: '14px' }}>
//               {'Forgot Password?'}
//             </Link> */}
//             </Box>
//             <Button
//               variant="contained"
//               color="success"
//               onClick={(e) => {
//                 // navigate('/auth/classes')
//                 handleSubmit(e)
//               }}
//             >Sign In
//             </Button>
//             <Box className='signUp'>
//               <Typography style={{ fontSize: '14px', marginRight: '10px' }}>
//                 Don't you have an account?
//               </Typography>
//               {/* <Link href="/auth/signup" underline="always" style={{ fontSize: '14px' }}>
//               {'Sign Up'}
//             </Link> */}
//             </Box>
//           </Box>
      
//         </div>
//       </div>
//     )
//   } else {
//     return (
//       <Navigate to={from} />
//     )
//   }
// }

// export default LoginPage;



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";



import { useAppDispatch } from "../../redux/store"
import { setUser } from "../../redux/features/authSlice";


import axios from "@/axios";
import useAuth from "@/hooks/useAuth";


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Stylioo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {

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
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  if (!auth.isAuthenticated) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" xs={12} sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={6}
          sm={4}
          md={7}
          sx={{
          
            // backgroundImage:'url(https://source.unsplash.com/random?wallpapers)',
            backgroundImage:'url(https://source.unsplash.com/400x400/?salon)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid  item
    xs={6}  
    sm={8}
    md={5}
    component={Paper}
    elevation={6}
    square>
          <Box
            sx={{
              my: 13,
              mx: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography
           variant="h6"
           sx={{ mt: 3 }}>
            Welcome back! Please enter your details
           </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
               {/* <Box className='rememberMe'>
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
             </Box> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, height: '50px', background: 'linear-gradient(to right, #191654, #43C6AC)', '&:hover': {
                  '&:hover': {
                    background: 'linear-gradient(to right, #141e30, #243b55)',
                } ,} }}
                onClick={(e) => {
                                  // navigate('/auth/classes')
                                  handleSubmit(e)
                                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={'text-decoration: none'}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/auth/signup" variant="body2" sx={'text-decoration: none'}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
  }
  else{
    return(
      <Navigate to={from} />
    )
  }
  
}

