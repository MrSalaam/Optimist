import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="min-h-screen bg-background text-foreground antialiased">
            <Header />
            <main>
              {/* Add an id for the hero section since your Header tries to scroll to it */}
              <section id="hero" className="min-h-screen">
                <Hero />
              </section>
              <section id="about" className="h-screen"></section>
              <section id="portfolio" className="h-screen"></section>
              <section id="services" className="h-screen"></section>
              <section id="contact" className="h-screen"></section>
            </main>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
