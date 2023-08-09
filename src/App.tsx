import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme"
import SideBar from "./components/SideBar/SideBar"
import HomePage from "./pages/home/HomePage"
import AppointmentPage from "./pages/appoinments/HomePage"
import LoginPage from "./pages/login/LoginPage"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <SideBar > */}
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/appointment" element={<AppointmentPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        {/* </SideBar> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
