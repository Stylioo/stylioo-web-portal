import axios from '@/axios'
import Loading from '@/components/Loading'
import formatNumber from '@/utils/formatNumber'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Modal, Typography } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'

function SummaryModal({ isOpenSummayModal, closeSummaryModal, selectedRow, isLoading, refetch }: { isOpenSummayModal: boolean, closeSummaryModal: () => void, selectedRow: any, isLoading: boolean, refetch: () => void }) {

    const [isModalLoading, setIsModalLoading] = useState(false)

    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false)

    const pay = async () => {
        setIsModalLoading(true)
        try {
            const res = await axios.patch(`/appointment/status/${selectedRow?.id}`, {
                status: 'paid'
            })
            if (res.data.success) {
                closeSummaryModal()
                // alert("Appointmet has been successfully completed")
            } else {
                alert("Something went wrong")
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsModalLoading(false)
            setIsOpenDeleteDialog(false)
            refetch()
        }
    }

    const [isOpenCancelDialog, setIsOpenCancelDialog] = useState(false)

    const cancelAppointment = async () => {
        setIsModalLoading(true)
        try {
            const res = await axios.patch(`/appointment/status/${selectedRow?.id}`, {
                status: 'canceled'
            })
            if (res.data.success) {
                closeSummaryModal()
                // alert("Appointmet has been successfully completed")
            } else {
                alert("Something went wrong")
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsModalLoading(false)
            setIsOpenDeleteDialog(false)
            refetch()
        }
    }

    return (
        <Modal
            open={isOpenSummayModal}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    minHeight: 400,
                    minWidth: 1000,
                    borderRadius: 1,
                    p: 3,
                    outline: 'none',
                }}
            >
                <Dialog
                    open={isOpenCancelDialog}
                    onClose={() => setIsOpenCancelDialog(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Cancel Appointment
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you really want to cancel this appointment?
                            this action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => setIsOpenCancelDialog(false)}
                            autoFocus>No</Button>
                        <Button
                            onClick={cancelAppointment}
                        >
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={isOpenDeleteDialog}
                    onClose={() => setIsOpenDeleteDialog(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Paid & Complete
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you really want to mark this appointment as paid & complete?
                            this action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => setIsOpenDeleteDialog(false)}
                            autoFocus>No</Button>
                        <Button
                            onClick={pay}
                        >
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>


                <Typography variant='h6' sx={{ mb: 1, fontWeight: '500' }}>
                    Appointment Summary
                </Typography>
                {
                    isModalLoading || isLoading ? <Loading /> :
                        <>
                            <Box>
                                <Grid container spacing={1}
                                    sx={{
                                        mt: 1
                                    }}
                                >
                                    <Grid item xs={12} md={6} lg={3}>
                                        <Typography variant='caption'>Customer Name</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '500' }}>{selectedRow?.customer.first_name} {selectedRow?.customer?.last_name}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <Typography variant='caption'>Contact Number</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '500' }}>{selectedRow?.customer?.contact_no}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Typography variant='caption'>Residencial Address</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '500' }}>{selectedRow?.customer?.address_line_1} {selectedRow?.customer?.address_line_1} {selectedRow?.customer?.city}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <Typography variant='caption'>Appointment Date</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '500' }}>{moment(selectedRow?.appointment_date).format('YYYY-MM-DD')}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>

                                        <Typography variant='caption'>Appointment Time</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '500' }}>{selectedRow?.start_time}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Typography variant='caption'>Beautician</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '500' }}>
                                            {selectedRow?.beautician === '' ? 'No Preference' : `${selectedRow?.beautician?.first_name} ${selectedRow?.beautician?.last_name}`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Box
                                    sx={{
                                        mt: 3
                                    }}
                                >

                                    <Grid container sx={{
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                    }}>
                                        {
                                            selectedRow?.service && selectedRow.service.length > 0 && selectedRow.service.map((selectedService: any) => (
                                                <>
                                                    <Grid item sm={6} lg={8}
                                                        sx={{
                                                            px: 2,
                                                            py: 1,
                                                            border: '1px solid #ccc',
                                                        }}
                                                    >
                                                        {selectedService.name}
                                                    </Grid>
                                                    <Grid item sm={6} lg={4}
                                                        sx={{
                                                            px: 2,
                                                            py: 1,
                                                            border: '1px solid #ccc',
                                                        }}
                                                    >
                                                        {selectedService.price === 0 ? "Free" : `LKR ${formatNumber(selectedService.price)}`}
                                                    </Grid >
                                                </>
                                            ))
                                        }
                                    </Grid>
                                    <Grid container sx={{
                                        mt: 4,
                                        mb: 4
                                    }}>
                                        <Grid item sm={6} lg={6}>
                                            <Box
                                                sx={{
                                                    // mt: 1,
                                                    px: 2,
                                                    py: 1,
                                                    // border: '1px solid #ccc',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'flex-start',
                                                }}
                                            >
                                                <Typography
                                                    variant='body1'
                                                    sx={{ fontWeight: 400 }}
                                                >Sub Total :</Typography>
                                                <Typography
                                                    sx={{ fontWeight: 500 }}
                                                    variant='h4'
                                                >LKR {formatNumber(parseFloat(selectedRow?.total_price) - parseFloat(selectedRow?.advanced_payment_amount))}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={6} lg={6}>
                                            <Box
                                                sx={{
                                                    px: 2,
                                                    py: 1,
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography
                                                    variant='body1'
                                                    sx={{ fontWeight: 500 }}
                                                >Total :</Typography>
                                                <Typography
                                                    sx={{ fontWeight: 500 }}
                                                    variant='body1'
                                                >LKR {formatNumber(parseFloat(selectedRow?.total_price))}</Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    px: 2,
                                                    py: 1,
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    mb: 1
                                                }}
                                            >
                                                <Typography
                                                    variant='body1'
                                                    sx={{ fontWeight: 500 }}
                                                >Advance Amount :</Typography>
                                                <Typography
                                                    sx={{ fontWeight: 500 }}
                                                    variant='body1'
                                                >LKR {formatNumber(parseFloat(selectedRow?.advanced_payment_amount))}</Typography>
                                            </Box>

                                        </Grid>

                                    </Grid>

                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    mt: 2,
                                    display: 'flex',
                                    gap: 2,
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-end',
                                }}
                            >
                                {
                                    selectedRow?.status === 'pending' ?
                                        <>
                                            <Button

                                                variant='contained'
                                                color='error'
                                                onClick={() => setIsOpenDeleteDialog(true)}
                                            >
                                                Paid & Complete
                                            </Button>
                                            <Button
                                                sx={{
                                                    mr: 'auto'
                                                }}
                                                variant='outlined'
                                                // color='error'
                                                onClick={() => setIsOpenCancelDialog(true)}
                                            >
                                                Cancel Appointment
                                            </Button>
                                        </>

                                        :
                                        <Box
                                            sx={{
                                                width: '60%',
                                                py: 1,
                                                px: 2,
                                                borderRadius: 1,
                                                backgroundColor: selectedRow?.status === 'paid' ? 'success.main' : 'error.main',
                                                mr: 'auto'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    mr: 'auto',
                                                    color: '#fff'
                                                }}
                                                variant='body1'
                                            >

                                                {
                                                    selectedRow?.status === 'paid' ? 'This appointment has been completed.' : 'This appointment has been canceled.'
                                                }

                                            </Typography>
                                        </Box>
                                }
                                {/* {
                                    selectedRow?.status === 'pending' &&
                                   
                                } */}
                                <Button
                                    variant='contained'
                                    onClick={closeSummaryModal}
                                >
                                    Close
                                </Button>
                            </Box>
                        </>
                }

            </Box>

        </Modal >
    )
}

export default SummaryModal