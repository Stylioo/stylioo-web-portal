import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function TotalStaff() {
  return (
    <React.Fragment>
      <Title>TotalStaff</Title>
      <Typography component="p" variant="h4">
        15
      </Typography>
    </React.Fragment>
  );
}