import useReveal from '../hooks/useReveal'

const STEPS = [
  {
    step: '01',
    title: 'Cleanse',
    text: 'Wash your face and pat dry. Elyn works best on clean, dry skin.',
  },
  {
    step: '02',
    title: 'Apply Elyn',
    text: '2–3 drops across face and neck, morning and night. Gently press in.',
  },
  {
    step: '03',
    title: 'Moisturize + SPF',
    text: 'Lock it in with moisturizer. Add SPF in the morning — always.',
  },
]

const INGREDIENTS = [
  { name: '15% Vitamin C', role: 'Sodium ascorbyl phosphate — brightens & evens tone' },
  { name: '5% Niacinamide', role: 'Calms redness, strengthens the skin barrier' },
  { name: 'Hyaluronic Acid', role: 'Draws in moisture, keeps skin plump' },
  { name: 'Ferulic Acid', role: 'Antioxidant that stabilizes the formula' },
]

export default function HowItWorks() {
  const [ref, visible] = useReveal()

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} mx-auto max-w-6xl`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">How it works</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
            Three steps, twice a day
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-14">
          {STEPS.map((s) => (
            <div key={s.step} className="text-center sm:text-left">
              <span className="font-display text-3xl font-medium text-accent/40">{s.step}</span>
              <h3 className="mt-2 font-display text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-cream-dim p-6 sm:p-8 lg:mt-16">
          <h3 className="text-center font-display text-xl font-medium text-ink sm:text-left">
            What's actually inside
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INGREDIENTS.map((ing) => (
              <div key={ing.name} className="rounded-xl bg-white p-4">
                <p className="font-semibold text-ink">{ing.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{ing.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
