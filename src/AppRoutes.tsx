import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
// import Verification from "./Pages/Verification/Verification"; // dacă ai deja pagina
import Home from "./Pages/Home/Home";
import Delivery from "./Pages/Delivery/Delivery";
import Settings from "./Pages/Settings/Settings";
import History from "./Pages/History/History";
import ProtectedRoute from "./routes/ProtectedRoute";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/login", "/signup", "/verification"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <main className="pb-16">{children}</main>
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Flow de onboarding/autentificare */}
          <Route path="/" element={<Onboarding />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/verification" element={<Verification />} /> */}
          <Route path="/login" element={<Login />} />

          {/* Rute protejate */}
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/delivery" element={<ProtectedRoute><Delivery /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}