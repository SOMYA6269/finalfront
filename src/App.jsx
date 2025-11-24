import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import UpcomingTools from './pages/UpcomingTools'
import SupportPages from './pages/SupportPages'
import CompanyPages from './pages/CompanyPages'
import LegalPages from './pages/LegalPages'
import SplashScreen from './components/SplashScreen'
import './App.css'
import GroceryStudio from './pages/GroceryStudio'
import ImageGallery from './pages/ImageGallery'

function AppContent() {
  const [showSplash, setShowSplash] = useState(false)
  const splashShownRef = useRef(false)

  useEffect(() => {
    if (!splashShownRef.current) {
      splashShownRef.current = true
      setShowSplash(true)
      
      const timer = setTimeout(() => {
        setShowSplash(false)
      }, 2800)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {showSplash && <SplashScreen />}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 5000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 7000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/upcoming-tools" element={<UpcomingTools />} />
        <Route path="/upcoming-tools/grocery-studio" element={<GroceryStudio />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/support/:page" element={<SupportPages />} />
        <Route path="/company/:page" element={<CompanyPages />} />
        <Route path="/legal/:page" element={<LegalPages />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <div className="app">
      <AppContent />
    </div>
  )
}

export default App
