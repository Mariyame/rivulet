import {
  Navbar,
  Hero,
  Features,
  Quote,
  HowItWorks,
  CTA,
  Footer
} from "@/features/landing/components";

export default function HomePage() {
  return (
    <>
      <div className="bg-light-gradient">
        <Navbar />
        <Hero />
      </div>
      <HowItWorks />
      <Quote />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
