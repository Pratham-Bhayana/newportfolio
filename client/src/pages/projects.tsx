import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const allProjects = [
  {
    title: "Magic Music",
    description: "Interactive music application with advanced audio controls, real-time visualization, and playlist management. Features include equalizer controls, audio effects, and responsive design for seamless user experience across all devices.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["JavaScript", "Web Audio API", "CSS3", "HTML5", "Responsive Design"],
    color: "text-blue-400",
    borderColor: "border-blue-400",
    link: "https://silver-unicorn-0614dd.netlify.app/",
    category: "Web Development",
    status: "Live",
  },
  {
    title: "INDI-X",
    description: "Advanced backend project featuring robust API architecture, efficient database management, user authentication, and scalable server infrastructure. Built with modern backend technologies and best practices.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Backend", "API", "Database", "Node.js", "Authentication"],
    color: "text-purple-400",
    borderColor: "border-purple-400",
    link: "https://indi-x.netlify.app/",
    category: "Web Development",
    status: "Live",
  },
  {
    title: "Writerscapes",
    description: "Comprehensive content management platform with modern UI/UX design, responsive layout optimization, and user-friendly interface. Perfect for writers and content creators to manage their work efficiently.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "CMS"],
    color: "text-pink-400",
    borderColor: "border-pink-400",
    link: "https://writerscapes.netlify.app/landing.html",
    category: "Website",
    status: "Live",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio showcasing frontend development skills with futuristic design, smooth animations, and responsive layout. Built with React and modern web technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "text-cyan-400",
    borderColor: "border-cyan-400",
    link: "https://prathambhayana.com",
    category: "Website",
    status: "Live",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, inventory management, and customer support features. Includes secure payment processing and order tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Payment Gateway"],
    color: "text-green-400",
    borderColor: "border-green-400",
    link: "#",
    category: "Web Development",
    status: "In Development",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team collaboration features, task assignment, and progress tracking. Built for modern teams and remote work.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL", "Real-time"],
    color: "text-orange-400",
    borderColor: "border-orange-400",
    link: "#",
    category: "Web Development",
    status: "In Development",
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Advanced weather monitoring application with data visualization, historical analysis, and predictive modeling. Features interactive charts and real-time weather updates.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["React", "D3.js", "API Integration", "Data Visualization"],
    color: "text-indigo-400",
    borderColor: "border-indigo-400",
    link: "#",
    category: "Web Development",
    status: "Completed",
  },
  {
    title: "Social Media Dashboard",
    description: "Comprehensive social media management platform with analytics, scheduling, and engagement tracking. Helps businesses manage their social media presence effectively.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["React", "Redux", "Chart.js", "API", "Analytics"],
    color: "text-red-400",
    borderColor: "border-red-400",
    link: "#",
    category: "Web Development",
    status: "Completed",
  },
];

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-blue-400 hover:text-white">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore my complete portfolio showcasing various web development projects, 
            from interactive applications to full-stack solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-none">
                    {project.category}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="outline" 
                    className={`${project.borderColor} ${project.color} bg-black/50`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    {project.link !== "#" && (
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
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold ${project.color} mb-3`}>
                  {project.title}
                </h3>
                
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}