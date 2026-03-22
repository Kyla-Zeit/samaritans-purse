import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-compassion.jpg";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Compassionate hands helping a child"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-card max-w-[250px]">
              <p className="text-sp-gold font-accent italic text-sm leading-relaxed">
                "For God so loved the world, that He gave His only begotten Son..."
              </p>
              <p className="text-sp-cream-light/60 font-body text-xs mt-2">— John 3:16</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Calling
            </p>
            <h2 className="font-display text-foreground text-4xl lg:text-5xl font-bold leading-tight mb-6">
              A Ministry of <span className="text-primary">Compassion</span>
            </h2>
            <div className="w-16 h-1 bg-sp-gold rounded-full mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Samaritan's Purse is a nondenominational evangelical Christian organization
              providing spiritual and physical aid to hurting people around the world. It exists
              to meet urgent needs while sharing God's love through His Son, Jesus Christ.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              The ministry takes its name from Jesus' parable of the Good Samaritan and serves
              people regardless of their religious faith, race, gender, or socio-economic standing.
              Samaritan's Purse Canada has been doing this work since 1973.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Emergency disaster relief, long-term development, partnerships with local churches,
              and Gospel-centered care all remain central to the official ministry message.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-sp-gold pl-4">
                <p className="font-display text-3xl font-bold text-primary">1973</p>
                <p className="font-body text-muted-foreground text-sm">Samaritan's Purse Canada began serving</p>
              </div>
              <div className="border-l-2 border-sp-gold pl-4">
                <p className="font-display text-3xl font-bold text-primary">100+</p>
                <p className="font-body text-muted-foreground text-sm">Countries served worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
