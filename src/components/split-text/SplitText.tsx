import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface Animation {
  opacity: number;
  transform: string;
}

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: Animation;
  animationTo?: Animation;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
};

const SplitText = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const letters = text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null); // Correct ref type
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin, inView]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: (next: (props: Animation) => void) => {
        next(animationTo);
        animatedCount.current += 1;

        if (
          animatedCount.current === letters.length &&
          onLetterAnimationComplete
        ) {
          onLetterAnimationComplete();
        }
      },
      delay: i * delay,
      config: { tension: 200, friction: 30 }, // Customize easing here
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, display: "inline", overflow: "hidden" }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: "inline-block",
            willChange: "transform, opacity",
          }}
        >
          {letters[index] === " " ? " " : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;
