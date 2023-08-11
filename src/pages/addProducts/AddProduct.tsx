import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from '@mui/icons-material/FilterList';

interface Column {
  id:
    | "Image"
    | "Barcode"
    | "Brand"
    | "Product Type"
    | "Product Name"
    | "Business Price"
    | "Full Price"
    | "Sell Price"
    | "Quantity"
    | "Qty Alert"
    | "Action";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "img", label: "Image", flexBasis: "30%", minWidth: 300 },
  { id: "barCode", label: "Bar Code", minWidth: 100 },
  {
    id: "brand",
    label: "Brand",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "vendor",
    label: "Vendor",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "productType",
    label: "Product Type",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "productName",
    label: "Product Name",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "buisnessPrice",
    label: "Business Price",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "fullPrice",
    label: "Full Price",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "sellPrice",
    label: "Sell Price",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "quantity",
    label: "Quantity",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    flexBasis: "6%",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

function AddProduct() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div style={{backgroundColor:"#f0f0f0",padding:"35px"}}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            variant="outlined"
            label="Search"
            style={{ marginRight: "10px" }}
          />
          <Button variant="contained" startIcon={<SearchIcon />}>
            Search
          </Button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "5px" }}
        >
          <FormGroup
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Zero quantity products only"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Low quantity products only"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="In stock products only"
            />
          </FormGroup>
          <Button variant="contained" startIcon={<FilterListIcon />}>
            Add Filters
          </Button>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "35px" }}
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<AddIcon />}>
            Add Product
          </Button>
          <Button variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button variant="contained" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Stack>
      </div>
      <div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default AddProduct;
