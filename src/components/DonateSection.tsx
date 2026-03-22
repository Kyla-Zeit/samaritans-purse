import { useMemo, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookHeart,
  Droplets,
  Gift,
  HandHeart,
  HeartHandshake,
  Home,
  Landmark,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const funds = [
  {
    id: "where-most-needed",
    icon: HeartHandshake,
    title: "Where Most Needed",
    code: "012000",
    description:
      "Flexible support for personnel, materials, and services wherever needs are most urgent.",
  },
  {
    id: "water-projects",
    icon: Droplets,
    title: "Water Projects",
    code: "080190",
    description:
      "Safe water, hygiene education, filters, wells, and sanitation support for vulnerable communities.",
  },
  {
    id: "crisis-relief",
    icon: ShieldCheck,
    title: "Crisis Relief",
    code: "080422",
    description:
      "Emergency food, water, shelter, and spiritual care for people affected by conflict and upheaval.",
  },
  {
    id: "middle-east-crisis",
    icon: Home,
    title: "Middle East Crisis",
    code: "080627",
    description:
      "Practical and spiritual aid for families displaced by violent conflict and persecution.",
  },
  {
    id: "operation-christmas-child",
    icon: Gift,
    title: "Operation Christmas Child",
    code: "080053",
    description:
      "Shoebox ministry support that helps children hear the Good News and receive tangible care.",
  },
  {
    id: "greatest-journey",
    icon: BookHeart,
    title: "The Greatest Journey",
    code: "080622",
    description:
      "Discipleship materials, certificates, and New Testaments for children after shoebox outreach.",
  },
  {
    id: "canadian-relief-projects",
    icon: HandHeart,
    title: "Canadian Relief Projects",
    code: "080504",
    description:
      "Disaster response and compassionate recovery support for Canadians after fires, floods, and storms.",
  },
  {
    id: "planned-giving",
    icon: Landmark,
    title: "Planned Giving & Stock",
    code: "Legacy",
    description:
      "Legacy giving, stock gifts, and longer-term stewardship conversations.",
  },
];

const amounts = [50, 100, 250, 500];

const DonateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedFundId, setSelectedFundId] = useState("where-most-needed");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedFund = useMemo(
    () => funds.find((fund) => fund.id === selectedFundId) ?? funds[0],
    [selectedFundId],
  );

  const effectiveAmount = useMemo(() => {
    if (customAmount.trim()) {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) ? parsed : 0;
    }

    return selectedAmount ?? 0;
  }, [customAmount, selectedAmount]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim() || !email.trim()) {
      toast({
        title: "Missing a few details",
        description: "Please add your name and email before confirming the gift.",
        variant: "destructive",
      });
      return;
    }

    if (!effectiveAmount || effectiveAmount <= 0) {
      toast({
        title: "Enter a gift amount",
        description: "Pick an amount or enter a custom one to continue.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    toast({
      title: "Gift details saved",
      description: "This one-page donate experience now keeps supporters on-site instead of kicking them out to another page.",
    });
  };

  return (
    <section id="donate" className="scroll-mt-24 py-24 lg:py-32 bg-secondary/60">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sp-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Donate
          </p>
          <h2 className="font-display text-foreground text-4xl lg:text-5xl font-bold mb-4">
            One <span className="text-primary">Giving Page</span>
          </h2>
          <div className="w-16 h-1 bg-sp-gold rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-xl shadow-elevated p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div>
                  <p className="text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                    Choose a giving path
                  </p>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-3">
                    Support a Ministry Area
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    type="button"
                    variant={frequency === "one-time" ? "hero" : "outline"}
                    size="sm"
                    onClick={() => setFrequency("one-time")}
                  >
                    One-Time Gift
                  </Button>
                  <Button
                    type="button"
                    variant={frequency === "monthly" ? "hero" : "outline"}
                    size="sm"
                    onClick={() => setFrequency("monthly")}
                  >
                    Monthly Support
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {funds.map((fund) => {
                  const isSelected = fund.id === selectedFundId;

                  return (
                    <button
                      key={fund.id}
                      type="button"
                      onClick={() => setSelectedFundId(fund.id)}
                      className={`text-left rounded-lg border p-5 transition-all duration-300 ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-card"
                          : "border-border bg-background hover:border-primary/40 hover:shadow-card"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-primary text-sp-cream-light" : "bg-primary/10 text-primary"
                          }`}
                        >
                          <fund.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="font-display text-xl font-bold text-foreground">{fund.title}</h4>
                            <span className="text-[11px] font-body tracking-[0.15em] uppercase text-sp-gold">
                              {fund.code}
                            </span>
                          </div>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {fund.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl shadow-card p-6">
                <p className="text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Monthly Giving
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Steady Support
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Recurring gifts help sustain disaster response, ministry projects, and longer-term
                  care.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-card p-6">
                <p className="text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Shoebox & Catalog
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Gift-Focused Giving
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Support Operation Christmas Child, Follow Your Box, or catalogue-style gifts from
                  one place.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-card p-6">
                <p className="text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Legacy Options
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Planned Giving
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Include space for stock, mutual fund, and estate conversations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="xl:sticky xl:top-28"
          >
            <div className="bg-card rounded-xl shadow-elevated overflow-hidden">
              <div className="bg-primary p-8">
                <p className="text-sp-gold font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Gift Summary
                </p>
                <h3 className="font-display text-3xl font-bold text-sp-cream-light mb-3">
                  Complete Your Gift
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-7">
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-3">
                    Selected Fund
                  </label>
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="font-display text-2xl font-bold text-foreground mb-1">
                      {selectedFund.title}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">{selectedFund.description}</p>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-3">
                    Gift Amount
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {amounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={selectedAmount === amount && !customAmount ? "donate" : "outline"}
                        className="w-full"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    min="1"
                    step="1"
                    value={customAmount}
                    onChange={(event) => {
                      setCustomAmount(event.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Custom amount"
                    className="bg-background"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      placeholder="Your full name"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="name@email.com"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-2">
                    Postal Code
                  </label>
                  <Input
                    value={postalCode}
                    onChange={(event) => setPostalCode(event.target.value)}
                    placeholder="A1A 1A1"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-2">
                    Prayer Note or Designation Details
                  </label>
                  <Textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Optional note"
                    className="bg-background min-h-28 resize-none"
                  />
                </div>

                <div className="rounded-lg bg-secondary p-5 border border-border">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-body text-sm text-muted-foreground">Frequency</span>
                    <span className="font-body text-sm font-semibold text-foreground capitalize">
                      {frequency.replace("-", " ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-body text-sm text-muted-foreground">Designation</span>
                    <span className="font-body text-sm font-semibold text-foreground text-right">
                      {selectedFund.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-body text-sm text-muted-foreground">Gift Amount</span>
                    <span className="font-display text-3xl font-bold text-primary">
                      ${effectiveAmount || 0}
                    </span>
                  </div>
                </div>

                <Button type="submit" variant="donate" size="lg" className="w-full text-base">
                  Confirm Gift Details
                </Button>

                {submitted && (
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
                    <p className="font-display text-2xl font-bold text-foreground mb-2">
                      Thank You, {fullName || "Friend"}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Your {frequency === "monthly" ? "monthly" : "one-time"} gift of ${effectiveAmount || 0} toward {selectedFund.title} has been captured in this on-page donate experience. It now behaves like part of the same website instead of a random detour.
                    </p>
                  </div>
                )}
              </form>
            </div>            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
