import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  Handshake, 
  Users, 
  TrendingUp, 
  Globe,
  Star
} from "lucide-react";

const Partnership = () => {
  const containerRef = useRef(null);

  // Sample client/partner logos - using realistic brand-style SVGs
  const partners = [
    {
      name: "TechFlow",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <rect x="10" y="8" width="8" height="24" rx="2"/>
          <rect x="22" y="12" width="8" height="20" rx="2"/>
          <rect x="34" y="6" width="8" height="28" rx="2"/>
          <rect x="46" y="10" width="8" height="24" rx="2"/>
          <text x="62" y="26" className="text-sm font-bold">TechFlow</text>
        </svg>
      )
    },
    {
      name: "EcoLife",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M14 20c0-6 4-8 6-8s6 2 6 8c0 4-2 8-6 8s-6-4-6-8z" fill="currentColor"/>
          <text x="38" y="26" className="text-sm font-bold">EcoLife</text>
        </svg>
      )
    },
    {
      name: "UrbanCafe",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <rect x="8" y="12" width="24" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="12" y="8" width="4" height="8" rx="2"/>
          <rect x="20" y="6" width="4" height="10" rx="2"/>
          <rect x="28" y="8" width="4" height="8" rx="2"/>
          <text x="38" y="26" className="text-sm font-bold">UrbanCafe</text>
        </svg>
      )
    },
    {
      name: "Wellness Co",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 12v16M12 20h16" stroke="currentColor" strokeWidth="3"/>
          <text x="38" y="26" className="text-sm font-bold">Wellness Co</text>
        </svg>
      )
    },
    {
      name: "FinanceApp",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <rect x="8" y="8" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 16h8M16 20h12M16 24h6" stroke="currentColor" strokeWidth="2"/>
          <text x="38" y="26" className="text-sm font-bold">FinanceApp</text>
        </svg>
      )
    },
    {
      name: "FashionWeek",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <polygon points="20,8 28,24 12,24" fill="currentColor"/>
          <circle cx="20" cy="28" r="4" fill="currentColor"/>
          <text x="38" y="26" className="text-sm font-bold">FashionWeek</text>
        </svg>
      )
    },
    {
      name: "StartupHub",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <rect x="8" y="16" width="6" height="12" rx="1"/>
          <rect x="16" y="12" width="6" height="16" rx="1"/>
          <rect x="24" y="8" width="6" height="20" rx="1"/>
          <text x="38" y="26" className="text-sm font-bold">StartupHub</text>
        </svg>
      )
    },
    {
      name: "GreenTech",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <path d="M20 8l8 12h-6l-2 8-8-12h6l2-8z" fill="currentColor"/>
          <text x="38" y="26" className="text-sm font-bold">GreenTech</text>
        </svg>
      )
    },
    {
      name: "MediaCorp",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <rect x="8" y="12" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <polygon points="16,18 22,21 16,24" fill="currentColor"/>
          <text x="38" y="26" className="text-sm font-bold">MediaCorp</text>
        </svg>
      )
    },
    {
      name: "CloudSync",
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto fill-current">
          <path d="M28 18c0-4-3-6-6-6-2 0-4 1-5 3-1-1-2-1-3-1-3 0-5 2-5 5 0 3 2 5 5 5h12c2 0 4-2 4-4 0-2-1-3-2-2z" fill="currentColor"/>
          <text x="38" y="26" className="text-sm font-bold">CloudSync</text>
        </svg>
      )
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      description: "Across various industries"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      description: "Worldwide partnerships"
    },
    {
      icon: TrendingUp,
      number: "200%",
      label: "Growth Rate",
      description: "Client business improvement"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Rating",
      description: "Client satisfaction score"
    }
  ];

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
              Trusted by Industry Leaders
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
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
              
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
                      className="flex-shrink-0 text-foreground-secondary hover:text-accent transition-colors duration-300 opacity-60 hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      style={{ minWidth: "120px" }}
                    >
                      {partner.logo}
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.blockquote
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 1.6 } },
              }}
              className="text-xl lg:text-2xl text-foreground-secondary italic leading-relaxed mb-6 relative"
            >
              <span className="text-6xl text-accent/20 absolute -top-4 -left-2">"</span>
              Working with S.A Ayilara transformed our brand completely. The strategic approach and 
              attention to detail resulted in a 200% increase in customer engagement and significantly 
              boosted our market presence.
              <span className="text-6xl text-accent/20 absolute -bottom-8 -right-2">"</span>
            </motion.blockquote>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.8 } },
              }}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-accent">JS</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">John Smith</p>
                <p className="text-sm text-foreground-secondary">CEO, TechFlow Solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;