import { BadgeDollarSign, Zap, SmilePlus, ThumbsUp } from "lucide-react";

const items = [
  { icon: BadgeDollarSign, title: "Transparent Pricing", desc: "No hidden fees. You'll know the cost before we start." },
  { icon: Zap, title: "Fast Response Times", desc: "Same-day and next-day appointments available across Ireland." },
  { icon: SmilePlus, title: "Friendly & Professional", desc: "Our handymen are courteous, tidy and respectful of your home." },
  { icon: ThumbsUp, title: "100% Satisfaction Guarantee", desc: "We're not happy until you are. Quality work, every time." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="bg-muted py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Why Choose Mr Fix Handyman</h2>
        <p className="mt-3 text-muted-foreground">Trusted by hundreds of homeowners across Ireland.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-accent/10 p-4">
              <item.icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
