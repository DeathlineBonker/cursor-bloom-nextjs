import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "./TextReveal";
import { Badge } from "./ui/badge";

const projects = [
  {
    number: "01",
    title: "Quhan.im",
    category: "Publishing",
    description: "Personal membership & writing platform for long-form content on self-discovery, well-being, and inspiration.",
    status: "live" as const,
    link: "https://quhan.im",
  },
  {
    number: "02",
    title: "Arch & Line",
    category: "Architecture",
    description: "Minimal architecture studio site â editorial hero, selected works grid, and contact flow.",
    status: "coming" as const,
    link: "#",
  },
  {
    number: "03",
    title: "Maison Kopi",
    category: "F&B / Coffee",
    description: "Artisan coffee brand landing page â product showcase, origin story, and shop CTA.",
    status: "coming" as const,
    link: "#",
  },
  {
    number: "04",
    title: "Verdant Properties",
    category: "Real Estate",
    description: "Property listing landing with featured homes, neighborhood highlights, and inquiry form.",
    status: "coming" as const,
    link: "#",
  },
  {
    number: "05",
    title: "Studio LumiÃ¨re",
    category: "Photography",
    description: "Photography portfolio with masonry gallery, lightbox viewer, and about section.",
    status: "coming" as const,
    link: "#",
  },
  {
    number: "06",
    title: "Zenith Wellness",
    category: "Health & Wellness",
    description: "Wellness clinic site â services showcase, team profiles, and booking CTA.",
    status: "coming" as const,
    link: "#",
  },
  {
    number: "07",
    title: "FocusFlow",
    category: "Productivity SaaS",
    description: "Focus timer and task management app â clean dashboard UI with session tracking.",
    status: "coming" as const,
    link: "#",
  },
  {
    number: "08",
    title: "CoinPulse",
    category: "Personal Finance",
    description: "Budget tracker dashboard with charts, spending categories, and clean data visualization.",
    status: "coming" as const,
    link: "#",
  },
];

const WorkSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mb-20">
          <TextReveal>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Selected Work</span>
          </TextReveal>
          <TextReveal delay={0.1} as="h2">
            <span className="font-display text-4xl md:text-5xl block mt-4">Featured Projects</span>
          </TextReveal>
        </div>

        <div
          ref={containerRef}
          className="space-y-0 relative"
        >
          {projects.map((project, i) => {
            const isLive = project.status === "live";
            const Wrapper = isLive ? "a" : "div";
            const wrapperProps = isLive ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-t border-border py-8 md:py-10 px-4 -mx-4 transition-all duration-300 hover:bg-secondary/30 relative"
              >
                <Wrapper {...wrapperProps} className={isLive ? "block" : ""}>
                  <div className="grid grid-cols-12 items-center gap-4">
                    <span className="col-span-2 md:col-span-1 font-body text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {project.number}
                    </span>
                    <div className="col-span-10 md:col-span-3 flex items-center gap-3">
                      <h3 className="font-display text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge
                        variant={isLive ? "default" : "outline"}
                        className={`text-[10px] ${isLive ? "" : "opacity-50"}`}
                      >
                        {isLive ? "Live" : "Soon"}
                      </Badge>
                    </div>
                    <span className="col-span-3 font-body text-sm text-muted-foreground hidden md:block">
                      {project.category}
                    </span>
                    <p className="col-span-5 font-body text-sm text-muted-foreground hidden lg:block group-hover:text-secondary-foreground transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                </Wrapper>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
