import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Download,
  User,
  Award,
  Briefcase,
  Heart,
  Lightbulb,
  Zap,
  Rocket
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sectionHeaders = {
  about: {
    icon: User,
    text: "About Me",
    color: "purple",
  },
};

const skills = [
  { name: "Brand Identity Design", level: 95 },
  { name: "Illustrations", level: 98 },
  { name: "Digital Design", level: 99 },
  { name: "Pritings", level: 98 },
  { name: "Motion Graphics", level: 95 },
];

const achievements = [
  {
    icon: Award,
    number: "5+",
    label: "Years of Experience",
    description: "in design and branding",
  },
  {
    icon: Briefcase,
    number: "100+",
    label: "Projects Completed",
    description: "across various industries",
  },
];

const coreValues = [
  { icon: Lightbulb, title: "Creativity", description: "Innovative and imaginative solutions." },
  { icon: Heart, title: "Passion", description: "Dedication in every project." },
  { icon: Zap, title: "Efficiency", description: "Fast, effective and on-time delivery." },
  { icon: Rocket, title: "Impact", description: "Designs that drive results." },
];
 
const About = () => {
  const aboutHeader = sectionHeaders.about;
  const AboutIcon = aboutHeader.icon;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        
        {/* Floating elements */}
        <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 w-20 h-20 bg-accent/5 rounded-full blur-xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-1/3 right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
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
                  className={`absolute -inset-1 bg-${aboutHeader.color}-400/30 rounded-full blur-sm`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <AboutIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-${aboutHeader.color}-400 relative`} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground-secondary">{aboutHeader.text}</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground px-4"
            >
              Crafting Visual Stories That Drive Results
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="text-base sm:text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto px-4"
            >
              A designer dedicated to helping brands tell their unique stories through compelling visual design
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >

            {/* Description */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="space-y-4 mb-8"
            >
              <p className="text-lg text-foreground-secondary leading-relaxed">
                A designer dedicated to helping brands tell their unique stories 
                through compelling visual design. With over 3 years of experience, I specialize in creating 
                brand identities that not only look stunning but also drive measurable business results.
              </p>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                My approach combines strategic thinking with creative execution, ensuring every design 
                decision serves a purpose in elevating your brand above the competition and connecting 
                with your target audience on a deeper level.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
              }}
              className="flex flex-col sm:flex-row gap-4 pt-4 "
            >
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                <a
                  href="/S_A_Ayilara_Resume.pdf"
                  download
                  className="flex items-center"
                >
                  <motion.div
                    className="mr-2"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Download className="w-4 h-4" />
                  </motion.div>
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Core Values */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
              }}
              className="grid sm:grid-cols-2 gap-4 mt-12"
            > 
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (<motion.div key={value.title} whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-border transition-all duration-300">
                  <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{value.title}</h4>
                    <p className="text-xs text-foreground-secondary">{value.description}</p>
                  </div>
                </motion.div>)
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Skills */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { duration: 0.6, delay: 0.2 + index * 0.1 } 
                      },
                    }} 
                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                    className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">{achievement.number}</div> 
                    <div className="text-xs sm:text-sm lg:text-base font-medium text-foreground-secondary mb-1">{achievement.label}</div>
                    <div className="text-xs text-foreground-secondary/80">{achievement.description}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
              }}
              className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { 
                        opacity: 1, 
                        x: 0, 
                        transition: { duration: 0.4, delay: 1 + index * 0.1 } 
                      },
                    }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;