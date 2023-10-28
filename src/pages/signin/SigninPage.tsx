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
      <Link color="inherit" href="">
        Stylioo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

  if (!auth.isAuthenticated) {
    return (
      <Grid container component="main" xs={12} sx={{ maxHeight: '100vh', overflow: 'hidden' }}>
        <Grid
          item
          sm={12}
          md={7}
          sx={{
            display: { xs: 'none', md: 'block' },
            maxHeight: '100vh',
            overflow: 'hidden',
            position: 'relative',
            background: '#2385cc'
          }}

        >

          <img src="https://source.unsplash.com/1920x1080/?salon" alt="banner"
            style={
              {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
              }
            }
          />
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: '3rem',
                // fontWeight: 'bold',
                textShadow: '0px 0px 20px rgba(0,0,0,0.4)',
              }}
            >Stylioo</Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '1rem',
                // fontWeight: 'bold',
                width: '50%',
                textAlign: 'center',
                textShadow: '0px 0px 20px rgba(0,0,0,0.4)',
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur iusto
            </Typography>
          </Box>

        </Grid>
        <Grid item
          sm={12}
          md={5}
          component={Paper}
          elevation={6}        >
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3, mb: 2, height: '50px',
                }}
                onClick={(e) => {
                  handleSubmit(e)
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid >
    );
  }
  else {
    return (
      <Navigate to={from} />
    )
  }

}

