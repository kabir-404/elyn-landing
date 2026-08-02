import { useEffect, useRef } from 'react'
import ProductBottle from './ProductBottle'

export default function OrderModal({ open, onClose, orderNumber }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close order confirmation"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-cream-dim hover:text-ink"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            &times;
          </span>
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
              <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 id="order-modal-title" className="mt-4 font-display text-2xl font-medium text-ink">
            Order confirmed
          </h2>
          <p className="mt-1 text-sm text-ink-soft">Order #{orderNumber} · Confirmation sent to your email</p>
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-cream-dim p-4">
          <div className="h-16 w-14 flex-shrink-0 overflow-hidden rounded-lg">
            <ProductBottle className="h-full w-full" decorative />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink">Elyn Vitamin C Serum</p>
            <p className="text-xs text-ink-soft">Qty 1 · 30mL</p>
          </div>
          <p className="text-sm font-semibold text-ink">$38.00</p>
        </div>

        <div className="mt-4 space-y-1.5 text-sm">
          <div className="flex justify-between text-ink-soft">
            <span>Subtotal</span>
            <span>$38.00</span>
          </div>
          <div className="flex justify-between text-ink-soft">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-ink/10 pt-2 text-base font-semibold text-ink">
            <span>Total</span>
            <span>$38.00</span>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-ink-soft">
          This is a demo checkout — no payment was processed. Estimated delivery in 3–5 business days.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 min-h-[48px] w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98]"
        >
          Continue browsing
        </button>
      </div>
    </div>
  )
}
