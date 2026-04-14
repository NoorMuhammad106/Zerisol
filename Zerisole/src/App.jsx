import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import OurWorkPage from './pages/OurWorkPage'
import ScrollToTop from './components/ScrollToTop'

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-white dark:bg-gray-950 transition-colors">
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
        </Routes>
        
        <Footer theme={theme} />
      </div>
    </Router>
  )
}

export default App
