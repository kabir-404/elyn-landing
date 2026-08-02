import useReveal from '../hooks/useReveal'

// Generic scroll-triggered fade/rise wrapper for section-level reveals.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
