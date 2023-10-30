import { useState } from "react";
import { Add } from "@mui/icons-material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { AlertColor, Autocomplete, Box, Button, Chip, Grid, Modal, TextField, Typography } from "@mui/material"
import AddSupplier from "./AddSupplier";
import AddStock from "./AddStock";

// Define a type for snack bar alert messages
type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

 // Define a type for the AddStockModal component's props
type addStockModalPropsType = {
    open: boolean
    handleClose: () => void
    productId: string
    refetch: () => void
    handleSankbarShow: (msg: SnakbarAlertMessage) => void
}

function AddStockModal({ open, handleClose, productId, refetch, handleSankbarShow }: addStockModalPropsType) {
      // Define the modal style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        minHeight: 300,
        minWidth: 700,
        borderRadius: 1,
        p: 3,
    };

  // State to control the display of the Add Supplier page
    const [addSupplierPage, setAddSupplierPage] = useState<boolean>(false)

// Function to open the Add Supplier page
    const openAddSupplierPage = () => {
        setAddSupplierPage(true)
    }

  // Function to open the Add Stock page
    const openAddStockPage = () => {
        setAddSupplierPage(false)
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
                    {
                        addSupplierPage ? <AddSupplier setSupplierModal={setAddSupplierPage} handleSankbarShow={handleSankbarShow} /> : <AddStock setSupplierModal={setAddSupplierPage} productId={productId} refetch={refetch} handleModalClose={handleClose} handleSankbarShow={handleSankbarShow} />
                    }
                </Box>

            </Modal >
        </>
    )
}

// Export the AddStockModal component

export default AddStockModal

// add stock model 