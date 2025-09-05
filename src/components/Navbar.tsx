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
    <nav className="fixed bottom-6 left-0 right-0 z-50 rounded-t-3xl px-4 rounded-3xl backdrop-blur-md bg-white/60 border border-white/20 shadow-lg">
      <ul className="flex justify-around items-center py-3">
        {navItems.map(({ to, icon, label }) => (
          <li key={label}>
            <NavLink to={to}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={`flex flex-col items-center text-xs transition-colors duration-300 ${
                    isActive ? "text-[#8556bb] animate-pulse" : "text-slate-500 hover:text-[#5bc1e0]"
                  }`}
                >
                  {icon}
                  {isActive && (
                    <span className="mt-1 font-semibold decoration-[#8556bb]">
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