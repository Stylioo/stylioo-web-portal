import { AlertColor, Box, Button, Grid, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import TextArea from "../../components/TextArea"
import Loading from "../../components/Loading"
import axios from "../../axios"

type AddNewProductModalPropsType = {
    open: boolean
    handleClose: () => void
    refetch: () => void
    handleSankbarShow: (msg: SnakbarAlertMessage) => void
}

type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

function AddNewProductModal({ open, handleClose, handleSankbarShow, refetch }: AddNewProductModalPropsType) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 1,
        p: 4,
    };

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [data, setData] = useState({ name: '', brand: '', low_stock_quantity: '', category: '', type: '', volume: '', volume_unit: '', description: '' })
    const handleDataInput = (e: any) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleCancel = () => {
        setData({ name: '', brand: '', low_stock_quantity: '', category: '', type: '', volume: '', volume_unit: '', description: '', })
        handleClose()
    }

    const handleSave = async () => {
        if (!data.name || !data.category || !data.brand || !data.low_stock_quantity || !data.type || !data.volume || !data.volume_unit) {
            handleSankbarShow({
                type: "error",
                message: "All Fields are required."
            })
            return
        }

        setIsLoading(true)
        try {
            const res = await axios.post('/product', data)
            if (res.data.success) {
                console.log("added", res.data);
                handleCancel()
                refetch()
                handleSankbarShow({
                    type: "success",
                    message: "Product added successfully."
                })
            } else {
                handleSankbarShow({
                    type: "error",
                    message: "Something when wrong."
                })
            }

        } catch (err) {
            console.log(err);

        } finally {
            setIsLoading(false)
        }

        console.log(data);

    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6">Add New Product</Typography>
                        {/* <Typography variant="caption">Enter the details of the supplier</Typography> */}
                    </Box>
                    {
                        isLoading ? <Loading /> :
                            <>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            fullWidth
                                            name="name"
                                            label="Product Name"
                                            size="small"
                                            onChange={handleDataInput}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            name="brand"
                                            label="Brand"
                                            size="small"
                                            onChange={handleDataInput}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            name="low_stock_quantity"
                                            label="Low stock level"
                                            size="small"
                                            onChange={handleDataInput}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            name="category"
                                            label="Category"
                                            size="small"
                                            onChange={handleDataInput}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            name="type"
                                            label="Type"
                                            size="small"
                                            onChange={handleDataInput}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            name="volume"
                                            label="Volume"
                                            size="small"
                                            onChange={handleDataInput}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            name="volume_unit"
                                            label="Volume Unit"
                                            size="small"
                                            onChange={handleDataInput}
                                            variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextArea
                                            label="Description"
                                            name="description"
                                            defaultValue={data.description}
                                            height="4rem"
                                            disabled={false}
                                            onChange={handleDataInput}
                                        />
                                    </Grid>

                                </Grid >
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 2 }}>
                                    <Button variant="contained" onClick={handleSave}> Add</Button>
                                    <Button variant="outlined" color="secondary" onClick={handleCancel}> Cancel</Button>
                                </Box>
                            </>
                    }
                </Box>

            </Modal >
        </>
    )
}

export default AddNewProductModal