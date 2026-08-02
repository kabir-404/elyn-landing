// Real product photography (Unsplash) — an unbranded amber glass dropper
// bottle, styled to stand in for the Elyn serum. `decorative` drops the alt
// text for the small reused instances (sticky bar, order modal) where an
// adjacent text label already names the product, avoiding redundant
// screen-reader announcements.
const PRODUCT_IMG = 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108'

export default function ProductBottle({ className = '', loading = 'lazy', decorative = false }) {
  return (
    <img
      src={`${PRODUCT_IMG}?auto=format&fit=crop&w=800&h=1000&q=80`}
      srcSet={`${PRODUCT_IMG}?auto=format&fit=crop&w=400&h=500&q=80 400w, ${PRODUCT_IMG}?auto=format&fit=crop&w=800&h=1000&q=80 800w`}
      sizes="(min-width: 1024px) 320px, 288px"
      alt={decorative ? '' : 'Amber glass dropper bottle of Elyn Vitamin C Serum'}
      loading={loading}
      decoding="async"
      className={`object-cover ${className}`}
    />
  )
}
