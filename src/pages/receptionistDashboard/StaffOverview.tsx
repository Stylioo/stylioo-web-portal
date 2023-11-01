// import React from 'react';
// import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
// import { Card, CardHeader, useTheme } from '@mui/material';
// import Title from './Title';


// const data = [
//   { name: 'Hairstylist', value: 5 },
//   { name: 'Esthetician', value: 3 },
//   { name: 'Colorist', value: 2 },
//   { name: 'Nail Technician', value: 2 },
//   { name: 'Makeup Artist', value: 3 },  
// ];

// const colors = ['#8884d8', '#82ca9d', '#ff7300', '#a05d56', '#434088', '#ff00ff'];

// const StaffOverview = () => {
//   return (
//         <Card>
//         <h2 style={{marginTop:"20px", marginLeft:"30px", color:"#2363e2"}}>Beautician Overview</h2>
//         <PieChart width={400} height={320} innerRadius={80}>
//       <Pie data={data} dataKey="value" nameKey="name" >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index]} />
//         ))}
//       </Pie>
//       <Tooltip />
//       <Legend />
//     </PieChart>
//       </Card>
    
        
//   );
// };

// export default StaffOverview;

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card, CardHeader, useTheme } from '@mui/material';
import Title from './Title';


const data = [
  { name: 'Hairstylist', value: 5 },
  { name: 'Esthetician', value: 3 },
  { name: 'Colorist', value: 2 },
  { name: 'Nail Technician', value: 2 },
  { name: 'Makeup Artist', value: 3 },
];

const colors = ['#2e26d3', '#0cdb5c', '#dff70b', '#fa54ec', '#f52a3f'];

const CustomLegend = ({ data }) => (
  <div style={{ display: 'flex', flexDirection: 'column' , marginTop:"70px"}}>
    {data.map((entry, index) => (
      <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '10px', height: '10px', backgroundColor: colors[index]}}></div>
        <span style={{ marginLeft: '5px' }}>{entry.name}: {entry.value}</span>
      </div>
    ))}
  </div>
);

const StaffOverview = () => {
  return (
    <Card>
      <h2 style={{marginTop:"20px", marginLeft:"30px", color:"#2363e2"}}>Beautician Overview</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <PieChart width={400} height={320}>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <CustomLegend data={data} />
      </div>
    </Card>
  );
};

export default StaffOverview;
