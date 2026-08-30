import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  Testimonials,
  CTA,
  Footer
} from "@/features/landing/components";

export default function HomePage() {
  return (
    <>
      <div className="container-page mx-auto px-2 md:px-4 py-2">
        <Navbar />
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
