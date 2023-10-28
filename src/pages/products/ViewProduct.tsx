
import { useParams } from "react-router-dom"
import axios from "../../axios"
import { useEffect, useMemo, useState } from "react"
import Loading from "../../components/Loading"
import { AlertColor, Box, Button, Grid, TextField, Typography, useTheme } from "@mui/material"
import TextArea from "../../components/TextArea"
import { DataGrid } from "@mui/x-data-grid"
import moment from "moment"
import AddStockModal from "./AddStockModal"

import SnakbarAlert from "../../components/SnakbarAlert"
import CustomNoRowsOverlay from '../../components/NoData'

type SnakbarAlertMessage = {
    type: AlertColor,
    message: string
}


function ViewProduct() {
    const theme = useTheme()

    const params = useParams()

    // this page data
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [product, setProduct] = useState<any>({})

    // edit product

    const [editProductName, setEditProductName] = useState<string>('')
    const [editProductDescription, setEditProductDescription] = useState<string>('')
    const [editBrand, setEditBrand] = useState<string>('')
    const [editCategory, setEditCategory] = useState<string>('')
    const [eidtType, setEidtType] = useState<string>('')
    const [editLowStockLevel, setEeditLowStockLevel] = useState<GLfloat>(0)
    const [editVolume, setEditVolume] = useState<GLfloat>(0)
    const [editVolumeUnits, setEditVolumeUnits] = useState<string>('')

    const [enableChangeDetails, setEnableChangeDetails] = useState<boolean>(false)
    const handleEditCancel = () => {
        setEnableChangeDetails(false)
        getProductById()
    }

    const handleEdit = () => {
        console.log(editProductName, editBrand, editLowStockLevel);

    }

    //snakbar
    const [openSnakbar, setOpenSnakbar] = useState<boolean>(false)
    const [snakbarAlertMessage, setSnakbarAlertMessage] = useState<SnakbarAlertMessage>({ type: 'success', message: 'This is a test message' })

    const handleSnakbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnakbar(false);
    };

    const handleSankbarShow = (alertMessage: SnakbarAlertMessage) => {
        setSnakbarAlertMessage(alertMessage);
        setOpenSnakbar(true);
    }


    // add stock modal
    const [addStockModalOpen, setAddStockModalOpen] = useState<boolean>(false)
    const handleAddStockModelClose = () => {
        setAddStockModalOpen(false)
    }
    const handleAddStockModelOpen = (row: any) => {
        console.log("test");
        setAddStockModalOpen(true)
    }


    //fetch data
    const getProductById = async () => {
        setIsloading(true)
        const res = await axios.get(`/product/${params.id}`)
        setProduct(res.data.data)
        console.info(res.data.data)
        setIsloading(false)
    }

    useEffect(() => {
        getProductById()
    }, [])



    //table
    const cols = useMemo(() => [
        { field: "supplierName", headerName: "Supplier Name", width: 220, renderCell: (params: any) => { return <p>{params.row.supplier?.name}</p> } },
        { field: "supplierContanctNo", headerName: "Supplier Contact No", width: 170, renderCell: (params: any) => { return <p>{params.row.supplier?.contact_no}</p> } },
        { field: "manufacturer_date", headerName: "Manufacture Date", width: 180, renderCell: (params: any) => { return <p>{moment(params.row?.manufacturer_date).format('YYYY-MM-DD')}</p> } },
        { field: "expiry_date", headerName: "Expire Date", width: 180, renderCell: (params: any) => { return <p>{moment(params.row?.expiry_date).format('YYYY-MM-DD')}</p> } },
        { field: "quantity", headerName: "Quantity", width: 170 },
        { field: "unit_price", headerName: "Unit Price", width: 170, renderCell: (params: any) => { return <p> <span className="lkr">LKR</span>{parseFloat(params.row.unit_price).toFixed(2)}</p> } },
    ], [])

    const totalItemsInStock = product?.stock?.reduce((acc: number, curr: any) => acc + curr.quantity, 0)

    return (
        <>
            {
                isLoading ? <Loading />
                    : <>
                        <AddStockModal
                            open={addStockModalOpen}
                            handleClose={handleAddStockModelClose}
                            productId={product.id}
                            refetch={getProductById}
                            handleSankbarShow={handleSankbarShow} />
                        <SnakbarAlert
                            open={openSnakbar}
                            handleClose={handleSnakbarClose}
                            duration={5000}
                            data={snakbarAlertMessage}

                        />
                        <Box sx={{ mt: 3 }}>
                            {/* <Grid container sx={{ mb: 4, pb: 3, borderBottom: '1px solid #ccc' }} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ minHeight: '100px', border: '1px solid #ccc', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography>In Stock</Typography>
                                    <Typography>{5}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ minHeight: '100px', border: '1px solid #ccc', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography>In Stock</Typography>
                                    <Typography>{5}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ minHeight: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                    <Button variant="contained">Add New Stock</Button>
                                </Box>
                            </Grid>
                        </Grid> */}

                            <Grid container spacing={4}>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{ height: '100%', overflow: 'hidden', borderRadius: 2 }}>
                                        <img src={`https://stylioo.blob.core.windows.net/images/${product?.image}`} alt="product" style={{ width: "100%", height: '100%', objectFit: 'cover' }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 2, mb: 4 }}>
                                        <Box sx={{ backgroundColor: totalItemsInStock < 1 ? "secondary.dark" : totalItemsInStock < product?.low_stock_quantity ? "warning.dark" : "success.light", color: 'white', px: '10px', py: '5px', borderRadius: '5px' }}>
                                            <Typography sx={{ fontSize: '1rem' }}>
                                                {
                                                    totalItemsInStock < 1 ? 'Out of Stock' :
                                                        totalItemsInStock < product?.low_stock_quantity ? `Low Stock: Only ${totalItemsInStock} Item${totalItemsInStock != 1 && 's'} Left` :
                                                            `In Stock: ${totalItemsInStock} Item${totalItemsInStock != 1 && 's'}`
                                                }
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            {
                                                enableChangeDetails ?
                                                    <>
                                                        <Button variant="contained" size="small" color="success" onClick={handleEdit}>Save</Button>
                                                        <Button variant="contained" color="secondary" size="small"
                                                            onClick={handleEditCancel}
                                                        >Cancel</Button>
                                                    </>

                                                    :
                                                    <>
                                                        <Button variant="contained" size="small"
                                                            onClick={() => setEnableChangeDetails(true)}

                                                        >Edit</Button>
                                                        <Button variant="outlined" color="secondary" size="small">Delete</Button>
                                                    </>
                                            }
                                        </Box>
                                    </Box>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1 }}>
                                            <TextField
                                                label="Product Name"
                                                sx={{ width: '100%', mb: 1 }}
                                                variant="outlined"
                                                size="small"
                                                defaultValue={product?.name}
                                                onChange={(e) => setEditProductName(e.target.value)}
                                                InputProps={{
                                                    readOnly: !enableChangeDetails,
                                                }}
                                            />
                                            <TextField
                                                label="Brand"
                                                sx={{ width: '100%', mb: 1 }}
                                                variant="outlined"
                                                size="small"
                                                defaultValue={product?.brand}
                                                onChange={(e) => setEditBrand(e.target.value)}
                                                InputProps={{
                                                    readOnly: !enableChangeDetails,
                                                }}
                                            />
                                            <TextArea onChange={(e) => setEditProductDescription(e.target.value)} name="description" label="Description" defaultValue={product?.description} height="100px" disabled={!enableChangeDetails} />
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <TextField
                                                label="Category"
                                                sx={{ width: '100%', mb: 1 }}
                                                variant="outlined"
                                                size="small"
                                                defaultValue={product?.category}
                                                onChange={(e) => setEditCategory(e.target.value)}
                                                InputProps={{
                                                    readOnly: !enableChangeDetails,
                                                }}
                                            />
                                            <TextField
                                                label="Type"
                                                sx={{ width: '100%', mb: 1 }}
                                                variant="outlined"
                                                size="small"
                                                defaultValue={product?.type}
                                                onChange={(e) => setEidtType(e.target.value)}
                                                InputProps={{
                                                    readOnly: !enableChangeDetails,
                                                }}
                                            />
                                            <Box sx={{ display: 'flex', gap: 2 }}>
                                                {/* <TextField
                                                label="Price (LKR)"
                                                sx={{ width: '100%', mb: 1 }}
                                                variant="outlined"
                                                size="small"
                                                defaultValue={parseFloat(product?.price).toFixed(2)}
                                                InputProps={{
                                                    readOnly: !enableChangeDetails,
                                                }}
                                            /> */}
                                                <TextField
                                                    label="Low Stock Level"
                                                    sx={{ width: '100%', mb: 1 }}
                                                    variant="outlined"
                                                    size="small"
                                                    defaultValue={product?.low_stock_quantity}
                                                    onChange={(e) => setEeditLowStockLevel(parseFloat(e.target.value))}
                                                    InputProps={{
                                                        readOnly: !enableChangeDetails,
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 2 }}>
                                                <TextField
                                                    label="Volume"
                                                    sx={{ width: '100%', mb: 1 }}
                                                    variant="outlined"
                                                    size="small"
                                                    defaultValue={product?.volume}
                                                    onChange={(e) => setEditVolume(parseFloat(e.target.value))}
                                                    InputProps={{
                                                        readOnly: !enableChangeDetails,
                                                    }}
                                                />
                                                <TextField
                                                    label="Unit"
                                                    sx={{ width: '100%', mb: 1 }}
                                                    variant="outlined"
                                                    size="small"
                                                    defaultValue={product?.volume_unit}
                                                    onChange={(e) => setEditVolumeUnits(e.target.value)}
                                                    InputProps={{
                                                        readOnly: !enableChangeDetails,
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Box sx={{ mt: 4 }}>

                                <Box sx={{ mb: 3, mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Typography component="h5" variant="h5" sx={{ fontWeight: 600 }}>
                                        Available Stocks
                                    </Typography>
                                    <Button variant="contained" onClick={handleAddStockModelOpen}>Add New Stock</Button>
                                </Box>

                                {
                                    product.stock && product.stock.length > 0 ?
                                        <DataGrid
                                            sx={{
                                                flexGrow: 1,
                                                maxHeight: '50dvh',
                                                overflow: 'hidden'
                                            }}
                                            columns={cols}
                                            rows={product?.stock}
                                            pageSizeOptions={[5, 10, 25]}
                                            getRowSpacing={(params) => ({
                                                top: params.isFirstVisible ? 0 : 8,
                                                bottom: params.isLastVisible ? 0 : 8,
                                            })}
                                            slots={{
                                                noRowsOverlay: CustomNoRowsOverlay,
                                            }}
                                            loading={isLoading}
                                        />
                                        :
                                        <CustomNoRowsOverlay />
                                }

                            </Box>

                        </Box >
                    </>
            }

        </>
    )
}

export default ViewProduct