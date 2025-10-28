import { lazy, Suspense, useState, useEffect, memo } from "react";
import { ThemeProvider } from "@/components/context/ThemeContext";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load components with better chunking
const Hero = lazy(() => import("@/components/Hero"));
const Work = lazy(() => import("@/components/Work"));
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Partnership = lazy(() => import("@/components/Partnership"));
const Contact = lazy(() => import("@/components/Contact"));

// Optimized loading component
const LoadingFallback = memo(() => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduce loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Reduced from 3 seconds to 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content" className="relative min-h-screen">
            {/* Global Background Pattern */}
            <div 
              className="fixed inset-0 pointer-events-none z-0"
              style={{ willChange: 'auto' }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <AnimatePresence mode="wait">
                <main>
                  <Suspense fallback={<LoadingFallback />}>
                    <Hero />
                    <About />
                    <Services />
                    <Work />
                    <Partnership />
                    <Contact />
                  </Suspense>
                </main>
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
