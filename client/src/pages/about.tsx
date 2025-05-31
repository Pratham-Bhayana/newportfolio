import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/img/Resume.pdf';
    link.download = 'Pratham_Bhayana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API Development"] },
    { category: "Tools & Others", items: ["Git", "Webpack", "Responsive Design", "Performance Optimization"] },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Developing modern, responsive websites and web applications for various clients. Specializing in React, JavaScript, and modern CSS frameworks."
    },
    {
      title: "Web Developer",
      company: "Personal Projects",
      period: "2021 - Present",
      description: "Created multiple web projects including Magic Music, INDI-X, and Writerscapes. Focused on user experience and modern web technologies."
    }
  ];

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
              About Me
            </span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Personal Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Who I Am</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm Pratham Bhayana, a passionate front-end developer with a flair for blending creativity with technology. 
                  Born on May 17, 2004, in New Delhi, India, I've been fascinated by the endless possibilities of web development 
                  since I started my journey in 2021.
                </p>
                <p>
                  I specialize in crafting visually stunning and highly interactive web experiences that push the boundaries of 
                  modern design. My approach combines clean, efficient code with innovative user interfaces to create digital 
                  solutions that not only look great but also provide exceptional user experiences.
                </p>
                <p>
                  With over 2 years of experience in frontend development, I've worked on 31+ projects and served 24+ happy 
                  customers. I'm committed to delivering pixel-perfect websites that adapt seamlessly across all devices and 
                  platforms.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, staying updated with the latest web development trends, 
                  and working on personal projects that challenge my skills and creativity.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-purple-400 mb-6">Skills & Technologies</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <h3 className="text-lg font-semibold text-pink-400">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="text-gray-300 text-sm">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-green-400 mb-6">Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-blue-400 pl-6 pb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.6 }}
                  >
                    <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <p className="text-white">Pratham Bhayana</p>
                </div>
                <div>
                  <span className="text-gray-400">Birthday:</span>
                  <p className="text-white">May 17, 2004</p>
                </div>
                <div>
                  <span className="text-gray-400">Location:</span>
                  <p className="text-white">New Delhi, India</p>
                </div>
                <div>
                  <span className="text-gray-400">Email:</span>
                  <p className="text-white">
                    <a href="mailto:pratham.bhayana@outlook.com" className="hover:text-blue-400 transition-colors">
                      pratham.bhayana@outlook.com
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <p className="text-white">
                    <a href="tel:+918595873470" className="hover:text-blue-400 transition-colors">
                      +91 8595873470
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">2+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">31+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-pink-400">24+</div>
                  <div className="text-xs text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">7</div>
                  <div className="text-xs text-gray-400">Days/Week</div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleResumeDownload}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              <Download className="mr-2" size={16} />
              Download Resume
            </Button>

            <Link href="/#contact" className="block">
              <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}