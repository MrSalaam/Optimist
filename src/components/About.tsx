import { Button } from "@/components/ui/button";
import {
  Download,
  User,
  Award,
  Briefcase,
  Heart,
  Lightbulb,
  Zap,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";

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
  { name: "Printings", level: 98 },
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

  return (
    <section 
      id="about" 
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div className="section-pattern" style={{ willChange: 'auto' }} />
      
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
              className="inline-flex items-center gap-2 backdrop-blur-sm border border-accent/20 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6"
            >
              <AboutIcon className="w-4 h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">{aboutHeader.text}</span>
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

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
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
                <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
                  A designer dedicated to helping brands tell their unique stories 
                  through compelling visual design. With over 5 years of experience, I specialize in creating 
                  brand identities that not only look stunning but also drive measurable business results.
                </p>
                <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
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
                className="flex flex-col sm:flex-row gap-4 pt-4"
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
                className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12"
              > 
                {coreValues.map((value) => {
                  const Icon = value.icon;
                  return (
                    <motion.div 
                      key={value.title} 
                      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} 
                      className="flex items-start sm:items-center gap-3 p-3 sm:p-4 bg-background/50 rounded-xl border border-border transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 sm:mt-0" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{value.title}</h4>
                        <p className="text-xs text-foreground-secondary leading-snug">{value.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Content - Stats & Skills */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Achievement Stats - Fixed Responsive Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
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
                      className="bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300 group"
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-accent mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">{achievement.number}</div> 
                      <div className="text-xs sm:text-sm font-medium text-foreground-secondary mb-1 leading-tight">{achievement.label}</div>
                      <div className="text-[10px] sm:text-xs text-foreground-secondary/80 leading-tight">{achievement.description}</div>
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
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5 sm:mb-6 flex items-center gap-2">
                  Core Skills
                </h3>
                <div className="space-y-4 sm:space-y-5">
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