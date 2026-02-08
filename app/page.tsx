import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import LiveDemo from '@/components/LiveDemo';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Installation from '@/components/Installation';
import Roadmap from '@/components/Roadmap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <LiveDemo />
      <Features />
      <HowItWorks />
      <Installation />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  );
}
