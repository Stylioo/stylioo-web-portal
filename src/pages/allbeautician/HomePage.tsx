// import React from 'react'

// export const AllBeauticianPage = () => {
//   return (
//     <div>AllBeauticianPage</div>
//   )
// }

// export default AllBeauticianPage

// display all beauticians in a card view 

// Import necessary modules and dependencies.
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Function to display copyright information.


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// Create an array of cards (in this case, card placeholders).
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// Define the AllBeauticianPage component.
 function AllBeauticianPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
      
        <Container sx={{ py: 8 }} maxWidth='lg'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                      height:'350px',
                    }}
                    image="https://source.unsplash.com/random?people"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chirasi Amaya
                    </Typography>
                    <Typography>
                      Talented hair cutting beautician with 5 years of experience in hair cutting and hair styling.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color='success'>View More Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default AllBeauticianPage