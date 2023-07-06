import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material"
import HomePage from "./pages/home"
import AppointmentPage from "./pages/appoinments"
import SideBar from "./components/SideBar"

function App() {

  const theme = createTheme()
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SideBar >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/appointment" element={<AppointmentPage />}></Route>
          </Routes>
        </SideBar>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
