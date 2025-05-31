import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-black text-gradient mb-6"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A little bit about me
          </motion.p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* 3D Holographic Avatar Area */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative w-full h-96 flex justify-center items-center">
              {/* 3D Avatar Container */}
              <div className="relative w-80 h-80 perspective-1000">
                <motion.div
                  className="absolute inset-0 border-2 border-cyber-blue rounded-full opacity-40"
                  animate={{ 
                    rotateY: 360,
                    rotateX: [0, 15, 0],
                  }}
                  transition={{ 
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div
                  className="absolute inset-4 border border-neon-pink rounded-full opacity-30 transform-style-preserve"
                  animate={{ 
                    rotateY: -360,
                    rotateZ: [0, 180, 360],
                  }}
                  transition={{ 
                    rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                    rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Central professional area */}
                <div className="absolute inset-8 bg-gradient-to-br from-cyber-blue/10 to-neon-pink/10 rounded-full flex items-center justify-center glass-effect">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">PB</div>
                    <div className="text-sm cyber-blue font-mono">Frontend Dev</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              className="glass-effect p-8 rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold cyber-blue mb-4">A little bit about me</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Front-end developer with a passion for creating intuitive and engaging user experiences. 
                Specializing in modern web design, clean code, and responsive layouts. Delivering seamless 
                and visually appealing digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm Pratham Bhayana, a front-end developer with a flair for blending creativity with technology. 
                I specialize in crafting visually stunning and highly interactive web experiences that push the boundaries of modern design.
              </p>
              <motion.button
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm mt-2 underline"
                onClick={() => window.open('/about', '_blank')}
                whileHover={{ x: 5 }}
              >
                Read More
              </motion.button>
            </motion.div>
            
            {/* Information Panel */}
            <motion.div
              className="glass-effect p-8 rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold neon-pink mb-6">Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name</span>
                  <span className="text-white">Pratham Bhayana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Birthday</span>
                  <span className="text-white">May 17, 2004</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white">
                    <a href="tel:+918595873470" className="hover:text-cyber-blue transition-colors">
                      +91 8595873470
                    </a>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white">
                    <a href="mailto:pratham.bhayana@outlook.com" className="hover:text-cyber-blue transition-colors">
                      Click to send email
                    </a>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl font-bold cyber-blue mb-2">2+</div>
            <div className="text-sm text-gray-300">Years of Experience</div>
          </motion.div>
          
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl font-bold neon-pink mb-2">24</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </motion.div>
          
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl font-bold electric-purple mb-2">31</div>
            <div className="text-sm text-gray-300">Projects Finished</div>
          </motion.div>
          
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl font-bold cyber-blue mb-2">7</div>
            <div className="text-sm text-gray-300">Days of Work</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
