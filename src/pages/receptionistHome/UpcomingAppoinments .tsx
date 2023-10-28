import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function UpcomingAppoinment() {
  return (
    <React.Fragment>
      <Title>Upcoming Appoinment</Title>
      <Typography component="p" variant="h4">
        15
      </Typography>
    </React.Fragment>
  );
}