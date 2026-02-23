import { useState, useEffect } from 'react'

function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768
      const portrait = window.innerHeight > window.innerWidth
      setIsMobile(mobile)
      setIsPortrait(portrait)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    window.addEventListener('orientationchange', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('orientationchange', checkDevice)
    }
  }, [])

  if (!isMobile) return null // don't show on desktop

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.92)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      textAlign: 'center',
      padding: '20px'
    }}>
      <>
        <div style={{ fontSize: '60px' }}>🖥️</div>
        <h2>Best Viewed on Desktop</h2>
        <p>This portfolio is only optimized for desktop at the moment. For the best experience, please visit on a computer.</p>
    </>
    </div>
  )
}

export default MobileWarning