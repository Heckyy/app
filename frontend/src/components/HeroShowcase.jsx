import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const HeroShowcase = ({ scrollYProgress }) => {
  const reduce = useReducedMotion();
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const tagY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -30]);

  const rise = (d, from = 28) => ({
    initial: reduce ? false : { opacity: 0, y: from },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease, delay: reduce ? 0 : d },
  });

  return (
    <div
      className="relative w-full aspect-[5/4] sm:aspect-[4/3] select-none"
      data-testid="hero-showcase"
      role="img"
      aria-label="Selected work: Raw League CMS on a desktop display and the Raw League student app on an iPhone"
    >
      {/* Ruled backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 border border-hair-d"
        style={{
          backgroundImage:
            "linear-gradient(to right, #262826 1px, transparent 1px), linear-gradient(to bottom, #262826 1px, transparent 1px)",
          backgroundSize: "25% 25%",
          maskImage:
            "radial-gradient(120% 90% at 70% 40%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 70% 40%, #000 55%, transparent 100%)",
        }}
      />

      {/* Index tag */}
      <motion.div
        {...rise(0.35, 10)}
        style={{ y: tagY }}
        className="absolute left-3 top-3 sm:left-4 sm:top-4 z-20 flex items-center gap-2 font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-fog"
      >
        <span className="inline-block h-1.5 w-1.5 bg-lime" />
        Selected work · 01 — 02
      </motion.div>

      {/* Desktop — Raw League CMS */}
      <motion.div
        {...rise(0.45)}
        className="absolute right-0 top-[9%] sm:top-[8%] w-[84%] z-10"
        data-testid="hero-showcase-desktop"
      >
        <div className="rounded-[14px] sm:rounded-[18px] bg-[#dad8d3] border border-[#b7b5af] p-[6px] sm:p-[8px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
          <div className="rounded-[9px] sm:rounded-[11px] overflow-hidden border border-[#3a3b39] bg-[#f5f4ef]">
            <img
              src="/raw-league-cms.png"
              alt="Raw League CMS — Announcement Hub"
              className="w-full h-auto block"
              fetchpriority="high"
            />
          </div>
        </div>
        <div
          className="mx-auto w-[14%] h-7 sm:h-10 bg-[#c9c7c1] border-x border-[#b7b5af]"
          style={{ clipPath: "polygon(24% 0, 76% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />
        <div
          className="mx-auto w-[22%] h-1.5 rounded-[3px] bg-[#cfcdc8] border border-[#b7b5af]"
          aria-hidden="true"
        />
      </motion.div>

      {/* Phone — Raw League student app */}
      <motion.div
        {...rise(0.7, 40)}
        style={{ y: phoneY }}
        className="absolute left-[2%] sm:left-[4%] bottom-0 w-[27%] sm:w-[25%] z-20"
        data-testid="hero-showcase-phone"
      >
        <div className="relative rounded-[22px] sm:rounded-[26px] bg-[#262725] border border-[#4a4c48] p-[4px] shadow-[0_40px_70px_-20px_rgba(0,0,0,0.8)]">
          <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#141514] aspect-[9/19] bg-[#f5f4ef]">
            <img
              src="/raw-app-home.webp"
              alt="Raw League student app — home"
              className="w-full h-full object-cover object-top block"
              fetchpriority="high"
            />
          </div>
          <div
            className="absolute top-[7px] left-1/2 -translate-x-1/2 h-[7px] w-[36%] bg-[#262725] border border-[#4a4c48] rounded-full"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* Caption strip */}
      <motion.div
        {...rise(0.9, 10)}
        className="absolute right-0 bottom-0 z-20 hidden sm:flex items-stretch border border-hair-d bg-ink"
        data-testid="hero-showcase-caption"
      >
        <div className="px-4 py-3 border-r border-hair-d">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-fog">01</p>
          <p className="mt-1 text-[12px] text-paper leading-tight">Raw League CMS</p>
          <p className="text-[10.5px] text-fog leading-tight">Announcement Hub</p>
        </div>
        <div className="px-4 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-fog">02</p>
          <p className="mt-1 text-[12px] text-paper leading-tight">Student App</p>
          <p className="text-[10.5px] text-fog leading-tight">Web app · QR check-in</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroShowcase;
