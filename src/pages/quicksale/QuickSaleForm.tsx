import React, { useState } from "react";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { OutlinedInput } from "@mui/material";
import "../../styles/receptionist/form.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../../theme.tsx"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function createData(
  name: string,
  calories: number,
) {
  return { name, calories};
}

const rows = [
  createData('Sub Total', 12000),
  createData('Grand Total', 12000),
  createData('Paying Now', 
   <OutlinedInput
  id="outlined-adornment-amount" />),
  createData('Due Amount', 12000)
];


const CreateInvoiceForm = () => {
  const [open, setOpen] = React.useState(false);
  const [clientName, setClientName] = useState("");
  const [contact, setContact] = useState("");
  const [extraCharges, setExtraCharges] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = React.useState('');
  
// Additional state variables for form fields
const [isAddServiceClicked, setIsAddServiceClicked] = useState(false);


// Function to update selectedDate and selectedTime in the main page's state

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(clientName, contact );
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDiscountType(event.target.value as string);
  };

  const handleClickService = () => {
    setOpen(true);
    setIsAddServiceClicked(true); // Set the state to true when the button is clicked
  };

  const handleClose = () => {
    setOpen(false);
    setIsAddServiceClicked(false); // Reset the state to false when the dialog is closed
  };
 
  return (
        
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Create Invoice</h1>
      </div>
         <div className="searchBarWithDate">
         <FormLabel className="Search"
                sx={{color:"black"}}>Search</FormLabel>   
                <TextField
                className="searchBar"
                id="outlined-multiline-flexible"
                label="Search by Name/Contact/Address"
                color="darkPrimary"
                multiline
                maxRows={4}
                />
                
                <div className="labelforDate">
                
                <FormLabel className="bill_date"
                sx={{color:"black"}}>Bill Date</FormLabel>     
                <TextField
                className="date"
                id="outlined-multiline-flexible"
                label="Date"
                color="darkPrimary"
                multiline
                maxRows={4}
                />
                </div>
        </div>
  <div className="otherDetails">
    <div className="clientDetails">
     <FormLabel className="client_name_label"
                sx={{color:"black"}}>Client Name</FormLabel>
        <TextField
          className="clientName"
          label="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      
        <FormLabel className="contactNoLable" sx={{color:"black"}}>Contact No</FormLabel>
        <TextField
          className="contact"
          label="Contact No"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />     
     </div>
      <div className="btn-class">
        <Button startIcon={<AddCircleIcon />} color='accent' variant="contained" onClick={handleClickService}>Add Service</Button>
        {/* <div className="service">
            <FormLabel sx={{ color: "black" }}>Extra </FormLabel>
            <TextField
              className="Extra "
              label="Extra Charges"
              value={extraCharges}
              onChange={(e) => setExtraCharges(e.target.value)}
            />
          </div> */}
        <Button startIcon={<AddCircleIcon />} color='accent' variant="contained">Add Package</Button>
        <Button startIcon={<AddCircleIcon />} color='accent' variant="contained">Add Offers</Button>
        <Button startIcon={<AddCircleIcon />} color='accent' variant="contained">Add Membership</Button>
        </div>
        <div className="charges">
     
     <FormLabel 
                sx={{color:"black"}}>Extra Charges</FormLabel>
        <TextField
          className="Extra Charges"
          label="Extra Charges"
          value={extraCharges}
          onChange={(e) => setExtraCharges(e.target.value)}
        />
      
      <FormLabel 
                sx={{color:"black"}}>Discount</FormLabel>
        <TextField
          className="Discount"
          label="Discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      
  <InputLabel id="demo-simple-select-label" sx={{color:"black"}}>Discount Type</InputLabel>
  <Select
  sx={{ m: 1, minWidth: 200 , height: 55}}
    className="discountType"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={discountType}
    label="Discount Type"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

     </div>


<div className="table">
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Amount (LKR.)</TableCell>
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
              <TableCell align="right" className="amoutnDetails">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>



     <div className="btn-class2">
     <Button variant="outlined">
     Reset
      </Button>
      <Button variant="contained" className="successbtn" color="success">
        Generate Bill
      </Button>
     </div>
    </div>
    </form>
  );
};

export default CreateInvoiceForm;