import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home"
import AppointmentPage from "./pages/appoinments"
import Sidebar from "./components/sidebar"
import Appbar from "./components/appbar"

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/appointment" element={<AppointmentPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
