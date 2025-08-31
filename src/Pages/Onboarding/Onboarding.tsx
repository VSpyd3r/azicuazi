import bg from '../../assets/images/onboarding_bg.jpg';

export default function Onboarding() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-brand-white">
      {/* Fundal */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Conținut */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold mb-14 text-white">Bine ai venit</h1>
        <p className='text-1xl font-semibold  mb-34 text-white'>Descopera cea mai simpla cale sa livrezi unde vrei</p>
        <a
          href="/signup"
          className="bg-brand-accent text-brand-dark px-6 py-3 rounded-lg hover:opacity-90 bg-blue-500"
        >
          Creeaza cont
        </a>
      </div>
    </section>
  );
}