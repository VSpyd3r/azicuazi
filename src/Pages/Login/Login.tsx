export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-brand-light text-brand-white">
            <h2 className="text-2xl font-semibold mb-6">Autentificare</h2>
            <form className="flex flex-col gap-4 w-80">
                <input className="bg-brand-dark p-4 rounded-4xl border" placeholder="Email" />
                <input type="password" className="bg-brand-dark p-4 rounded-4xl border" placeholder="Parola" />
                <button className="bg-brand-accent text-brand-dark py-4 rounded-4xl bg-blue-500 font-semibold hover:opacity-90 text-white">
                    Conecteaza-te
                </button>
            </form>
        </div>
    )
}