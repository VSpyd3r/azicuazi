

export default function Delivery() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-slate-600 to-slate-950 overflow-hidden fixed text-center">
      <form className=" mx-4  bg-white/10 backdrop-blur-md p-6 rounded-4xl space-y-4 text-slate-300 shadow-lg shadow-amber-300/30 border border-amber-200/10">
        <h2 className="text-2xl font-bold text-amber-300">Formular Livrare</h2>

        <input type="text" placeholder="Nume complet" className="w-full p-2 rounded-2xl bg-white/20" />
        <input type="tel" placeholder="Telefon" className="w-full p-2 rounded-2xl bg-white/20" />

        <h3 className="text-lg font-semibold mt-4 text-amber-300">Adresă Ridicare</h3>
        <input type="text" placeholder="Stradă și număr" className="w-full p-2 rounded-2xl bg-white/20" />
        <input type="text" placeholder="Oraș" className="w-full p-2 rounded-2xl bg-white/20" />

        <h3 className="text-lg font-semibold mt-4 text-amber-300">Adresă Livrare</h3>
        <input type="text" placeholder="Stradă și număr" className="w-full p-2 rounded-2xl bg-white/20" />
        <input type="text" placeholder="Oraș" className="w-full p-2 rounded-2xl bg-white/20" />

        <h3 className="text-lg font-semibold mt-4 text-amber-300">Detalii Colet</h3>
        <select className="w-full p-2 rounded-2xl bg-white/20 text-amber-300">
          <option>Document</option>
          <option>Pachet</option>
          <option>Fragil</option>
        </select>
        <textarea placeholder="Observații" className="w-full p-2 rounded-2xl bg-white/20" />

        <button type="submit" className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-4xl text-white font-semibold shadow hover:shadow-lg transition w-full">
          Verifica pret
        </button>
      </form>
    </div>
  )
}