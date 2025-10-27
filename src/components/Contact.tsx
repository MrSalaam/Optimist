import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Twitter,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionHeaders = {
  contact: {
    icon: MessageSquare,
    text: "Get In Touch",
    color: "purple",
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ayilarasodiq002@gmail.com",
    href: "mailto:ayilarasodiq002@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+2347034945827",
    href: "tel:+2347034945827",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/optimist_szn",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ayilara-adekunle-sodiq-36a39a207/",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Behance",
    icon: null, // Custom SVG below
    href: "https://behance.net/saayilara",
    color: "hover:text-[#1769FF]",
    customSvg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M6.5 4.5h3.8c1.2 0 2.2.3 3 .9.7.6 1.1 1.4 1.1 2.5 0 .8-.2 1.4-.6 1.9-.4.5-1 .9-1.6 1.1.8.2 1.4.6 1.9 1.2.5.6.7 1.3.7 2.2 0 1.2-.4 2.1-1.2 2.8-.8.7-1.9 1-3.3 1H6.5V4.5zm2.3 5.2h2c.6 0 1.1-.2 1.4-.5.3-.3.5-.7.5-1.2 0-.5-.2-.9-.5-1.2-.3-.3-.8-.5-1.4-.5h-2v3.4zm0 6.1h2.3c.7 0 1.2-.2 1.6-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5H8.8v3.8zm10.7-9.3h5v1.5h-5V6.5zm-.5 7.5c.4.4.9.6 1.6.6.5 0 1-.1 1.3-.4.4-.3.6-.6.7-.9h2c-.3 1-.8 1.7-1.5 2.2-.7.5-1.5.8-2.5.8-1.2 0-2.2-.4-2.9-1.1-.7-.7-1.1-1.8-1.1-3.1 0-1.3.4-2.3 1.1-3.1.7-.7 1.7-1.1 2.9-1.1 1.1 0 2 .3 2.7 1 .7.7 1.1 1.6 1.1 2.8v.7h-5.9c.1.7.3 1.2.5 1.6zm3.2-3.7c-.3-.3-.8-.5-1.4-.5-.5 0-1 .2-1.3.5-.3.3-.5.7-.6 1.2h3.7c0-.5-.2-.9-.4-1.2z"/>
      </svg>
    ),
  },
];

const Contact = () => {
  const contactHeader = sectionHeaders.contact;
  const ContactIcon = contactHeader.icon;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({}); // ADD THIS

  // ADD VALIDATION
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }
    
    if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus("loading");

    try {
      
      setTimeout(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormErrors({});
        
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
      }, 2000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section 
      id="contact" 
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
              className="inline-flex items-center gap-2  backdrop-blur-sm border border-accent/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6"
            >
              <ContactIcon className="w-4 h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">{contactHeader.text}</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground px-4"
            >
              Let's Work Together
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="text-base sm:text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto px-4"
            >
              Have a project in mind? Let's discuss how we can bring your vision to life
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Left - Contact Info */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Contact Information
                </h3>
                <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
                  Feel free to reach out through any of these channels. I'm always open to 
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          transition: { duration: 0.6, delay: 0.6 + index * 0.1 } 
                        },
                      }}
                      whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-foreground-secondary mb-0.5 sm:mb-1">{info.title}</p>
                        <p className="text-sm sm:text-base font-medium text-foreground truncate">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } },
                }}
                className="p-5 sm:p-6 bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl"
              >
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                  Connect With Me
                </h4>
                <div className="flex items-center gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 flex items-center justify-center transition-all duration-300 text-foreground ${social.color} group`}
                        aria-label={`Visit ${social.name} profile`}
                      >
                        {Icon ? (
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                        ) : (
                          <div className="transition-transform group-hover:scale-110">
                            {social.customSvg}
                          </div>
                        )}
                      </motion.a>
                    );
                  })}
                </div>
                <p className="text-xs sm:text-sm text-foreground-secondary mt-3 sm:mt-4">
                  Follow me for updates, behind-the-scenes content, and creative inspiration
                </p>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.1 } },
                }}
                className="p-5 sm:p-6 bg-accent/5 border border-accent/20 rounded-xl sm:rounded-2xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse mt-1.5 sm:mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                      Available for Freelance
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                      I'm currently available for freelance projects and collaborations. 
                      Let's create something amazing together!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Name */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
                  }}
                >
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                    className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-background border ${
                      formErrors.name ? 'border-red-500' : 'border-border'
                    } rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm sm:text-base text-foreground placeholder:text-foreground-secondary/50`}
                    placeholder="Your name"
                  />
                  {formErrors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } },
                  }}
                >
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                    className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-background border ${
                      formErrors.email ? 'border-red-500' : 'border-border'
                    } rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm sm:text-base text-foreground placeholder:text-foreground-secondary/50`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500">
                      {formErrors.email}
                    </p>
                  )}
                </motion.div>

                {/* Subject */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
                  }}
                >
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-invalid={!!formErrors.subject}
                    aria-describedby={formErrors.subject ? "subject-error" : undefined}
                    className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-background border ${
                      formErrors.subject ? 'border-red-500' : 'border-border'
                    } rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm sm:text-base text-foreground placeholder:text-foreground-secondary/50`}
                    placeholder="Project inquiry"
                  />
                  {formErrors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-red-500">
                      {formErrors.subject}
                    </p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } },
                  }}
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                    className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-background border ${
                      formErrors.message ? 'border-red-500' : 'border-border'
                    } rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm sm:text-base text-foreground placeholder:text-foreground-secondary/50 resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {formErrors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-500">
                      {formErrors.message}
                    </p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } },
                  }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={formStatus === "loading" || formStatus === "success"}
                    className="w-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                  >
                    {formStatus === "loading" && (
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                    )}
                    {formStatus === "success" && (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    )}
                    {formStatus === "idle" && (
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    )}
                    {formStatus === "loading" ? "Sending..." : formStatus === "success" ? "Sent!" : "Send Message"}
                  </Button>
                </motion.div>

                {/* Success Message */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg sm:rounded-xl"
                  >
                    <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 text-center">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg sm:rounded-xl"
                  >
                    <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 text-center">
                      Oops! Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;