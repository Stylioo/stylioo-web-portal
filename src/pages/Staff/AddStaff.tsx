import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { Add, CameraAltRounded, Close } from "@mui/icons-material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import AddQualificationModal from "./AddQualificationModal"
import moment from "moment"
import { useFileUploader } from "../../hooks/useFileUploader"
import axios from "../../axios"
import { useNavigate } from "react-router-dom"
import Loading from "@/components/Loading"
import ROLE from "@/constants/roles"
import useAuth from "@/hooks/useAuth"


function AddStaff() {

    const fileRef = useRef<HTMLInputElement>(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const currentUser = useAuth()

    const navigate = useNavigate()

    const [file, setFile] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [uploadImage] = useFileUploader()

    const [qualifications, setQualifications] = useState<any>([])
    const [addQualificationModalOpen, setAddQualificationModalOpen] = useState<boolean>(false)

    const [formData, setFormData] = useState<any>({})

    const handleQualificationModalOpen = () => {
        setAddQualificationModalOpen(true)
    }

    const handleQualificationModalClose = () => {
        setAddQualificationModalOpen(false)
    }

    const handleInput = (event: any) => {

        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleDateInput = (name: string, value: Date | null) => {
        const dString = moment(value).format('YYYY-MM-DD')
        setFormData({ ...formData, [name]: dString })
    }

    const handleSave = async () => {

        try {
            setIsLoading(true)
            const name = await uploadImage(file)
            if (name && name.length) {
                const res = await axios.post('/employee', { ...formData, image: name[0] })
                if (res.data.success) {
                    console.log("success:", res.data.data);
                } else {
                    console.log("Error occurred");
                }

            }
        } catch (err) {
            console.log(err);
        }
        finally {
            setIsLoading(true)
            navigate('/staff')
        }
    }

    useEffect(() => {
        setFormData({ ...formData, qualifications: qualifications })
    }, [qualifications])

    return (
        <>
            <AddQualificationModal
                open={addQualificationModalOpen}
                handleClose={handleQualificationModalClose}
                qualifications={qualifications}
                setQualification={setQualifications}
            />
            {
                isLoading ? <Loading /> : <Box sx={{ mt: 2 }}>
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
                                                <InputLabel id="demo-simple-select-label" sx={{
                                                    fontSize: '0.7rem',
                                                }}>Mr/Ms</InputLabel>
                                                <Select
                                                    variant="outlined"
                                                    size="small"
                                                    name="salutation"
                                                    sx={{
                                                        width: '100px',
                                                    }}
                                                    label="Mr/Ms/Mrs"
                                                    value={formData.salutation}
                                                    onChange={handleInput}
                                                    required
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
                                                    onChange={handleInput}
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
                                                onChange={handleInput}
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
                                                onChange={handleInput}
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
                                                onChange={handleInput}
                                                sx={{ mb: 2 }} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <FormControl fullWidth>
                                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                                <DatePicker
                                                    label="Date Of Birth"
                                                    sx={{ width: '100%', }}
                                                    onChange={(value: any) => handleDateInput('dob', value)}
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
                                                onChange={handleInput}
                                                value={formData.gender}
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
                                                onChange={handleInput}
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
                                                onChange={handleInput}
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
                                                onChange={handleInput}
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
                                                onChange={handleInput}
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
                                        file ? URL.createObjectURL(file) : "https://stylioo.blob.core.windows.net/images/black-profile-pic.svg"
                                    } />

                                    <Box sx={{
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
                                    </Box>
                                </Box>
                                <input
                                    style={{ display: 'none', }}
                                    ref={fileRef}
                                    onChange={(e) => {
                                        if (e.target.files) {
                                            setFile(e.target.files[0])
                                        }
                                    }}
                                    type="file" />

                                <Typography sx={{
                                    fontSize: '0.95rem',
                                    fontWeight: '400',
                                    color: '#666',
                                    width: '250px',
                                    textAlign: 'center',
                                }}>
                                    Select a jpg or png file for profile picture
                                    from your computer.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>



                    <Box>
                        <Typography variant='h6' sx={{ mt: 4, mb: 3, fontWeight: '500' }}>
                            Qualifications and Skills
                        </Typography>
                        <Box>
                            {
                                qualifications.length > 0 &&
                                <TableContainer
                                    sx={{ mb: 3 }}
                                >
                                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Qualification</TableCell>
                                                <TableCell>Institute</TableCell>
                                                <TableCell>Start Date</TableCell>
                                                <TableCell>End Date</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {qualifications.map((qual: any, index: number) => (
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
                                                    <TableCell align="left">
                                                        <IconButton
                                                            size="small"
                                                            color="error"
                                                            onClick={() => {
                                                                setQualifications(qualifications.filter((quali: any) => quali.title !== qual.title))
                                                            }}
                                                        ><Close /></IconButton>

                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                </TableContainer>

                            }
                            <Button
                                variant='contained'
                                sx={{ mr: 2, mb: 2 }}
                                startIcon={<Add />}
                                onClick={handleQualificationModalOpen}
                            >Add Qualification</Button>

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
                                            sx={{ width: '100%', }}
                                            onChange={(value: any) => handleDateInput('doj', value)}

                                        />
                                    </LocalizationProvider>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        label="Role"
                                        name="role"
                                        onChange={handleInput}
                                        value={formData.role}
                                    >
                                        <MenuItem value='BEAUTICIAN'>Beautician</MenuItem>
                                        <MenuItem value='RECEPTIONIST'>Receptionist</MenuItem>
                                        <MenuItem value='MANAGER'>Manager</MenuItem>
                                        {currentUser?.role === ROLE.ADMIN && <MenuItem value='OWNER'>Owner</MenuItem>}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Box sx={{
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
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>


                    <Box>
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
                    </Box>


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
                                        onChange={handleInput}
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
                                        onChange={handleInput}
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
                                        onChange={handleInput}
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
                                        onChange={handleInput}
                                        sx={{ mb: 2 }} />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>


                    <Box sx={{
                        display: 'flex',
                        mt: 4,
                        mb: 6
                    }}>
                        <Button
                            variant="contained"
                            onClick={handleSave}
                        >Save</Button>
                    </Box>
                </Box >
            }
        </>
    )
}

export default AddStaff