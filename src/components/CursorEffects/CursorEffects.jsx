import { useEffect, useState } from 'react'
import { useMousePosition } from '../../hooks/useScrollAnimation'

export default function CursorEffects() {
  const { x, y } = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[100] mix-blend-difference hidden lg:block"
        style={{
          left: x - 150,
          top: y - 150,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div
        className="fixed pointer-events-none z-[101] hidden lg:block"
        style={{
          left: x - 4,
          top: y - 4,
          width: 8,
          height: 8,
          backgroundColor: '#3B82F6',
          borderRadius: '50%',
          opacity: isVisible ? 0.8 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  )
}
