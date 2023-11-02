// Importing necessary dependencies and components

import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { Add } from "@mui/icons-material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
// import AddQualificationModal from "./AddQualificationModal"
import moment from "moment"
import axios from "../../axios"
import { useParams } from "react-router-dom"
import Loading from '../../components/Loading'

// ViewStaff component to display staff details

function ViewStaff() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const params = useParams()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [staff, setStaff] = useState<any>({})

    const [qualifications, setQualifications] = useState<any>([])
    const [addQualificationModalOpen, setAddQualificationModalOpen] = useState<boolean>(false)

    // Open the qualification modal

    const handleQualificationModalOpen = () => {
        setAddQualificationModalOpen(true)
    }
    // Close the qualification modal

    const handleQualificationModalClose = () => {
        setAddQualificationModalOpen(false)
    }

    // Fetch staff details

    const getStaff = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(`/employee/${params.id}`)
            if (res.data.success) {
                setStaff(res.data.data)
            }
            else {
                setError(res.data.error)
            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    // Fetch staff details when the component mounts

    useEffect(() => {
        getStaff()
    }, [])

    return (
        <>
            {/* <AddQualificationModal
                open={addQualificationModalOpen}
                handleClose={handleQualificationModalClose}
                qualifications={qualifications}
                setQualification={setQualifications}
            /> */}
            {
                isLoading ? <Loading /> : <>
                    <Box sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item sm={12} lg={6}>
                                <Box>
                                    <Typography variant='h6' sx={{ mb: 3, fontWeight: '500' }}>
                                        Persional Details
                                    </Typography>
                                    <Grid
                                        container spacing={2}
                                    >
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <Select
                                                        variant="outlined"
                                                        size="small"
                                                        defaultValue={staff?.salutation}
                                                        name="salutation"
                                                        value={staff?.salutation}
                                                        required
                                                        readOnly
                                                    >
                                                        <MenuItem value='Mr'>Mr</MenuItem>
                                                        <MenuItem value='Ms'>Ms</MenuItem>
                                                        <MenuItem value='Mrs'>Mrs</MenuItem>
                                                    </Select>
                                                    <TextField
                                                        label="First Name"
                                                        variant="outlined"
                                                        size="small"
                                                        name="first_name"
                                                        value={staff?.first_name}
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                        sx={{ mb: 2, flexGrow: 1 }} />
                                                </Box>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="Last Name"
                                                    variant="outlined"
                                                    size="small"
                                                    name="last_name"
                                                    value={staff?.last_name}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ mb: 2 }} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="Contact Number"
                                                    variant="outlined"
                                                    size="small"
                                                    name="contact_no"
                                                    value={staff?.contact_no}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ mb: 2 }} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="Email Address"
                                                    variant="outlined"
                                                    size="small"
                                                    name="email"
                                                    value={staff?.email}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ mb: 2 }} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                                    <DatePicker
                                                        value={moment(staff?.date_of_birth)}
                                                        label="Date Of Birth"
                                                        readOnly
                                                        sx={{ width: '100%', }}
                                                    />
                                                </LocalizationProvider>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    label="Gender"
                                                    name="gender"
                                                    value={staff?.gender}
                                                    readOnly
                                                // size="small"
                                                >
                                                    <MenuItem value='Male'>Male</MenuItem>
                                                    <MenuItem value='Female'>Female</MenuItem>
                                                    <MenuItem value='Rather no to say'>Rather no to say</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box>
                                    <Typography variant='h6' sx={{ mt: 4, mb: 3, fontWeight: '500' }}>
                                        Residential Address
                                    </Typography>
                                    <Grid
                                        container spacing={2}
                                    >
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="Address Line 1"
                                                    variant="outlined"
                                                    size="small"
                                                    name="address_line_1"
                                                    value={staff?.address_line_1}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ mb: 2 }} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="Address Line 2"
                                                    variant="outlined"
                                                    size="small"
                                                    name="address_line_2"
                                                    value={staff?.address_line_2}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ mb: 2 }} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="City"
                                                    variant="outlined"
                                                    size="small"
                                                    name="city"
                                                    value={staff?.city}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ mb: 2 }} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="District"
                                                    variant="outlined"
                                                    size="small"
                                                    name="district"
                                                    value={staff?.district}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ mb: 2 }} />
                                            </FormControl>
                                        </Grid>

                                        {/* <Grid item xs={12} lg={6}>
                                </Grid>
                                <Grid item xs={12} lg={6}>

                                </Grid> */}

                                    </Grid>
                                </Box>
                            </Grid>

                            {/* profile picture`` */}
                            <Grid item sm={12} lg={6}>

                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '1rem',
                                }}>

                                    <Box sx={{
                                        width: '300px',
                                        height: '300px',
                                        border: '2px dashed #ccc',
                                        borderRadius: '100%',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}
                                    >
                                        <img style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }} src={
                                            staff.image ? `https://stylioo.blob.core.windows.net/images/${staff.image}` : "https://stylioo.blob.core.windows.net/images/black-profile-pic.svg"
                                        } />

                                        {/* <Box sx={{
                                            backgroundColor: '#00000070',
                                            // opacity: '0.3',
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '0',
                                            right: '0',
                                            height: '70px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            zIndex: 10
                                        }}>

                                            <Button variant="text" sx={{ color: '#fff', cursor: 'pointer' }} onClick={() => fileRef.current?.click()}>
                                                <CameraAltRounded />
                                            </Button>
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>



                        <Box>
                            <Typography variant='h6' sx={{ mt: 4, mb: 3, fontWeight: '500' }}>
                                Qualifications and Skills
                            </Typography>
                            <Box>
                                {
                                    (staff.qualifications && staff?.qualifications.length > 0) ?
                                        <TableContainer
                                            sx={{ mb: 3 }}
                                        >
                                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell >Qualification</TableCell>
                                                        <TableCell>Institute</TableCell>
                                                        <TableCell>Start Date</TableCell>
                                                        <TableCell>End Date</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {staff?.qualifications.map((qual: any, index: number) => (
                                                        <TableRow
                                                            key={index}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {qual.qualification}
                                                            </TableCell>
                                                            <TableCell>{qual.institute}</TableCell>
                                                            <TableCell>{moment(qual.startDate).format('YYYY-MM-DD')}</TableCell>
                                                            <TableCell>{moment(qual.endDate).format('YYYY-MM-DD')}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>

                                        </TableContainer>
                                        :
                                        <Typography variant='body1' sx={{ mb: 3, fontWeight: '500' }}>
                                            No Qualifications found
                                        </Typography>

                                }
                                {/* <Button
                                    variant='contained'
                                    sx={{ mr: 2, mb: 2 }}
                                    startIcon={<Add />}
                                    onClick={handleQualificationModalOpen}
                                >Add Qualification</Button> */}

                            </Box>
                        </Box>

                        <Box>
                            <Typography variant='h6' sx={{ mt: 4, mb: 3, fontWeight: '500' }}>
                                Employment Details
                            </Typography>
                            <Grid container spacing={2} sx={{
                                // width: isMobile ? '100%' : '60%',
                            }}>
                                <Grid item xs={12} lg={3}>
                                    <FormControl fullWidth>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                label="Date Of Join"
                                                value={moment(staff?.date_of_join)}
                                                readOnly
                                                sx={{ width: '100%', }}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                </Grid>
                                {/* <Grid item xs={12} lg={3}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            label="Role"
                                            name="role"
                                            value={staff?.role}
                                            readOnly
                                        // size="small"
                                        >
                                            <MenuItem value='Beautician'>Beautician</MenuItem>
                                            <MenuItem value='Receptionist'>Receptionist</MenuItem>
                                            <MenuItem value='Manager'>Manager</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid> */}
                                <Grid item xs={12} lg={6}>
                                    {/* <Box sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        height: '100%',
                                        ml: 4
                                    }}>
                                        <Button
                                            variant='contained'
                                            sx={{ mr: 2, mb: 0 }}
                                            startIcon={<Add />}
                                        >Add Role</Button>
                                    </Box> */}
                                </Grid>
                            </Grid>
                        </Box>


                        {/* <Box>
                            <Typography variant='h6' sx={{ mt: 4, mb: 3, fontWeight: '500' }}>
                                Permissions
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="View Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Add Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Update Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Delete Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="View Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Add Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Update Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Delete Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="View Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Add Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Update Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Delete Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="View Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Add Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Update Inventory" />
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <FormControlLabel required control={<Checkbox />} label="Delete Inventory" />
                                </Grid>
                            </Grid>
                        </Box> */}


                        <Box>
                            <Typography variant='h6' sx={{ mt: 6, mb: 3, fontWeight: '500' }}>
                                Salary Details
                            </Typography>

                            <Grid container spacing={2} sx={{
                                width: isMobile ? '100%' : '60%',
                            }}>
                                <Grid item xs={12} lg={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Fixed Salary"
                                            variant="outlined"
                                            size="small"
                                            name="fixed_salary"
                                            value={staff?.fixed_salary}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ mb: 2 }} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Commission"
                                            variant="outlined"
                                            size="small"
                                            name="commission"
                                            value={staff?.commission}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ mb: 2 }} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Hourly Charge Rate"
                                            variant="outlined"
                                            size="small"
                                            name="hourly_charge_rate"
                                            value={staff?.hourly_charge_rate}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ mb: 2 }} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            label="Working Hours"
                                            variant="outlined"
                                            size="small"
                                            name="working_hours"
                                            value={staff?.working_hours}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ mb: 2 }} />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>


                        {/* <Box sx={{
                            display: 'flex',
                            mt: 4,
                            mb: 6
                        }}>
                            <Button
                                variant="contained"
                                onClick={handleSave}
                            >Save</Button>
                        </Box> */}
                    </Box >
                </>
            }
        </>
    )
}

export default ViewStaff


// view all staff details 