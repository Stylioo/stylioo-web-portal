import { AlertColor, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import axios from "../../axios"

// Define a type for snack bar alert messages
type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

// Define props type for the DeleteAlert component
type DeleteAlertPropsType = {
    open: boolean // Boolean to control dialog open/close
    handleClose: () => void // Function to handle dialog close
    productId: string // ID of the product to be deleted
    refetch: () => void // Function to trigger data refetch
    handleSankbarShow: (msg: SnakbarAlertMessage) => void // Function to show snack bar alerts
}

function DeleteAlert({ open, handleClose, productId, handleSankbarShow, refetch }: DeleteAlertPropsType) {

    // Function to handle the delete action

    const handleDelete = async () => {
        try {
            // Send a DELETE request to delete the product
            const res = await axios.delete(`/product/${productId}`)
            if (res.data.success) {
                handleSankbarShow({
                    // Show a success message in the snack bar
                    type: "success",
                    message: "Product delete successfully."
                })
                // Trigger a data refetch
                refetch()

                // Close the dialog
                handleClose()
            } else {
                handleSankbarShow({
                    // Show an error message in the snack bar
                    type: "error",
                    message: "Something went wrong."
                })
            }
        } catch (err) {
            console.log(err);
            handleSankbarShow({
                // Show an error message in the snack bar
                type: "error",
                message: "Something went wrong."
            })
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Delete Product
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Do you really want to delete this product?
                    this action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>No</Button>
                <Button onClick={handleDelete}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}

// Export the DeleteAlert component
export default DeleteAlert


// create delete alert component