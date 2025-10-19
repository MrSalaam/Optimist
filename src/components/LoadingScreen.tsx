import { motion } from "framer-motion";
import Logo from "@/assets/icons/logo.svg";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={Logo}
            alt="Optimist Logo"
            className="h-12 w-auto dark:invert"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: 360,
          }}
          transition={{
            opacity: { delay: 0.2, duration: 0.3 },
            rotate: {
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;