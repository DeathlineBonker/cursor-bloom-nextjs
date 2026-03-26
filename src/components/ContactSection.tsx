import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <TextReveal>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Contact</span>
            </TextReveal>
            <TextReveal delay={0.1} as="h2">
              <span className="font-display text-4xl md:text-6xl leading-tight block mt-4">
                Let's make
                <br />
                something <span className="text-primary italic shimmer bg-clip-text">together</span>.
              </span>
            </TextReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <MagneticButton as="a" href="mailto:hello@ilhamsafari.com" strength={0.25}>
                <span className="font-body text-lg text-foreground hover:text-primary transition-colors block">
                  hello@ilhamsafari.com
                </span>
              </MagneticButton>
              <div className="flex gap-6">
                {["GitHub", "LinkedIn", "Twitter"].map((platform, i) => (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <MagneticButton as="a" href="#" strength={0.4}>
                      <span className="font-body text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide">
                        {platform}
                      </span>
                    </MagneticButton>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 mt-32 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-sm text-muted-foreground">
            Â© 2026 Ilham Safari
          </span>
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            Design Â· Code Â· Craft
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
