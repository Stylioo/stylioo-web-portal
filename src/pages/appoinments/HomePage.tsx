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
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';


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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [anchorEl, setAnchorEl] = useState(null);

      const handleClick = (event: { currentTarget: React.SetStateAction<null>; }) => {
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
          {/* <IconButton
            aria-label="see more"
            color="primary"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton> */}
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
  {
    id: 1,
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

export default function ReceptionistPage() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
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

  const [totalPrice, setTotalPrice] = useState();
  // Additional state variables for form fields
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
          sx={{ marginTop: '20px', marginLeft: '911.5px' }} >
          <Button startIcon={<AddCircleIcon />} color='primary' onClick={handleClickOpen}>Add New Appoinment</Button>

          <Dialog open={open} onClose={handleClose}>

            <DialogTitle className='formHeader'>Add New Appointment</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <TextField
                  label="Date"
                  type="date"
                  fullWidth
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Time"
                  type="time"
                  fullWidth
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Client Name"
                  fullWidth
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Contact No"
                  fullWidth
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Service Type"
                  fullWidth
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Service Category"
                  fullWidth
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />

                {/* Add more form fields here */}

                {/* <Divider sx={{ marginBottom: '10px' }} /> */}

                {/* Display the total price */}
                <TextField
                  label="Total Price"
                  fullWidth
                  value={totalPrice}
                  disabled
                  sx={{ marginBottom: '10px' }}
                />

              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <Button component={Link} to="/receptionist/quick-sale-form" startIcon={<ReceiptIcon />}>Quick Sale</Button>
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
          sx={{ marginTop: '-45px' }} // Add margin top here
        />
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#E26D5C', marginTop: '20px', width: '65%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Ongoing Appoinments" {...a11yProps(0)} />
            <Tab label="Today Appoinments" {...a11yProps(1)} />
            <Tab label="Upcoming Appoinments" {...a11yProps(2)} />
            <Tab label="Past Appoinments" {...a11yProps(3)} />
          </Tabs>
        </Box>



        <CustomTabPanel value={value} index={0}>
          <DataGrid sx={{ width: '100%' }}
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
          <DataGrid sx={{ width: '100%' }}
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
          <DataGrid sx={{ width: '100%' }}
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
          <DataGrid sx={{ width: '100%' }}
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

