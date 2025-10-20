import { useState, useEffect } from 'react'
import { ThemeProvider } from './components/context/ThemeContext'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Partnership from './components/Partnership'
import heroImage from '@/assets/images/hero.webp'; // Import the critical hero image

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const imagesToPreload = [heroImage];
    
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    if (totalImages === 0) {
      setIsLoading(false);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {

        setTimeout(() => setIsLoading(false), 500);
      }
    };

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; 
    });
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          
          <div className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
            {/* Global background pattern */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
            <Header />
            <main className="w-full">

              <section id="hero">
                <Hero />
              </section>
              <section id="about">
                <About/>
              </section>
              <section id="work">
                <Work/>
              </section>
              <section id="partnership">
                <Partnership/>
              </section>
              <section id="services" className="py-20 lg:py-32">

              </section>
              <section id="contact" className="py-20 lg:py-32"></section>
            </main>
          </div>
        )}
      </AnimatePresence>

    </ThemeProvider>
  )
}

export default App
