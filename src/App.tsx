import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import theme from "./theme"
import SideBar from "./components/SideBar/SideBar"
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
        <SideBar >
          <Routes>
            <Route path="/" element={<ReceptionistPage />}></Route>
            {/* <Route path="/appointment" element={<AppointmentPage />}></Route> */}
            <Route path="/client" element={<ClientPage />}></Route>
            {/* <Route path="/beautician" element={<BeauticianPage />}></Route> */}
            <Route path="/receptionist" element={<ReceptionistPage />}></Route>
            <Route path="/quicksale" element={<QuickSalePage />} />
            <Route path="/staff" element={<StaffPage />}></Route>
            <Route path="/quick-sale-form" element={<QuickSaleForm />}></Route>
            <Route path="/leave" element={<LeavePage />}></Route>
            <Route path="/leavemanagement" element={<LeaveManagmentPage />}></Route>

          </Routes>
        </SideBar>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
