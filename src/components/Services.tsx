import { Droplets, Zap, Sofa, Paintbrush, DoorOpen, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Droplets, title: "Plumbing Repairs", desc: "Leaking taps, blocked drains, toilet repairs and pipe fixes handled quickly and professionally." },
  { icon: Zap, title: "Electrical Fixes", desc: "Light fitting, socket replacements, and minor electrical repairs done safely." },
  { icon: Sofa, title: "Furniture Assembly", desc: "Flat-pack assembly for beds, wardrobes, desks and shelving units." },
  { icon: Paintbrush, title: "Painting & Decorating", desc: "Interior and exterior painting, wallpapering and touch-ups to refresh your space." },
  { icon: DoorOpen, title: "Door & Lock Repairs", desc: "Door hanging, lock changes, handle replacements and hinge adjustments." },
  { icon: Home, title: "General Home Maintenance", desc: "Shelving, curtain rails, picture hanging and all-round home upkeep." },
];

const Services = () => (
  <section id="services" className="bg-background py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Our Services</h2>
        <p className="mt-3 text-muted-foreground">Professional solutions for every home repair need.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="group transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-start gap-4 p-6">
              <div className="rounded-lg bg-accent/10 p-3">
                <s.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <Button asChild variant="outline" size="sm" className="mt-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <a href="#contact">Get a Quote</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
