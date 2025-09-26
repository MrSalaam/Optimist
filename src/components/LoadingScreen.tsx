import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/icons/logo.svg";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-accent/5"
            initial={{
              scale: 0,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 1],
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.8,
            }}
            style={{
              width: `${(i + 1) * 60}px`, // Reduced from 100px
              height: `${(i + 1) * 60}px`, // Reduced from 100px
            }}
          />
        ))}
      </div>

      {/* Center Container */}
      <motion.div
        className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Rotating Border */}
        <motion.div
          className="absolute -inset-3 sm:-inset-4 md:-inset-6 rounded-full border border-accent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing Circle */}
        <motion.div
          className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 rounded-full bg-accent/5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Logo Container */}
        <motion.div
          className="relative bg-background/80 backdrop-blur-sm rounded-full p-3 sm:p-4 md:p-6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={Logo}
            alt="Optimist Logo"
            className="h-8 w-auto sm:h-10 md:h-12 dark:invert transition-all duration-200"
            animate={{
              y: [0, -2, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading Progress */}
        <motion.div className="mt-4 sm:mt-6 relative w-24 sm:w-32 md:w-40 mx-auto">
          <div className="h-0.5 bg-accent/20 rounded-full">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Loading Text */}
          <motion.div
            className="mt-2 sm:mt-3 flex justify-center items-center space-x-1.5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-[10px] sm:text-xs md:text-sm font-mono text-foreground-secondary">
              Initializing
            </span>
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-accent"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-accent/40"
          animate={{
            x: [0, Math.random() * 40 - 20], // Reduced from 60
            y: [0, Math.random() * 40 - 20], // Reduced from 60
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </motion.div>
  );
};

export default LoadingScreen;