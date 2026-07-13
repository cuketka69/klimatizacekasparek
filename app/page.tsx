import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Costs } from "@/components/Costs";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solutions";
import { AdditionalServices } from "@/components/AdditionalServices";
import { CtaBanner } from "@/components/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { Realizace } from "@/components/Realizace";
import { TrustBadges } from "@/components/TrustBadges";
import { Articles } from "@/components/Articles";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { HashScroll } from "@/components/HashScroll";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Costs />
        <Process />
        <Solutions />
        <AdditionalServices />
        <CtaBanner />
        <Testimonials />
        <Realizace />
        <TrustBadges />
        <Articles />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
