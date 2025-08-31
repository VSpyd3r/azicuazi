import DarkVeil from "../../components/DarkVeil"

export default function Home() {
  return (

   <section className="relative min-h-screen overflow-hidden p-6">
  {/* Background layer */}
  <div className="absolute inset-0 z-0">
    <DarkVeil className="w-full h-full object-cover" />
  </div>

  {/* Foreground content */}
  <div className="relative z-10 text-center ">
    <h1 className="text-2xl font-bold text-white">Acasă</h1>
    <p className="text-brand-gray mt-2 text-white ">Bine ai revenit, Spyder.</p>
  </div>
</section>

  )
}
    
    
    