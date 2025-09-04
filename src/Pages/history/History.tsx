export default function History() {
  const rides = [
    { id: 1, date: '2025-08-15', from: 'Str. Unirii', to: 'Bd. Revoluției', price: '25 RON' },
    { id: 2, date: '2025-08-22', from: 'Piața Victoriei', to: 'Iulius Town', price: '32 RON' },
  ]

  return (
    <section className="p-6 bg-brand-light min-h-screen text-brand-white">
      <h1 className="text-2xl font-bold mb-6">Istoric livrări</h1>

      {rides.length === 0 ? (
        <p className="text-brand-gray">Nu există livrări înregistrate.</p>
      ) : (
        <ul className="space-y-4">
          {rides.map((ride) => (
            <li 
              key={ride.id} 
              className="bg-brand-dark p-4 rounded-lg flex justify-between items-center hover:bg-brand-accent hover:text-brand-dark transition"
            >
              <div>
                <p className="font-semibold">{ride.from} → {ride.to}</p>
                <p className="text-sm text-brand-gray">{ride.date}</p>
              </div>
              <span className="font-bold">{ride.price}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}