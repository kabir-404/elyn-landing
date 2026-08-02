export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 border-t border-cream/10 pt-6 text-center">
        <span className="font-display text-lg font-medium text-cream">Elyn</span>
        <p className="text-xs text-cream/50">One serum. One purpose — clear, even skin.</p>
        <p className="mt-2 text-xs text-cream/40">&copy; {new Date().getFullYear()} Elyn Skincare. All rights reserved.</p>
      </div>
    </footer>
  )
}
