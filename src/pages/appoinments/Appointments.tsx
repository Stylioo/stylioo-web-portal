import { useState } from "react"

import '../../styles/main.scss'
import '../../styles/product.scss'

import { useTheme } from "@mui/material/styles"
import { Box, Button, Tab, Tabs, Typography, useMediaQuery } from "@mui/material"
import { Add } from '@mui/icons-material'
import { useNavigate } from "react-router-dom"

import UpcommingAppoitments from "./UpcommingAppoitments"
import CompletedAppoitments from "./CompletedAppoitments"
import CanceledAppoitments from "./CanceledAppoitments"


function Appointments() {

    const navigate = useNavigate();

    //theme and media query
    // const theme = useTheme()
    // const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }


    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index &&
                    children
                }
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <>


            <Box className="page-header flex flex-between gap-1">
                <Box sx={{ borderBottom: 1, borderColor: 'divider', flexGrow: 1 }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Upcomming Appointments" {...a11yProps(0)} />
                        <Tab label="Completed Appointments" {...a11yProps(1)} />
                        <Tab label="Canceled Appointments" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <div className="flex gap-1">
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() =>
                            navigate('/appointments/new')
                        }
                    >
                        New Appointment
                    </Button>
                </div>
            </Box>


            <CustomTabPanel value={value} index={0}>
                <UpcommingAppoitments />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <CompletedAppoitments />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <CanceledAppoitments />
            </CustomTabPanel>



        </>
    )
}

export default Appointments
