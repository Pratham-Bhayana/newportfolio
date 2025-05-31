import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechCorp",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    content: "Pratham delivered an exceptional web application that exceeded our expectations. His attention to detail and innovative approach made our project stand out in the market.",
    color: "cyber-blue",
  },
  {
    name: "Michael Chen",
    position: "Founder, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    content: "Working with Pratham was a game-changer for our startup. He not only built our app but also provided valuable insights that helped shape our product strategy.",
    color: "neon-pink",
  },
  {
    name: "Emily Rodriguez",
    position: "CTO, DigitalFlow",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    content: "The mobile app Pratham created for us has received outstanding feedback from our users. His expertise in both design and development is truly remarkable.",
    color: "electric-purple",
  },
];

export default function TestimonialsSection() {
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
    <section id="testimonials" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gradient mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="glass-effect p-8 rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className={`font-bold ${testimonial.color}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
