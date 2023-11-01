// import React from 'react';
// import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
// import { Card, CardHeader, useTheme } from '@mui/material';
// import Title from './Title';
// import { BarChart } from '@mui/x-charts/BarChart';

// const data = [
//   { name: 'Completed', value: 5 },
//   { name: 'Upcoming', value: 3 },
//   { name: 'Canceled', value: 2 },
// ];


// const AppointmentOverview = () => {
//   return (
//         <Card>
//         <h2 style={{marginTop:"20px", marginLeft:"30px", color:"#2363e2"}}>Appointment Overview</h2>
//     <BarChart
//       xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr', 'May','Jun','Jul', 'Aug','Sep', 'Oct', 'Nov','Dec'] }]}
//       series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
//       width={500}
//       height={300}
//     />
//      </Card>
    
        
//   );
// };

// export default AppointmentOverview;

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { Card, CardHeader, useTheme } from '@mui/material';

const chartSetting = {
  yAxis: [
    {
      label: 'No of Appointments',
    },
  ],
  width: 500,
  height: 320,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-2px, 0)',
    },
  },
};
const dataset = [
  {
  
    Completed: 7,
    Cancel: 2,
    Upcoming:0,
    month: 'Jan',
  },
  {
    Completed: 10,
    Cancel: 2,
    Upcoming:0,
    month: 'Feb',
  },
  {
    Completed: 6,
    Cancel: 1,
    Upcoming:0,
    month: 'Mar',
  },
  {
    Completed: 8,
    Cancel: 2,
    Upcoming:0,
    month: 'Apr',
  },
  {
    Completed: 15,
    Cancel: 5,
    Upcoming:0,
    month: 'May',
  },
  {
    Completed: 12,
    Cancel: 5,
    Upcoming:0,
    month: 'June',
  },
  {
    Completed: 10,
    Cancel: 1,
    Upcoming:0,
    month: 'July',
  },
  {
    Completed: 16,
    Cancel: 3,
    Upcoming:0,
    month: 'Aug',
  },
  {
    Completed: 10,
    Cancel: 1,
    Upcoming:0,
    month: 'Sept',
  },
  {
    Completed: 12,
    Cancel: 3,
    Upcoming:0,
    month: 'Oct',
  },
  {
    Completed: 12,
    Cancel: 2,
    Upcoming:20,
    month: 'Nov',
  },
  {
    Completed: 10,
    Cancel: 2,
    Upcoming:15,
    month: 'Dec',
  },
];

const valueFormatter = (value: number) => `${value}`;

function AppointmentOverview() {
  
  return (
    <Card>
    <h2 style={{marginTop:"20px", marginLeft:"30px", color:"#2363e2"}}>Appointment Overview</h2>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
       
        { dataKey: 'Completed', label: 'Completed', valueFormatter },
        { dataKey: 'Cancel', label: 'Canceled', valueFormatter },
        { dataKey: 'Upcoming', label: 'Upcoming', valueFormatter },
        
      ]}
      {...chartSetting}
    />
    </Card>
  );

}

export default AppointmentOverview;