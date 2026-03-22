import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, ChartPie, FileText, ShieldCheck } from "lucide-react";

const accountabilityItems = [
  {
    icon: ChartPie,
    title: "90% Ministry",
    description: "Average annual spending allocation over the past five years.",
  },
  {
    icon: FileText,
    title: "Audited Annually",
    description: "The site states Samaritan's Purse Canada is audited annually by an independent public accounting firm.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Stewardship",
    description: "When a project receives more than can wisely be applied, funds may be redirected to a similar pressing need.",
  },
  {
    icon: BadgeCheck,
    title: "Registered Charity",
    description: "Canada Revenue Agency registration: BN 11913 8527 RR0001.",
  },
];

const AccountabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-sp-cream-light" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-sp-cream-light" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Why Give
          </p>
          <h2 className="font-display text-sp-cream-light text-4xl lg:text-5xl font-bold mb-4">
            Accountability & <span className="text-sp-gold">Integrity</span>
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {accountabilityItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="rounded-lg border border-sp-green-light/20 bg-sp-green-light/5 p-8"
            >
              <item.icon className="w-8 h-8 text-sp-gold mb-5" />
              <h3 className="font-display text-2xl font-bold text-sp-cream-light mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sp-cream-light/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountabilitySection;
