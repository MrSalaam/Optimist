import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, PenTool, Brush } from "lucide-react";
import { motion } from "framer-motion";
import myImage from '@/assets/images/hero.webp';

const Hero = memo(() => {
  const handleScrollToNext = useCallback(() => {
    const nextSection = document.getElementById('about') || 
                       document.getElementById('portfolio') || 
                       document.getElementById('services') ||
                       document.querySelector('section:nth-child(2)') ||
                       document.querySelector('[data-section]');
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div id="home" className="h-full relative w-full bg-background">
      <div className="h-full relative overflow-hidden">
        <div className=" h-full absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="container-portfolio h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-0 relative z-10 pt-32 pb-20"
        >
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground-secondary">Available for new projects</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-bold mb-6 leading-tight text-foreground lg:leading-none"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } },
              }}
            >
              <span className="block">
                {"Hi, I am".split('').map((char, index) => (
                  <motion.span
                    key={`line1-${char}-${index}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="block lg:mt-1">
                {"S.A Ayilara".split('').map((char, index) => (
                  <motion.span
                    key={`line2-${char}-${index}`}
                    className="inline-block text-accent"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>

            </motion.h1>

            <motion.p
              className="text-xl text-foreground-secondary mb-8 leading-relaxed max-w-xl"
              variants={{
                visible: { transition: { staggerChildren: 0.03, delayChildren: 1.4 } },
                hidden: {}, // Add hidden variant to avoid errors, even if empty
              }}
            >
              {"I focus on creating visual appealing designs which represent brands and companies worldwide  with the sole purpose of setting them ahead of their competitors in the market, thereby increasing their revenue"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>

            {/* Skills icons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 2.2 } },
              }}
              className="flex items-center justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-foreground-secondary">
                <PenTool className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Graphic Design</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-secondary">
                <Brush className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Brand Design</span>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 2.4 } },
              }}
              className="flex flex-col pt-8 sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
            }}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg lg:ml-12 flex-1"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl opacity-30 blur-2xl" />
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl shadow-2xl overflow-hidden border border-border">
              <div className="relative  rounded-3xl shadow-2xl overflow-hidden border border-border">
                <motion.img
                  src={myImage} 
                  alt="Hero Image"
                  className="aspect-[4/5] w-full object-cover"
                  initial={{ scale: 1.1, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              </div>

              {/* Floating UI elements */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 2.6 } },
                }}
                className="absolute -bottom-5 -left-2 sm:-bottom-8 sm:-left-8 bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-xl border border-border"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
              >
                <PenTool className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 2.8 } },
                }}
                className="absolute -top-4 -right-3 sm:-top-8 sm:-right-8 bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-xl border border-border"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
              >
                <Brush className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to explore - Now clickable! */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        onClick={handleScrollToNext}
        className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group hover:scale-105 transition-transform duration-200 z-10"
      >
        <span className="text-sm text-foreground-secondary mb-2 group-hover:text-accent transition-colors duration-200">
          Scroll to explore
        </span>
        <ArrowDown className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors duration-200" />
      </motion.div>

      {/* Skip to main content link - Screen Reader Only, but becomes visible on focus */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;