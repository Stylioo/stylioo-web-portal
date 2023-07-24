import React, { useState } from "react";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CreateInvoiceForm = () => {
  const [clientName, setClientName] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(clientName, service, price);
  };

  return (
        
    <form onSubmit={handleSubmit}>
         <div className="searchBarWithDate">
                <TextField
                id="outlined-multiline-flexible"
                label="Search"
                multiline
                maxRows={4}
                />
                <div className="bill_date">
                <FormLabel>Bill Date</FormLabel>     
                <TextField
                id="outlined-multiline-flexible"
                label="Date"
                multiline
                maxRows={4}
                />
                </div>
        </div>
      <FormControl>
        <FormLabel>Client Name</FormLabel>
        <TextField
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Service</FormLabel>
        <TextField
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
      </FormControl>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default CreateInvoiceForm;