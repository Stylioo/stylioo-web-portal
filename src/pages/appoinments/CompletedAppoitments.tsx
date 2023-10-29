import axios from "@/axios";
import SnakbarAlert from "@/components/SnakbarAlert";
import formatNumber from "@/utils/formatNumber";
import { Delete, Edit, MoreVert, Search } from "@mui/icons-material";
import { AlertColor, Box, Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState, MouseEvent, useEffect, useMemo, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SummaryModal from "./SummaryModal";
import { DataGrid } from "@mui/x-data-grid";

import LoadingOverlay from '../../components/Loading'
import CustomNoRowsOverlay from '../../components/NoData'
import moment from "moment";

import '@/styles/main.scss'

type menuPropsType = {
    anchorEl: HTMLElement | null
    open: boolean
    handleClose: () => void
    handleProductDeleteOption: () => void
    productId: string
}

type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}

function OptionMenu({ anchorEl, open, handleClose, handleProductDeleteOption }: menuPropsType) {
    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Edit fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleProductDeleteOption()}>
                    <ListItemIcon>
                        <Delete fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
}
function CompletedAppoitments() {

    const navigate = useNavigate();

    //theme and media query
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const [isLoading, setIsLoading] = useState<boolean>(true)

    // this page's state
    const [appointments, setappointments] = useState<any[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    //snakbar
    const [openSnakbar, setOpenSnakbar] = useState<boolean>(false)
    const [snakbarAlertMessage, setSnakbarAlertMessage] = useState<SnakbarAlertMessage>({ type: 'success', message: 'This is a test message' })
    const [productId, setProductId] = useState<string>('')
    const handleSnakbarClose = (reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnakbar(false);
    };

    // const handleSankbarShow = (alertMessage: SnakbarAlertMessage) => {
    //     setSnakbarAlertMessage(alertMessage);
    //     setOpenSnakbar(true);
    // }


    // delete alert
    const [openDeleteAlert, setOpenDeleteAlert] = useState<boolean>(false)

    const handleDeleteAlertClose = () => {
        setOpenDeleteAlert(false);
    }
    const handleProductDeleteOption = () => {
        setOpenDeleteAlert(true)
    }


    // for modal and menus
    const [selectedRow, setSelectedRow] = useState<any>(null)

    // option menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>, row: any) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row)
        setProductId(row.id)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        console.log(selectedRow);
    }, [selectedRow])

    // table
    const cols = useMemo(() => [
        {
            field: 'customer', headerName: "Customer", filterable: false, width: 180, renderCell: (params: any) => {
                return <Box sx={{ display: "flex", flexDirection: 'column' }}>
                    <Typography>{params.row.customer?.first_name} {params.row.customer?.last_name}</Typography>
                    <Typography variant="caption">{params.row.customer?.contact_no}</Typography>
                </Box>
            }
        },
        {
            field: "status", headerName: "Status", width: 120, renderCell: (params: any) => {
                let status = "pending"
                let className = "badge-primary"

                if (params.row.status === 'paid') {
                    status = "Paid"
                    className = "badge-success"
                }
                else if (params.row.status === 'canceled') {
                    status = "Canceled"
                    className = "badge-danger"
                } else {
                    status = "Pending"
                    className = "badge-primary"
                }
                return <div className={`badge ${className}`}><p className="capitalize">{status}</p></div>;
            }
        },

        {
            field: 'status_changed_by', headerName: "Accepted By", filterable: false, width: 150, renderCell: (params: any) => {
                return <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
                    <img style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%"
                    }} src={params.row.status_changed_by.image ? `https://stylioo.blob.core.windows.net/images/${params.row.status_changed_by.image}` : 'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'}></img>
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: '5px'
                    }}>
                        <Typography variant="caption">{params.row.status_changed_by?.first_name}</Typography> <Typography variant="caption"> {params.row.status_changed_by?.last_name}</Typography>
                    </Box>
                </Box >
            }
        },
        {
            field: "date", headerName: "Date", width: 130, renderCell: (params: any) => {
                return <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography>{moment(params.row.appointment_date).format('YYYY-MM-DD')}</Typography>
                    <Typography>{params.row.start_time}</Typography>
                </Box>
            }
        },
        {
            field: "total_price", headerName: "Amount", width: 150, renderCell: (params: any) => {
                return <Typography>LKR {formatNumber(params.row.total_price)}</Typography>
            }
        },

        {
            field: "service", headerName: "Services", width: 275, renderCell: (params: any) => {
                return <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        overflow: "auto",
                        maxHeight: 80,
                        p: 1,
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}
                >
                    {params.row.service.map((item: any, index: number) => {
                        return <Typography
                            key={index}
                            variant="caption"
                            sx={{
                                bgcolor: "primary.light",
                                color: "white",
                                px: 1,
                                borderRadius: 1,
                                py: 0.5
                            }}
                        >{item.name}</Typography>
                    })}
                </Box>
            }
        },

        {
            field: 'beautician', headerName: "Beautician", filterable: false, width: 180, renderCell: (params: any) => {
                return <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
                    <img style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%"
                    }} src={params.row.beautician.image ? `https://stylioo.blob.core.windows.net/images/${params.row.beautician.image}` : 'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'}></img>
                    <Box sx={{
                        display: "flex",
                        gap: '5px',
                        flexWrap: "wrap",
                    }}>
                        <Typography variant="caption">{params.row.beautician?.first_name}</Typography> <Typography variant="caption"> {params.row.beautician?.last_name}</Typography>
                    </Box>
                </Box >
            }
        },

        {
            field: 'actions', headerName: "", type: 'actions', width: 10, renderCell: (params: any) => {
                return <IconButton onClick={(event: MouseEvent<HTMLButtonElement>) => handleClick(event, params.row)} aria-label="delete">
                    <MoreVert />
                </IconButton>
            }
        }
    ], [])


    // input validation
    const handleSearchInput = (value: string) => {
        // value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        setSearchTerm(value)
        if (value === '') {
            getAllProducts()
        }
    }


    // data fetching
    const handleEnterKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            searchProducts()
        }
    }

    const getAllProducts = async () => {
        setIsLoading(true)
        const res = await axios.get('/appointment?type=completed')
        if (res.data.success) {
            if (res.data.data.length === 0) {
                setappointments([])
                setSnakbarAlertMessage({ type: 'info', message: 'No data found' })
                setOpenSnakbar(true)
            } else {
                setappointments(res.data.data)
            }
        } setIsLoading(false)
    }

    const searchProducts = async () => {
        setIsLoading(true)
        const res = await axios.get(`/appointment/search?term=${searchTerm}&type=completed`)
        if (res.data.success) {
            if (res.data.data.length === 0) {
                setappointments([])
                setSnakbarAlertMessage({ type: 'info', message: 'No data found' })
                setOpenSnakbar(true)
            } else {
                setappointments(res.data.data)
            }
        } setIsLoading(false)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    const [isOpenSummayModal, setIsOpenSummayModal] = useState<boolean>(false)

    const openSummaryModal = (row: any) => {
        setIsOpenSummayModal(true)
        setSelectedRow(row)
    }

    const closeSummaryModal = () => {
        setIsOpenSummayModal(false)
        setSelectedRow(null)
    }

    return (
        <>
            <SnakbarAlert
                open={openSnakbar}
                handleClose={handleSnakbarClose}
                duration={5000}
                data={snakbarAlertMessage}

            />
            {/* <DeleteAlert
                open={openDeleteAlert}
                handleClose={handleDeleteAlertClose}
                productId={productId}
                handleSankbarShow={handleSankbarShow}
                refetch={getAllProducts}

            /> */}
            <OptionMenu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                handleProductDeleteOption={handleProductDeleteOption}
                productId={productId} />

            {/* summary */}
            <SummaryModal
                isOpenSummayModal={isOpenSummayModal}
                closeSummaryModal={closeSummaryModal}
                selectedRow={selectedRow}
                isLoading={isLoading}
                refetch={getAllProducts}
            />
            <div className="flex gap-1">
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    size="small"
                    fullWidth={isMobile}
                    style={{ width: 300 }}
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchInput(e.target.value)}
                    onKeyDown={handleEnterKey}
                />
                <Button
                    color="primary"
                    variant="contained"
                    sx={{ py: 1 }}
                    onClick={searchProducts}
                >
                    <Search />
                </Button>
            </div>

            <DataGrid
                sx={{
                    mt: 3,
                    flexGrow: 1,
                    maxHeight: '70dvh',
                    overflow: 'hidden',
                    minHeight: 400,
                }}
                columns={cols}
                rows={appointments}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                getRowSpacing={(params) => ({
                    top: params.isFirstVisible ? 0 : 8,
                    bottom: params.isLastVisible ? 0 : 8,
                })}
                rowHeight={80}
                slots={{
                    noRowsOverlay: CustomNoRowsOverlay,
                    loadingOverlay: LoadingOverlay
                }}
                loading={isLoading}
                onRowClick={(params) => openSummaryModal(params.row)}
            />


        </>
    )
}

export default CompletedAppoitments