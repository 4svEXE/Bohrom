import { useEffect, useRef, useState } from "react";

interface UseInViewProps {
  threshold?: number;
  rootMargin?: string;
}

function useInView({ threshold = 0.1, rootMargin = "0px" }: UseInViewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target); // Зупиняє спостереження після появи
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}

export default useInView;
