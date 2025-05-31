import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollTo = useCallback((target: string) => {
    const element = document.querySelector(target);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return scrollTo;
};
