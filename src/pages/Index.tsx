import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <QuoteForm />
    </main>
    <Footer />
    <StickyCallButton />
  </>
);

export default Index;
