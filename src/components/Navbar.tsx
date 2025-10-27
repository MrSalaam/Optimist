import { useState, useEffect, memo, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "@/components/ThemeToggle";
import { throttle } from "@/utils/performance";

const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#services", label: "Services" },
	{ href: "#portfolio", label: "Work" },
];

const Navbar = memo(() => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const { theme } = useTheme();

	// Handle scroll with throttling for better performance
	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsScrolled(window.scrollY > 50);

			// Determine active section
			const sections = navLinks.map((link) => link.href.substring(1));
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (current) {
				setActiveSection(current);
			}
		}, 16); // ~60fps

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	const handleNavClick = useCallback((href: string) => {
		setIsMobileMenuOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const toggleMobileMenu = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
		setIsMobileMenuOpen(!isMobileMenuOpen);
	}, [isMobileMenuOpen]);

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
						: "bg-transparent"
				}`}
			>
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 sm:h-20">
						{/* Logo */}
						<a
							href="#home"
							onClick={(e) => {
								e.preventDefault();
								handleNavClick("#home");
							}}
							className="flex items-center group relative z-50"
						>
							<div className="h-32 w-32 mt-2 sm:h-40 sm:w-40 transition-transform duration-300 group-hover:scale-110">
								<img
									src="/logo.svg"
									alt="Logo"
									className={`w-full h-full object-contain transition-all duration-300 ${
										theme === "dark" ? "brightness-0 invert" : ""
									}`}
									style={{
										filter:
											theme === "dark"
												? "brightness(0) invert(1)"
												: "none",
									}}
								/>
							</div>
						</a>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center gap-8">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={(e) => {
										e.preventDefault();
										handleNavClick(link.href);
									}}
									className={`text-sm font-medium transition-colors relative group ${
										activeSection === link.href.substring(1)
											? "text-accent"
											: "text-foreground-secondary hover:text-foreground"
									}`}
								>
									{link.label}
									<span
										className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
											activeSection === link.href.substring(1)
												? "w-full"
												: "w-0 group-hover:w-full"
										}`}
									/>
								</a>
							))}
						</div>

						{/* Right Side - CTA, Theme Toggle & Mobile Menu */}
						<div className="flex items-center gap-3 sm:gap-4 relative z-50">
							{/* CTA Button - Hidden on mobile */}
							<button
								onClick={() => handleNavClick("#contact")}
								className="hidden sm:inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-black font-medium transition-all hover:scale-105 active:scale-95 shadow-lg text-sm"
							>
								Let's Talk
								<ArrowUpRight className="w-4 h-4" />
							</button>

							{/* Theme Toggle */}
							<ThemeToggle />

							{/* Mobile Menu Button */}
							<button
								onClick={toggleMobileMenu}
								className="lg:hidden w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors relative z-50"
								aria-label="Toggle menu"
								aria-expanded={isMobileMenuOpen}
								aria-controls="mobile-menu"
							>
								{isMobileMenuOpen ? (
									<X className="w-5 h-5 text-accent" />
								) : (
									<Menu className="w-5 h-5 text-accent" />
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
					onClick={() => setIsMobileMenuOpen(false)}
					aria-hidden="true"
				/>
			)}

			{/* Mobile Menu */}
			<div
				id="mobile-menu"
				className={`lg:hidden fixed top-16 sm:top-20 right-0 bottom-0 w-full sm:w-80 bg-background border-l border-border shadow-2xl z-40 transition-transform duration-300 ease-out ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="h-full overflow-y-auto">
					<div className="container mx-auto px-6 py-8">
						<div className="flex flex-col gap-6">
							{navLinks.map((link, index) => (
								<a
									key={link.href}
									href={link.href}
									onClick={(e) => {
										e.preventDefault();
										handleNavClick(link.href);
									}}
									className={`text-2xl font-medium transition-all transform ${
										activeSection === link.href.substring(1)
											? "text-accent translate-x-4"
											: "text-foreground-secondary hover:text-foreground hover:translate-x-2"
									}`}
									style={{
										transitionDelay: isMobileMenuOpen
											? `${index * 50}ms`
											: "0ms",
									}}
								>
									{link.label}
								</a>
							))}

							{/* Mobile CTA Button */}
							<button
								onClick={() => {
									setIsMobileMenuOpen(false);
									handleNavClick("#contact");
								}}
								className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-black font-medium transition-all hover:scale-105 active:scale-95 shadow-lg mt-4"
							>
								Let's Talk
								<ArrowUpRight className="w-5 h-5" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});

Navbar.displayName = "Navbar";

export default Navbar;