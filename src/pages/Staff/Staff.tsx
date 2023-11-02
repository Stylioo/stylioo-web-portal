
// Importing necessary dependencies and components

import { ChangeEvent, useEffect, useState, MouseEvent, useMemo } from 'react';
import axios from '@/axios';

import LoadingOverlay from '../../components/Loading'
import CustomNoRowsOverlay from '../../components/NoData'

import { useNavigate } from "react-router-dom"
import { Box, Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Add, Delete, Edit, MoreVert, Search } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import useAuth from '@/hooks/useAuth';

// Define the structure of an employee

type employeeType = {
  address_line_1?: string,
  address_line_2?: string,
  city?: string,
  contact_no?: string,
  district?: string,
  email: string,
  first_name: string,
  last_name: string,
  password?: string,
  role: string,
  doj?: string,
  gender?: string,
  uid: string
}

// Define the properties for the option menu

type menuPropsType = {
  anchorEl: HTMLElement | null
  open: boolean
  handleClose: () => void
  employeeId: string
  deleteEmployee: (id: string) => void
}

function OptionMenu({ anchorEl, open, handleClose, employeeId, deleteEmployee }: menuPropsType) {

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
        <MenuItem
          onClick={() => deleteEmployee(employeeId)}
        >
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
// Staff component for displaying staff details

function Staff() {

  const navigate = useNavigate();

  const currentUser = useAuth()

  //theme and media query
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [employeeId, setEmployeeId] = useState<string>('')


  // for modal and menus
  const [selectedRow, setSelectedRow] = useState<any>(null)

  // option menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>, row: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row)
    setEmployeeId(row.id)
  };
  // Handle the click event for the option menu

  // Handle the closing of the option menu

  const handleClose = () => {
    setAnchorEl(null);
  };


  //data loading and errors
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const [employees, setEmployees] = useState<employeeType[]>([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [filter, setFilter] = useState<string>()
  const [searchTerm, setSearchTerm] = useState<string>('')

  // input validation
  const handleSearchInput = (value: string) => {
    // Escape special characters in the search term
    value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    setSearchTerm(value)
    if (value === '') {
      getEmployees()
    }
  }

  // Handle Enter key press for searching
  const handleEnterKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      getEmployees()
    }
  }

  // Fetch all employees

  const getEmployees = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get("/employee")
      if (response.data.success) {
        let e = response.data.data
        if (currentUser.role === 'OWNER') {
          e = e.filter((emp: employeeType) => emp.role !== 'OWNER')
        }
        setEmployees(e)
        console.log(response.data.data);

      }
    } catch (err) {
      console.log(err)
    }
    finally {
      setIsLoading(false)
    }
  }

  // Search for employees with a specific term

  const searchEmployee = async () => {
    setIsLoading(true)
    const res = await axios.get(`/employee?term=${searchTerm}&quantityOnly=true`)
    setEmployees(res.data.data)
    setIsLoading(false)
  }

  const deleteEmployee = async (id: string) => {
    try {
      setIsLoading(true)
      setAnchorEl(null);
      const res = await axios.delete(`/employee/${id}`)
      if (res.data.success) {
        console.log(res.data.message);
        getEmployees()
      }

    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }
  // Fetch employees when the component mounts

  useEffect(() => {
    getEmployees()
  }, [])




  const cols = useMemo(() => [
    {
      // Define columns for the data grid

      field: 'image', filterable: false, headerName: 'Employee', width: 76, renderCell: (params: any) => {
        return <div className="table-row-img-icon"><img src={`https://stylioo.blob.core.windows.net/images/${params.row.image}`} alt="" className="product-image" /></div>
      }
    },

    { field: "first_name", headerName: "First Name", width: 200 },
    { field: "last_name", headerName: "Last Name", width: 200 },
    { field: "role", headerName: "Role", width: 120 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "contact_no", headerName: "Contact No", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    {
      field: 'actions', headerName: 'Action', type: 'actions', width: 200, renderCell: (params: any) => {
        return <div className="flex gap-1" style={{ border: 'none' }}>
          <IconButton onClick={(event: MouseEvent<HTMLButtonElement>) => handleClick(event, params.row)} aria-label="delete">
            <MoreVert />
          </IconButton>
        </div>
      }
    }
  ], [])

  return (
    <>
      <OptionMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        employeeId={employeeId}
        deleteEmployee={deleteEmployee}
      />
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
            onClick={searchEmployee}
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
          onClick={() => navigate('/staff/add')}
        >
          Add staff
        </Button>
      </Box>
      <DataGrid
        // getRowId={(row) => row.uid}
        sx={{
          flexGrow: 1,
          maxHeight: '70dvh',
          overflow: 'hidden'
        }}
        columns={cols}
        rows={employees}
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
        onRowClick={(params) => navigate(`/staff/${params.row.id}`)}
      />

    </>
  )
}


export default Staff


// Display staff details 