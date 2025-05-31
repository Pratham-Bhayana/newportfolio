import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Magic Music",
    description: "Interactive music application built with JavaScript for dynamic user experience.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["JavaScript", "Web Audio API", "CSS3"],
    color: "cyber-blue",
    link: "https://silver-unicorn-0614dd.netlify.app/",
    category: "Web Development",
  },
  {
    title: "INDI-X",
    description: "Backend project showcasing advanced server-side development and API architecture.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Backend", "API", "Database"],
    color: "neon-pink",
    link: "https://indi-x.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Writerscapes",
    description: "Full-featured website project demonstrating comprehensive web development skills.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["HTML5", "CSS3", "JavaScript"],
    color: "electric-purple",
    link: "https://writerscapes.netlify.app/landing.html",
    category: "Website",
  },
];

export default function PortfolioSection() {
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

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-gradient mb-4">
              Projects
            </h2>
          </div>
          <motion.a
            href="/projects"
            target="_blank"
            className="cyber-blue hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight size={32} />
          </motion.a>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`glass-effect rounded-2xl overflow-hidden group hover:border-${project.color} transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project by frontend developer Pratham Bhayana`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Project category tag */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-none">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-${project.color} hover:text-white transition-colors`}
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">View Live</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className={`text-xl font-bold ${project.color} mb-2 hover:text-white transition-colors`}>
                    {project.title}
                  </h3>
                </motion.a>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`border-${project.color}/30 text-${project.color} text-xs`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="/projects"
            target="_blank"
            className="inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <Button className="glass-effect px-8 py-4 rounded-full border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 bg-transparent">
              Click to View More
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
