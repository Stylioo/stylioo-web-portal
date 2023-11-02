import * as React from 'react';
import { useState } from 'react';
import '../../styles/receptionist/index.scss';
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
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { FormLabel } from '@mui/material';
import "../../styles/receptionist/form.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// Define columns for the DataGrid component

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'id', width: 10},
  { field: 'StartDate', headerName: 'Start Date', width: 130 },
  { field: 'EndDate', headerName: 'End Date', width: 130 },
  { field: 'Reason', headerName: 'Reason', width: 130 },
  { field: 'NoofDays', headerName: 'No of Days', width: 100 },
  { field: 'NoofHours', headerName: 'No of Hours', width: 100},
  { field: 'Notes', headerName: 'Notes', width: 150 },
  { field: 'Status', headerName: 'Status', width: 100 },
  { field: 'Deduction', headerName: 'Deduction', width: 100 },
  { field: 'CancelledReason', headerName: 'Cancelled Reason', width: 130 },

  {
    field: 'Options',
    headerName: 'Options',
    width: 100,
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
        </div>
      );
    },
  },
];

// Sample data for the DataGrid
const rows = [
  {  
    id: 1,
    StartDate: '2023-07-05',
    EndDate: '2023-07-05',
    Reason: 'Sick Leave',
    NoofDays: '1',
    NoofHours: '24',
    Notes : 'No Notes',
    Status: 'Approved',
    Deduction: '-',
    CancelledReason: 'No Reason'
 },

 {  
  id: 2,
  StartDate: '2023-07-15',
  EndDate: '2023-07-17',
  Reason: 'Sick Leave',
  NoofDays: '2',
  NoofHours: '48',
  Notes : 'No Notes',
  Status: 'Approved',
  Deduction: '-',
  CancelledReason: 'No Reason'
},

{  
  id: 3,
  StartDate: '2023-07-27',
  EndDate: '2023-07-27',
  Reason: 'Sick Leave',
  NoofDays: '1',
  NoofHours: '24',
  Notes : 'No Notes',
  Status: 'Rejected',
  Deduction: '-',
  CancelledReason: 'Reason is not justified'
},

{  
  id: 4,
  StartDate: '2023-08-01',
  EndDate: '2023-08-01',
  Reason: 'Sick Leave',
  NoofDays: '1',
  NoofHours: '24',
  Notes : 'No Notes',
  Status: 'Rejected',
  Deduction: '-',
  CancelledReason: 'Reason is not justified'
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

// Helper function to create data for the summary table

function createData(
  name: string,
  Used: number,
  Available: number,
  Allowance: number
) {
  return { name, Used, Available, Allowance };
}
// Sample data for the summary table

const tablerows = [
  createData('Vacation', 15, 6, 4),
  createData('Stick Leave', 23, 9, 3),
  createData('WFH', 26, 1, 4)
];

// Interface for the TabPanelProps

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

// Main LeavePage component

export default function LeavePage() {
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
  const [selectedLeaveType, setSelectedLeaveType] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [comments, setComments] = useState('');
  const [selectedHours, setSelectedHours] = useState('');
  const [selectedDates, setSelectedDates] = useState('');
  const [age, setAge] = React.useState('');

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <React.Fragment>
    <Box sx={{ width: '100%'}}>
       <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ marginTop: '20px', marginLeft:'1090px'}} >
            <Button startIcon={<AddCircleIcon />} onClick={handleClickOpen}>Request Leave</Button>
                  
                <Dialog open={open} onClose={handleClose}>
                  
                  <DialogTitle className='formHeader'>Request Leave</DialogTitle>
                    <DialogContent sx={{marginTop:'5px', width:'600px', height:'400px'}}>
                      <DialogContentText>
                     <div className="dates">
                     <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Leave Type</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select Leave Type"
                            onChange={handleChangeAge}
                    
                          >
                            <MenuItem value={10}>Personal</MenuItem>
                            <MenuItem value={20}>Sick</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>
                          </Select>
                        </FormControl>
                     </div>
                        <div className="dates">
                        <FormLabel component="legend" sx={{color:'black',  marginBottom:'5px' , marginTop:'5px'}}>Start Date</FormLabel>
                        <TextField
                          type="date"
                          value={selectedStartDate}
                          onChange={(e) => setSelectedStartDate(e.target.value)}
                        />
                        <FormLabel component="legend" sx={{color:'black' , marginBottom:'5px' , marginTop:'5px'}}>End Date</FormLabel>
                        <TextField
                          type="date"
                          value={selectedEndDate}
                          onChange={(e) => setSelectedEndDate(e.target.value)}
                        />
                        </div>

                        <div className="dates">
                        <FormLabel component="legend" sx={{color:'black',  marginBottom:'5px' , marginTop:'5px'}}>No of Hours</FormLabel>
                        <TextField
                          type="number"
                          value={selectedHours}
                          onChange={(e) => setSelectedHours(e.target.value)}
                          sx={{width:'150px'}}
                        />
                        <FormLabel component="legend" sx={{color:'black' , marginBottom:'5px' , marginTop:'5px'}}>No of Dates</FormLabel>
                        <TextField
                          type="number"
                          value={selectedDates}
                          onChange={(e) => setSelectedDates(e.target.value)}
                          sx={{width:'150px'}}
                        />
                        </div>
                      <div className="dates">
                      <FormLabel component="legend" sx={{color:'black', marginBottom:'5px' , marginTop:'5px'}}>Comments</FormLabel>
                        <TextField
                          label="Comments"
                          type="text"
                          fullWidth
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          sx={{marginLeft:'10px'}}
                        />
                      
                      </div>
                      </DialogContentText>
                    </DialogContent>
                    {/* <div>
                      <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Balance</TableCell>
                            <TableCell align="right">Used</TableCell>
                            <TableCell align="right">Available</TableCell>
                            <TableCell align="right">Allowance</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tablerows.map((tablerows) => (
                            <TableRow
                              key={tablerows.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {tablerows.name}
                              </TableCell>
                              <TableCell align="right">{tablerows.Used}</TableCell>
                              <TableCell align="right">{tablerows.Available}</TableCell>
                              <TableCell align="right">{tablerows.Allowance}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    </div> */}
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleSubmit} color="success">
                        Book Time off
                      </Button>
                    </DialogActions>
                </Dialog>
          </ButtonGroup>
      <h2 style = {{marginTop:'-35px'}}>Leave History</h2>
  
<div className="searchBarWithDate">
         <FormLabel className="Search"
                sx={{color:"black"}}>Start Date</FormLabel>   
                <TextField
                className="startDate"
                id="outlined-multiline-flexible"
                label="Start Date"
                // color="darkPrimary"
                multiline
                maxRows={4}
                />
                
                <FormLabel className="Search"
                sx={{color:"black"}}>End Date</FormLabel>   
                <TextField
                className="endDate"
                id="outlined-multiline-flexible"
                label="End Date"
                // color="darkPrimary"
                multiline
                maxRows={4}
                />
                <Button className="searchButton" variant="contained" color="primary">Click here to Search</Button>
                
        </div>

       
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
    </Box>
    </React.Fragment>
  );
}

