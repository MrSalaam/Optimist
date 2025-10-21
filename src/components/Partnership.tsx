import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Handshake, ChevronLeft, ChevronRight } from "lucide-react";

const Partnership = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Ayilara S. is a top-notch brand designer. He delivered amazing work that truly captured our brand’s essence. Professional, creative, and always on time—couldn’t ask for more! Highly recommend his services.",
      author: "Olusegun Joel-Alabi",
      title: "CEO, Makkan Innovation",
      initials: "OJA"
    },
    {
      quote: "Ayilara S. has been instrumental in enhancing the visual appeal of our brand",
      author: "ATINUADE",
      title: "ATINUADE Brand Team",
      initials: "A"
    },
    {
      quote: "His ability to translate ideas into compelling, high-quality graphics is truly impressive. He is reliable, creative, and consistently delivers outstanding work. We’re excited for more opportunities to collaborate with him.",
      author: "Cornerstone Ephraim",
      title: "Co-Founder, ATINUADE",
      initials: "CE"
    }
  ];

  const activeTestimonial = testimonials[currentTestimonial];

  const containerRef = useRef(null);


  const partners = [
    {
      name: "Bashkim",
      logo: "/logos/bashkim logo.png",
    },
    {
      name: "Crosshire",
      logo: "/logos/crosshire.png",
    },
    {
      name: "Hinansho",
      logo: "/logos/Hinansho.svg",
    },
    {
      name: "Makkan",
      logo: "/logos/Makkan.png",
    },
    {
      name: "Reward clan",
      logo: "/logos/rewardclan.svg",
    },
    {
      name: "Grovane",
      logo: "/logos/Grovane.png",
    },
    {
      name: "advantarxyz",
      logo: "/logos/advantarxyz.jpg",
    }
    
  ];

  // Duplicate partners array 
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Change testimonial every 7 seconds
  
    return () => {
      clearInterval(timer);
    };
  }, [currentTestimonial, testimonials.length]);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  return (
    <section id="partnerships" ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        
       
      </div>

      <div className="container-portfolio relative z-10 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-blue-400/30 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 relative" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground-secondary">Partnerships</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground px-4"
            >
              Trusted by Brand Leaders
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="text-base sm:text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto px-4"
            >
              Building lasting partnerships with brands that value exceptional design and strategic thinking
            </motion.p>
          </div>

          {/* Partner Logos Scrolling Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
            }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="relative overflow-hidden py-8">
              {/* Gradient Overlays */}
            
              {/* Scrolling Container */}
              <div className="relative">
                <motion.div
                  className="flex gap-16 items-center"
                  animate={{
                    x: [-1000, 0],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {duplicatedPartners.map((partner, index) => (
                    <motion.div
                      key={`${partner.name}-${index}`}
                      className="group flex-shrink-0 text-foreground-secondary transition-opacity duration-300 opacity-60 hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      style={{ minWidth: "140px" }}
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className={`w-auto transition-all duration-300 ${
                          partner.name === 'Hinansho' 
                            ? 'h-28 grayscale group-hover:grayscale-0' // Specific styles for Hinansho logo
                            : 'h-8 grayscale group-hover:grayscale-0' // Default styles for other logos
                        }`}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

      
     
          {/* Testimonial Quote */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.4 } },
            }}
            className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Testimonial Card */}
            <div className="relative bg-background/50 backdrop-blur-md border border-border rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
              

              {/* Navigation Buttons */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-2 sm:px-4 md:px-6 lg:px-8">
                <button
                  onClick={handlePrevTestimonial}
                  className="pointer-events-auto transform -translate-x-1/3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 hover:bg-accent text-foreground-secondary hover:text-white dark:hover:text-black shadow-lg backdrop-blur-sm border border-border transition-all duration-300 flex items-center justify-center group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="pointer-events-auto transform translate-x-1/3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 hover:bg-accent text-foreground-secondary hover:text- dark:hover:text-black shadow-lg backdrop-blur-sm border border-border transition-all duration-300 flex items-center justify-center group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 sm:-top-4 -left-2 text-accent/10">
                    <svg 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="mb-6 sm:mb-8 md:mb-10 relative">
                    <motion.p 
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground italic leading-relaxed font-light max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8"
                      style={{ textWrap: "balance" }}
                    >
                      {activeTestimonial.quote}
                    </motion.p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-2xl flex items-center justify-center relative">
                        <span className="text-base sm:text-lg font-bold text-white dark:text-black">{activeTestimonial.initials}</span>
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-semibold text-foreground text-base sm:text-lg">{activeTestimonial.author}</p>
                      <p className="text-foreground-secondary text-sm sm:text-base">{activeTestimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="group"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-accent w-6 sm:w-8'
                          : 'bg-border w-1.5 sm:w-2 group-hover:bg-foreground-secondary/50'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;