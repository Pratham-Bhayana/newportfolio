import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-deep-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <div className="pb-loader perspective-1000 mb-8 mx-auto">
          <motion.div
            className="w-24 h-24 relative transform-style-preserve animate-rotate-3d"
            style={{ perspective: "1000px" }}
          >
            {/* 3D Cube faces */}
            <div className="absolute w-24 h-24 border-2 border-cyber-blue flex items-center justify-center font-mono font-bold text-2xl cyber-blue bg-cyber-blue bg-opacity-10"
                 style={{ transform: "rotateY(0deg) translateZ(48px)" }}>
              P
            </div>
            <div className="absolute w-24 h-24 border-2 border-cyber-blue flex items-center justify-center font-mono font-bold text-2xl cyber-blue bg-cyber-blue bg-opacity-10"
                 style={{ transform: "rotateY(180deg) translateZ(48px)" }}>
              B
            </div>
            <div className="absolute w-24 h-24 border-2 border-cyber-blue flex items-center justify-center font-mono font-bold text-2xl cyber-blue bg-cyber-blue bg-opacity-10"
                 style={{ transform: "rotateY(90deg) translateZ(48px)" }}>
              P
            </div>
            <div className="absolute w-24 h-24 border-2 border-cyber-blue flex items-center justify-center font-mono font-bold text-2xl cyber-blue bg-cyber-blue bg-opacity-10"
                 style={{ transform: "rotateY(-90deg) translateZ(48px)" }}>
              B
            </div>
            <div className="absolute w-24 h-24 border-2 border-cyber-blue flex items-center justify-center font-mono font-bold text-2xl cyber-blue bg-cyber-blue bg-opacity-10"
                 style={{ transform: "rotateX(90deg) translateZ(48px)" }}>
              P
            </div>
            <div className="absolute w-24 h-24 border-2 border-cyber-blue flex items-center justify-center font-mono font-bold text-2xl cyber-blue bg-cyber-blue bg-opacity-10"
                 style={{ transform: "rotateX(-90deg) translateZ(48px)" }}>
              B
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="cyber-blue font-mono text-lg animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Future...
        </motion.div>
        
        <div className="w-64 h-1 bg-slate-dark rounded-full mt-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-blue to-neon-pink rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
