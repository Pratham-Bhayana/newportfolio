import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pratham@example.com",
      color: "cyber-blue",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "neon-pink",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      color: "electric-purple",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-700" },
    { icon: Github, href: "#", color: "from-gray-700 to-gray-800" },
    { icon: Twitter, href: "#", color: "from-blue-400 to-blue-500" },
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="glass-effect p-6 rounded-2xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${info.color} to-electric-purple rounded-full flex items-center justify-center`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Social Links */}
            <motion.div
              className="glass-effect p-6 rounded-2xl"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.button
                      key={index}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="text-white" size={20} />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300 mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300 mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-gray-300 mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-300 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="bg-slate-dark border-gray-600 focus:border-cyber-blue"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-effect px-8 py-4 rounded-lg border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 font-semibold bg-transparent"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
