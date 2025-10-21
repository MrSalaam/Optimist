import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare
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
    value: "hello@portfolio.com",
    href: "mailto:hello@portfolio.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "New York, NY",
    href: "#",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background Pattern - Added explicitly */}
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
              className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6"
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
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="text-lg text-foreground-secondary leading-relaxed">
                  Feel free to reach out through any of these channels. I'm always open to 
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
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
                      className="flex items-center gap-4 p-5 bg-background/80 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-secondary mb-1">{info.title}</p>
                        <p className="text-base font-medium text-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links or Additional Info */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } },
                }}
                className="p-6 bg-accent/5 border border-accent/20 rounded-2xl"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Available for Freelance
                </h4>
                <p className="text-sm text-foreground-secondary">
                  I'm currently available for freelance projects and collaborations. 
                  Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
                  }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground placeholder:text-foreground-secondary/50"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } },
                  }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground placeholder:text-foreground-secondary/50"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Subject */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
                  }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground placeholder:text-foreground-secondary/50"
                    placeholder="Project inquiry"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } },
                  }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-foreground placeholder:text-foreground-secondary/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
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
                    className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {formStatus === "loading" && (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    )}
                    {formStatus === "success" && (
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                    )}
                    {formStatus === "idle" && (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {formStatus === "loading" ? "Sending..." : formStatus === "success" ? "Sent!" : "Send Message"}
                  </Button>
                </motion.div>

                {/* Success Message */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                  >
                    <p className="text-sm text-green-600 dark:text-green-400 text-center">
                      Thank you! Your message has been sent successfully.
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