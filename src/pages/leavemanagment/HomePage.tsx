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
import { useEffect } from 'react';


const columns: GridColDef[] = [
  // { field: 'id', headerName: 'id', width: 10},
  { field: 'Position', headerName: 'Position', width: 100 },
  { field: 'Name', headerName: 'Name', width: 100 },
  { field: 'StartDate', headerName: 'Start Date', width: 120 },
  { field: 'EndDate', headerName: 'End Date', width: 120 },
  { field: 'Reason', headerName: 'Reason', width: 100 },
  { field: 'NoofDays', headerName: 'No of Days', width: 100 },
  { field: 'NoofHours', headerName: 'No of Hours', width: 100},
  { field: 'Notes', headerName: 'Notes', width: 100 },
  { field: 'Deduction', headerName: 'Deduction', width: 100 },
//   { field: 'CancelledReason', headerName: 'Cancelled Reason', width: 130 },

  {
    field: 'Options',
    headerName: 'Options',
    width: 230,
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
          <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                >
                <Button color='success'>Accept</Button>
                <Button color='error'>Decline</Button>
                </ButtonGroup>
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
                backgroundColor: '#786365',
                color: '#f6efef',
              },
            }}
          >
            <MenuItem onClick={handleClose} >View other leaves during the same period</MenuItem>
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
//     Name: 'Chirasi Walpola',
//     ContactNo: '0711234569',
//     Email: 'amaya99@gmail.com',
//     Notes: 'Good',
//     Service: 'Hair Cut',
//     Price : 'Rs 1000.00',
//     Status: 'Paid',
//     Date: '2021-10-10',
//     CancelledReason: 'No Reason'
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


function createData(
  name: string,
  Used: number,
  Available: number,
  Allowance: number
) {
  return { name, Used, Available, Allowance };
}

const tablerows = [
  createData('Vacation', 15, 6, 4),
  createData('Stick Leave', 23, 9, 3),
  createData('WFH', 26, 1, 4)
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

export default function LeaveManagmentPage() {
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
    handleClose();
  };

  // Additional state variables for form fields
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [comments, setComments] = useState('');
  const [selectedHours, setSelectedHours] = useState('');
  const [selectedDates, setSelectedDates] = useState('');
  const [selectedLeaveType, setSelectedLeaveType] = React.useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedStaffMember, setSelectedStaffMember] = useState('');

  // Additional state variable for balance table data
  const [balanceTableData, setBalanceTableData] = useState([]);

  const handleChangeLeaveType = (event: SelectChangeEvent) => {
        setSelectedLeaveType(event.target.value as string);
  };

  const handleChangeStaffMember = (event: SelectChangeEvent) => {
        setSelectedStaffMember(event.target.value as string);
      };
    
  const handleChangePosition = (event: SelectChangeEvent) => {
        setSelectedPosition(event.target.value as string);
      };

      useEffect(() => {
        const fetchedBalanceData = [
          createData('Vacation', 15, 6, 4),
          createData('Stick Leave', 23, 9, 3),
          createData('WFH', 26, 1, 4),
        ];
        setBalanceTableData(fetchedBalanceData);
      }, [selectedPosition, selectedStaffMember]);

 const renderBalanceTable = () => {
        if (selectedPosition && selectedStaffMember) {
          return (
            <div>
              <TableContainer component={Paper}>
                {}
              </TableContainer>
            </div>
          );
        } else {
          return null;
        }
      };

      
  return (
    <React.Fragment>
    <Box sx={{ width: '100%'}}>
       <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ marginTop: '20px', marginLeft:'1100px'}} >
            <Button startIcon={<AddCircleIcon />} color='accent'  onClick={handleClickOpen}>Request Leave</Button>
                  
                <Dialog open={open} onClose={handleClose}>
                  
                  <DialogTitle className='formHeader'>Request Leave</DialogTitle>
                    <DialogContent sx={{marginTop:'5px', width:'600px', height:'1500px'}}>
                      <DialogContentText>
                     <div className="dates">
                     <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Position</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedPosition}
                            label="Select Position"
                            onChange={handleChangePosition}
                    
                          >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>20</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Staff Member</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedStaffMember}
                            label="Select Staff Member"
                            onChange={handleChangeStaffMember}
                    
                          >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>20</MenuItem>
                          </Select>
                        </FormControl>

                     </div>

                     <div className="dates">
                     <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Leave Type</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedLeaveType}
                            label="Select Leave Type"
                            onChange={handleChangeLeaveType}
                    
                          >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>20</MenuItem>
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
                    
                      </DialogContentText>
                    </DialogContent>
                    <div>
                    {renderBalanceTable()}
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
                    </div>
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

