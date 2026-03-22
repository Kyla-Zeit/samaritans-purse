import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, HandHeart, BookOpen, Truck, Stethoscope, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Give toward current responses, Where Most Needed, shoebox ministry, and other official giving pathways featured on the live site.",
    cta: "Give Now",
    href: "#donate",
    variant: "donate" as const,
  },
  {
    icon: HandHeart,
    title: "Operation Christmas Child",
    description:
      "Pack shoeboxes, volunteer seasonally, lead your church or group, or become part of the prayer network around this flagship ministry.",
    cta: "Get Started",
    href: "https://www.samaritanspurse.ca/operation-christmas-child/",
    variant: "hero" as const,
  },
  {
    icon: Truck,
    title: "Canadian Disaster Relief",
    description:
      "Serve Canadians recovering from floods, wildfires, storms, and other disasters through hands-on cleanup and compassionate response.",
    cta: "Serve",
    href: "https://www.samaritanspurse.ca/getinvolved/canadian-disaster-relief/",
    variant: "hero" as const,
  },
  {
    icon: Stethoscope,
    title: "World Medical Mission",
    description:
      "Licensed medical professionals can explore short-term placements at mission hospitals and clinics around the world.",
    cta: "Apply",
    href: "https://www.samaritanspurse.ca/getinvolved/world-medical-mission/",
    variant: "hero" as const,
  },
  {
    icon: Megaphone,
    title: "Fundraise",
    description:
      "Start a fundraising campaign to support ministry work and invite others to participate in practical Gospel-centered compassion.",
    cta: "Fundraise",
    href: "https://sponsorme.samaritanspurse.ca/",
    variant: "hero" as const,
  },
  {
    icon: BookOpen,
    title: "Pray With Us",
    description:
      "Prayer remains central to the ministry. Join in praying for communities in crisis, church partners, volunteers, and response teams.",
    cta: "Pray",
    href: "https://www.samaritanspurse.ca/getinvolved/start/",
    variant: "hero" as const,
  },
];

const GetInvolvedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="involved" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Answer the Call
          </p>
          <h2 className="font-display text-foreground text-4xl lg:text-5xl font-bold mb-4">
            Get <span className="text-primary">Involved</span>
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map((way, i) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bg-background rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-500 group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <way.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{way.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                {way.description}
              </p>
              <Button variant={way.variant} size="sm" className="w-full" asChild>
                <a href={way.href} target="_blank" rel="noreferrer">
                  {way.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
