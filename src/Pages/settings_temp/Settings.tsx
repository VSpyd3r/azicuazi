export default function Settings() {
  const settings = [
    { id: 1, label: 'Notificări push', type: 'toggle', value: false },
    { id: 2, label: 'Temă întunecată', type: 'toggle', value: false },
    { id: 3, label: 'Limba aplicației', type: 'select', value: 'Română', options: ['Română', 'English', 'Deutsch'] },
  ]

  return (
    <section className="p-6 bg-brand-light min-h-screen text-brand-white">
      <h1 className="text-2xl font-bold mb-6">Setări</h1>

      <ul className="space-y-4">
        {settings.map((item) => (
          <li 
            key={item.id}
            className="bg-brand-dark p-4 rounded-lg flex justify-between items-center hover:bg-brand-accent hover:text-brand-dark transition"
          >
            <span className="font-medium">{item.label}</span>

            {item.type === 'toggle' && (
              <input 
                type="checkbox"
                checked={Boolean(item.value)}
                onChange={() => {}}
                className="w-5 h-5 accent-brand-accent"
              />
            )}

            {item.type === 'select' && (
              <select
                value={item.value as string}
                onChange={() => {}}
                className="bg-brand-light text-brand-white rounded px-2 py-1"
              >
                {item.options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}