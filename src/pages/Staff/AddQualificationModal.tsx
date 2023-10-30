// Importing necessary dependencies and components
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { AlertColor, Autocomplete, Box, Button, Chip, FormControl, Grid, Modal, TextField, Typography } from "@mui/material"
import moment from "moment";

// Defining a type for the alert message

type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

// Defining props for the AddQualificationModal component

type addQualificationModalProps = {
    open: boolean
    handleClose: () => void
    qualifications: any[]
    setQualification: (qualification: any) => void
}

// Creating the AddQualificationModal component

function AddQualificationModal({ open, handleClose, qualifications, setQualification }: addQualificationModalProps) {

        // Styling for the modal

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        minHeight: 300,
        maxWidth: 700,
        borderRadius: 1,
        p: 3,
    };

        // State variables to manage form inputs

    const [title, setTitle] = useState<string>('')
    const [institute, setInstitute] = useState<string>('')
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    // Function to close the modal

    const handleModalClose = () => {
        setTitle('')
        setInstitute('')
        setStartDate(null)
        setEndDate(null)
        handleClose()
    }
    // Function to save the qualification

    const handleSave = () => {
        if (title.length === 0 || institute.length === 0 || startDate === null || endDate === null) {
            return
        }
        // Create a qualification object with input values

        const qualification = {
            qualification: title,
            institute: institute,
            start_date: new Date(startDate),
            end_date: new Date(endDate)
        }
        // Add the qualification to the list of qualifications and close the modal

        setQualification([...qualifications, qualification])
        handleModalClose()
    }

        // JSX code for the modal component

    return (
        <>
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={[style, {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }]}>
                    <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
                        Add New Qualification
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Qualification"
                                    variant="outlined"
                                    size="small"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Institute"
                                    variant="outlined"
                                    size="small"
                                    value={institute}
                                    onChange={(e) => setInstitute(e.target.value)}

                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DatePicker
                                        label="start Date"
                                        sx={{ width: '100%', }}
                                        onChange={(value: any) => setStartDate(value)}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DatePicker
                                        label="End Date"
                                        sx={{ width: '100%', }}
                                        onChange={(value: any) => setEndDate(value)}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'flex-end'

                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, mr: 2 }}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ mt: 2 }}
                            onClick={handleModalClose}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>

            </Modal >
        </>
    )
}

// Exporting the AddQualificationModal component

export default AddQualificationModal


// adding qualifications to the staff member