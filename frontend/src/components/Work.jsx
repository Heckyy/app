import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import RawLeagueUI from "./interfaces/RawLeagueUI";
import VeloxFleetUI from "./interfaces/VeloxFleetUI";
import StrataToursUI from "./interfaces/StrataToursUI";
import HavenUI from "./interfaces/HavenUI";
import GastroFlowUI from "./interfaces/GastroFlowUI";
import NexusUI from "./interfaces/NexusUI";
import AuraUI from "./interfaces/AuraUI";

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "booking", label: "Booking & Rental" },
  { id: "ops", label: "Operations Platforms" },
  { id: "hospitality", label: "E-Commerce & Hospitality" },
];

const PROJECTS = [
  {
    id: "raw-league",
    index: "01",
    title: "Raw League CMS",
    category: "Content management system",
    filter: "ops",
    badge: "Production Project",
    badgeChip: "border-lime/50 text-lime",
    layout: { text: "lg:order-1 lg:col-span-5", visual: "lg:order-2 lg:col-span-7" },
    problem:
      "Banners, announcements, and community content on the Raw League frontend needed a developer for every update — slowing campaigns down.",
    solution:
      "A focused operations CMS: the Announcement Hub controls banners per position with instant mobile preview, while hub setup, activity, redeem points, feedback, and score management live in one admin panel.",
    features: ["Announcement Hub — banners by position", "Image upload with live mobile preview", "Hub, activity & redeem-points management", "Feedback, team & score administration"],
    direction:
      "The admin side is deliberately plain — clear forms and a live preview — so the Raw League team can publish without a developer in the loop.",
    UI: RawLeagueUI,
  },
  {
    id: "velox-fleet",
    index: "01",
    title: "Velox Fleet OS",
    category: "Car rental management & booking platform",
    filter: "booking",
    layout: { text: "lg:order-1 lg:col-span-5", visual: "lg:order-2 lg:col-span-7" },
    problem:
      "Rental operators juggle reservation logs in spreadsheets, phone bookings, and paper check-in sheets. Availability across branches is invisible until a customer is already standing at the counter.",
    solution:
      "An integrated fleet control center: a live availability calendar, automated contract generation at check-in and check-out, and maintenance scheduling tied to actual vehicle usage.",
    features: ["Live fleet availability & reservations", "Counter check-in / check-out workflow", "Maintenance & damage logging", "Branch and staff role management"],
    direction:
      "A dispatch-first layout — availability, contracts and inspections on one screen, because counter staff live in this tool all day.",
    UI: VeloxFleetUI,
  },
  {
    id: "strata-tours",
    index: "03",
    title: "Strata Expedition",
    category: "Tour & travel booking platform",
    filter: "booking",
    layout: { text: "lg:order-2 lg:col-span-5", visual: "lg:order-1 lg:col-span-7" },
    problem:
      "Small-group expedition operators lose bookings to slow, multi-step quote requests. Itineraries live in documents, seat counts in inboxes, guide schedules in someone's head.",
    solution:
      "A booking interface built around the departure: day-by-day itinerary assembly, live seat availability per departure, and a guide scheduling matrix the operations team can trust.",
    features: ["Modular day-by-day itinerary builder", "Per-departure seat & pricing control", "Guide scheduling matrix", "Waitlist handling for full departures"],
    direction:
      "Editorial pacing for a high-consideration purchase — the itinerary is the primary object, not a PDF attachment.",
    UI: StrataToursUI,
  },
  {
    id: "haven-property",
    index: "04",
    title: "Haven Property Hub",
    category: "Property listing & management platform",
    filter: "ops",
    layout: { text: "lg:col-span-12", visual: "lg:col-span-12" },
    problem:
      "Property managers run tenant communication, maintenance requests and rent ledgers through disconnected channels. Nothing reconciles, so small issues quietly become arrears.",
    solution:
      "A consolidated tenant and asset manager: listings with live occupancy, automated work-order ticketing, and a rent ledger that stays aligned with payments.",
    features: ["Listing & occupancy management", "Automated work-order ticketing", "Tenant ledger & payment tracking", "Portfolio-level reporting"],
    direction:
      "Ledger discipline — money and maintenance surfaced together, so nothing hides in an inbox.",
    UI: HavenUI,
  },
  {
    id: "gastro-flow",
    index: "05",
    title: "GastroFlow Kitchen",
    category: "Restaurant ordering & operations platform",
    filter: "hospitality",
    layout: { text: "lg:order-2 lg:col-span-6", visual: "lg:order-1 lg:col-span-6" },
    problem:
      "Multi-location dining groups hit a wall at the pass: ticket bottlenecks, ingredient stockouts mid-service, and no shared view of table turnover between floor and kitchen.",
    solution:
      "A high-speed kitchen display system synchronized with floor management and digital ordering — every ticket, table and 86'd item on one live board.",
    features: ["Real-time kitchen display tickets", "Floor & table status view", "Ingredient stock-level alerts", "Item velocity reporting"],
    direction:
      "Built for speed and glare — oversized type, high contrast, zero ambiguous states during service.",
    UI: GastroFlowUI,
  },
  {
    id: "nexus-inventory",
    index: "06",
    title: "Nexus Supply Chain",
    category: "Inventory & sales management system",
    filter: "ops",
    layout: { text: "lg:order-1 lg:col-span-5", visual: "lg:order-2 lg:col-span-7" },
    problem:
      "Wholesale distributors stock out of best-sellers while slow SKUs pile up. Purchase orders are re-typed by hand and margin only becomes visible at month end.",
    solution:
      "An inventory engine tracking SKU levels across warehouses with automated reorder triggers, sales analytics, and margin visibility at the line-item level.",
    features: ["Multi-warehouse SKU tracking", "Automated purchase-order drafts", "Reorder-point configuration", "Margin & sales analytics"],
    direction:
      "Density is the feature — buyers scan hundreds of SKUs, so hierarchy and filters do the heavy lifting.",
    UI: NexusUI,
  },
  {
    id: "aura-loyalty",
    index: "07",
    title: "Aura Privé",
    category: "Customer loyalty & membership platform",
    filter: "hospitality",
    layout: { text: "lg:order-2 lg:col-span-5", visual: "lg:order-1 lg:col-span-7" },
    problem:
      "Premium brands retain their best customers with generic point plugins. Tiers are opaque, benefits go unused, and the brand never knows which privileges actually matter.",
    solution:
      "A bespoke membership portal: tier progression rules the brand controls, a digital privilege card, curated perk access, and a member activity timeline.",
    features: ["Custom tier progression rules", "Digital member card & wallet", "Curated perk & event access", "Member activity timeline"],
    direction:
      "Calm, concierge-grade interface — privileges read like an invitation, not a coupon.",
    UI: AuraUI,
  },
];

const ProjectText = ({ p }) => (
  <div className={p.layout.text}>
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
      {p.index} / {p.category}
    </p>
    <h3 className="mt-4 text-2xl lg:text-[1.75rem] font-medium tracking-tight">
      {p.title}
    </h3>
    <span
      className={`inline-block mt-3 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
        p.badgeChip || "border-hair-d text-paper"
      }`}
      data-testid={`project-badge-${p.id}`}
    >
      {p.badge || "Concept Project"}
    </span>

    <dl className="mt-7 space-y-5 max-w-[46rem]">
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Problem</dt>
        <dd className="mt-1.5 text-sm leading-relaxed text-[#b9bbb2]">{p.problem}</dd>
      </div>
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Solution</dt>
        <dd className="mt-1.5 text-sm leading-relaxed text-[#b9bbb2]">{p.solution}</dd>
      </div>
    </dl>

    <ul className="mt-7 border-t border-hair-d">
      {p.features.map((f) => (
        <li
          key={f}
          className="flex items-baseline gap-3 border-b border-hair-d py-2.5 text-sm text-paper/90"
        >
          <span className="font-mono text-[10px] text-fog">+</span>
          {f}
        </li>
      ))}
    </ul>

    <p className="mt-6 font-serif italic text-[15.5px] leading-relaxed text-[#9a9c93]">
      {p.direction}
    </p>
  </div>
);

const Work = () => {
  const [filter, setFilter] = useState("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.filter === filter);

  return (
    <section id="work" className="bg-ink">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
        <SectionHead
          label="Selected Work"
          title="Real work, plus six concept studies."
          intro="Raw League is a production CMS built for real operations. The six that follow are self-initiated concept studies, designed to the same standard we hold production work to."
        />

        <Reveal className="mt-12 lg:mt-16">
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 border-b border-hair-d pb-4"
            role="tablist"
            aria-label="Filter projects"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                data-testid={`work-filter-${f.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 flex items-center gap-2 ${
                  filter === f.id ? "text-paper" : "text-fog hover:text-paper"
                }`}
              >
                {filter === f.id && (
                  <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                )}
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 lg:mt-20 space-y-24 lg:space-y-32">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                data-testid={`project-${p.id}`}
              >
                <div className={`${p.layout.visual} min-w-0`}>
                  <p.UI />
                </div>
                <ProjectText p={p} />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;
