import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Coins, CalendarHeart, Gift, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const waysToGive = [
  {
    icon: Coins,
    title: "Where Most Needed",
    description:
      "Support the ministry's most urgent needs with a flexible gift that helps equip teams, materials, and services wherever they are needed most.",
    href: "#donate",
    cta: "Donate",
  },
  {
    icon: CalendarHeart,
    title: "Donate Monthly",
    description:
      "The official site offers recurring giving as a steady way to support ongoing relief, ministry projects, and crisis response throughout the year.",
    href: "#donate",
    cta: "View Options",
  },
  {
    icon: Gift,
    title: "Gift Catalog & Shoebox Giving",
    description:
      "Donation pathways on the live site include Operation Christmas Child support, the gift catalog, and ministry-specific giving opportunities.",
    href: "#donate",
    cta: "Explore Gifts",
  },
  {
    icon: Landmark,
    title: "Planned Giving & Stock",
    description:
      "Samaritan's Purse Canada also lists planned giving plus stock and mutual fund giving among its donation options.",
    href: "#donate",
    cta: "See More",
  },
];

const WaysToGiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="give" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Ways to Give
          </p>
          <h2 className="font-display text-foreground text-4xl lg:text-5xl font-bold mb-4">
            Give with <span className="text-primary">Purpose</span>
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {waysToGive.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-500 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {item.description}
              </p>
              <Button variant="donate" size="sm" asChild>
                <a href={item.href}>
                  {item.cta}
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

export default WaysToGiveSection;
