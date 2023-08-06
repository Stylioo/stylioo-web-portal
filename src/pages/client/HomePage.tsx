import * as React from 'react';
import { useState } from 'react';
import '../../styles/receptionist/index.scss';
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
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { PersonAdd } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Select, InputLabel } from '@mui/material';
import "../../styles/receptionist/form.scss";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 10},
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Address', headerName: 'Address', width: 100 },
  { field: 'ContactNo', headerName: 'ContactNo', width: 130 },
  { field: 'Email', headerName: 'Email', width: 170 },
  { field: 'LastSeriveDate', headerName: 'Last Service Date', width: 130 },
  { field: 'Notes', headerName: 'Notes', width: 130 },
  { field: 'TotalVisit', headerName: 'TotalVisit', width: 100},
  { field: 'Status', headerName: 'Status', width: 100 },

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
            <MenuItem onClick={handleClose} >View Profile Details</MenuItem>
            {/* <MenuItem onClick={handleClose} >Invoice</MenuItem> */}
          </Menu>
        </div>
      );
    },
  },
];


const rows = [
  {  
    id: 1,
    Name: 'Chirasi Walpola',
    Address: 'Matara',
    ContactNo: '0711234569',
    Email: 'amaya99@gmail.com',
    LastSeriveDate: '2022-10-15',
    Notes: 'Good',
    TotalVisit: '5',
    Status: 'Active'
 },

//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
        <Box sx={{ p: 2 }}>
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

export default function ClientPage() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Handle form submission here
    // You can access form data using state or useRef
    // For example, you can create a state for each form field and update them on change
    // Then use the state values for form submission
    handleClose();
  };

  // Additional state variables for form fields
  const [selectedName, setSelectedName] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  

  return (
    <React.Fragment>
    <Box sx={{ width: '100%'}}>
       <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ marginTop: '20px', marginLeft:'1090px'}} >
            <Button startIcon={<AddCircleIcon />} color='accent'  onClick={handleClickOpen}>Add New Client</Button>
                  
                <Dialog open={open} onClose={handleClose}>
                  
                  <DialogTitle className='formHeader'>Add New Client</DialogTitle>
                    <DialogContent sx={{marginTop:'20px'}}>
                      <DialogContentText>
                        <FormLabel component="legend" sx={{color:'black', width:'450px', marginBottom:'10px'}}>Name</FormLabel>
                        <TextField
                          label="Name"
                          type="text"
                          fullWidth
                          value={selectedName}
                          onChange={(e) => setSelectedName(e.target.value)}
                          sx={{ marginBottom: '10px' }}
                        />
                        <FormLabel component="legend" sx={{color:'black',  marginBottom:'10px' , marginTop:'15px'}}>Email</FormLabel>
                        <TextField
                          label="Email"
                          type="email"
                          fullWidth
                          value={selectedEmail}
                          onChange={(e) => setSelectedEmail(e.target.value)}
                          sx={{ marginBottom: '10px' }}
                        />
                        <FormLabel component="legend" sx={{color:'black' , marginBottom:'10px' , marginTop:'15px'}}>Address</FormLabel>
                        <TextField
                          label="Address"
                          fullWidth
                          value={selectedAddress}
                          onChange={(e) => setSelectedAddress(e.target.value)}
                          sx={{ marginBottom: '10px' }}
                        />
                        <FormLabel component="legend" sx={{color:'black', marginBottom:'10px' , marginTop:'15px'}}>Contact No</FormLabel>
                        <TextField
                          label="Contact No"
                          fullWidth
                          value={contactNo}
                          onChange={(e) => setContactNo(e.target.value)}
                          sx={{ marginBottom: '10px' }}
                        />
                      </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleSubmit} color="success">
                        Save
                      </Button>
                    </DialogActions>
                </Dialog>
          </ButtonGroup>
          <TextField
            label="Search by Client Name"
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

<div className="searchBarWithDate">
         <FormLabel className="Search"
                sx={{color:"black"}}>Start Date</FormLabel>   
                <TextField
                className="startDate"
                id="outlined-multiline-flexible"
                label="Start Date"
                color="darkPrimary"
                multiline
                maxRows={4}
                />
                
                <FormLabel className="Search"
                sx={{color:"black"}}>End Date</FormLabel>   
                <TextField
                className="endDate"
                id="outlined-multiline-flexible"
                label="End Date"
                color="darkPrimary"
                multiline
                maxRows={4}
                />
                <Button className="searchButton" variant="contained" color="primary">Click here to Search</Button>
        </div>



      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#E26D5C', marginTop:'20px', width:'30%'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Client List" {...a11yProps(0)} />
          <Tab label="Inactive Clients" {...a11yProps(1)} />
        </Tabs>
      </Box>
     
      
       
      <CustomTabPanel value={value} index={0}>
                      <DataGrid sx={{ width:'100%'}}
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
    </Box>
    </React.Fragment>
  );
}

