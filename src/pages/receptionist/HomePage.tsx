// import React from 'react'

// const ReceptionistPage = () => {
//   return (
//     <div>Receptionist page</div>
//   )
// }

// export default ReceptionistPage

import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem } from '@mui/material';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Date', headerName: 'Date', width: 130 },
  { field: 'StartTime', headerName: 'Start Time', width: 130 },
  { field: 'EndTime', headerName: 'End Time', width: 130 },
  { field: 'ClientName', headerName: 'Client name', width: 130 },
  { field: 'Service', headerName: 'Service', width: 130 },
  { field: 'Beautician', headerName: 'Beautician', width: 130 },
  { field: 'ServicePrice', headerName: 'Service Price', width: 130 },

  {
    field: 'Options',
    headerName: 'Options',
    width: 130,
    renderCell: (params) => {
      const [anchorEl, setAnchorEl] = useState(null);

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      return (
        <div>
          <IconButton aria-label="edit" color="primary">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="see more"
            color="primary"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: '#723D46',
                color: '#F2F2F2',
              },
            }}
          >
            <MenuItem onClick={handleClose} >View Details</MenuItem>
            <MenuItem onClick={handleClose} >Invoice</MenuItem>
          </Menu>
        </div>
      );
    },
  },
];


const rows = [
  { id: 1,
    Date: '10/10/2021',
    StartTime: '10:00 AM',
    EndTime: '11:00 AM',
    ClientName: 'John Doe',
    Service: 'Haircut',
    Beautician: 'Chirasi Walpola',
    ServicePrice: 'Rs.1500.00'
 },

  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%'}}>
       <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ marginTop: '20px', marginLeft:'960px'}} >
            <Button startIcon={<EditIcon/>} color='accent'>Add New Appoinment</Button>
            <Button >Quick Sale</Button>
          </ButtonGroup>
          <TextField
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: '-45px'}} // Add margin top here
          />
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#E26D5C', marginTop:'20px'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Ongoing Appoinments" {...a11yProps(0)} />
          <Tab label="Today Appoinments" {...a11yProps(1)} />
          <Tab label="Upcoming Appoinments" {...a11yProps(2)} />
          <Tab label="Past Appoinments" {...a11yProps(3)} />
        </Tabs>
      </Box>
     
      
       
      <CustomTabPanel value={value} index={0}>
                      <DataGrid sx={{ width:'100%' }}
                        rows={rows}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                          },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                      />
      </CustomTabPanel>


      <CustomTabPanel value={value} index={1}>
      <DataGrid sx={{ width:'100%' }}
                        rows={rows}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                          },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                      />
      </CustomTabPanel>


      <CustomTabPanel value={value} index={2}>
           <DataGrid sx={{ width:'100%' }}
                        rows={rows}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                          },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                      />
      </CustomTabPanel>


      <CustomTabPanel value={value} index={3}>
          <DataGrid sx={{ width:'100%' }}
                        rows={rows}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                          },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                      />
      </CustomTabPanel>
    </Box>
  );
}

