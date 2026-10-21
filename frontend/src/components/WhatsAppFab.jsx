import { MessageCircle } from "lucide-react";
import { waLink } from "@/config";

const WhatsAppFab = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Alpha One Studio on WhatsApp"
    data-testid="floating-whatsapp-btn"
    className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-paper text-ink border border-paper px-3.5 py-3 text-sm font-medium hover:bg-lime hover:border-lime transition-colors duration-200"
  >
    <MessageCircle size={18} strokeWidth={1.5} />
    <span className="hidden sm:inline">WhatsApp</span>
  </a>
);

export default WhatsAppFab;
