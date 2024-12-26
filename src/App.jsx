import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { Footer } from "./components/Footer"
import { IsAdminHook } from "./CustomHooks/IsAdminHook"

function App() {
  const {isAdminLoggedIn} = IsAdminHook();
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/login" element={isAdminLoggedIn ? <Navigate to="/"/> : <Login/>} />
    </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
