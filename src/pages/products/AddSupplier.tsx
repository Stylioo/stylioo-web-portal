import { ChangeEvent, useState } from "react";

import { Alert, AlertColor, Box, Button, Grid, Snackbar, TextField, Typography } from "@mui/material"
import axios from "../../axios";
import Loading from "../../components/Loading";

type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

type Supplier = {
    name: string,
    contact_no: string,
    email: string,
    address_line_1: string,
    address_line_2: string
}

function AddSupplier({ setSupplierModal, handleSankbarShow }: { setSupplierModal: (value: boolean) => void, handleSankbarShow: (msg: SnakbarAlertMessage) => void }) {


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const [data, setData] = useState<Supplier>({ name: '', contact_no: '', email: '', address_line_1: '', address_line_2: '' })

    const handleCancel = () => {
        setSupplierModal(false)
        setData({ name: '', contact_no: '', email: '', address_line_1: '', address_line_2: '' })
    }

    const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const handleSave = async () => {
        setIsLoading(true)
        try {
            const result = await axios.post('/supplier', data)

            if (result.data.success) {
                handleSankbarShow({
                    type: "success",
                    message: "Supplier added successfully."
                })
                setSupplierModal(false)
            } else {
                handleSankbarShow({
                    type: "error",
                    message: "somthing went wrong."
                })
            }

        } catch (error: any) {
            console.log(error.message)
            setError(error.message)
            handleSankbarShow({
                type: "error",
                message: "somthing went wrong."
            })
        } finally {
            setIsLoading(false)
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

export default AddSupplier