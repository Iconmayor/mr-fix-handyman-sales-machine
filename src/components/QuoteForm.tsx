import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Plumbing Repairs",
  "Electrical Fixes",
  "Furniture Assembly",
  "Painting & Decorating",
  "Door & Lock Repairs",
  "General Home Maintenance",
];

const QuoteForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.service) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Quote request sent!", description: "We'll be in touch shortly." });
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Get a Free Quote</h2>
            <p className="mt-3 text-muted-foreground">Tell us what you need and we'll get back to you fast.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-card p-6 shadow-lg md:p-8">
            <Input
              placeholder="Full Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Phone Number *"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Input
              placeholder="Email Address *"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Service Needed *" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Additional details (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base"
              size="lg"
            >
              {loading ? "Sending..." : "Send Quote Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
