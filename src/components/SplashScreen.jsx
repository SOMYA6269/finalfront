import { useEffect, useState } from 'react'
import './SplashScreen.css'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Minimum display time of 2.5 seconds
    const minDisplayTime = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    // Check if page is fully loaded
    const checkPageLoaded = () => {
      if (document.readyState === 'complete') {
        clearTimeout(minDisplayTime)
        setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      }
    }

    window.addEventListener('load', checkPageLoaded)
    
    if (document.readyState === 'complete') {
      checkPageLoaded()
    }

    return () => {
      clearInterval(progressInterval)
      clearTimeout(minDisplayTime)
      window.removeEventListener('load', checkPageLoaded)
    }
  }, [])

  return (
    <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="splash-background">
        <div className="splash-gradient-orb splash-gradient-orb--1"></div>
        <div className="splash-gradient-orb splash-gradient-orb--2"></div>
        <div className="splash-gradient-orb splash-gradient-orb--3"></div>
        <div className="splash-grid-pattern"></div>
      </div>
      <div className="splash-content">
        <div className="splash-logo-wrapper">
          <div className="splash-logo-glow"></div>
          <div className="splash-logo-container">
            <img src="/images/ddfinal.png" alt="Drag & Drop ERP Logo - Business Management Software" className="splash-logo-img" />
          </div>
        </div>
        <div className="splash-brand-text">
          <h1>
            <span className="brand-name brand-name--drag">Drag</span>
            <span className="brand-separator">&</span>
            <span className="brand-name brand-name--drop">Drop</span>
          </h1>
        </div>
        <div className="splash-loader">
          <div className="loader-track">
            <div className="loader-bar" style={{ width: `${progress}%` }}>
              <div className="loader-bar-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
