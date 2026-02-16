import { useState } from "react";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+353894596741";
const PHONE_DISPLAY = "+353 89 459 6741";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <Wrench className="h-7 w-7 text-accent" />
          <span className="text-xl font-extrabold tracking-tight">Mr Fix Handyman</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={`tel:${PHONE}`}>
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={`tel:${PHONE}`}>
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
