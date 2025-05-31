import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollTo = useSmoothScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingElements = [
    { className: "top-20 left-20 w-20 h-20", delay: 0 },
    { className: "top-40 right-32 w-16 h-16", delay: 1 },
    { className: "bottom-32 left-40 w-24 h-24", delay: 2 },
    { className: "top-1/2 right-20 w-12 h-12", delay: 0.5 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute border border-cyber-blue opacity-20 ${element.className}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.2, 
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: element.delay,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-left">
          <motion.div
            className="text-lg cyber-blue font-mono mb-4"
            variants={itemVariants}
          >
            Hello Everyone!
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 text-gradient"
            variants={itemVariants}
          >
            PRATHAM BHAYANA
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            I'm Front-end developer available for freelance work.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button
              className="glass-effect px-8 py-4 rounded-full border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 animate-glow bg-transparent"
              onClick={() => scrollTo("#projects")}
            >
              Projects
            </Button>
            <Button
              className="glass-effect px-8 py-4 rounded-full border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 bg-transparent"
              onClick={() => scrollTo("#contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
        
        {/* Hero Animation Area */}
        <motion.div
          className="relative flex justify-center items-center"
          variants={itemVariants}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* 3D Holographic effect */}
            <motion.div
              className="absolute inset-0 border-2 border-cyber-blue rounded-full opacity-30"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute inset-4 border border-neon-pink rounded-full opacity-20"
              animate={{ 
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Central avatar area */}
            <div className="absolute inset-12 bg-gradient-to-br from-cyber-blue/20 to-neon-pink/20 rounded-full flex items-center justify-center glass-effect">
              <div className="text-6xl font-bold text-gradient">PB</div>
            </div>
            
            {/* Floating code elements */}
            <motion.div
              className="absolute -top-4 -right-4 glass-effect p-2 rounded-lg text-xs font-mono cyber-blue"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              React
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 glass-effect p-2 rounded-lg text-xs font-mono neon-pink"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              JS
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-8 glass-effect p-2 rounded-lg text-xs font-mono electric-purple"
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              CSS
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1.5 }
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => scrollTo("#about")}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
