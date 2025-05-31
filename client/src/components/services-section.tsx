import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, Cloud, Brain, Lightbulb, Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    title: "Web Development",
    icon: Monitor,
    color: "cyber-blue",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "React/Next.js Applications",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "API Development",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "neon-pink",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "React Native Apps",
      "iOS & Android Development",
      "App Store Optimization",
      "Mobile UI/UX Design",
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "electric-purple",
    description: "User-centered design solutions that combine aesthetics with functionality for maximum engagement.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
    ],
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    color: "cyber-blue",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications and enterprise systems.",
    features: [
      "AWS/Azure Deployment",
      "DevOps & CI/CD",
      "Microservices Architecture",
      "Performance Optimization",
    ],
  },
  {
    title: "AI/ML Integration",
    icon: Brain,
    color: "neon-pink",
    description: "Intelligent features powered by machine learning and artificial intelligence to enhance user experiences.",
    features: [
      "Recommendation Systems",
      "Natural Language Processing",
      "Computer Vision",
      "Chatbot Development",
    ],
  },
  {
    title: "Technical Consulting",
    icon: Lightbulb,
    color: "electric-purple",
    description: "Strategic technology consulting to help businesses make informed decisions about their digital transformation.",
    features: [
      "Technology Strategy",
      "Architecture Review",
      "Code Auditing",
      "Team Training",
    ],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="services" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gradient mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className={`glass-effect p-8 rounded-2xl text-center group hover:border-${service.color} transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-${service.color} to-electric-purple rounded-full flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="text-2xl text-white" size={32} />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="text-left space-y-2 text-gray-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className={`text-${service.color} mr-2 flex-shrink-0`} size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
