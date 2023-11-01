import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import ReduxProvider from "@/redux/Provider"
import theme from "@/theme"
import ROLE from "@/constants/roles"

import Signin from "./pages/signin/SigninPage"
import ClientPage from "./pages/client/HomePage"
import Services from "./pages/services/Services"
import StaffList from "./pages/Staff/Staff"
import LeavePage from "./pages/leave/LeavePage"
import Products from "./pages/products/Products"
import AddProducts from "./pages/Staff/AddStaff"
import ViewProducts from "./pages/products/ViewProduct"
import AddStaff from "./pages/Staff/AddStaff"
import ViewStaff from "./pages/Staff/ViewStaff"
import DashboardLayout from "./components/DashboardLayout"
import ProtectedLayout from "./components/ProtectedLayout"
import Appointments from "./pages/appoinments/Appointments"
import NewAppointment from "./pages/appoinments/newAppointment"
import AllBeauticianPage from "./pages/allbeautician/HomePage"
import Dashboard from "./pages/dashboard/HomePage"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Routes>

            <Route path="/signin" element={<Signin />} />
            <Route path="/accessDenied" element={<h1>Access Denied</h1>} />

            <Route element={<DashboardLayout />}>

              <Route path="/" element={<Dashboard />} />

              <Route element={<ProtectedLayout allowedRole={[ROLE.OWNER, ROLE.ADMIN]} />}>
                <Route path="staff" element={<StaffList />} />
                <Route path="staff/add" element={<AddStaff />} />
                <Route path="staff/:id" element={<ViewStaff />} />
              </Route>

              <Route element={<ProtectedLayout allowedRole={[ROLE.RECEPTIONIST, ROLE.ADMIN]} />}>
                <Route path="appointments" element={<Appointments />} />
                <Route path="appointments/new" element={<NewAppointment />} />
                <Route path="client" element={<ClientPage />} />
                <Route path="leave" element={<LeavePage />} />
                <Route path='beauticians' element={<AllBeauticianPage />} />
              </Route>

              <Route element={<ProtectedLayout allowedRole={[ROLE.MANAGER, ROLE.OWNER, ROLE.ADMIN]} />}>
                <Route path="services" element={<Services />} />
                <Route path="products" element={<Products />} />
                <Route path="products/new" element={<AddProducts />} />
                <Route path="products/:id" element={<ViewProducts />} />
              </Route>

            </Route>

            <Route path="*" element={<h1>Not Found</h1>} />

          </Routes>
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default App



{/* <Routes>
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
              <Route path="leavemanagement" element={<LeaveManagmentPage />} />
            </Route>

            <Route path="/owner" element={<Layout allowedRoles='OWNER' />} >
              <Route path="" element={<h1>Insights</h1>} />
              <Route path="insights" element={<h1>Insights</h1>} />
              <Route path="sales" element={<h1>Sales</h1>} />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/accessDenied" element={<h1>Access Denied</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes> */}