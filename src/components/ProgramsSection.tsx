import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import disasterImg from "@/assets/disaster-relief.jpg";
import christmasImg from "@/assets/christmas-child.jpg";
import waterImg from "@/assets/clean-water.jpg";
import medicalImg from "@/assets/medical-missions.jpg";

const programs = [
  {
    title: "International Crisis Response",
    description:
      "In conflict zones and disaster settings, Samaritan's Purse delivers emergency food, shelter, medical support, and water solutions while working through local church partners.",
    verse: "We go to help people in Jesus' Name. — Ministry emphasis",
    image: disasterImg,
  },
  {
    title: "Operation Christmas Child",
    description:
      "Shoebox gifts packed by Canadians are distributed through local churches in over 100 countries, opening doors for Gospel outreach and discipleship through The Greatest Journey.",
    verse: "Every good and perfect gift is from above. — James 1:17",
    image: christmasImg,
  },
  {
    title: "Water Projects",
    description:
      "Official water ministry content highlights wells, BioSand filters, reservoirs, and hygiene training that help protect families and point communities to the living water of Christ.",
    verse: "Whoever drinks the water I give them will never thirst. — John 4:14",
    image: waterImg,
  },
  {
    title: "Canadian Disaster Relief",
    description:
      "Across Canada, teams and volunteers respond to floods, wildfires, storms, and other disasters with cleanup help, practical aid, and spiritual encouragement.",
    verse: "Carry each other's burdens. — Galatians 6:2",
    image: medicalImg,
  },
];

const ProgramCard = ({ program, index }: { program: (typeof programs)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <h3 className="absolute bottom-4 left-6 right-6 font-display text-2xl font-bold text-sp-cream-light">
          {program.title}
        </h3>
      </div>
      <div className="bg-card p-6">
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          {program.description}
        </p>
        <p className="font-accent italic text-sm text-sp-gold-warm">{program.verse}</p>
      </div>
    </motion.div>
  );
};

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Ministry
          </p>
          <h2 className="font-display text-foreground text-4xl lg:text-5xl font-bold mb-4">
            Serving in <span className="text-primary">His Name</span>
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
