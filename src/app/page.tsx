import Hero from "../components/Hero";
import Approach from "../components/Approach";
import Trusted from "../components/Trusted";
import Metrics from "../components/Metrics";
import CaseStudies from "../components/CaseStudies";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Approach />
      <Trusted />
      <Services />
      <Metrics />
      <CaseStudies />
      <Projects />
      <Footer />
    </main>
  );
}

