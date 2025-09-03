import { useEffect, useState } from "react";
import logoImage from "../../assets/images/azilogo192.png"
import { Link } from "react-router-dom"
import Conditii from "../../components/Conditii";


export default function ValidationCode() {
    const [code, setCode] = useState(["","","",""])
    const [seconds, setSeconds] = useState(180)

    

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return; // acceptă doar cifre
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // focus pe următorul input
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (value && nextInput) {
        (nextInput as HTMLInputElement).focus();
        }
    }

    const handleResend = () => {
        setSeconds(180);
        setCode(["","","",""]);
        // Aici vine logica de re-trimitere cod
    }

    // Timer 
    useEffect(() => {
        if (seconds === 0) return;
        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000)
        return () => clearInterval(interval)
    }, [seconds])

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white overflow-hidden">
            <div className="flex flex-col items-center justify-center space-y-6">  
                {/* Logo */}
                <img
                    src={logoImage}
                    alt="Logo"
                    className="w-18 h-18 rounded-3xl animate-pulse mb-12"
                />
                {/* Headings */}
                <p className="py-2 text-3xl font-semibold text-black mb-6">
                    Introdu codul de 4 cifre
                </p>
                <p className="py-2 mt-5 text-sm font-semibold text-black drop-shadow-md">
                    Introdu codul de verificare trimis la numarul de tel: ****567
                </p>

                <Link to="/#" className="text-blue-500 font-bold">
                    Schimba numarul?
                </Link>

                <div className="flex gap-4">
                    {code.map((digit, index) => (
                    <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        className="w-16 h-16 text-2xl text-center border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    ))}
                </div>

                <div className="text-sm text-gray-600">
                    {seconds > 0 ? (
                    <span>
                        Re-trimite codul în{" "}
                        <span className="font-semibold text-blue-600">
                        {`00:${seconds.toString().padStart(2, "0")}`}
                        </span>
                    </span>
                    ) : (
                    <button
                        onClick={handleResend}
                        className="text-blue-500 underline font-medium"
                    >
                        Re-trimite codul
                    </button>
                    )}
                </div>
                <button className="bg-blue-500 py-3 px-16 rounded-4xl font-semibold hover:opacity-50 text-white mt-5 animate-pulse">
                    Continuă
                </button>
                <Conditii
                    text="Prin crearea unui cont accepti "
                    className="flex flex-col text-black text-sm font-semibold"
                />
            </div>
        </div>
    )
}