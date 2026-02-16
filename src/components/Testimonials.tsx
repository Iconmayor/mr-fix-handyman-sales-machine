import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "John M.", review: "Fantastic service. Arrived same day and fixed everything perfectly. Highly recommend!" },
  { name: "Sarah O'Brien", review: "Very professional and tidy. Fixed our leaking tap and assembled furniture all in one visit." },
  { name: "Declan K.", review: "Brilliant work on our painting job. Fair price, great finish. Will definitely use again." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
    ))}
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="bg-background py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">What Our Customers Say</h2>
        <p className="mt-3 text-muted-foreground">Real reviews from happy customers.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col gap-3 p-6">
              <Stars />
              <p className="text-sm italic text-muted-foreground">"{t.review}"</p>
              <p className="mt-auto text-sm font-bold text-foreground">— {t.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
