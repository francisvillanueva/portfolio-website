import { useState, useEffect } from 'react'

function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768
      const portrait = window.innerHeight > window.innerWidth
      setIsMobile(mobile)
      setIsPortrait(portrait)

      // reset dismissed if they go back to portrait
      if (portrait) setDismissed(false)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    window.addEventListener('orientationchange', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('orientationchange', checkDevice)
    }
  }, [])

  if (!isMobile) return null
  if (dismissed) return null

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
      {isPortrait ? (
        <>
          <h2>Please Rotate Your Phone</h2>
          <p>Please rotate your device to landscape mode for a better experience.</p>
        </>
      ) : (
        <>
          <h2>Best Viewed on Desktop</h2>
          <p>This portfolio is optimized for desktop. please visit it on a desktop computer.</p>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '16px 20px',
            margin: '16px 0',
            maxWidth: '320px',
            textAlign: 'left'
          }}>
            <p style={{ margin: '0 0 8px', fontWeight: 'bold' }}>How to enable Desktop Site:</p>
            <p style={{ margin: '0 0 6px' }}>
              <strong>Chrome:</strong> Tap the 3 dots (⋮) → Check <em>"Desktop site"</em>
            </p>
            <p style={{ margin: '0 0 6px' }}>
              <strong>Safari:</strong> Tap the <em>AA</em> icon → <em>"Request Desktop Website"</em>
            </p>
            <p style={{ margin: 0 }}>
              <strong>Firefox:</strong> Tap the 3 dots (⋮) → <em>"Request Desktop Site"</em>
            </p>
          </div>

          <button
            onClick={() => setDismissed(true)}
            style={{
              marginTop: '12px',
              padding: '10px 24px',
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Got it, continue anyway
          </button>
        </>
      )}
    </div>
  )
}

export default MobileWarning