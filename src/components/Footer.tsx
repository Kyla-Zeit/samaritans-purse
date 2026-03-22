import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-sp-gold flex items-center justify-center">
                <Heart className="w-4 h-4 text-sp-navy" />
              </div>
              <div>
                <span className="text-sp-cream-light font-display text-lg font-bold">
                  Samaritan's Purse
                </span>
                <span className="block text-sp-gold text-xs font-body tracking-widest uppercase">
                  Canada
                </span>
              </div>
            </div>
            <p className="font-body text-sp-cream-light/50 text-sm leading-relaxed mb-4">
              A Christian international relief organization providing spiritual and physical aid to
              hurting people around the world in Jesus' Name.
            </p>
            <p className="font-accent italic text-sp-gold/70 text-sm">"Helping in Jesus' Name"</p>
          </div>

          <div>
            <h4 className="font-display text-sp-cream-light font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                ["What is Samaritan's Purse?", "https://www.samaritanspurse.ca/what-is-samaritans-purse/"],
                ["Operation Christmas Child", "https://www.samaritanspurse.ca/operation-christmas-child/"],
                ["Canadian Disaster Relief", "https://www.samaritanspurse.ca/what-we-do/canadian-disaster-relief/"],
                ["Water Projects", "https://www.samaritanspurse.ca/water-projects/"],
                ["Contact Us", "https://www.samaritanspurse.ca/contact-us/"],
                ["Annual Report & Accountability", "https://www.samaritanspurse.ca/why-give-to-samaritans-purse/"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sp-cream-light/50 hover:text-sp-gold transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sp-cream-light font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-3 text-sp-cream-light/50">
                <MapPin className="w-4 h-4 text-sp-gold flex-shrink-0 mt-0.5" />
                <span>
                  Samaritan's Purse Canada<br />
                  20 Hopewell Way NE<br />
                  Calgary, Alberta T3J 5H5
                </span>
              </li>
              <li className="flex items-center gap-3 text-sp-cream-light/50">
                <Phone className="w-4 h-4 text-sp-gold flex-shrink-0" />
                1-800-663-6500
              </li>
              <li className="flex items-center gap-3 text-sp-cream-light/50">
                <Mail className="w-4 h-4 text-sp-gold flex-shrink-0" />
                info@samaritan.ca
              </li>
              <li className="flex items-center gap-3 text-sp-cream-light/50">
                <Phone className="w-4 h-4 text-sp-gold flex-shrink-0" />
                Disaster Relief Emergency Team: 403-770-7470
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sp-cream-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sp-cream-light/30 text-xs">
            © {new Date().getFullYear()} Samaritan's Purse Canada. All rights reserved. Registered Canadian Charity.
          </p>
          <p className="font-body text-sp-cream-light/30 text-xs text-center md:text-right">
            CRA Registration: BN 11913 8527 RR0001 · Terms of Use · Privacy Policy · Statement of Faith
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
