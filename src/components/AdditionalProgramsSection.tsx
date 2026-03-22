import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Wheat, HeartPulse, Stethoscope } from "lucide-react";

const programs = [
  {
    icon: Shield,
    title: "Protection Projects",
    description:
      "Protection-focused programs help women and children escape exploitation, reduce trafficking risks, and find hope, safety, and support through church-based care.",
  },
  {
    icon: Wheat,
    title: "Food Projects",
    description:
      "Food initiatives include emergency staples, agricultural support, seeds, tools, and training that help families survive crises and grow lasting, nutritious food.",
  },
  {
    icon: HeartPulse,
    title: "Emergency Medical Response",
    description:
      "Medical teams provide life-saving treatment, medicine, surgery support, and field-based crisis care when disaster or conflict leaves communities overwhelmed.",
  },
  {
    icon: Stethoscope,
    title: "World Medical Mission",
    description:
      "World Medical Mission places volunteer Christian physicians, dentists, and medical personnel in mission hospitals and clinics around the world.",
  },
];

const AdditionalProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="rounded-lg border border-border bg-background p-8 shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalProgramsSection;
