// Import the Snackbar and MuiAlert components from Material-UI.
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

// Import the forwardRef function from React.
import { forwardRef } from 'react';

// Define a type for the SnakbarAlertPropsType.
type SnakbarAlertPropsType = {
    open: boolean
    handleClose: () => void
    duration: number
    data: {
        type: AlertColor,
        message: string
    }

}
// Define the Alert component using forwardRef
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Define the SnakbarAlert component.
function SnakbarAlert({ open, handleClose, duration, data }: SnakbarAlertPropsType) {
    return (
        <>
         {/* Render a Snackbar with the specified properties. */}
            <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
                <Alert onClose={handleClose} severity={data.type} sx={{ width: '100%' }}>
                    {data.message}
                </Alert>
            </Snackbar>
        </>
    )
}

// Export the SnakbarAlert component for use in other parts of the application.
export default SnakbarAlert