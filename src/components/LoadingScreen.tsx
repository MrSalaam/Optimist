import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/context/ThemeContext";

const LoadingScreen = () => {
  const { theme } = useTheme();

  const letters = "WELCOME".split("");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]" />
        </div>

        {/* Content Container */}
        <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:flex-row lg:gap-24">
            {/* Logo Section - Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Circling Zero */}
                <motion.div
                  className="absolute -inset-8 sm:-inset-12 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      opacity="0.5"
                    />
                    <motion.circle
                      cx="100"
                      cy="10"
                      r="6"
                      fill="hsl(var(--accent))"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Logo */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                >
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain"
                    style={{
                      filter:
                        theme === "dark" ? "brightness(0) invert(1)" : "none",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Welcome Text Section - Right/Center */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* Welcome Text */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 overflow-hidden">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ x: 100, opacity: 0, rotateY: 90 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;