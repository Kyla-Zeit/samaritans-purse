import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const qualifications = [
  "Committed to Christian values and the Samaritan's Purse Statement of Faith",
  "Bachelor's degree in design + 7 years interactive/web design experience",
  "Comprehensive knowledge of WordPress, Adobe Creative Suite, HTML/CSS, JavaScript",
  "Experience with responsive design, CSS animations, and SEO techniques",
  "Strong attention to detail, prioritization, and time management",
  "Bilingual in French is considered an asset",
];

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="careers" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Join Our Team
          </p>
          <h2 className="font-display text-foreground text-4xl lg:text-5xl font-bold mb-4">
            Use Your Gifts for <span className="text-primary">His Glory</span>
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-xl shadow-elevated overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary p-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-sp-cream-light mb-2">
              Web Designer
            </h3>
            <p className="font-body text-sp-cream-light/70 mb-4">
              Communications & Creative Services Team
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-body">
              <span className="flex items-center gap-2 text-sp-gold">
                <MapPin className="w-4 h-4" /> Calgary, AB, Canada
              </span>
              <span className="flex items-center gap-2 text-sp-gold">
                <Clock className="w-4 h-4" /> Full Time — Permanent
              </span>
              <span className="flex items-center gap-2 text-sp-gold">
                <Briefcase className="w-4 h-4" /> 5–10 Years Experience
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Do you have a passion for design and a desire to use your skills to make a tangible
              difference in the world? As our Web Designer, you will play a vital role in bringing
              our mission to life online — developing compelling web content that connects supporters
              with the impactful work of Samaritan's Purse Canada.
            </p>

            <p className="font-accent italic text-sp-gold-warm text-sm mb-8">
              "Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23
            </p>

            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Key Qualifications
            </h4>
            <ul className="space-y-3 mb-8">
              {qualifications.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-muted-foreground text-sm">{q}</span>
                </li>
              ))}
            </ul>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="font-body text-sm text-muted-foreground">
                <strong className="text-foreground">Benefits include:</strong> Life insurance, medical/dental,
                short-term & long-term disability, RRSP contributions after 1 year, and 15 vacation days to start.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="donate" size="lg" className="flex-1">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Contact: employment@samaritan.ca
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
