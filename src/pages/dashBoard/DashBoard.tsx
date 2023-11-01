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


import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Appointments',
    },
  ],
  width: 700,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
  
    complete: 80,
    cancel: 20,
    month: 'Jan',
  },
  {
  
    complete: 70,
    cancel: 25,
    month: 'Fev',
  },
  {
   
    complete: 85,
    cancel: 22,
    month: 'Mar',
  },
  {

    complete: 106,
    cancel: 15,
    month: 'Apr',
  },
  {

    complete: 65,
    cancel: 5,
    month: 'May',
  },
  {
  
    complete: 110,
    cancel: 27,
    month: 'June',
  },
  {
  
    complete: 95,
    cancel: 17,
    month: 'July',
  },
  {
  
    complete: 75,
    cancel: 22,
    month: 'Aug',
  },
  {
   
    complete: 99,
    cancel: 11,
    month: 'Sept',
  },
  {
  
    complete: 107,
    cancel: 24,
    month: 'Oct',
  },
  {
   
    complete: 0,
    cancel: 0,
    month: 'Nov',
  },
  {
  
    complete: 0,
    cancel: 0,
    month: 'Dec',
  },
];

const valueFormatter = (value: number) => `${value}`;


const chartSetting2 = {
  yAxis: [
    {
      label: 'Income',
    },
  ],
  width: 700,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset2 = [
  {
    income: 60000,
    month: 'Jan',
  },
  {
    income: 70000,
    month: 'Fev',
  },
  {
    income: 65000,
    month: 'Mar',
  },
  {
    income: 93000,
    month: 'Apr',
  },
  {
    income: 77000,
    month: 'May',
  },
  {
    income: 120000,
    month: 'June',
  },
  {
    income: 80000,
    month: 'July',
  },
  {
    income: 110000,
    month: 'Aug',
  },
  {
    income: 70000,
    month: 'Sept',
  },
  {
    income: 95000,
    month: 'Oct',
  },
  {
    income: 0,
    month: 'Nov',
  },
  {
    income: 0,
    month: 'Dec',
  },
];

// const valueFormatter = (value: number) => `${value}`;
// import Box from '@mui/material/Box';


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

  const [pending, setPending] = useState(0);
  const [cancled, setCancled] = useState(0);
  const [paid, setPaid] = useState(0);

  const fetchAppoinments = async (value: string = "") => {
    try {
      // setIsLoading(true)
      const response = await axios.get(`/service/fetch?term=${value}`)
      if (response.status === 200) {
        const data = response.data

        if (data.success) {
          console.log(data.data);
          setServices(data.data);
          
        }

      }
    } catch (error) {
      console.log(error);
    }
    finally {
      // setIsLoading(false)
    }
  }

  useEffect(() => {
    
  }, [])

  return (
    <div>
    <h1>Dashboard</h1>
    <hr style={{marginBottom: '10px'}}></hr>
      {/* <Grid container spacing={4}> */}

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>


  <div style={{display: 'flex', flexDirection: 'row', marginTop: '70px'}}>
    
    <div style={{border: '1px solid black', width: '190px', height:'250px', background: '#e3f3fc', borderRadius: '10px', marginRight: '20px'}}>
      <p style={{fontSize:'25px', textAlign: 'center', marginTop: '30px'}}>Pending Appointments</p>
      <p style={{fontSize:'50px', textAlign: 'center'}}>10</p>
      <p style={{margin: '15px 0px 0px 10px', color: '#6a6b6b'}}>Since this month</p>

    </div>

    <div style={{border: '1px solid black', width: '190px', height:'250px', background: '#e3f3fc', borderRadius: '10px', marginRight: '20px'}}>
      <p style={{fontSize:'25px', textAlign: 'center', marginTop: '30px'}}>Complted Appointments</p>
      <p style={{fontSize:'50px', textAlign: 'center'}}>12</p>
      <p style={{margin: '15px 0px 0px 10px', color: '#6a6b6b'}}>Since this month</p>

    </div>

    <div style={{border: '1px solid black', width: '190px', height:'250px', background: '#e3f3fc', borderRadius: '10px', marginRight: '20px'}}>
      <p style={{fontSize:'25px', textAlign: 'center', marginTop: '30px'}}>Canceled Appointments</p>
      <p style={{fontSize:'50px', textAlign: 'center'}}>4</p>
      <p style={{margin: '15px 0px 0px 10px', color: '#7a7a7a'}}>Since this month</p>

    </div>
    </div>
    

    <div style={{ textAlign: 'right' , }}>
      
      <div style={{ display: 'inline-block',  border: '0px solid black', background: '#F1F2ED', borderRadius: '10px', height: '400px',  }}>
        <h2 style={{textAlign: 'center', margin: '15px 0px 20px 0px'}}>Total Emplyees: 12</h2>
        
        <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
          <PieCenterLabel>Employees</PieCenterLabel>
        </PieChart>
      </div>
    </div>
    </div>


    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
  
    <BarChart 
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'complete', label: 'Completed Appoinment', valueFormatter },
        { dataKey: 'cancel', label: 'Canceled Appoinment', valueFormatter },
      ]}
      {...chartSetting}
    />

      <div style={{ display: 'inline-block', margin: '40px 20px 0px 0px', border: '0px solid black', background: '#F1F2ED', borderRadius: '10px', height: '190px', width: '500px'  }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px', fontSize:'30px'}}>  
          <div style={{textAlign: 'center'}}>
            <p style={{marginBottom: '15px'}}>Attendence</p>
            <b>6</b>
          </div>
          <div style={{textAlign: 'center'}}>
            <p style={{marginBottom: '15px'}}>Late</p>
            <b>2</b>
          </div>
          <div style={{textAlign: 'center'}}>
            <p style={{marginBottom: '15px'}}>Absent</p>
            <b>2</b>
          </div>
         </div> 
      </div>

      </div>

      <BarChart 
      dataset={dataset2}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'income', label: 'Monthly Income', valueFormatter },
      ]}
      {...chartSetting2}
    />
    


  
    </div>
  );
}

export default DashBoard
