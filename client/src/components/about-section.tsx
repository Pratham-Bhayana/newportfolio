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
            Passionate developer with expertise in creating cutting-edge digital solutions
          </motion.p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="space-y-6">
            <motion.div
              className="glass-effect p-8 rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold cyber-blue mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer and UI/UX designer with over 5 years of experience 
                creating innovative digital solutions. My expertise spans across modern web technologies, 
                mobile development, and cutting-edge design principles.
              </p>
            </motion.div>
            
            <motion.div
              className="glass-effect p-8 rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold neon-pink mb-4">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in creating futuristic, user-centric applications that push the boundaries 
                of what's possible on the web. From concept to deployment, I handle every aspect of 
                the development process with meticulous attention to detail.
              </p>
            </motion.div>
          </div>
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="glass-effect p-4 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional portrait of Pratham Bhayana"
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            {/* Floating stats */}
            <motion.div
              className="absolute -top-6 -right-6 glass-effect p-4 rounded-xl"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold cyber-blue">5+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold neon-pink">100+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
