import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

/* Nodes of the architecture schematic (viewBox 600 x 340) */
const NODES = [
  { id: "web", x: 24, y: 40, w: 150, h: 54, k: "01", t: "Web application", s: "React · Next.js" },
  { id: "mob", x: 24, y: 130, w: 150, h: 54, k: "02", t: "Mobile app", s: "iOS · Android" },
  { id: "ops", x: 24, y: 220, w: 150, h: 54, k: "03", t: "Back-office / CMS", s: "Roles · Workflows" },
  { id: "api", x: 240, y: 130, w: 130, h: 54, k: "04", t: "API layer", s: "Auth · Rules · Jobs" },
  { id: "db", x: 436, y: 40, w: 140, h: 54, k: "05", t: "Data", s: "Postgres · Cache" },
  { id: "int", x: 436, y: 130, w: 140, h: 54, k: "06", t: "Integrations", s: "Payments · ERP · WA" },
  { id: "rep", x: 436, y: 220, w: 140, h: 54, k: "07", t: "Reporting", s: "Dashboards · Exports" },
];

const EDGES = [
  "M174 67 C 207 67, 207 157, 240 157",
  "M174 157 L 240 157",
  "M174 247 C 207 247, 207 157, 240 157",
  "M370 157 C 403 157, 403 67, 436 67",
  "M370 157 L 436 157",
  "M370 157 C 403 157, 403 247, 436 247",
];

const STEPS = ["Discover", "Design", "Build", "Ship", "Support"];

const useClock = () => {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () =>
      setT(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        }).format(new Date())
      );
    f();
    const i = setInterval(f, 15000);
    return () => clearInterval(i);
  }, []);
  return t;
};

const HeroVisual = () => {
  const reduce = useReducedMotion();
  const time = useClock();

  const rise = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay: reduce ? 0 : d },
  });

  return (
    <motion.div
      {...rise(0.4)}
      className="border border-hair-d bg-card-d select-none"
      data-testid="hero-visual"
      role="img"
      aria-label="System blueprint: web, mobile and back-office apps connected through an API layer to data, integrations and reporting"
    >
      {/* Status bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-hair-d font-mono text-[9.5px] uppercase tracking-[0.18em] text-fog">
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping bg-lime opacity-60" />
            )}
            <span className="relative inline-flex h-1.5 w-1.5 bg-lime" />
          </span>
          <span className="text-paper">Open for new projects</span>
        </span>
        <span className="hidden sm:inline">System blueprint — v.01</span>
        <span className="tabular-nums" data-testid="hero-visual-clock">
          Jakarta {time}
        </span>
      </div>

      {/* Schematic */}
      <div className="relative px-3 pt-3 pb-1 sm:px-5 sm:pt-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(#3a3c38 0.8px, transparent 0.8px)",
            backgroundSize: "14px 14px",
          }}
        />
        <svg
          viewBox="0 0 600 300"
          className="relative w-full h-auto block"
          fill="none"
          fontFamily="'JetBrains Mono', monospace"
        >
          {EDGES.map((d, i) => (
            <g key={d}>
              <motion.path
                d={d}
                stroke="#4a4c48"
                strokeWidth="1"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease, delay: reduce ? 0 : 0.9 + i * 0.08 }}
              />
              {!reduce && (
                <motion.path
                  d={d}
                  stroke="#d6ff6b"
                  strokeWidth="1.2"
                  strokeDasharray="10 230"
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 240, opacity: 0 }}
                  animate={{ strokeDashoffset: 0, opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: "linear",
                    delay: 1.8 + i * 0.35,
                  }}
                />
              )}
            </g>
          ))}

          {NODES.map((n, i) => {
            const hub = n.id === "api";
            return (
              <motion.g
                key={n.id}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: reduce ? 0 : 0.6 + i * 0.07 }}
              >
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={n.h}
                  fill={hub ? "#f5f4ef" : "#1b1c1b"}
                  stroke={hub ? "#f5f4ef" : "#4a4c48"}
                />
                <text
                  x={n.x + 12}
                  y={n.y + 17}
                  fontSize="8"
                  letterSpacing="1.2"
                  fill={hub ? "#6b6d66" : "#858780"}
                >
                  {n.k}
                </text>
                <text
                  x={n.x + 12}
                  y={n.y + 34}
                  fontSize="11.5"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="500"
                  fill={hub ? "#171817" : "#f5f4ef"}
                >
                  {n.t}
                </text>
                <text
                  x={n.x + 12}
                  y={n.y + 46}
                  fontSize="8"
                  letterSpacing="0.6"
                  fill={hub ? "#6b6d66" : "#858780"}
                >
                  {n.s}
                </text>
                {hub && (
                  <rect x={n.x + n.w - 14} y={n.y + 8} width="6" height="6" fill="#d6ff6b" />
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Process strip */}
      <div
        className="grid grid-cols-5 border-t border-hair-d"
        data-testid="hero-visual-process"
      >
        {STEPS.map((s, i) => (
          <motion.div
            key={s}
            {...rise(1.1 + i * 0.06)}
            className="px-2.5 sm:px-4 py-3 border-r border-hair-d last:border-r-0"
          >
            <p className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.16em] text-fog">
              0{i + 1}
            </p>
            <p className="mt-1 text-[10.5px] sm:text-[12px] text-paper leading-tight">{s}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroVisual;
