import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How does Alpha One Studio structure project engagements?",
    a: "We work primarily on fixed-scope project milestones or dedicated engineering sprints, depending on project clarity and timeline flexibility.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes. We offer continuous modernization, security updates, feature enhancements, and service level agreements (SLAs) post-deployment.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You retain complete ownership of all code, assets, database schemas, and documentation. Everything is delivered via private Git repositories.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in React, Node.js/Python FastAPI backend systems, PostgreSQL/Redis data layers, cloud infrastructure (AWS/GCP), and modern API architectures.",
  },
  {
    q: "How do we get started with a project discussion?",
    a: "Simply submit a project inquiry through our contact form or message us directly via WhatsApp to arrange an initial technical discovery session.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHead
              tone="light"
              label="FAQ"
              title="Practical questions, straight answers."
            />
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="border-b border-hair-l">
                {FAQS.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={item.q} className="border-t border-hair-l">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        data-testid={`faq-trigger-${i}`}
                        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                      >
                        <h3
                          className={`text-[17px] font-medium tracking-tight transition-colors duration-200 ${
                            isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"
                          }`}
                        >
                          {item.q}
                        </h3>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="shrink-0 text-fog"
                        >
                          <Plus size={18} strokeWidth={1.5} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${i}`}
                            data-testid={`faq-panel-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-7 max-w-2xl text-[15px] leading-relaxed text-ink/70">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
