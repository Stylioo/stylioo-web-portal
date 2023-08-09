import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme"
import SideBar from "./components/SideBar/SideBar"
import HomePage from "./pages/home/HomePage"
import AppointmentPage from "./pages/appoinments/HomePage"
import Addons from "./pages/addons/Addons"
import Quicksale from "./pages/quicksale/Quicksale"
import Services from "./pages/services/Services"
import Package from "./pages/package/Package"


function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SideBar >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/appointment" element={<AppointmentPage />}></Route>
            <Route path="/addons" element={<Addons />}></Route>
            <Route path="/quicksale" element={<Quicksale />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/package" element={<Package />}></Route>

          </Routes>
        </SideBar>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App


