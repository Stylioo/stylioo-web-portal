import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Box,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

function AddProductPopup(props) {
  const { openPopup, setOpenPopup } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setOpenPopup(false); // Update the state to close the dialog
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box>
        <Dialog open={openPopup} onClose={handleClose}>
          <DialogTitle>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h4>Add Product</h4>
            </div>
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "5px",
                gap: "7px",
              }}
            >
              <TextField
                label="Product Name"
                id="filled-basic"
                placeholder="Product Name"
                sx={{ m: 1, width: "25ch" }}
                variant="filled"
              />
              <TextField
                label="Bar Code"
                id="filled-basic"
                placeholder="Bar Code"
                sx={{ m: 1, width: "25ch" }}
                variant="filled"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "5px",
                gap: "15px",
              }}
            >
              <TextField
                label="Cost Price"
                id="filled-start-adornment"
                placeholder="Cost Price"
                sx={{ m: 1, width: "35ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">LKR:</InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <TextField
                label="Full Price"
                id="filled-start-adornment"
                placeholder="Full Price"
                sx={{ m: 1, width: "35ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">LKR:</InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <TextField
                label="Sell Price"
                id="filled-start-adornment"
                placeholder="Sell Price"
                sx={{ m: 1, width: "35ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">LKR:</InputAdornment>
                  ),
                }}
                variant="filled"
              />
            </div>
            <div>
              <TextField
                id="filled-textarea"
                label="Discription"
                placeholder="Discription"
                multiline
                variant="filled"
                sx={{ m: 1, width: "60ch" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "5px",
                gap: "15px",
              }}
            >
              <div>
                <Button
                  aria-controls="dropdown-menu"
                  aria-haspopup="true"
                  onClick={handleClickMenu}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Select Brand
                </Button>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={handleCloseMenu}>Brand 1</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Brand 2</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Brand 3</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  aria-controls="dropdown-menu"
                  aria-haspopup="true"
                  onClick={handleClickMenu}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Select Product Type
                </Button>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={handleCloseMenu}>Product 1</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Product 2</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Product 3</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  aria-controls="dropdown-menu"
                  aria-haspopup="true"
                  onClick={handleClickMenu}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Select Vendor
                </Button>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={handleCloseMenu}>Vendor 1</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Vendor 2</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Vendor 3</MenuItem>
                </Menu>
              </div>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload File
              </Button>
            </div>
            <DialogContentText sx={{ padding: "9px", color: "gray" }}>
              <div>
                <h4>Stock Control</h4>
              </div>
              <div>
                <p>
                  List the available in stock quatities for the products. Also
                  set a minimum quatity level and get alerts when the stock is
                  less.
                </p>
              </div>
            </DialogContentText>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "5px",
                  gap: "7px",
                }}
              >
                <TextField
                  label="In Stock Quantity"
                  id="filled-basic"
                  placeholder="In Stock Quantity"
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                />
                <TextField
                  label="Quatity Alert"
                  id="filled-basic"
                  placeholder="Quatity Alert"
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "5px",
                  gap: "7px",
                }}
              >
                <Button
                  aria-controls="dropdown-menu"
                  aria-haspopup="true"
                  onClick={handleClickMenu}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Retail
                </Button>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={handleCloseMenu}>Option 1</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Option 2</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Option 3</MenuItem>
                </Menu>
                <TextField
                  label="Product Usage"
                  id="filled-basic"
                  placeholder="Product Usage"
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined"><CloseIcon />
              Close
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              style={{ backgroundColor: "#4caf50", color: "white" }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}

export default AddProductPopup;


// Create popup for add a new product in the inventory