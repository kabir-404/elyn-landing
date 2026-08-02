import ProductBottle from './ProductBottle'

// Mobile / mobile-landscape / iPad portrait (<1024px): fixed to the bottom
// (thumb reach). iPad landscape / desktop (>=1024px): fixed to the top.
export default function StickyBuyBar({ visible, onBuyNow }) {
  return (
    <div
      className={[
        'fixed inset-x-0 bottom-0 top-auto z-50 border-t border-ink/10 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-500 ease-out',
        'lg:bottom-auto lg:top-0 lg:border-b lg:border-t-0 lg:shadow-[0_4px_20px_rgba(0,0,0,0.08)]',
        visible ? 'translate-y-0' : 'translate-y-full lg:-translate-y-full',
        visible ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:py-3">
        <div className="flex items-center gap-3">
          <div className="hidden h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg sm:flex">
            <ProductBottle className="h-full w-full" decorative />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink sm:text-base">Elyn Vitamin C Serum</p>
            <p className="text-xs text-ink-soft">$38 · Free shipping over $35</p>
          </div>
        </div>
        <button
          type="button"
          tabIndex={visible ? 0 : -1}
          onClick={onBuyNow}
          className="min-h-[44px] flex-shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-accent-dark hover:scale-[1.03] active:scale-[0.97] sm:px-6 sm:text-base"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
