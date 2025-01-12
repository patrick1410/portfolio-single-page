import { useState, useEffect, RefObject } from "react";

export const useObserver = (
  ref: RefObject<HTMLDivElement>,
  threshold = [0, 0.1]
): boolean => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.1) {
            setInView(true);
          }
        } else {
          if (entry.intersectionRatio < 0.1) {
            setInView(false);
          }
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return inView;
};
