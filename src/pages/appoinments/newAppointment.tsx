import TextArea from '@/components/TextArea'
import { serviceCategories } from '@/constants/services'
import { Add, ArrowBackIos, ArrowBackIosNew, ArrowForwardIos, CalendarTodayOutlined, Close, Search } from '@mui/icons-material'
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Modal, OutlinedInput, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'

import '@/scss/newAppointment.scss'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import listOfDays from '@/utils/listOfDays'
import listOfTimes from '@/utils/listOfTimes'
import formatNumber from '@/utils/formatNumber'

import noPreferenceImage from '@/assets/icons8-team-64.png'
import axios from '@/axios'
import Loading from '@/components/Loading'


type serviceType = {
    id: string,
    name: string,
    description: string,
    duration: number,
    price: number,
    categoryId: string
}

function NewAppointment() {


    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))


    const [total, setTotal] = useState<number>(0)
    const [advancedPaymentAmount, setAdvancedPaymentAmount] = useState<number>(0)
    const [subTotal, setSubTotal] = useState<number>(0)

    const handleAdvancedPaymentAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        value = value.replace(/[^\d]/g, '')
        if (!isNaN(Number(value))) {
            setAdvancedPaymentAmount(Number(value))
        }
    }

    //new customer
    const [newCustomerModalOpen, setNewCustomerModalOpen] = useState<boolean>(false)
    const handleNewCustomerModalOpen = () => {
        setNewCustomerModalOpen(true)
    }
    const handleNewCustomerModalClose = () => {
        setFirstName('')
        setLastName('')
        setGender('')
        setContactNumber('')
        setAddressLine1('')
        setAddressLine2('')
        setCity('')
        setNewCustomerModalOpen(false)
    }

    //search customer
    const [customerSearchTerm, setCustomerSearchTerm] = useState<string>('')
    const [customerSearchResults, setCustomerSearchResults] = useState<any[]>([])
    const [customerSearchLoading, setCustomerSearchLoading] = useState<boolean>(false)
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
    const searchCustomer = async (e: ChangeEvent<HTMLInputElement>) => {

        setCustomerSearchLoading(true)
        let searchTerm = e.target.value
        setCustomerSearchTerm(searchTerm)
        searchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        if (searchTerm === '') return


        try {
            const response = await axios.post('/customer/search', {
                q: searchTerm
            })
            if (response.data.success) {
                setCustomerSearchResults(response.data.data)
            } else {
                setCustomerSearchResults([])
            }
        } catch (error) {
            console.log(error)
            setCustomerSearchResults([])
        } finally {
            setCustomerSearchLoading(false)
        }
    }

    const customerSearchInputRef = useRef<HTMLInputElement>(null)
    const searchResultBoxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if (customerSearchTerm === "") {
            setCustomerSearchResults([])
            searchResultBoxRef.current?.style.setProperty('display', 'none')
        } else {
            searchResultBoxRef.current?.style.setProperty('display', 'block')
        }
    }, [customerSearchTerm, customerSearchInputRef])

    const handleCustomerSelectInSearchResults = (customer: any) => {
        setSelectedCustomer(customer)
        setCustomerSearchTerm('')
        setCustomerSearchResults([])
        searchResultBoxRef.current?.style.setProperty('display', 'none')
    }



    // create user
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [contactNumber, setContactNumber] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [addressLine1, setAddressLine1] = useState<string>('')
    const [addressLine2, setAddressLine2] = useState<string>('')
    const [city, setCity] = useState<string>('')

    const [createCustomerLoading, setCreateCustomerLoading] = useState<boolean>(false)


    const handleFirstNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        let firstName = e.target.value
        firstName = firstName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setFirstName(firstName)
    }

    const handleLastNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        let lastName = e.target.value
        lastName = lastName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setLastName(lastName)
    }

    const handleContactNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
        let contactNumber = e.target.value
        contactNumber = contactNumber.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setContactNumber(contactNumber)
    }

    const handleGenderSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value)
    }

    const handleAddressLine1Input = (e: ChangeEvent<HTMLInputElement>) => {
        let addressLine1 = e.target.value
        addressLine1 = addressLine1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setAddressLine1(addressLine1)
    }

    const handleAddressLine2Input = (e: ChangeEvent<HTMLInputElement>) => {
        let addressLine2 = e.target.value
        addressLine2 = addressLine2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setAddressLine2(addressLine2)
    }

    const handleCityInput = (e: ChangeEvent<HTMLInputElement>) => {
        let city = e.target.value
        city = city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setCity(city)
    }

    const createCustomer = async () => {
        try {
            setCreateCustomerLoading(true)
            const response = await axios.post('/customer', {
                first_name: firstName,
                last_name: lastName,
                contact_no: contactNumber,
                address_line_1: addressLine1,
                address_line_2: addressLine2,
                city: city,
            })

            console.log(response.data)

            if (response.data.success) {
                setSelectedCustomer(response.data.data)
                handleNewCustomerModalClose()
            }

        } catch (error) {
            console.log(error)
        } finally {
            setCreateCustomerLoading(false)
        }
    }

    //appointment summary
    const [appointmentSummaryModalOpen, setAppointmentSummaryModalOpen] = useState<boolean>(false)
    const handleAppointmentSummaryModalOpen = () => {
        setAppointmentSummaryModalOpen(true)
    }
    const handleAppointmentSummaryModalClose = () => {
        setAppointmentSummaryModalOpen(false)
    }


    //category
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    const handleCategorySelect = (e: ChangeEvent<HTMLInputElement>) => {
        const categoryId = e.target.id
        setSelectedCategory(categoryId)
        // search function
    }

    const searchByCategory = async (categoryId: string) => {
        try {
            setServicesLoading(true)
            const response = await axios.post(`/service/search/category`, {
                q: categoryId
            })
            if (response.data.success) {
                setServices(response.data.data)
            }
        } catch (error) {
            console.log(error)
            setServices([])
        } finally {
            setServicesLoading(false)
        }
    }

    useEffect(() => {
        if (selectedCategory !== '') {
            searchByCategory(selectedCategory)
        }
    }, [selectedCategory])

    //service
    const [services, setServices] = useState<serviceType[]>([])
    const [servicesLoading, setServicesLoading] = useState<boolean>(false)
    const [serviceSearchTerm, setServiceSearchTerm,] = useState<string>('')
    const [selectedServices, setSelectedServices] = useState<serviceType[]>([])

    const handleEnterKeyForService = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            // search function
        }
    }
    const handleServiceOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const serviceId = e.target.id
        if (e.target.checked) {
            const selectedService = services.find(service => service.id === serviceId)
            if (selectedService) {
                setSelectedServices([...selectedServices, selectedService])
            }
        }
        else {
            const newSelectedServices = selectedServices.filter(service => service.id !== serviceId)
            setSelectedServices(newSelectedServices)
        }
    }
    const handleRemoveServieBtn = (serviceId: string) => {
        const newSelectedServices = selectedServices.filter(service => service.id !== serviceId)
        setSelectedServices(newSelectedServices)
    }

    const getAllServices = async () => {
        try {
            setServicesLoading(true)
            const response = await axios.get('/service')
            if (response.data.success) {
                setServices(response.data.data)
            }
        } catch (error) {
            console.log(error)
            setServices([])

        } finally {
            setServicesLoading(false)
        }
    }
    useEffect(() => {
        getAllServices()
    }, [])

    const searchServices = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            setServicesLoading(true)
            let value = e.target.value
            value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            setServiceSearchTerm(value)


            const response = await axios.post('/service/search', {
                q: value
            })
            if (response.data.success) {
                setServices(response.data.data)
            }
        } catch (error) {
            console.log(error)
            setServices([])
        } finally {
            setServicesLoading(false)
        }
    }


    //beautician
    const [beautianSearchTerm, setBeautianSearchTerm] = useState<string>('')
    const [selectedBeautician, setSelectedBeautician] = useState<string>('')
    const [beauticians, setBeauticians] = useState<any[]>([])
    const [beauticianSearchLoading, setBeauticianSearchLoading] = useState<boolean>(false)
    const handleBeauticianSearchInput = (value: string) => {
        value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setBeautianSearchTerm(value)
        if (value === '') {
            // search function
        }
    }
    const handleEnterKeyforBeautician = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            // search function
        }
    }
    const handleBeauticianSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'no-preference') {
            setSelectedBeautician('')
        }
        else {
            const beauticianId = e.target.id
            setSelectedBeautician(beauticianId)
        }
    }

    const getAllBeauticians = async () => {
        try {
            setBeauticianSearchLoading(true)
            const response = await axios.get('/employee/role/beautician')
            if (response.data.success) {
                console.log(response.data.data);

                setBeauticians(response.data.data)
            }
        } catch (error) {
            console.log(error)
            setBeauticians([])
        } finally {
            setBeauticianSearchLoading(false)
        }
    }
    useEffect(() => {
        getAllBeauticians()
    }, [])

    const searchBeauticians = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            setBeauticianSearchLoading(true)
            let value = e.target.value
            value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            setBeautianSearchTerm(value)

            const response = await axios.post('/employee/role/beautician/search', {
                q: value
            })
            if (response.data.success) {
                console.log(response.data.data);

                setBeauticians(response.data.data)
            } else {
                setBeauticians([])
            }
        } catch (error) {
            console.log(error)
            setBeauticians([])
        } finally {
            setBeauticianSearchLoading(false)
        }
    }



    //date
    const [selectedDate, setSelectedDate] = useState<string>('')
    const handleDateSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const date = e.target.id
        setSelectedDate(date)
    }

    //time
    const [selectedTime, setSelectedTime] = useState<string>('')
    const handleTimeSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const time = e.target.value
        setSelectedTime(time)
    }



    useEffect(() => {
        const t = selectedServices.reduce((total, service) => total + service.price, 0)
        setTotal(t)
    }, [selectedServices])

    useEffect(() => {
        const sub = total - advancedPaymentAmount
        setSubTotal(sub)
    }, [advancedPaymentAmount, total])


    useEffect(() => {
        console.log(customerSearchResults)
    }, [customerSearchResults])

    return (

        <>


            <Modal
                open={newCustomerModalOpen}

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
                        minWidth: 700,
                        borderRadius: 1,
                        p: 3,
                        outline: 'none',
                    }}
                >
                    <Typography variant='h6' sx={{ mb: 2, fontWeight: '500' }}>
                        Add New Customer
                    </Typography>
                    {
                        createCustomerLoading ? <Loading /> :
                            <Box>
                                <Grid container spacing={3}>

                                    <Grid item xs={12} md={6} sx={{
                                        display: 'flex'
                                    }}>
                                        {/* <Select
                                    variant="outlined"
                                    size="small"
                                    name="salutation"
                                    required
                                >
                                    <MenuItem value='Mr'>Mr</MenuItem>
                                    <MenuItem value='Ms'>Ms</MenuItem>
                                    <MenuItem value='Mrs'>Mrs</MenuItem>
                                </Select> */}
                                        <TextField
                                            id="outlined-basic"
                                            label="First Name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={firstName}
                                            onChange={handleFirstNameInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Last Name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={lastName}
                                            onChange={handleLastNameInput}

                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Contact Number"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={contactNumber}
                                            onChange={handleContactNumberInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                label="Gender"
                                                name="gender"
                                                size="small"
                                                value={gender}
                                            // onChange={handleGenderSelect}
                                            >
                                                <MenuItem value='Male'>Male</MenuItem>
                                                <MenuItem value='Female'>Female</MenuItem>
                                                <MenuItem value='Rather no to say'>Rather no say</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Address Line 1"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={addressLine1}
                                            onChange={handleAddressLine1Input}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Address Line 2"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={addressLine2}
                                            onChange={handleAddressLine2Input}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="City"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={city}
                                            onChange={handleCityInput}
                                        />
                                    </Grid>
                                </Grid>

                                <Box
                                    sx={{
                                        mt: 3,
                                        display: 'flex',
                                        gap: 2,
                                        justifyContent: 'flex-end'

                                    }}
                                >
                                    <Button
                                        variant='contained'
                                        onClick={createCustomer}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        onClick={handleNewCustomerModalClose}
                                        variant='outlined'
                                    >
                                        Cancel
                                    </Button>
                                </Box>

                            </Box>
                    }

                </Box>
            </Modal>

            <Modal
                open={appointmentSummaryModalOpen}
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
                    <Box>
                        <Grid container spacing={1}
                            sx={{
                                mt: 1
                            }}
                        >
                            <Grid item xs={12} md={6} lg={3}>
                                <Typography variant='caption'>Customer Name</Typography>
                                <Typography variant='body1' sx={{ fontWeight: '500' }}>Janith Madarasinghe</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Typography variant='caption'>Contact Number</Typography>
                                <Typography variant='body1' sx={{ fontWeight: '500' }}>070 468 5081</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Typography variant='caption'>Residencial Address</Typography>
                                <Typography variant='body1' sx={{ fontWeight: '500' }}>49/1/A, Dewsirigama Road, Kokawala, Kekandura</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Typography variant='caption'>Appointment Date</Typography>
                                <Typography variant='body1' sx={{ fontWeight: '500' }}>{selectedDate}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>

                                <Typography variant='caption'>Appointment Time</Typography>
                                <Typography variant='body1' sx={{ fontWeight: '500' }}>{selectedTime}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Typography variant='caption'>Beautician</Typography>
                                <Typography variant='body1' sx={{ fontWeight: '500' }}>
                                    {selectedBeautician === '' ? 'No Preference' : beauticians.find(beautician => beautician.id === selectedBeautician)?.name}
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
                                    selectedServices && selectedServices.length > 0 && selectedServices.map((selectedService, index) => (
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
                                mt: 4
                            }}>
                                <Grid item sm={6} lg={8}>
                                    <Box
                                    >
                                        <FormControl >
                                            <InputLabel htmlFor="outlined-adornment-amount">Advanced Payment Amount</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                size='small'
                                                startAdornment={<InputAdornment position="start">LKR</InputAdornment>}
                                                label="Advanced Payment Amount"
                                                value={advancedPaymentAmount}
                                                onChange={handleAdvancedPaymentAmountInput}
                                            />
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item sm={6} lg={4}>
                                    <Box
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            // border: '1px solid #ccc',
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
                                        >LKR {formatNumber(total)}</Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            mt: 2,
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
                                        >LKR {formatNumber(subTotal)}</Typography>
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
                            variant='contained'
                            onClick={handleAppointmentSummaryModalClose}
                        >
                            Save
                        </Button>
                        <Button
                            variant='outlined'
                            onClick={handleAppointmentSummaryModalClose}
                        >
                            Cancel
                        </Button>
                    </Box>

                </Box>

            </Modal >


            <Box>
                <Box>
                    <Typography variant='h6' sx={{ mb: 2, fontWeight: '500' }}>
                        Customer Details
                    </Typography>
                    <Box
                        className="flex gap-2 align-items-start"
                    >
                        <Box sx={{ flexGrow: 1, mb: 1, position: 'relative' }}>
                            <TextField
                                label="Search by Customer Name / Contact Number"
                                fullWidth
                                variant="outlined"
                                size="small"
                                value={customerSearchTerm}
                                onChange={searchCustomer}
                                ref={customerSearchInputRef}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    width: '100%',
                                    maxHeight: '300px',
                                    overflowY: 'auto',
                                    border: '1px solid #ccc',
                                    borderRadius: '0 0 5px 5px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 2px 5px 0px #ccc',
                                    zIndex: 10,
                                }}
                                ref={searchResultBoxRef}
                            >


                                {

                                    customerSearchLoading ? <Loading /> :
                                        customerSearchResults.length > 0 ?
                                            customerSearchResults.map((customer, index) => (
                                                <Box key={index} sx={{
                                                    px: 1,
                                                    py: 1,
                                                    mb: 1,
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        backgroundColor: '#eee'
                                                    }
                                                }}
                                                    onClick={
                                                        () => handleCustomerSelectInSearchResults(customer)
                                                    }
                                                >
                                                    <Typography variant='body1' sx={{ fontWeight: '500' }}>{customer?.first_name} {customer?.last_name}</Typography>
                                                    <Typography variant='caption'>{customer?.contact_no}</Typography>
                                                </Box>
                                            )
                                            )
                                            : <Box
                                                sx={{
                                                    width: '100%',
                                                    my: 6,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography variant='body1' sx={{ fontWeight: '500' }}>No Customer found.</Typography>
                                                <Typography variant='caption'>Create new customer.</Typography>
                                            </Box>

                                }


                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            startIcon={<Add />}
                            onClick={handleNewCustomerModalOpen}
                        >
                            New Customer
                        </Button>
                    </Box>
                    <Box className="flex flex-center" sx={{ mt: 2, minHeight: "100px", border: "2px dashed #ccc", borderRadius: '5px' }}>
                        {
                            selectedCustomer && selectedCustomer.id ?

                                <Grid container spacing={2}
                                    sx={{
                                        p: 2,
                                    }}
                                >
                                    <Grid item xs={12} md={6} lg={1}>
                                        <div className="customer-img-icon"><img src={`https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51`} alt="" className="product-image" /></div>                        </Grid>
                                    <Grid item xs={12} md={6} lg={4}>
                                        <Typography variant='body2'>Customer Name</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '600' }}>{selectedCustomer?.first_name} {selectedCustomer?.last_name}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={2}>
                                        <Typography variant='body2'>Contact Number</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '600' }}>{selectedCustomer?.contact_no}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={5}>
                                        <Typography variant='body2'>Residencial Address</Typography>
                                        <Typography variant='body1' sx={{ fontWeight: '600' }}>{selectedCustomer?.address_line_1}, {selectedCustomer?.address_line_2}, {selectedCustomer?.city}</Typography>
                                    </Grid>
                                </Grid>

                                :
                                <Box>
                                    <Typography variant='body1' sx={{ fontWeight: '500' }}>No Customer Selected</Typography>
                                </Box>

                        }

                    </Box>



                </Box>
                <Box sx={{
                    mt: 4

                }}>
                    <Typography variant='h6' sx={{ mb: 2, fontWeight: '500' }}>
                        Services
                    </Typography>
                    <Grid container spacing={{
                        xs: 2,
                        md: 3,
                        lg: 4
                    }}>
                        <Grid item xs={12} md={7} lg={7}>

                            <Box
                                sx={{
                                    mb: 3,
                                    display: 'flex',
                                    gap: 1,
                                }}
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Search Services"
                                    variant="outlined"
                                    size="small"
                                    fullWidth={isMobile}
                                    style={{ width: 300 }}
                                    value={serviceSearchTerm}
                                    onChange={searchServices}
                                    onKeyDown={handleEnterKeyForService}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                }}
                            >
                                <IconButton>
                                    <ArrowBackIos />
                                </IconButton>
                                <Box
                                    className="hideScrollbar"
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        width: '100%',
                                        overflowX: 'auto',
                                        cursor: 'grab',
                                        userSelect: 'none',
                                        '&::-webkit-scrollbar': {
                                            display: 'none'
                                        },
                                    }}
                                >
                                    {
                                        serviceCategories.map((category, index) => (

                                            <div key={index} className="category-box">
                                                <input type="radio" name="category-sort" id={category.id} value={category.id} className="hiddenCheckbox select-category-checkbox"
                                                    onChange={handleCategorySelect}
                                                />
                                                <label htmlFor={category.id} className="select-category-label">
                                                    <p className="category-name">{category.name}</p>
                                                </label>
                                            </div>
                                        ))
                                    }
                                </Box>
                                <IconButton>
                                    <ArrowForwardIos />
                                </IconButton>
                            </Box>

                            <Box
                                sx={{
                                    mt: 3,
                                    height: '400px',

                                    overflowY: 'auto',
                                }}
                            >

                                {

                                    servicesLoading ? <Loading /> :
                                        services.length === 0 ?
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: '100%',
                                                }}
                                            >
                                                <Typography variant='h6' sx={{ fontWeight: 400 }}>No services found.</Typography>
                                                <Typography variant='caption' sx={{ fontWeight: 400 }}>Try another keyword or ask the manager to add the service.</Typography>
                                            </Box> :

                                            services?.map((service: any, index: number) => (
                                                <div key={index} className="service-box">
                                                    <input type="checkbox" id={service.id} className="hiddenCheckbox select-service-checkbox"
                                                        onChange={handleServiceOnChange}
                                                        checked={selectedServices.some(selectedService => selectedService.id === service.id)}
                                                    />
                                                    <label htmlFor={service.id} className="select-service-label">
                                                        <p className="service-name">{service.name}</p>
                                                        <div className="flex flex-between gap-2">
                                                            <p className="duration">{service.duration} min</p>
                                                            <p className="price">{
                                                                service.price === 0 ? "Free" : `LKR ${formatNumber(service.price)}`
                                                            }</p>
                                                        </div>
                                                    </label>
                                                </div>
                                            ))
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5} lg={5}>
                            <Box
                                sx={{
                                    height: '100%',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    position: 'relative',
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        borderBottom: '1px solid #ccc',
                                        fontWeight: 500
                                    }}
                                >
                                    Selected Services
                                </Typography>
                                {
                                    selectedServices && selectedServices.length > 0 ?
                                        <Box
                                            sx={{
                                                maxHeight: '400px',
                                                overflowY: 'auto',
                                            }}
                                        >
                                            {
                                                selectedServices.map((service, index) => (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            py: 1,
                                                            px: 1,
                                                            borderBottom: '1px solid #ccc',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <IconButton
                                                            onClick={() => handleRemoveServieBtn(service.id)}
                                                            sx={{
                                                                width: '40px',
                                                                height: '40px',
                                                            }}
                                                        >
                                                            <Close />
                                                        </IconButton>
                                                        <Box
                                                            sx={{
                                                                flexGrow: 1,
                                                                px: 2,

                                                            }}
                                                        >
                                                            <Typography variant='body1' sx={{ fontWeight: '600' }}>{service.name}</Typography>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                }}
                                                            >
                                                                <Typography variant='body2' sx={{ fontWeight: '400' }}>{service.duration} min</Typography>
                                                                <Typography variant='body1' sx={{ fontWeight: '500' }}>{service.price === 0 ? "Free" : `LKR ${formatNumber(service.price)}`}</Typography>
                                                            </Box>
                                                        </Box>

                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                        : <Box
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Typography variant='body1' sx={{ fontWeight: '300' }}>No Services Selected</Typography>
                                        </Box>
                                }
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        left: 0,
                                        py: 2,
                                        px: 2,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderTop: '1px solid #ccc',
                                        fontWeight: '500'
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 500
                                        }}
                                    >{
                                            selectedServices && selectedServices.length > 0 ? `${selectedServices.length} Services Selected` : 'No Services Selected'
                                        }
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 600
                                        }}
                                    >
                                        (Total)
                                        {
                                            selectedServices && selectedServices.length > 0 ? ` LKR ${formatNumber(selectedServices.reduce((total, service) => total + service.price, 0))}` : ' LKR 0.00'
                                        }</Typography>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>

                    <Box
                        sx={{
                            mt: 4,
                            minHeight: '250px',
                        }}
                    >
                        <Typography variant='h6' sx={{ mb: 2, fontWeight: '500' }}>
                            Beautician
                        </Typography>

                        <Box className="flex gap-1">
                            <TextField
                                id="outlined-basic"
                                label="Search"
                                variant="outlined"
                                size="small"
                                fullWidth={isMobile}
                                style={{ width: 300 }}
                                value={beautianSearchTerm}
                                onChange={searchBeauticians}
                            // onKeyDown={handleEnterKeyforBeautician}
                            />
                        </Box>

                        {
                            beauticianSearchLoading ? <Loading /> :
                                beauticians.length === 0 ?
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100%',
                                            mt: 4

                                        }}
                                    >
                                        <Typography variant='h6' sx={{ fontWeight: 400 }}>No beautician found.</Typography>
                                        <Typography variant='caption' sx={{ fontWeight: 400 }}>Try another keyword or ask the manager to add the beautician.</Typography>
                                    </Box>
                                    : <Grid container spacing={4}
                                        sx={{
                                            mt: 2
                                        }}
                                    >
                                        <Grid item sm={12} md={4} lg={3}>

                                            <div className="beautician-box">
                                                <input type="radio" name="beautician" id="no-preference" className="hiddenCheckbox select-beautician-checkbox"
                                                    onChange={handleBeauticianSelect}
                                                    checked={selectedBeautician === ''}
                                                />
                                                <label htmlFor="no-preference" className="select-beautician-label">
                                                    <img src={noPreferenceImage} alt="No Preference" className='profilePicture no-preference rounded-border ' />
                                                    <div className="">
                                                        <p className="beautician-name">No Preference</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </Grid>
                                        {
                                            beauticians.map((beautician, index) => (
                                                <Grid key={index} item sm={12} md={4} lg={3}>

                                                    <div key={index} className="beautician-box">
                                                        <input type="radio" name="beautician" id={beautician.id} className="hiddenCheckbox select-beautician-checkbox"
                                                            onChange={handleBeauticianSelect}
                                                        />
                                                        <label htmlFor={beautician.id} className="select-beautician-label">
                                                            <img src={beautician.image ? `https://stylioo.blob.core.windows.net/images/${beautician.image}` : 'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'} alt={beautician.first_name} className='profilePicture rounded-border' />
                                                            <div className="">
                                                                <p className="beautician-name">{beautician.first_name} {beautician.last_name}</p>
                                                                <Typography variant='caption' className="type">{beautician.type} </Typography>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                        }
                    </Box>

                    <Box
                        sx={{
                            mt: 4,
                            mb: 6
                        }}
                    >
                        <Typography variant='h6' sx={{ mb: 2, fontWeight: '500' }}>
                            Date And Time
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                width: '100%',
                                overflowX: 'auto',
                                cursor: 'grab',
                                userSelect: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none'
                                },

                            }}
                        >
                            <Button
                                variant='outlined'
                                sx={{
                                    minWidth: '200px',
                                }}
                                startIcon={<CalendarTodayOutlined />}
                            >
                                Custome Date
                            </Button>
                            {
                                listOfDays.map((listOfDay, index) => {
                                    const [date, month] = listOfDay.title.split(' ')
                                    return (
                                        <div key={index} className="date-box">
                                            <input name="date" type="radio" id={listOfDay.key} className="hiddenCheckbox select-date-checkbox"
                                                onChange={handleDateSelect}
                                            />
                                            <label htmlFor={listOfDay.key} className="select-date-label">
                                                <p className='date'>{date}</p>
                                                <p className='month'>{month}</p>
                                            </label>
                                        </div>
                                    )
                                })
                            }

                        </Box>

                        <Grid container spacing={2} sx={{
                            mt: 4
                        }}>
                            {
                                listOfTimes.map((TimeWithInterval, index) => {
                                    const [time, ampm] = TimeWithInterval.split(' ')
                                    return (
                                        <Grid item sm={12} md={2} lg={1}>
                                            <div key={index} className="time-box">
                                                <input name="time" type="radio" id={TimeWithInterval} value={`${time} ${ampm}`} className="hiddenCheckbox select-time-checkbox"
                                                    onChange={handleTimeSelect}
                                                />
                                                <label htmlFor={TimeWithInterval} className="select-time-label">
                                                    <p className='time'>{time}</p>
                                                    <p className='ampm'>{ampm}</p>
                                                </label>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            gap: 2,
                            justifyContent: 'flex-end',
                            mb: 6
                        }}
                    >
                        <Button
                            variant='contained'
                            onClick={handleAppointmentSummaryModalOpen}
                        >
                            Next
                        </Button>
                        <Button
                            variant='outlined'
                            onClick={handleAppointmentSummaryModalOpen}
                        >
                            Cancel
                        </Button>
                    </Box>

                </Box>
            </Box >
        </>
    )
}

export default NewAppointment
