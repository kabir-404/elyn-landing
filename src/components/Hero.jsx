import ProductBottle from './ProductBottle'

export default function Hero({ onBuyNow, heroRef }) {
  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-cream px-5 pt-8 pb-14 sm:px-8 sm:pt-10 sm:pb-20 md:pt-14 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <div className="w-full max-w-xl text-center lg:w-1/2 lg:text-left">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft opacity-0 [animation-delay:0ms]"
            style={{ animation: 'fade-rise 0.8s cubic-bezier(0.22,1,0.36,1) forwards' }}
          >
            Elyn · Vitamin C Serum
          </div>

          <h1
            className="font-display text-[2.1rem] font-medium leading-[1.1] tracking-tight text-ink opacity-0 sm:text-5xl lg:text-[3.4rem]"
            style={{ animation: 'fade-rise 0.8s cubic-bezier(0.22,1,0.36,1) forwards', animationDelay: '120ms' }}
          >
            Visibly Clearer Skin in 21 Days
            <span className="text-accent"> — No Harsh Actives</span>
          </h1>

          <p
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft opacity-0 sm:text-lg lg:mx-0"
            style={{ animation: 'fade-rise 0.8s cubic-bezier(0.22,1,0.36,1) forwards', animationDelay: '240ms' }}
          >
            A 15% Vitamin C + Niacinamide serum formulated for sensitive skin —
            dermatologist-tested, fragrance-free, and gentle enough for daily use.
          </p>

          <div
            className="mt-8 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animation: 'fade-rise 0.8s cubic-bezier(0.22,1,0.36,1) forwards', animationDelay: '360ms' }}
          >
            <button
              type="button"
              onClick={onBuyNow}
              className="min-h-[52px] w-full rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-cream transition-all duration-200 hover:bg-accent-dark hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
            >
              Buy Now — $38
            </button>
            <p className="text-sm text-ink-soft">
              One-time purchase · Free shipping over $35
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-sm lg:w-1/2 lg:max-w-none">
          <div
            className="opacity-0"
            style={{ animation: 'fade-rise 0.9s cubic-bezier(0.22,1,0.36,1) forwards', animationDelay: '180ms' }}
          >
            <div className="animate-float relative mx-auto w-56 sm:w-72 lg:w-80">
              <div aria-hidden="true" className="absolute inset-5 -z-10 rounded-[2.5rem] bg-accent/15" />
              <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-ink/5">
                <ProductBottle className="h-auto w-full" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
