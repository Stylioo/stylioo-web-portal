import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import theme from "./theme"

import Layout from "./Layout"

import HomePage from "./pages/home/HomePage"
import AppointmentPage from "./pages/appoinments/HomePage"
import ReceptionistPage from "./pages/receptionist/HomePage"
// import BeauticianPage from "./pages/beautician/HomePage"
import StaffPage from "./pages/staff/HomePage"
import QuickSalePage from "./pages/quicksale/QuickSalePage"
import QuickSaleForm from "./pages/quicksale/QuickSaleForm"
import ClientPage from "./pages/client/HomePage"
import LeavePage from "./pages/leave/HomePage"
import LeaveManagmentPage from "./pages/leavemanagment/HomePage"




function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/signin" element={<h1>login</h1>}></Route>
          <Route path="/" element={<Layout><ReceptionistPage /></Layout>
          }></Route>
          {/* <Route path="/appointment" element={<Layout><AppointmentPage />}></Route> */}
          <Route path="/client" element={<Layout><ClientPage /></Layout>}></Route>
          {/* <Route path="/beautician" element={<Layout><BeauticianPage /></Layout>}></Route> */}
          <Route path="/receptionist" element={<Layout><ReceptionistPage /></Layout>}></Route>
          <Route path="/quicksale" element={<Layout><QuickSalePage /> </Layout>} />
          <Route path="/staff" element={<Layout><StaffPage /></Layout>}></Route>
          <Route path="/quick-sale-form" element={<Layout><QuickSaleForm /></Layout>}></Route>
          <Route path="/leave" element={<Layout><LeavePage /></Layout>}></Route>
          <Route path="/leavemanagement" element={<Layout><LeaveManagmentPage /></Layout>}></Route>

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
