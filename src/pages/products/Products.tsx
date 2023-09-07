import { useState, ChangeEvent, useMemo, useEffect, MouseEvent } from "react"

import '../../styles/main.scss'
import '../../styles/product.scss'
import AddProductPopup from "../../components/Popups/AddProductPopup"

import { DataGrid } from "@mui/x-data-grid"
import { useTheme } from "@mui/material/styles"

import axios from "../../axios"

import LoadingOverlay from '../../components/Loading'
import CustomNoRowsOverlay from '../../components/NoData'

import { AlertColor, Box, Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, TextField, useMediaQuery } from "@mui/material"
import { Search, Add, MoreVert, Edit, Delete } from '@mui/icons-material'
import { useNavigate } from "react-router-dom"
import AddStockModal from "./AddStockModal"
import AddNewProductModal from "./AddNewProductModal"
import SnakbarAlert from "../../components/SnakbarAlert"


type menuPropsType = {
  anchorEl: HTMLElement | null
  open: boolean
  handleClose: () => void
}

type SnakbarAlertMessage = {
  type: AlertColor,
  message: string
}

function OptionMenu({ anchorEl, open, handleClose }: menuPropsType) {
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

function Products() {

  const navigate = useNavigate();

  //theme and media query
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  //to be removed
  const [openPopup, setOpenPopup] = useState(false)

  //data loading and errors
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  // this page's state
  const [products, setProsucts] = useState<any>([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [filter, setFilter] = useState<string>()
  const [searchTerm, setSearchTerm] = useState<string>('')

  //snakbar
  const [openSnakbar, setOpenSnakbar] = useState<boolean>(false)
  const [snakbarAlertMessage, setSnakbarAlertMessage] = useState<SnakbarAlertMessage>({ type: 'success', message: 'This is a test message' })
  const [productId, setProductId] = useState<string>('')
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

  const handleOpenUpdateStockModal = (id: string) => {
    setProductId(id)
    setAddStockModalOpen(true)
  }

  // for modal and menus
  const [selectedRow, setSelectedRow] = useState<any>(null)

  // option menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>, row: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row)
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log(selectedRow);

  };

  // add new product modal
  const [openAddProductModal, setOpenAddProductModal] = useState<boolean>(false)

  const handleCloseAddProduct = () => {
    setOpenAddProductModal(false)
  }

  // table
  const cols = useMemo(() => [
    {
      field: 'image', filterable: false, headerName: 'Product', width: 76, renderCell: (params: any) => {
        return <div className="table-row-img-icon"><img src={`https://stylioo.blob.core.windows.net/images/${params.row.image}`} alt="" className="product-image" /></div>
      }
    },
    { field: "name", headerName: "Name", width: 200 },

    // {
    //   field: "status", headerName: "Status", width: 120, renderCell: (params: any) => {
    //     return <div className={`badge ${params.row.status === "IN_STOCK" ? 'badge-success' : params.row.status === "LOW_STOCK" ? "badge-warning" : "badge-danger"}`}><p className="capitalize">{params.row.status.toLowerCase().replace("_", " ")}</p></div>;
    //   }
    // },
    {
      field: "status", headerName: "Status", width: 120, renderCell: (params: any) => {
        const totalItemsInStock = params.row?.stock?.reduce((acc: number, curr: any) => acc + curr.quantity, 0)
        let status = "Out Stock"
        let className = "badge-danger"

        if (totalItemsInStock < 1) {
          status = "Out Stock"
          className = "badge-danger"
        }
        else if (totalItemsInStock < params.row?.low_stock_quantity) {
          status = "Low Stock"
          className = "badge-warning"
        } else {
          status = "In Stock"
          className = "badge-success"
        }
        return <div className={`badge ${className}`}><p className="capitalize">{status}</p></div>;
      }
    },
    {
      field: "quantity", headerName: "Quantity", width: 100, renderCell: (params: any) => {
        const totalItemsInStock = params.row?.stock?.reduce((acc: number, curr: any) => acc + curr.quantity, 0)
        return <p>{totalItemsInStock}</p>
      }
    },
    { field: "category", headerName: "Category", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "brand", headerName: "Brand", width: 130 },
    {
      field: "volumn", headerName: "Volume", width: 150, renderCell: (params: any) => {
        return <p>{params.row?.volume} {params.row?.volume_unit}</p>
      }
    },
    {
      field: 'actions', headerName: 'Action', type: 'actions', width: 200, renderCell: (params: any) => {
        return <div className="flex gap-1" style={{ border: 'none' }}>
          <Button variant="outlined" color="primary" size="small" onClick={() => handleOpenUpdateStockModal(params.row.id)}>Update Stocks</Button>
          <IconButton onClick={(event: MouseEvent<HTMLButtonElement>) => handleClick(event, params.row)} aria-label="delete">
            <MoreVert />
          </IconButton>
        </div>
      }
    }
  ], [])


  // input validation
  const handleSearchInput = (value: string) => {
    value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
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
    const res = await axios.get('/product?quantityOnly=true')
    setProsucts(res.data.data)
    setIsLoading(false)
  }

  const searchProducts = async () => {
    setIsLoading(true)
    const res = await axios.get(`/product/search?term=${searchTerm}&quantityOnly=true`)
    setProsucts(res.data.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <AddStockModal
        open={addStockModalOpen}
        handleClose={handleAddStockModelClose}
        productId={productId}
        refetch={getAllProducts}
        handleSankbarShow={handleSankbarShow} />
      <SnakbarAlert
        open={openSnakbar}
        handleClose={handleSnakbarClose}
        duration={5000}
        data={snakbarAlertMessage}

      />
      <AddNewProductModal
        refetch={getAllProducts}
        open={openAddProductModal}
        handleClose={handleCloseAddProduct}
        handleSankbarShow={handleSankbarShow}
      />

      <OptionMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      <Box className="page-header flex flex-between">
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
          {/* <FormControl size="small">
            <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={filter}
              onChange={(e) => setFilter(e.target.value as string)}
              autoWidth
              label="Filter"
              sx={{ minWidth: 150 }}
            >
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value={22}>Low stock</MenuItem>
              <MenuItem value={10}>In stock</MenuItem>
              <MenuItem value={21}>Out of stock</MenuItem>
            </Select>
          </FormControl> */}
        </div>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenAddProductModal(true)}
        >
          Add Product
        </Button>
      </Box>

      <DataGrid
        sx={{
          flexGrow: 1,
          maxHeight: '70dvh',
          overflow: 'hidden'
        }}
        columns={cols}
        rows={products}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 8,
          bottom: params.isLastVisible ? 0 : 8,
        })}
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          loadingOverlay: LoadingOverlay
        }}
        loading={isLoading}
        onRowClick={(params) => navigate(`/manager/product/${params.row.id}`)}
      />
      <AddProductPopup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      ></AddProductPopup>
    </>
  )
}

export default Products
