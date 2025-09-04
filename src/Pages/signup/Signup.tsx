import { Link } from "react-router-dom";
import logoImage from "../../assets/images/azilogo192.png";
import Conditii from "../../components/Conditii";

export default function Signup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Logo */}
        <img
          src={logoImage}
          alt="Logo"
          className="w-18 h-18 rounded-3xl animate-pulse mb-6"
        />

        {/* Headings */}
        <h2 className="py-2 mb-5 text-3xl font-semibold text-black drop-shadow-lg">
          Haide să începem
        </h2>
        <h3 className="py-2 mt-5 font-semibold text-black drop-shadow-md">
          Introdu detaliile tale
        </h3>

        {/* Form */}
        <form className="flex flex-col gap-5 w-80 mt-2 mb-6">
          <input
            className="p-2 rounded-2xl text-black italic bg-blue-100"
            placeholder="Nume"
          />
          <input
            className="p-2 rounded-2xl text-black italic bg-blue-100"
            placeholder="Email"
          />
          <input
            className="p-2 rounded-2xl text-black italic bg-blue-100"
            placeholder="Telefon"
          />
          <input
            type="password"
            className="p-2 rounded-2xl text-black bg-blue-100"
            placeholder="Password"
          />

          <button className="bg-blue-500 py-3 px-4 rounded-4xl font-semibold hover:opacity-50 text-white mt-5 animate-pulse">
            Continuă
          </button>
        </form>

        {/* Terms & Conditions */}
        <Conditii
          text="Prin crearea unui cont accepți "
          className="flex flex-col text-black text-sm font-semibold"
        />

        <p className="text-black mt-4 font-semibold italic">
          Ai deja cont?{" "}
          <Link to="/login" className="text-blue-500 font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}