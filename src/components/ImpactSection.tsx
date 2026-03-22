import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Gift, Heart } from "lucide-react";

const stats = [
  { icon: Globe, value: "100+", label: "Countries Reached", description: "Bringing hope across every continent" },
  { icon: Users, value: "10M+", label: "Lives Touched Annually", description: "Through relief, development & evangelism" },
  { icon: Gift, value: "220M+", label: "Shoebox Gifts Delivered", description: "Since Operation Christmas Child began" },
  { icon: Heart, value: "55+", label: "Years of Faithful Service", description: "Walking in obedience since 1970" },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Decorative cross pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[600px] bg-sp-cream-light" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-1 bg-sp-cream-light" style={{ marginTop: "-100px" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            By God's Grace
          </p>
          <h2 className="font-display text-sp-cream-light text-4xl lg:text-5xl font-bold mb-4">
            Our Impact
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
          <p className="font-accent italic text-sp-cream-light/70 text-lg max-w-xl mx-auto">
            "And let us not grow weary of doing good, for in due season we will reap, if we do not give up."
            <span className="block text-sp-gold text-sm mt-2 not-italic font-body">— Galatians 6:9</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center p-8 rounded-lg border border-sp-green-light/20 bg-sp-green-light/5 hover:bg-sp-green-light/10 transition-colors duration-300"
            >
              <stat.icon className="w-8 h-8 text-sp-gold mx-auto mb-4" />
              <p className="font-display text-4xl lg:text-5xl font-bold text-sp-cream-light mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sp-cream-light font-semibold text-sm mb-1">
                {stat.label}
              </p>
              <p className="font-body text-sp-cream-light/50 text-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
