import useReveal from '../hooks/useReveal'

const BENEFITS = [
  {
    title: 'Visibly Brighter Skin',
    text: '15% stabilized Vitamin C helps fade dark spots and even out tone within weeks.',
    icon: (
      <path
        d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: 'Calms Redness & Sensitivity',
    text: 'Niacinamide soothes irritation while strengthening your skin barrier over time.',
    icon: <path d="M12 3c4 3 7 6 7 10a7 7 0 1 1-14 0c0-4 3-7 7-10Z" strokeLinejoin="round" />,
  },
  {
    title: 'Lightweight, Fast-Absorbing',
    text: 'No greasy residue — layers seamlessly under moisturizer and SPF, morning or night.',
    icon: (
      <path
        d="M12 2 4 12a8 8 0 1 0 16 0L12 2Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Fragrance-Free & Dermatologist-Tested',
    text: 'Formulated without fragrance or dyes — safe for daily use, even on sensitive skin.',
    icon: (
      <path
        d="m9 12 2 2 4-4M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4Z"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function Benefits() {
  const [ref, visible] = useReveal()

  return (
    <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'reveal-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Benefits</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
            Formulated to actually change your skin
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className={`reveal ${visible ? 'reveal-visible' : ''} rounded-2xl border border-ink/8 bg-white p-6 shadow-sm`}
              style={{ transitionDelay: visible ? `${i * 90}ms` : '0ms' }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-9 w-9 text-accent"
                aria-hidden="true"
              >
                {b.icon}
              </svg>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
