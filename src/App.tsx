import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import ReduxProvider from "./redux/Provider"

import theme from "./theme"

import Layout from "./Layout"

import Signin from "./pages/signin/SigninPage"
// import HomePage from "./pages/home/HomePage"
import AppointmentPage from "./pages/appoinments/HomePage"
import ReceptionistPage from "./pages/receptionist/HomePage"
// import BeauticianPage from "./pages/beautician/HomePage"
import QuickSalePage from "./pages/quicksale/QuickSalePage"
import QuickSaleForm from "./pages/quicksale/QuickSaleForm"
import ClientPage from "./pages/client/HomePage"
import Services from "./pages/services/Services"
import Package from "./pages/package/Package"
import StaffList from "./pages/Staff/Staff"
import AddEmployee from "./pages/addEmployee/AddEmployee"
import LeavePage from "./pages/leave/LeavePage"
import LeaveManagmentPage from "./pages/leavemanagment/HomePage"
import AddNewAppointment from "./pages/appoinments/AddNewAppointment"
import Products from "./pages/products/Products"
import AddProducts from "./pages/Staff/AddStaff"
import ViewProducts from "./pages/products/ViewProduct"
import AddStaff from "./pages/Staff/AddStaff"
import ViewStaff from "./pages/Staff/ViewStaff"
// import LeavePage from "./pages/leave/HomePage"


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
              <Route path="quick-sale-form" element={<QuickSaleForm />} />
              <Route path="leave" element={<LeavePage />} />
            </Route>

            <Route path="/manager" element={<Layout allowedRoles='MANAGER' />} >
              <Route path="" element={<Services />} />
              <Route path="services" element={<Services />} />
              <Route path="packages" element={<Package />} />
              <Route path="product" element={<Products />} />
              <Route path="product/new" element={<AddProducts />} />
              <Route path="product/:id" element={<ViewProducts />} />
              <Route path="leavemanagement" element={<LeaveManagmentPage />} />
            </Route>

            <Route path="/owner" element={<Layout allowedRoles='OWNER' />} >
              <Route path="" element={<h1>Insights</h1>} />
              <Route path="insights" element={<h1>Insights</h1>} />
              <Route path="staff" element={<StaffList />} />
              <Route path="staff/add" element={<AddStaff />} />
              <Route path="staff/:id" element={<ViewStaff />} />
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
