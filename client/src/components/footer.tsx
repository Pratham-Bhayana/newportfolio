import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = useSmoothScroll();

  return (
    <footer className="bg-slate-dark py-12">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.div
            className="text-3xl font-bold text-gradient font-mono mb-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo("#home")}
          >
            PB
          </motion.div>
          
          <p className="text-gray-400 mb-6">
            Crafting digital experiences for the future
          </p>
          
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {footerLinks.map((link) => (
              <motion.button
                key={link.href}
                className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500">
              © 2024 Pratham Bhayana. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
