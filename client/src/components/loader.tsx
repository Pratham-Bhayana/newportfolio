import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [stage, setStage] = useState(0); // 0: PB, 1: Full name, 2: Loading
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage progression
    const stageTimer1 = setTimeout(() => setStage(1), 1000);
    const stageTimer2 = setTimeout(() => setStage(2), 2000);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10 + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);

    return () => {
      clearTimeout(stageTimer1);
      clearTimeout(stageTimer2);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black z-50 flex items-center justify-center"
    >
      <div className="text-center relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 -m-20">
          <div className="w-40 h-40 mx-auto bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="pb"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-8xl md:text-9xl font-black text-gradient mb-8"
              >
                PB
              </motion.div>
            )}
            
            {stage === 1 && (
              <motion.div
                key="fullname"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-2"
              >
                <div className="text-5xl md:text-6xl font-black text-gradient">
                  PRATHAM
                </div>
                <div className="text-5xl md:text-6xl font-black text-gradient">
                  BHAYANA
                </div>
              </motion.div>
            )}
            
            {stage === 2 && (
              <motion.div
                key="loading"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="text-3xl font-bold text-white mb-4">
                  PRATHAM BHAYANA
                </div>
                
                <motion.div
                  className="text-lg text-blue-400 font-mono"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Frontend Developer
                </motion.div>
                
                {/* Modern progress bar */}
                <div className="w-80 max-w-sm mx-auto">
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="text-sm text-gray-400 mt-2 font-mono">
                    {Math.round(progress)}%
                  </div>
                </div>
                
                <motion.div
                  className="text-sm text-gray-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Initializing Portfolio...
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
