import SplitText from "../../components/WelcomeAnim";

export default function DeliveryDashboard() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-slate-600 to-slate-950  text-gray-800 font-sans overflow-hidden fixed">
      {/* Header */}
      <header className="flex flex-col p-2 rounded-b-4xl mb-6 backdrop-blur-xl bg-white/10 backdrop-opacity-30 border border-amber-200/20 shadow-lg shadow-amber-300/30">
        <p className="text-xs font-semibold text-[#14213d]">
          <SplitText text="Bine ai venit"/>
        </p>
        <div className="absolute flex right-4 items-center justify-center bg-slate-600 rounded-full w-12 h-12 mt-4">
          <span className="text-2xl text-[#fca311] font-bold">BI</span>
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-gray-200 font-bold mx-4">Bogdan Ion</p>
        <p className="mt-1 mx-4 text-sm text-[#fca311] italic font-semibold animate-pulse">Ai 1 livrare în progres</p>
        </div> 
      </header>

      {/* Livrare activă */}
      <section className="mx-4 mb-6 p-4 rounded-4xl bg-white/10 shadow-lg border border-amber-200/20 backdrop-blur-lg shadow-amber-300/30">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-400">Cod livrare</span>
          <span className="text-sm font-semibold text-[#fca311]">DLVR123454</span>
        </div>
        <p className="text-base font-semibold text-gray-400">Paul Popa</p>
        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-[#fca311] rounded-full animate-bounce">
          <SplitText text="În progres" tag="span" loop className="text-slate-800"/>
        </span>
      </section>

      {/* Opțiuni livrare */}
      <section className="mx-4 mb-6 grid gap-4 animate-pulse">
        <button className="w-full p-4 rounded-xl bg-[#a1d1b1] text-white font-semibold shadow hover:bg-[#8bbd9e] transition">
          Livrare azi
          <p className="text-sm font-normal mt-1">Curierul ridică și livrează azi</p>
        </button>
        <button className="w-full p-4 rounded-xl bg-white border border-gray-300 shadow hover:bg-gray-50 transition">
          Programează livrare
          <p className="text-sm font-normal mt-1 text-gray-600">Curierul ridică și livrează în ziua selectată</p>
        </button>
      </section>

      {/* Istoric livrări */}
      <section className="mx-4 mb-24">
        <h2 className="text-lg font-semibold mb-2 text-indigo-400">Istoric</h2>
        <div className="p-4 rounded-xl bg-white shadow border border-gray-200">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-500">Cod livrare</span>
            <span className="text-sm font-semibold text-gray-700">DLVR125555</span>
          </div>
          <p className="text-base font-semibold">Paul Popa</p>
          <p className="text-sm text-gray-600">Str. Telegrafului 12</p>
          <p className="text-sm text-gray-500 mt-1">18 August 2025, 15:53</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
            Livrat
          </span>
        </div>
      </section>
    </div>
  )
}
