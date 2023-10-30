import { ChangeEvent, useState } from "react";

import { Alert, AlertColor, Box, Button, Grid, Snackbar, TextField, Typography } from "@mui/material"
import axios from "../../axios"; // Import axios for making HTTP requests
import Loading from "../../components/Loading";

// Define a type for snack bar alert messages
type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

 // Define a type for a Supplier object
type Supplier = {
    name: string,
    contact_no: string,
    email: string,
    address_line_1: string,
    address_line_2: string
}

function AddSupplier({ setSupplierModal, handleSankbarShow }: { setSupplierModal: (value: boolean) => void, handleSankbarShow: (msg: SnakbarAlertMessage) => void }) {

  // Define state variables

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    // Initialize the data state with an empty Supplier object
    const [data, setData] = useState<Supplier>({ name: '', contact_no: '', email: '', address_line_1: '', address_line_2: '' })

      // Function to handle the cancel action
    const handleCancel = () => {
        setSupplierModal(false)
        // Reset the data to its initial empty state
        setData({ name: '', contact_no: '', email: '', address_line_1: '', address_line_2: '' })
    }

      // Function to handle text input changes

    const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

      // Function to handle the save action
    const handleSave = async () => {
        setIsLoading(true)
        try {
            const result = await axios.post('/supplier', data)

            if (result.data.success) {
                handleSankbarShow({
                    type: "success",
                    message: "Supplier added successfully."
                    // Show a success message in the snack bar
                })
                setSupplierModal(false)
            } else {
                handleSankbarShow({
                    type: "error",
                    message: "somthing went wrong."
                    // Show an error message in the snack bar
                })
            }

        } catch (error: any) {
            console.log(error.message)
            setError(error.message)
            handleSankbarShow({
                type: "error",
                message: "somthing went wrong."
                // Show an error message in the snack bar
            })
        } finally {
            setIsLoading(false)
            // Reset the data to its initial empty state
            setData({ name: '', contact_no: '', email: '', address_line_1: '', address_line_2: '' })
        }

    }

    return (
        <>

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6">Add New Supplier</Typography>
                <Typography variant="caption">Enter the details of the supplier</Typography>
            </Box>
            {
                isLoading ? <Loading /> :
                    <>
                        <Grid container columnSpacing={1} rowSpacing={2}>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    label="Supplier Name"
                                    size="small"
                                    value={data?.name}
                                    onChange={handleTextInput}
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    name="contact_no"
                                    label="Contact Number"
                                    size="small"
                                    value={data?.contact_no}
                                    onChange={handleTextInput}
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    size="small"
                                    value={data?.email}
                                    onChange={handleTextInput}
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    name="address_line_1"
                                    label="Address Line 1"
                                    size="small"
                                    value={data?.address_line_1}
                                    onChange={handleTextInput}
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    name="address_line_2"
                                    label="Address Line 2"
                                    size="small"
                                    value={data?.address_line_2}
                                    onChange={handleTextInput}
                                    variant="outlined" />
                            </Grid>
                        </Grid >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 2 }}>
                            <Button variant="contained" onClick={handleSave}>Add</Button>
                            <Button variant="outlined" color="secondary"
                                onClick={handleCancel}
                            >Cancel</Button>
                        </Box>
                    </>
            }
        </>
    )
}

 // Export the AddSupplier component
export default AddSupplier

// add supplier 