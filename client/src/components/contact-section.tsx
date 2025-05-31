import { motion } from "framer-motion";
import { Mail, Phone, Github, Instagram, Twitter, Linkedin, Globe, Lightbulb, Smartphone, Search } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const services = [
    { id: "websites", label: "Websites", icon: Globe },
    { id: "branding", label: "Branding", icon: Lightbulb },
    { id: "ecommerce", label: "Ecommerce", icon: Smartphone },
    { id: "seo", label: "SEO", icon: Search },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Pratham-Bhayana/Pratham-Bhayana/", 
      color: "from-gray-700 to-gray-800",
      label: "GitHub"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/pratham_bhayana/", 
      color: "from-pink-500 to-purple-600",
      label: "Instagram"
    },
    { 
      icon: Twitter, 
      href: "", 
      color: "from-blue-400 to-blue-500",
      label: "Twitter"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/pratham-bhayana-210629325/", 
      color: "from-blue-600 to-blue-700",
      label: "LinkedIn"
    },
  ];

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

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/img/Resume.pdf';
    link.download = 'Pratham_Bhayana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gradient mb-6">
            Say Hi
          </h2>
        </motion.div>
        
        <motion.div
          className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Services Column */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold cyber-blue mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.id} className="text-gray-300 hover:text-cyber-blue transition-colors cursor-pointer">
                    {service.label}
                  </li>
                ))}
                <li>
                  <button 
                    onClick={handleResumeDownload}
                    className="text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    My Resume
                  </button>
                </li>
              </ul>
              
              <h4 className="text-xl font-bold neon-pink mt-8 mb-4">Stay connected</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <IconComponent className="text-white" size={20} />
                    </motion.a>
                  );
                })}
              </div>
              
              <h4 className="text-xl font-bold electric-purple mt-8 mb-4">Start a project</h4>
              <p className="text-gray-300">I'm available for freelance projects</p>
            </div>
          </motion.div>
          
          {/* About & Contact Info Column */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold cyber-blue mb-6">About</h3>
              <p className="text-gray-300 mb-6">
                I am a professional web developer. Feel free to get in touch with me.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold neon-pink mb-2">Email</h4>
                  <a 
                    href="mailto:pratham.bhayana@outlook.com"
                    className="text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    pratham.bhayana<br />@outlook.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold electric-purple mb-2">Call</h4>
                  <a 
                    href="tel:+918595873470"
                    className="text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    +91 8595873470
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form Column */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service.id}
                          name={service.id}
                          className="border-gray-600"
                        />
                        <Label 
                          htmlFor={service.id} 
                          className="text-gray-300 flex items-center space-x-2 text-sm"
                        >
                          <IconComponent size={16} className="cyber-blue" />
                          <span>{service.label}</span>
                        </Label>
                      </div>
                    );
                  })}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2">
                    Tell me about the project
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about the project"
                    className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-effect px-8 py-4 rounded-lg border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 font-semibold bg-transparent"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
