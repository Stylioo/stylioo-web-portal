// import * as React from 'react';
// import "../../styles/services/services.css";
import { useState, ChangeEvent, useEffect, useCallback } from "react";
import Modal from 'react-modal';



import axios from '../../axios'
import Loading from '../../components/Loading';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import { PieChart } from '@mui/x-charts/PieChart/PieChart';


const data = [
  { value: 2, label: 'Male' },
  // { value: 10, label: 'B' },
  { value: 10, label: 'Female' },
  // { value: 20, label: 'D' },
];

const size = {
  width: 500,
  height: 300,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}


const DashBoard = () => {


  return (
    <div>
    <h2>Dashboard</h2>
    <p>Create, edit and manage service list</p>
      {/* <Grid container spacing={4}> */}

      

    <div style={{ textAlign: 'right' , }}>
      
      <div style={{ display: 'inline-block', marginRight: '20px', border: '0.5pxpx solid black', background: '#F1F2ED', borderRadius: '10px', height: '400px',  }}>
        <h2 style={{textAlign: 'center', margin: '15px 0px 20px 0px'}}>Total Emplyees: 12</h2>
        
        <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
          <PieCenterLabel>Employees</PieCenterLabel>
        </PieChart>
      </div>
    </div>

  
    </div>
  );
}

export default DashBoard
