import { AlertColor, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import axios from "../../axios"

type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

type DeleteAlertPropsType = {
    open: boolean
    handleClose: () => void
    productId: string
    refetch: () => void
    handleSankbarShow: (msg: SnakbarAlertMessage) => void
}

function DeleteAlert({ open, handleClose, productId, handleSankbarShow, refetch }: DeleteAlertPropsType) {


    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/product/${productId}`)
            if (res.data.success) {
                handleSankbarShow({
                    type: "success",
                    message: "Product delete successfully."
                })
                refetch()
                handleClose()
            } else {
                handleSankbarShow({
                    type: "error",
                    message: "Something went wrong."
                })
            }
        } catch (err) {
            console.log(err);
            handleSankbarShow({
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

export default DeleteAlert


// create delete alert component