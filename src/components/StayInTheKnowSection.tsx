import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const StayInTheKnowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-xl bg-card p-8 lg:p-12 shadow-elevated"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Stay in the Know
            </p>
            <h2 className="font-display text-foreground text-4xl font-bold mb-4">
              Get Stories, Updates, and Prayer Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center mb-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 bg-background"
            />
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.samaritanspurse.ca/" target="_blank" rel="noreferrer">
                Count Me In
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayInTheKnowSection;
