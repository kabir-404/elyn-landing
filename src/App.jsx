import { useCallback, useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import FounderStory from './components/FounderStory'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import FAQAccordion from './components/FAQAccordion'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyBuyBar from './components/StickyBuyBar'
import OrderModal from './components/OrderModal'

function generateOrderNumber() {
  return Math.floor(100000 + Math.random() * 900000)
}

export default function App() {
  const heroRef = useRef(null)
  const [stickyVisible, setStickyVisible] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [orderNumber, setOrderNumber] = useState(generateOrderNumber())

  useEffect(() => {
    const node = heroRef.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const handleBuyNow = useCallback(() => {
    setOrderNumber(generateOrderNumber())
    setOrderOpen(true)
  }, [])

  const closeOrder = useCallback(() => setOrderOpen(false), [])

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-ink/5 bg-cream px-5 py-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <span className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl lg:text-3xl">Elyn</span>
        </div>
      </header>

      <main>
        <Hero onBuyNow={handleBuyNow} heroRef={heroRef} />
        <FounderStory />
        <Benefits />
        <HowItWorks />
        <Reviews />
        <FAQAccordion />
        <FinalCTA onBuyNow={handleBuyNow} />
      </main>

      <Footer />

      <StickyBuyBar visible={stickyVisible} onBuyNow={handleBuyNow} />
      <OrderModal open={orderOpen} onClose={closeOrder} orderNumber={orderNumber} />
    </div>
  )
}
