import { motion } from "framer-motion";
import { Code, Server, Palette } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    color: "cyber-blue",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "neon-pink",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 88 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    color: "electric-purple",
    skills: [
      { name: "Figma", level: 96 },
      { name: "Adobe Creative Suite", level: 90 },
      { name: "Prototyping", level: 94 },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gradient mb-6">
            Skills & Expertise
          </h2>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skills.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                className={`glass-effect p-8 rounded-2xl group hover:border-${category.color} transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className={`text-4xl ${category.color} mb-4`}>
                  <IconComponent size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-dark rounded-full h-2">
                        <motion.div
                          className={`bg-gradient-to-r from-${category.color} to-electric-purple h-2 rounded-full`}
                          variants={progressVariants}
                          initial="hidden"
                          animate={isVisible ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
