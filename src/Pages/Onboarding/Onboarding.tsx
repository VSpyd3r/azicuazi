export default function Onboarding() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-rand-dark text-brand-white">
            <h1 className="text-3xl font-bold mb-4">Bine ai venit</h1>
            <p>Descopera cea mai simpla cale sa livrezi unde vrei</p>
            <a href="/signup" 
            className="bg-brand-accent text-brand-dark px-6 py-3 rounded-lg hover: opacity-90 bg-blue-500"
            >
                Creeaza cont
            </a>
        </section>
    )
}