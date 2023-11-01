import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { AlertColor, Autocomplete, Box, Button, Grid, TextField, Typography } from "@mui/material"
import axios from "../../axios";
import Loading from "../../components/Loading";
import moment from "moment";

type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

type SupplierList = {
    id: string
    name: string
}

type AddStockPropType = {
    setSupplierModal: (value: boolean) => void
    productId: string
    handleModalClose: () => void
    refetch: () => void
    handleSankbarShow: (msg: SnakbarAlertMessage) => void
}

function AddStock({ setSupplierModal, productId, refetch, handleModalClose, handleSankbarShow }: AddStockPropType) {
    // Form input values
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [supplierList, setSupplierList] = useState<SupplierList[]>([])
    const [value, setValue] = useState<SupplierList | null>(supplierList[0]);

    //form values
    const [unitPrice, setUnitPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)
    const [manufacturerDate, setManufacturerDate] = useState<Date | null>()
    const [expiryDate, setExpiryDate] = useState<Date | null>()

        // Handle modal close
    const handleClose = () => {
        handleModalClose()
        setUnitPrice(0)
        setQuantity(0)
        setManufacturerDate(null)
        setExpiryDate(null)
    }
    // Handle save action
    const handleSave = async () => {
        try {
            setIsLoading(true)

            if (!value) {
                handleSankbarShow({
                    type: 'error',
                    message: "All fields are required"
                })
                return
            }
            const res = await axios.post('/stock', {
                product_id: productId,
                unit_price: unitPrice,
                quantity: quantity,
                manufacturer_date: manufacturerDate,
                expiry_date: expiryDate,
                supplier_id: value?.id,
            })

            if (res.data.success) {
                handleSankbarShow({
                    type: "success",
                    message: "Stock added successfully."
                })
                handleModalClose()
                setUnitPrice(0)
                setQuantity(0)
                setManufacturerDate(null)
                setExpiryDate(null)
                refetch()
            } else {
                handleSankbarShow({
                    type: "error",
                    message: "somthing went wrong."
                })
            }
        } catch (err) {
            console.log(err);
            handleSankbarShow({
                type: 'error',
                message: "Something went wrong."
            })
        } finally {
            setIsLoading(false)
        }
    }

        // Fetch the list of suppliers
    const getAllSupplierList = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get('/supplier?nameAndIdOnly=true')
            const result = res.data

            if (result.success) {
                setSupplierList(result.data)
            }
        } catch (err) {
            console.log(err);
            handleSankbarShow({
                type: 'error',
                message: "Something went wrong."
            })
        } finally {
            setIsLoading(false)
        }
    }

        // Fetch suppliers on component mount
    useEffect(() => {
        getAllSupplierList()
    }, [])


    return (
        <>
            <Typography sx={{ mb: 3 }} variant="h6">Add New Stock</Typography>
            {
                isLoading ? <Loading /> :
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Typography sx={{ mb: 3 }} variant="caption">Select the supplier or add a new supplier</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, borderBottom: '1px solid #ccc', pb: 2, mt: 1, mb: 1 }}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={supplierList}
                                        sx={{ width: 500 }}
                                        size="small"
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                            console.log(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth label="Supplier" />}
                                    />
                                    <Button
                                        variant="outlined"
                                        startIcon={<Add />}
                                        onClick={() => setSupplierModal(true)}
                                    >
                                        Add New Supplier
                                    </Button>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Unit Price (LKR)"
                                    size="small"
                                    onChange={(e: any) => setUnitPrice(e.target.value)}
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Quantity"
                                    size="small"
                                    onChange={(e: any) => setQuantity(e.target.value)}
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DatePicker
                                        label="Manufacturer Date"
                                        onChange={(value: any) => setManufacturerDate(value)}
                                        sx={{ width: '100%', }} />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DatePicker
                                        label="Expiry Date"
                                        onChange={(value: any) => setExpiryDate(value)}
                                        sx={{ width: '100%', }} />
                                </LocalizationProvider>
                            </Grid>
                        </Grid >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 2 }}>
                            <Button variant="contained" onClick={handleSave}>Add</Button>
                            <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
                        </Box>
                    </>
            }

        </>
    )
}

export default AddStock

// add new stock modal