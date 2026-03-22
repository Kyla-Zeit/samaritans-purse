import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const ScriptureCtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative pt-8 pb-24 lg:pt-10 lg:pb-32 bg-secondary overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(30 45% 65% / 0.15), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-full bg-sp-gold/20 flex items-center justify-center mx-auto mb-8">
            <Heart className="w-6 h-6 text-sp-gold-warm" />
          </div>
          <h2 className="font-accent italic text-foreground text-3xl lg:text-4xl leading-relaxed mb-6">
            "Go and do likewise."
          </h2>
          <p className="font-body text-muted-foreground text-sm tracking-widest uppercase mb-8">
            — Luke 10:37
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
            After sharing the story of the Good Samaritan, Jesus gave a simple command. The official
            ministry message still centers on that same call to love our neighbour through practical help and the hope of the Gospel.
          </p>
          <Button variant="donate" size="lg" className="text-base px-12" asChild>
            <a href="#donate">
              <Heart className="w-5 h-5" />
              Make a Difference Today
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScriptureCtaSection;
