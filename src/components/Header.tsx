import { useState, useEffect } from "react";
import { X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@/assets/icons/menu.svg";
import Logo from "@/assets/icons/logo.svg"; // Add this import
import { useTheme } from "@/context/ThemeContext";

const LiquidButton = ({ onClick, className, children }: { 
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ y: "100%", borderRadius: "100%" }}
            animate={{ 
              y: "-100%",
              borderRadius: "0%",
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            exit={{ y: "-100%" }}
            className="absolute inset-0 bg-white/20"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};


const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-background-secondary hover:bg-background-secondary/80 transition-colors duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDarkMode ? "dark" : "light"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 4 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-orange-900" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', href: 'about' },
    { label: 'Work', href: 'portfolio' },
    { label: 'Services', href: 'services' },
    { label: 'Contact', href: 'contact' }
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav>
        <div className="container-portfolio flex items-center justify-between py-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => handleNavClick('hero')}
          >
            <img 
              src={Logo} 
              alt="Optimist Logo" 
              className="h-6 w-auto dark:invert transition-all duration-200"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground-secondary hover:text-accent transition-colors duration-200 text-caption font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (navItems.length + 1) }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (navItems.length + 2) }}
            >
              <LiquidButton
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 bg-accent text-white dark:text-black rounded-md hover:bg-accent/90 transition-colors duration-200"
              >
                Get in Touch
              </LiquidButton>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 text-foreground-secondary hover:text-accent transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={20} />
              ) : (
                <img 
                  src={MenuIcon} 
                  alt="Menu"
                  className="w-7 h-7 dark:invert transition-all duration-200"
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border"
            >
              <div className="container-portfolio py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-foreground-secondary hover:text-accent transition-colors duration-200 text-body font-medium py-2"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  >
                    <LiquidButton
                      onClick={() => handleNavClick('contact')}
                      className="w-full text-left px-4 py-2 bg-accent text-white dark:text-black rounded-md hover:bg-accent/90 transition-colors duration-200"
                    >
                      Get in Touch
                    </LiquidButton>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;