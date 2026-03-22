import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, HeartPulse, Flame, ShieldAlert, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const responses = [
  {
    icon: HeartPulse,
    title: "Gaza Response",
    description:
      "Working through trusted partners, Samaritan's Purse is delivering food and medical help with a focus on reaching vulnerable women and children.",
    href: "https://www.samaritanspurse.ca/gaza-response/",
    cta: "View Response",
  },
  {
    icon: ShieldAlert,
    title: "Ukraine Response",
    description:
      "The ministry continues to support Ukrainians with practical relief such as hot meals, firewood, and other aid for families facing ongoing hardship.",
    href: "https://samaritanspurse.ca/ukraine-response/?sc=SWXXXDSOCC",
    cta: "See Update",
  },
  {
    icon: Flame,
    title: "Canadian Wildfire Response",
    description:
      "Across Canada, disaster relief teams stand ready to help communities affected by wildfires, offering practical help and spiritual encouragement.",
    href: "https://www.samaritanspurse.ca/canadian-wildfires/",
    cta: "Learn More",
  },
  {
    icon: Plane,
    title: "British Columbia Flood Response",
    description:
      "Current Canadian Disaster Relief updates include support for residents in Comox, British Columbia, after historic flooding and recovery needs.",
    href: "https://www.samaritanspurse.ca/article/serving-british-columbia-residents-devastated-by-historic-floods/",
    cta: "Read Story",
  },
];

const CurrentResponsesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="responses" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Current Responses
          </p>
          <h2 className="font-display text-foreground text-4xl lg:text-5xl font-bold mb-4">
            Responding to Urgent <span className="text-primary">Needs Today</span>
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {responses.map((response, index) => (
            <motion.div
              key={response.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="bg-background rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <response.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {response.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {response.description}
              </p>
              <Button variant="hero-outline" size="sm" asChild>
                <a href={response.href} target="_blank" rel="noreferrer">
                  {response.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentResponsesSection;
