import { motion } from "framer-motion";
import { Globe, Lightbulb, Smartphone, Search } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const services = [
  {
    title: "Websites",
    icon: Globe,
    color: "cyber-blue",
    description: "Pixel-perfect websites built to adapt seamlessly on all devices.",
  },
  {
    title: "Branding",
    icon: Lightbulb,
    color: "neon-pink",
    description: "From logo to colors – building a visual identity that speaks for your brand.",
  },
  {
    title: "Ecommerce",
    icon: Smartphone,
    color: "electric-purple",
    description: "Eye-catching layouts that highlight your product features and drive sales.",
  },
  {
    title: "SEO",
    icon: Search,
    color: "cyber-blue",
    description: "Improve meta tags, headings, alt attributes, URL structure & more.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const scrollTo = useSmoothScroll();

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
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.title}
                className={`glass-effect p-8 rounded-2xl group hover:border-${service.color} transition-all duration-300 ${
                  isEven ? '' : 'md:mt-12'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                  
                  <div className="relative">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r from-${service.color} to-electric-purple rounded-full flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="text-white" size={32} />
                    </motion.div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`absolute -bottom-2 -right-2 text-xs text-${service.color} hover:text-white bg-transparent border border-${service.color} rounded-full px-3 py-1`}
                      onClick={() => scrollTo("#contact")}
                    >
                      contact
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button
                  variant="outline"
                  className={`border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-black transition-all duration-300`}
                  onClick={() => scrollTo("#projects")}
                >
                  See Projects
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
