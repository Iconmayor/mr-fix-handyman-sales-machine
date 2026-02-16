import { Phone } from "lucide-react";

const PHONE = "+353894596741";

const StickyCallButton = () => (
  <a
    href={`tel:${PHONE}`}
    className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 md:hidden"
    aria-label="Call Mr Fix Handyman"
  >
    <Phone className="h-5 w-5" />
    Call Now
  </a>
);

export default StickyCallButton;
