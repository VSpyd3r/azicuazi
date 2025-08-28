
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Onboarding from "./Pages/Onboarding/Onboarding"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
import Home from "./Pages/Home/Home"
import Delivery from "./Pages/Delivery/Delivery"
import Settings from "./Pages/Settings/Settings"
import History from "./Pages/History/History"


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pb-16">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}


