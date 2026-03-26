import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

const letterVariants = {
  hidden: { y: 80, opacity: 0, rotateX: -40 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  const firstName = "Ilham".split("");
  const lastName = "Safari".split("");
  const titleLetters = "Agentic AI Engineer".split("");
  const accentIndices = [0, 8, 11];

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax: title moves slower than scroll
      gsap.to(titleRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Subtitle moves at different speed
      gsap.to(subtitleRef.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl space-y-8">
          <h1 ref={titleRef} className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            <div className="overflow-hidden">
              {firstName.map((letter, i) => (
                <motion.span
                  key={`f-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ perspective: "600px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden">
              {lastName.map((letter, i) => (
                <motion.span
                  key={`l-${i}`}
                  custom={i + firstName.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ perspective: "600px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>

          <div ref={subtitleRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-sm tracking-[0.3em] uppercase"
            >
              {titleLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.03 }}
                  className={accentIndices.includes(i) ? "text-primary" : "text-muted-foreground"}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="font-body text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mt-6"
            >
              I think through systems, design with intention, and build with AI â from idea to deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8"
            >
              <MagneticButton as="a" href="#work" strength={0.35}>
                <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-body font-medium tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-shadow">
                  See my work
                </span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
      >
        <span className="font-body text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
