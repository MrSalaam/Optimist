import { 
  Sparkles,
  Brush,
  Wand2,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import React, { useRef, useState, useCallback } from "react";

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    id: 1,
    icon: Brush,
    title: "Brand Identity Design",
    description: "Crafting unique visual identities that resonate with your audience and stand the test of time.",
    features: [
      "Logo Design & Branding",
      "Brand Guidelines",
      "Visual Identity Systems",
      "Brand Strategy"
    ]
  },
  {
    id: 2,
    icon: Wand2,
    title: "Motion Graphics",
    description: "Bringing your brand to life with engaging animations and dynamic visual storytelling.",
    features: [
      "2D/3D Animation",
      "Explainer Videos",
      "Social Media Content"
    ]
  },
  
  {
    id: 3,
    icon: Rocket,
    title: "Creative Strategy",
    description: "Strategic thinking that drives creative solutions and delivers measurable results.",
    features: [
      "Brand Positioning",
      "Content Strategy",
      "Marketing Campaigns",
      "Creative Consulting"
    ]
  }
];

/**
 * Main Services component with 3D Swiper - Fully Responsive
 */
const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const totalServices = SERVICES.length;

  /**
   * Navigate to specific slide
   */
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  /**
   * Navigate to next slide
   */
  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalServices;
    goToSlide(nextIndex);
  }, [currentIndex, totalServices, goToSlide]);

  /**
   * Navigate to previous slide
   */
  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalServices) % totalServices;
    goToSlide(prevIndex);
  }, [currentIndex, totalServices, goToSlide]);

  /**
   * Handle Learn More button click - scrolls to contact section
   */
  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * Calculate card position and style for 3D effect - Responsive
   */
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const isActive = diff === 0;
    const isPrev = diff === -1 || (currentIndex === 0 && index === totalServices - 1);
    const isNext = diff === 1 || (currentIndex === totalServices - 1 && index === 0);

    if (isActive) {
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 30,
        filter: 'blur(0px)',
      };
    } else if (isPrev) {
      return {
        transform: 'translateX(-90%) scale(0.75) rotateY(20deg)',
        opacity: 0.3,
        zIndex: 20,
        filter: 'blur(2px)',
      };
    } else if (isNext) {
      return {
        transform: 'translateX(90%) scale(0.75) rotateY(-20deg)',
        opacity: 0.3,
        zIndex: 20,
        filter: 'blur(2px)',
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.6) rotateY(0deg)',
        opacity: 0,
        zIndex: 10,
        filter: 'blur(3px)',
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ willChange: 'auto' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] opacity-30" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm border border-accent/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-5 md:mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-foreground px-2">
            What I Do Best
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-foreground-secondary max-w-2xl mx-auto px-2">
            Comprehensive creative services tailored to elevate your brand and engage your audience
          </p>
        </div>

        {/* 3D Swiper Container - Responsive Heights */}
        <div className="relative h-[550px] xs:h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px]">
          {/* Perspective Container */}
          <div 
            className="absolute inset-0 flex items-center justify-center px-12 sm:px-4" 
            style={{ perspective: '1500px' }}
          >
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <div
                  key={service.id}
                  className="absolute w-full max-w-[85%] xs:max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] transition-all duration-700 ease-out"
                  style={{
                    transform: style.transform,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.filter,
                    transformStyle: 'preserve-3d',
                    pointerEvents: style.pointerEvents || 'auto',
                  }}
                  onClick={() => !isActive && goToSlide(index)}
                >
                  <div className={`relative h-full rounded-2xl sm:rounded-3xl bg-background/80 backdrop-blur-xl border-2 ${
                    isActive ? 'border-accent' : 'border-border'
                  } p-6 xs:p-7 sm:p-8 md:p-10 lg:p-12 shadow-2xl transition-all duration-300 ${
                    !isActive ? 'cursor-pointer hover:border-accent/50' : ''
                  }`}>
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-4 sm:mb-5 md:mb-6 inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20">
                        <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-accent" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground leading-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm xs:text-base sm:text-lg text-foreground-secondary mb-6 sm:mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 flex-1">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-2 sm:gap-3 text-sm xs:text-base sm:text-lg"
                          >
                            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground-secondary leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button
                        onClick={handleLearnMore}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-black font-medium transition-all hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base w-full sm:w-auto"
                      >
                        <span>Get in Touch</span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons - Positioned outside card area on mobile */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-accent/30 bg-background/80 backdrop-blur-xl flex items-center justify-center transition-all hover:border-accent hover:bg-accent/10 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-accent/30 bg-background/80 backdrop-blur-xl flex items-center justify-center transition-all hover:border-accent hover:bg-accent/10 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Next service"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
          </button>
        </div>

        {/* Pagination Dots - Responsive sizing */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-12">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 sm:w-10 md:w-12 h-2.5 sm:h-3 bg-accent'
                  : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Bottom Info - Responsive text */}
        <div className="text-center mt-4 sm:mt-6 md:mt-8">
          <p className="text-xs sm:text-sm text-foreground-secondary">
            {currentIndex + 1} / {totalServices}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;