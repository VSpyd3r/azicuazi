import {
  IoHomeOutline,
  IoCalendarClearOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const navItems = [
    { to: "/home", icon: <IoHomeOutline size={28} />, label: "Home" },
    { to: "/delivery", icon: <TbTruckDelivery size={28} />, label: "Delivery" },
    { to: "/history", icon: <IoCalendarClearOutline size={28} />, label: "History" },
    { to: "/settings", icon: <IoPersonOutline size={28} />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 py-0 rounded-t-3xl px-4 rounded-3xl backdrop-blur-xl bg-white/10 backdrop-opacity-30 border border-amber-200/20 shadow-lg shadow-amber-300/30 mx-4">
      <ul className="flex justify-around items-center py-3">
        {navItems.map(({ to, icon, label }) => (
          <li key={label}>
            <NavLink to={to}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={`flex flex-col items-center text-xs transition-colors duration-300 ${
                    isActive ? "text-[#d8aa61] animate-bounce drop-shadow-[0_0_8px_rgba(94,234,212,0.6)] transition duration-300 hover:drop-shadow-[0_0_12px_rgba(94,234,212,0.9)]" : "text-gray-400 hover:text-[#c3f53a]"
                  }`}
                >
                  {icon}
                  {isActive && (
                    <span className="mt-1 font-semibold decoration-[#bc6c25]">
                      {label}
                    </span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavbar;