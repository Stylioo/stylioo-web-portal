import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import theme from "./theme"

import Layout from "./Layout"

import Signin from "./pages/signin/SigninPage"
// import HomePage from "./pages/home/HomePage"
import AppointmentPage from "./pages/appoinments/HomePage"
import ReceptionistPage from "./pages/receptionist/HomePage"
// import BeauticianPage from "./pages/beautician/HomePage"
import StaffPage from "./pages/staff/HomePage"
import QuickSalePage from "./pages/quicksale/QuickSalePage"
import QuickSaleForm from "./pages/quicksale/QuickSaleForm"
import ClientPage from "./pages/client/HomePage"
import ReduxProvider from "./redux/Provider"
import Services from "./pages/services/Services"
import Package from "./pages/package/Package"
import StaffList from "./pages/staffList/StaffList"
import AddEmployee from "./pages/addEmployee/AddEmployee"
import AddProduct from "./pages/addProducts/AddProduct"
// import LeavePage from "./pages/leave/HomePage"
// import LeaveManagmentPage from "./pages/leavemanagment/HomePage"


// ['BEAUTICIAN', 'RECEPTIONIST', 'MANAGER', 'OWNER']

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Routes>

            <Route path="/receptionist" element={<Layout allowedRoles='RECEPTIONIST' />} >
              <Route path="" element={<AppointmentPage />} />
              <Route path="appointment" element={<AppointmentPage />} />
              <Route path="client" element={<ClientPage />} />
              <Route path="quicksale" element={<QuickSalePage />} />
              <Route path="staff" element={<StaffPage />} />
              <Route path="quick-sale-form" element={<QuickSaleForm />} />
            </Route>

            <Route path="/manager" element={<Layout allowedRoles='MANAGER' />} >
              <Route path="" element={<Services />} />
              <Route path="services" element={<Services />} />
              <Route path="packages" element={<Package />} />
              <Route path="products" element={<AddProduct />} />
            </Route>

            <Route path="/owner" element={<Layout allowedRoles='OWNER' />} >
              <Route path="" element={<h1>Insights</h1>} />
              <Route path="insights" element={<h1>Insights</h1>} />
              <Route path="staff" element={<StaffList />} />
              <Route path="addEmployee" element={<AddEmployee />} />
              <Route path="sales" element={<h1>Sales</h1>} />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/accessDenied" element={<h1>Access Denied</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />

          </Routes>

        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default App
