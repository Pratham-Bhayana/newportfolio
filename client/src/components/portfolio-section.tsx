import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Magic Music",
    description: "Interactive music application with advanced audio controls and visualization features built with vanilla JavaScript.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["JavaScript", "Web Audio API", "CSS3", "HTML5"],
    color: "text-blue-400",
    borderColor: "border-blue-400",
    link: "https://silver-unicorn-0614dd.netlify.app/",
    category: "Web Development",
  },
  {
    title: "INDI-X",
    description: "Advanced backend project featuring robust API architecture and efficient database management systems.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Backend", "API", "Database", "Node.js"],
    color: "text-purple-400",
    borderColor: "border-purple-400",
    link: "https://indi-x.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Writerscapes",
    description: "Comprehensive content management platform with modern UI/UX design and responsive layout optimization.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    color: "text-pink-400",
    borderColor: "border-pink-400",
    link: "https://writerscapes.netlify.app/landing.html",
    category: "Website",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio showcasing frontend development skills with futuristic design and smooth animations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    color: "text-cyan-400",
    borderColor: "border-cyan-400",
    link: "https://prathambhayana.com",
    category: "Website",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard functionality.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "text-green-400",
    borderColor: "border-green-400",
    link: "#",
    category: "Web Development",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    color: "text-orange-400",
    borderColor: "border-orange-400",
    link: "#",
    category: "Web Development",
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
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.title}
              className={`glass-effect rounded-2xl overflow-hidden group hover:${project.borderColor} transition-all duration-300`}
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
                      className={`inline-flex items-center ${project.color} hover:text-white transition-colors`}
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
                      className={`${project.borderColor}/30 ${project.color} text-xs`}
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
          <motion.button
            className="glass-effect px-8 py-4 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 bg-transparent"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = '/projects'}
          >
            Click to View More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
