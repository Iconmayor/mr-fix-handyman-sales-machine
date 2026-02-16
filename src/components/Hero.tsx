import { Phone, FileText, ShieldCheck, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+353894596741";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "Same Day Service" },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-primary">
    {/* Decorative shapes */}
    <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/10" />
    <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent/5" />

    <div className="container relative mx-auto px-4 py-20 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Reliable Handyman Services You Can Trust
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
          Fast, affordable and professional home repairs across Ireland.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
            <a href={`tel:${PHONE}`}>
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
            <a href="#contact">
              <FileText className="h-5 w-5" />
              Get Free Quote
            </a>
          </Button>
        </div>

        <p className="mt-4 text-sm font-semibold text-accent">
          ⚡ Limited same-day slots available
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-primary-foreground/90">
              <b.icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
