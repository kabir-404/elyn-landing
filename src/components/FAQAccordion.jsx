import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const FAQS = [
  {
    q: 'How long until I see results?',
    a: 'Most people notice a visible difference in tone and texture within 3–4 weeks of consistent daily use. For deeper discoloration, full results typically show by week 8.',
  },
  {
    q: 'Is Elyn safe for sensitive skin?',
    a: 'Yes. Elyn is fragrance-free, dye-free, and dermatologist-tested at a stabilized 15% concentration specifically so it can be used daily without irritation. We still recommend a patch test before first use.',
  },
  {
    q: 'Can I use it with retinol or other actives?',
    a: "Yes — apply Elyn in the morning and save retinol for night to avoid over-exfoliating. If you only use one routine, alternate nights so your skin has time to adjust.",
  },
  {
    q: "What's your shipping policy?",
    a: 'Free shipping on all orders over $35 within the US, arriving in 3–5 business days. Expedited shipping is available at checkout.',
  },
  {
    q: 'What if it doesn’t work for me?',
    a: "We offer a 30-day money-back guarantee, no questions asked. If Elyn isn't right for your skin, contact support for a full refund.",
  },
]

function FAQItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-ink/10">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full min-h-[52px] items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink transition-colors hover:text-accent sm:text-lg"
        >
          {item.q}
          <span
            className={`flex-shrink-0 text-xl text-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-soft sm:text-base">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useReveal()

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} mx-auto max-w-3xl`}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">FAQ</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
            Common questions
          </h2>
        </div>

        <div className="mt-8 lg:mt-10">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
