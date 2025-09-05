import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Onboarding from "./Pages/onboarding/Onboarding";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Verification from "./Pages/verification/Verification";
import Home from "./Pages/home/Home"
import Delivery from "./Pages/delivery/Delivery";
import Settings from "./Pages/settings/Settings";
import History from "./Pages/history/History";

// ✅ Layout cu Navbar dinamic
function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/login", "/signup", "/verification"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <main className="pb-16">
        <Outlet />
      </main>
    </>
  );
}

// ✅ ProtectedRoute cu flag de dezvoltare
function ProtectedRoute() {
  const DEV_MODE = true; // setează pe false în producție
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  return DEV_MODE || isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

// ✅ Rutele aplicației
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout general */}
        <Route element={<Layout />}>
          {/* Public routes */}
          <Route path="/" element={<Onboarding />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}