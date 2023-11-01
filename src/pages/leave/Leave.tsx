import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Helper function to create data for the table rows

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

// Sample data for the table rows
const rows = [
  createData('Frozen yoghurt', '2023/03/23', 'bgv', 'hvgh', 'hfh'),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// Define the props for the tab panel
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Custom TabPanel component
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Helper function to provide accessibility properties for tabs
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Leave component
function Leave() {
  const [value, setValue] = React.useState(0);

// Handle tab change
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <h3 style={{marginBottom: '20px'}}>Leave Management</h3>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Pending"
            {...a11yProps(0)}
            sx={{
              backgroundColor: value === 0 ? '#009933' : 'inherit',
              color: value === 0 ? 'white' : 'black', 
              // Change the text color of non-active tabs
            }}
          />
          <Tab
            label="Accepted"
            {...a11yProps(1)}
            sx={{
              backgroundColor: value === 1 ? '#009933' : 'inherit',
              color: value === 1 ? 'white' : 'black', 
              // Change the text color of non-active tabs
            }}
          />
          <Tab
            label="Rejected"
            {...a11yProps(2)}
            sx={{
              backgroundColor: value === 2 ? '#009933' : 'inherit',
              color: value === 2 ? 'white' : 'black', 
              // Change the text color of non-active tabs
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Employee Name</TableCell>
                    <TableCell align="right">Start Date</TableCell>
                    <TableCell align="right">End Date</TableCell>
                    <TableCell align="right">Number of Dates</TableCell>
                    <TableCell align="right">Reason</TableCell>
                    <TableCell align="right">Action</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Employee Name</TableCell>
                    <TableCell align="right">Start Date</TableCell>
                    <TableCell align="right">End Date</TableCell>
                    <TableCell align="right">Number of Dates</TableCell>
                    <TableCell align="right">Reason</TableCell>
                    <TableCell align="right">Action</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Rejected
      </CustomTabPanel>
    </div>
  );
}

export default Leave;
