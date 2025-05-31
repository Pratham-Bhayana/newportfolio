import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollTo = useCallback((target: string) => {
    const element = document.querySelector(target);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Enhanced smooth scrolling with better performance
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Add smooth scroll CSS for better browser support
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Reset after scroll completes
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
      }, 1000);
    }
  }, []);

  return scrollTo;
};
