import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { Footer } from "./components/Footer"
import { AdminHome } from "./pages/Admin/AdminHome"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<AdminHome/>} />
    </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
