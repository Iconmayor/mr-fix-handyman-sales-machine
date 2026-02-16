import { Phone, Wrench, Facebook, Instagram, Twitter } from "lucide-react";

const PHONE = "+353894596741";
const PHONE_DISPLAY = "+353 89 459 6741";

const Footer = () => (
  <footer className="bg-primary py-12 text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Brand */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <Wrench className="h-6 w-6 text-accent" />
          <span className="text-lg font-extrabold">Mr Fix Handyman</span>
        </div>
        <p className="text-sm text-primary-foreground/70">
          Professional handyman services across Ireland. Fast, reliable, affordable.
        </p>
        <a href={`tel:${PHONE}`} className="mt-3 inline-flex items-center gap-2 text-accent font-semibold text-sm">
          <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
        </a>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="mb-3 font-bold">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
          <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
          <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Get a Quote</a></li>
        </ul>
      </div>

      {/* Service Areas */}
      <div>
        <h4 className="mb-3 font-bold">Service Areas</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>Edgbaston</li>
          <li>Harborne</li>
          <li>Bournville</li>
          <li>Digbeth</li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h4 className="mb-3 font-bold">Follow Us</h4>
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>

    <div className="container mx-auto mt-8 border-t border-primary-foreground/10 px-4 pt-6 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Mr Fix Handyman. All rights reserved.
    </div>
  </footer>
);

export default Footer;
