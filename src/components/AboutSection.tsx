import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const skills = [
  "Systems Thinking",
  "AI-Assisted Development",
  "UI/UX Design",
  "Brand Identity",
  "Full-Stack Products",
  "Rapid Iteration",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <TextReveal delay={0}>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">About</span>
            </TextReveal>
            <TextReveal delay={0.1} as="h2">
              <span className="font-display text-4xl md:text-5xl leading-tight block mt-4">
                Think, design,
                <br />
                <span className="text-primary">build.</span>
              </span>
            </TextReveal>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <TextReveal delay={0.2} as="p">
              <span className="font-body text-lg text-secondary-foreground leading-relaxed block">
                I work at the intersection of clear thinking and AI-powered execution.
                I design system workflows, craft interfaces grounded in purpose, and use tools
                like Lovable and Cursor to build complete products â frontend, backend, and everything
                in between.
              </span>
            </TextReveal>
            <TextReveal delay={0.3} as="p">
              <span className="font-body text-muted-foreground leading-relaxed block">
                The best work comes from deep understanding, not just fast execution. I bring the same
                care to a brand identity as I do to a full-stack platform â because every detail shapes
                how people experience what you've built.
              </span>
            </TextReveal>

            <div className="pt-8 border-t border-border">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px hsl(20 60% 55% / 0.15)",
                    }}
                    className="font-body text-xs tracking-wide text-muted-foreground border border-border px-3 py-1.5 hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
