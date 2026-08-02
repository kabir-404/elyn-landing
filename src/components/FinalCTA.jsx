import Reveal from './Reveal'

export default function FinalCTA({ onBuyNow }) {
  return (
    <section className="bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-2xl font-medium leading-tight text-cream sm:text-3xl lg:text-4xl">
          Visibly clearer skin in 21 days — no harsh actives, no guesswork.
        </h2>
        <p className="text-sm text-cream/70 sm:text-base">
          30-day money-back guarantee. Free shipping over $35.
        </p>
        <button
          type="button"
          onClick={onBuyNow}
          className="min-h-[52px] w-full max-w-xs rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-cream transition-all duration-200 hover:bg-accent-dark hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
        >
          Buy Now — $38
        </button>
      </Reveal>
    </section>
  )
}
