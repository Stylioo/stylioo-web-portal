import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme"
import SideBar from "./components/SideBar/SideBar"
import HomePage from "./pages/home/HomePage"
import AppointmentPage from "./pages/appoinments/HomePage"
import ReceptionistPage from "./pages/receptionist/HomePage"
import ProfileSettingsPage from "./components/Profile/ProfileSettingsPage"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SideBar >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/appointment" element={<AppointmentPage />}></Route>
            <Route path="/receptionist" element={<ReceptionistPage />}></Route>
            <Route path="/components/Profile" element={<ProfileSettingsPage />}></Route>
          </Routes>
        </SideBar>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
