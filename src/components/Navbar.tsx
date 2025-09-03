import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center text-xs transition-all duration-300 ${
        isActive ? "text-white" : "text-gray-400"
      }`
    }
  >
    {({ isActive }) => (
      <>
        <div
          className={`p-3 rounded-full transition-all duration-300 ${
            isActive ? "bg-[#A1D1B1] shadow-lg text-[#1C2529]" : ""
          }`}
        >
          <i className={`bi ${icon} text-lg`}></i>
        </div>
        <span className="mt-1">{label}</span>
      </>
    )}
  </NavLink>
);

export default function BottomNav() {
  return (
    <>
      {/* Navigație fixă */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#1C2529] backdrop-blur-md border-t border-white/10 text-white">
        <div className="flex justify-around items-center py-3">
          <NavItem to="/home" icon="bi-house-door-fill" label="Home" />
          <NavItem to="/history" icon="bi-clock-history" label="History" />
          <NavItem to="/user" icon="bi-person-circle" label="Profile" />

          {/* Dark Mode Toggle */}
          <button
            id="darkToggle"
            className="p-3 rounded-full hover:bg-white/10 transition"
          >
            <i className="bi bi-moon-stars-fill text-lg"></i>
          </button>
        </div>
      </nav>

      {/* Buton flotant dreapta jos */}
      <button
        className="fixed bottom-20 right-5 z-50 bg-[#A1D1B1] text-[#1C2529] p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
        onClick={() => alert("Shop action triggered!")}
      >
        <i className="bi bi-bag-fill text-xl"></i>
      </button>
    </>
  );
}