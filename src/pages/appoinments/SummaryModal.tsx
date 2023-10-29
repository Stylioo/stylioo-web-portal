import Loading from '@/components/Loading'
import formatNumber from '@/utils/formatNumber'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'

function SummaryModal({ isOpenSummayModal, closeSummaryModal, selectedRow, isLoading }: { isOpenSummayModal: boolean, closeSummaryModal: () => void, selectedRow: any, isLoading: boolean }) {
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
                    minHeight: 300,
                    minWidth: 1000,
                    borderRadius: 1,
                    p: 3,
                    outline: 'none',
                }}
            >
                <Typography variant='h6' sx={{ mb: 1, fontWeight: '500' }}>
                    Appointment Summary
                </Typography>
                {
                    isLoading ? <Loading /> :
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
                                        <Typography variant='body1' sx={{ fontWeight: '500' }}>{selectedRow?.date}</Typography>
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
                                        <Grid item sm={6} lg={6}></Grid>
                                        <Grid item sm={6} lg={6}>
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
                                                    borderBottom: '1px solid #ccc',
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
                                            <Box
                                                sx={{
                                                    mt: 1,
                                                    px: 2,
                                                    py: 1,
                                                    // border: '1px solid #ccc',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography
                                                    variant='body1'
                                                    sx={{ fontWeight: 500 }}
                                                >Sub Total :</Typography>
                                                <Typography
                                                    sx={{ fontWeight: 500 }}
                                                    variant='body1'
                                                >LKR {formatNumber(parseFloat(selectedRow?.total_price) - parseFloat(selectedRow?.advanced_payment_amount))}</Typography>
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
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <Button
                                    variant='outlined'
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