import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Sun Icon - visible in dark mode */}
      <Sun
        className={`absolute w-5 h-5 text-accent transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />

      {/* Moon Icon - visible in light mode */}
      <Moon
        className={`absolute w-5 h-5 text-accent transition-all duration-300 ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />

      {/* Ripple effect on hover */}
      <span className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
    </button>
  );
};

export default ThemeToggle;