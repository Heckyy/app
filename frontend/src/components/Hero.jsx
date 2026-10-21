import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import HeroVisual from "./HeroVisual";
import { scrollToHash, waLink } from "@/config";

const LINES = ["Software built", "around the way", "your business", "works."];

const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 44]);

  const maskWrap = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
  };
  const maskLine = {
    hidden: { y: "112%" },
    show: { y: "0%", transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } },
  };
  const fade = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : d },
  });

  const markY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);

  return (
    <section id="home" ref={ref} className="relative bg-ink overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ y: markY }}
        initial={reduce ? false : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="pointer-events-none select-none absolute right-[-18vw] sm:right-[-12vw] lg:right-[-7vw] top-[4%] lg:top-[-2%] w-[84vw] sm:w-[62vw] lg:w-[clamp(520px,52vw,1100px)]"
      >
        <img
          src="/logo-mark.webp"
          alt=""
          data-testid="hero-logo-watermark"
          draggable="false"
          className="w-full h-auto block opacity-[0.07] lg:opacity-[0.085]"
        />
      </motion.div>
      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-10 pt-28 lg:pt-40 pb-14 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5 min-w-0">
            <motion.p
              {...fade(0.05)}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-fog"
            >
              Alpha One Studio — Software house
            </motion.p>

            <motion.h1
              variants={reduce ? undefined : maskWrap}
              initial="hidden"
              animate="show"
              data-testid="hero-headline"
              className="mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.1rem] font-medium tracking-[-0.03em] leading-[1.05]"
            >
              {LINES.map((l) => (
                <span
                  key={l}
                  className="block overflow-hidden pb-[0.09em] -mb-[0.09em]"
                >
                  <motion.span
                    className="block will-change-transform"
                    variants={reduce ? undefined : maskLine}
                    style={reduce ? { transform: "none" } : undefined}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              {...fade(0.6)}
              className="mt-7 max-w-md text-[15px] leading-relaxed text-fog"
              data-testid="hero-supporting-copy"
            >
              Alpha One Studio designs and develops custom software, web
              applications, and integrated business systems shaped around real
              operational needs.
            </motion.p>

            <motion.div {...fade(0.75)} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={(e) => scrollToHash(e, "#contact")}
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 bg-paper text-ink text-sm font-medium px-6 py-3.5 hover:bg-lime transition-colors duration-200"
              >
                Discuss a Project
              </a>
              <a
                href="#work"
                onClick={(e) => scrollToHash(e, "#work")}
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 border border-hair-d text-paper text-sm font-medium px-6 py-3.5 hover:border-paper transition-colors duration-200"
              >
                Explore Our Work
              </a>
            </motion.div>
          </div>

          <motion.div style={{ y: parallaxY }} className="lg:col-span-7 min-w-0">
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div
          {...fade(0.9)}
          className="mt-16 lg:mt-20 border-t border-hair-d pt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog"
        >
          <span>Custom software &amp; systems</span>
          <span className="text-right sm:text-left">Web · Mobile · Integrations</span>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-link"
            className="hidden sm:block text-right hover:text-paper transition-colors"
          >
            Direct line — WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
