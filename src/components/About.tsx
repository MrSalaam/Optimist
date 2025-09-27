import { Button } from "@/components/ui/button";
import {
  Sparkles, 
  Award, 
  Users, 
  Clock, 
  Lightbulb,
  Target,
  TrendingUp,
  Download
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
 
const About = () => {
  const skills = [
    { name: "Brand Identity", level: 95 },
    { name: "Motion Graphics", level: 98 },
    { name: "Printings", level: 99 },
    { name: "Digital Design", level: 95 },
    { name: "Illustration", level: 96 }
  ];

  const achievements = [
    {
      icon: Award,
      number: "30+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      description: "Building lasting partnerships worldwide"
    },
    {
      icon: Clock,
      number: "3+",
      label: "Years Experience",
      description: "Dedicated to perfecting my craft"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Success Rate",
      description: "Committed to exceeding expectations"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        
        {/* Floating elements */}
        <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 w-20 h-20 bg-accent/5 rounded-full blur-xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-1/3 right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container-portfolio relative z-10">
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
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-amber-400/30 rounded-full blur-sm"
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
                <Lightbulb className="w-4 h-4 text-amber-400 relative" />
              </div>
              <span className="text-sm font-medium text-foreground-secondary">About Me</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            > 
              {"Crafting Visual Stories That Drive Results".split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word.split("").map((char, j) => (
                    <motion.span
                      key={j}
                      className="inline-block"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { delay: 0.2 + (i * 0.1) + (j * 0.02) } },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h2>

            {/* Description */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="space-y-4 mb-8"
            >
              <p className="text-lg text-foreground-secondary leading-relaxed">
                I'm a passionate graphic designer dedicated to helping brands tell their unique stories 
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
              <Button size="lg" variant="ghost" asChild>
                <a
                  href="/S_A_Ayilara_Resume.pdf"
                  download
                  className="transition-all duration-300 flex items-center"
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
              <motion.div whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-border transition-all duration-300">
                <Target className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Strategic Focus</h4>
                  <p className="text-xs text-foreground-secondary">Purpose-driven design decisions</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} className="flex items-center gap-3 p-4 bg-background/50 rounded-xl border border-border transition-all duration-300">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Creative Excellence</h4>
                  <p className="text-xs text-foreground-secondary">Innovative and memorable solutions</p>
                </div>
              </motion.div>
              
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;