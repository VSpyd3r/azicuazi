// Navbar.tsx
import { NavLink } from "react-router-dom"
import { IoHomeOutline, IoBicycleOutline, IoSettingsOutline, IoTimeOutline } from "react-icons/io5"

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2">
      <NavLink 
        to="/home" 
        className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? "text-blue-500" : "text-gray-600"}`
        }
      >
        <IoHomeOutline size={26} />
      </NavLink>

      <NavLink 
        to="/delivery" 
        className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? "text-blue-500" : "text-gray-600"}`
        }
      >
        <IoBicycleOutline size={26} />
      </NavLink>

      <NavLink 
        to="/settings" 
        className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? "text-blue-500" : "text-gray-600"}`
        }
      >
        <IoSettingsOutline size={26} />
      </NavLink>

      <NavLink 
        to="/history" 
        className={({ isActive }) => 
          `flex flex-col items-center ${isActive ? "text-blue-500" : "text-gray-600"}`
        }
      >
        <IoTimeOutline size={26} />
      </NavLink>
    </nav>
  )
}