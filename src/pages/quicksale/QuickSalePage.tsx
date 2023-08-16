import * as React from 'react';
import { useState } from 'react';
import '../../styles/receptionist/index.scss';
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
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Link } from 'react-router-dom'; 
import QuickSaleForm from './QuickSaleForm';


const columns: GridColDef[] = [

  { field: 'Name', headerName: 'Name', width: 150 },
  { field: 'Contact', headerName: 'Contact', width: 130 },
  { field: 'BillNo', headerName: 'Bill No', width: 70 },
  { field: 'Services', headerName: 'Services', width: 130 },
  { field: 'PricePaidBalance', headerName: 'Price/Paid/Balance', width: 170 },
  { field: 'Date', headerName: 'Date', width: 150 },
  { field: 'FeedbackRatings', headerName: 'Feedback/Ratings', width: 150 },
  { field: 'Status', headerName: 'Status', width: 130 },

  {
    field: 'Actions',
    headerName: 'Actions',
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
  { 
  id:1,
  Name: 'Oshadi Dilthara',
  Contact: '0771234567',
  BillNo: '001',
  Services: 'Long Hair cut',
  PricePaidBalance: 'Rs.1500.00',
  Date: '2023-08-04',
  FeedbackRatings: 'Good',
  Status: 'Paid'
 },


 { 
  id:2,
  Name: 'Yasithra Gimhani',
  Contact: '0777834567',
  BillNo: '002',
  Services: 'Hair Color',
  PricePaidBalance: 'Rs.5000.00',
  Date: '2023-08-05',
  FeedbackRatings: 'Good',
  Status: 'Paid'
 },


 { 
  id:3,
  Name: 'Nirmala Promodi',
  Contact: '0771234569',
  BillNo: '003',
  Services: 'Hair Cut',
  PricePaidBalance: 'Rs.1000.00',
  Date: '2023-08-06',
  FeedbackRatings: 'None',
  Status: 'Paid'
 },

 { 
  id:4,
  Name: 'Oshaani Peris',
  Contact: '0771774567',
  BillNo: '004',
  Services: 'Long Hair cut',
  PricePaidBalance: 'Rs.1500.00',
  Date: '2023-08-07',
  FeedbackRatings: 'None',
  Status: 'Paid'
 },

 { 
  id:5,
  Name: 'Kaveesha Thathsarani',
  Contact: '0751234767',
  BillNo: '005',
  Services: 'Short Hair cut',
  PricePaidBalance: 'Rs.900.00',
  Date: '2023-08-10',
  FeedbackRatings: 'None',
  Status: 'Paid'
 }
  
];


export default function QuickSalePage() {
  return (
    <React.Fragment>
    <Box sx={{ width: '100%'}}>
       <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ marginTop: '20px', marginLeft:'1133.5px'}} >
            <Button startIcon={<ReceiptIcon />} color='accent' component={Link} to="/receptionist/quick-sale-form">QuickSale</Button>     
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
    
    </Box>
    </React.Fragment>
  );


  
}

