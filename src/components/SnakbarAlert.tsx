import { Snackbar } from '@mui/material';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';

type SnakbarAlertPropsType = {
    open: boolean
    handleClose: () => void
    duration: number
    data: {
        type: AlertColor,
        message: string
    }

}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnakbarAlert({ open, handleClose, duration, data }: SnakbarAlertPropsType) {
    return (
        <>
            <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
                <Alert onClose={handleClose} severity={data.type} sx={{ width: '100%' }}>
                    {data.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default SnakbarAlert