import Reveal from './Reveal'

export default function FounderStory() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:gap-10 md:flex-row md:text-left">
        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-full shadow-md ring-1 ring-ink/5 sm:h-36 sm:w-36">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80"
            srcSet="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80 200w, https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80 400w"
            sizes="(min-width: 640px) 144px, 112px"
            alt="Portrait of Mira Torres, founder of Elyn"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Why Elyn exists
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            "I built the serum I couldn't find on any shelf."
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            After years of post-acne dark spots and skin that reacted to nearly every
            "brightening" product she tried, founder Mira Torres spent two years with a
            formulation chemist developing a Vitamin C stable enough to actually work —
            and gentle enough to use every single day. Elyn is the result.
          </p>
          <p className="mt-3 text-sm font-medium text-ink">Mira Torres, Founder</p>
        </div>
      </Reveal>
    </section>
  )
}
