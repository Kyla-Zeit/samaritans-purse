import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Our Mission", href: "#mission" },
  { label: "Our Work", href: "#programs" },
  { label: "Current Responses", href: "#responses" },
  { label: "Get Involved", href: "#involved" },
  { label: "Ways to Give", href: "#give" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-sp-green-light/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sp-gold flex items-center justify-center">
              <Heart className="w-4 h-4 text-sp-navy" />
            </div>
            <div>
              <span className="text-sp-cream-light font-display text-lg font-bold tracking-wide">
                Samaritan's Purse
              </span>
              <span className="hidden sm:block text-sp-gold text-xs font-body tracking-widest uppercase">
                Canada
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sp-cream-light/80 hover:text-sp-gold font-body text-sm font-medium tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="#donate">
                <Heart className="w-4 h-4" />
                Donate Now
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden text-sp-cream-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-sp-green-light/20"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sp-cream-light/80 hover:text-sp-gold font-body text-base font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <a href="#donate">
                  <Heart className="w-4 h-4" />
                  Donate Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
