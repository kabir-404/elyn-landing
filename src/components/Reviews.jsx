import useReveal from '../hooks/useReveal'
import useCountUp from '../hooks/useCountUp'

const REVIEWS = [
  {
    name: 'Priya S.',
    rating: 5,
    quote:
      "My dark spots from old acne scars are noticeably lighter after just one month. Wish I'd found this sooner.",
  },
  {
    name: 'Jordan K.',
    rating: 4,
    quote:
      "Love how lightweight it feels under makeup. Took closer to five weeks for me to see real change, but it's real.",
  },
  {
    name: 'Amara O.',
    rating: 5,
    quote: "Finally a vitamin C that doesn't sting my sensitive skin. No breakouts, no redness, just results.",
  },
  {
    name: 'Diego M.',
    rating: 5,
    quote: 'My skin tone looks so much more even. My partner actually asked what I changed in my routine.',
  },
]

function Stars({ count, className = 'h-4 w-4' }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`${className} ${i < count ? 'fill-accent' : 'fill-ink/15'}`}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [ref, visible] = useReveal()
  const rating = useCountUp(4.8, visible)

  return (
    <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} mx-auto max-w-6xl`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Social proof</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">Loved by clearer skin everywhere</h2>
          <div className="mt-5 flex flex-col items-center gap-2">
            <span className="font-display text-4xl font-medium text-ink">{rating.toFixed(1)}</span>
            <Stars count={5} className="h-5 w-5" />
            <p className="text-sm text-ink-soft">from 2,347 verified reviews</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className={`reveal ${visible ? 'reveal-visible' : ''} flex flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-sm`}
              style={{ transitionDelay: visible ? `${i * 90}ms` : '0ms' }}
            >
              <Stars count={r.rating} />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">"{r.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-ink">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
