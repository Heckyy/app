import { useEffect, Component } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Capabilities from "@/components/Capabilities";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "120px 24px", textAlign: "center" }}>
          Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

function Site() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return undefined;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [reduce]);

  return (
    <div className="bg-ink text-paper">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Capabilities />
        <Work />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Site />
    </ErrorBoundary>
  );
}
