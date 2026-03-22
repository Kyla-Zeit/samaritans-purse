import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-relief.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Humanitarian aid workers distributing supplies"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sp-gold font-accent italic text-lg md:text-xl mb-6 tracking-wide"
        >
          "Whatsoever you do unto the least of these, you do unto Me." — Matthew 25:40
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-sp-cream-light text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Helping in
          <br />
          <span className="text-gradient-gold">Jesus' Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sp-cream-light/80 font-body text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Since 1970, Samaritan's Purse has provided spiritual and physical aid to hurting
          people around the world. The Canadian ministry has been doing essential relief and
          development work in Jesus' Name since 1973.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-10" asChild>
            <a href="#donate">
              <Heart className="w-5 h-5" />
              Give Today
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-10" asChild>
            <a href="#programs">Our Mission Areas</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-sp-gold" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
