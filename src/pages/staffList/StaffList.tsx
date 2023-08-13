import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
// import "../../styles/staffList/staffList.css";


function createData(
  name: string,
  contact: string,
  email: string,
  address: string,
  gender: string,
  doj: string,
  role: string,
  action: string,

) {
  return { name, contact, email, address, gender, doj, role, action};
}

const rows = [
  createData('Chirasi Amaya', '0711234567', 'chirasi@gmail.com', 'No/22,Araliya Road, Nugegoda, Colombo', 'Female', '2022/10/10', 'Beautician', 'vghsds'),
  createData('Chirasi Amaya', '0711234567', 'chirasi@gmail.com', 'No/22,Araliya Road, Nugegoda, Colombo', 'Female', '2022/10/10', 'Beautician', 'vghsds'),
  createData('Chirasi Amaya', '0711234567', 'chirasi@gmail.com', 'No/22,Araliya Road, Nugegoda, Colombo', 'Female', '2022/10/10', 'Beautician', 'vghsds'),
  createData('Chirasi Amaya', '0711234567', 'chirasi@gmail.com', 'No/22,Araliya Road, Nugegoda, Colombo', 'Female', '2022/10/10', 'Beautician', 'vghsds'),
  createData('Chirasi Amaya', '0711234567', 'chirasi@gmail.com', 'No/22,Araliya Road, Nugegoda, Colombo', 'Female', '2022/10/10', 'Beautician', 'vghsds'),
  createData('Chirasi Amaya', '0711234567', 'chirasi@gmail.com', 'No/22,Araliya Road, Nugegoda, Colombo', 'Female', '2022/10/10', 'Beautician', 'vghsds'),


];

function StaffList() {
    const [selectedValue, setSelectedValue] = React.useState("5")
    const [searchValue, setSearchValue] = React.useState("")
    
  return (
    <div>
     <h2 style={{marginBottom: '15px'}}>Staff List</h2>
     <div className="header_container">
        <p>Create, edit and manage Staff list</p>
        
        <div>
        <Link to="/addEmployee">
        <button className="primary_button" >Add</button>
        </Link>
        </div>
     </div>
        
        <div className="search_container" style={{marginBottom: '15px'}}>
        <div>
        <div className="show_container">
        <p>Show</p>
        <select value={selectedValue}
                onChange={(e)=>{
                    setSelectedValue(e.target.value);
                }}
               className="selectbox_container"
            >
                <option value="">5</option>
                <option value="option1">10</option>
                <option value="option2">25</option>
                <option value="option3">50</option>
        </select>
        </div>
        </div>

       
        <input 
        type="text"
        value={searchValue}
        onChange={(e)=> {
            e.preventDefault()
            setSearchValue(e.target.value)
        }}
        placeholder="Search..."
        className="searchbar"
          />
          </div>
          

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{
            backgroundColor:'#999999'
          }}>
            <TableCell>Name</TableCell>
            <TableCell align="left">Contact </TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Date of joining</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.contact}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.gender}</TableCell>
              <TableCell align="left">{row.doj}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">
                <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


export default StaffList