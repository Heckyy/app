export const SITE = {
  name: "Alpha One Studio",
  // ─────────────────────────────────────────────────────────────
  // WHATSAPP NUMBER — PLACEHOLDER, replace with your own.
  // Digits only, country code first, no "+", no spaces.
  // Example: "6281234567890"
  // ─────────────────────────────────────────────────────────────
  whatsappNumber: "15550192834",
  whatsappGreeting:
    "Hello Alpha One Studio, I'd like to discuss a project.",
};

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message || SITE.whatsappGreeting
  )}`;

export const NAV = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Selected Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const scrollToHash = (e, href) => {
  const el = href && document.querySelector(href);
  if (!el) return;
  if (e) e.preventDefault();
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
};
