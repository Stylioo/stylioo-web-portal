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
  { field: 'Price/Paid/Balance', headerName: 'Price/Paid/Balance', width: 170 },
  { field: 'Date', headerName: 'Date', width: 150 },
  { field: 'Feedback/Ratings', headerName: 'Feedback/Ratings', width: 150 },
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


export default function QuickSalePage() {
  return (
    <React.Fragment>
    <Box sx={{ width: '100%'}}>
       <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ marginTop: '20px', marginLeft:'1133.5px'}} >
            <Button startIcon={<ReceiptIcon />} color='accent' component={Link} to="/quick-sale-form">QuickSale</Button>     
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

