import { 
  Sparkles,
  Brush,
  Wand2,
  Lightbulb,
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
      "Social Media Content",
      "Video Editing"
    ]
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Digital Design",
    description: "Creating seamless digital experiences that blend aesthetics with functionality.",
    features: [
      "UI/UX Design",
      "Web Design",
      "Mobile App Design",
      "Prototyping"
    ]
  },
  {
    id: 4,
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
 * Main Services component with 3D Swiper - Manual Navigation Only
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
   * Calculate card position and style for 3D effect
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
        transform: 'translateX(-80%) scale(0.85) rotateY(25deg)',
        opacity: 0.5,
        zIndex: 20,
        filter: 'blur(1px)',
      };
    } else if (isNext) {
      return {
        transform: 'translateX(80%) scale(0.85) rotateY(-25deg)',
        opacity: 0.5,
        zIndex: 20,
        filter: 'blur(1px)',
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.7) rotateY(0deg)',
        opacity: 0,
        zIndex: 10,
        filter: 'blur(2px)',
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
      <div className="section-pattern" style={{ willChange: 'auto' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            What I Do Best
          </h2>

          <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto">
            Comprehensive creative services tailored to elevate your brand and engage your audience
          </p>
        </div>

        {/* 3D Swiper Container */}
        <div className="relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px]">
          {/* Perspective Container */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '2000px' }}>
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <div
                  key={service.id}
                  className="absolute w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: style.transform,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.filter,
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => !isActive && goToSlide(index)}
                >
                  <div className={`relative h-full rounded-3xl bg-background/80 backdrop-blur-xl border-2 ${
                    isActive ? 'border-accent' : 'border-border'
                  } p-8 sm:p-10 md:p-12 shadow-2xl transition-all duration-300`}>
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-foreground-secondary mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-3 text-base sm:text-lg"
                          >
                            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-black font-medium transition-all hover:scale-105 active:scale-95 shadow-lg"
                      >
                        Learn More
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 btn-nav-3d"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 btn-nav-3d"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8 sm:mt-12">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-accent'
                  : 'w-3 h-3 bg-border hover:bg-accent/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-foreground-secondary">
            {currentIndex + 1} / {totalServices}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;