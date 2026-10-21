export const Logo = ({ dark = false, className = "" }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M16 5.5 27 26.5H5Z"
        fill="none"
        stroke={dark ? "#171817" : "#F5F4EF"}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="19.5" r="2.7" fill="#D6FF6B" />
    </svg>
    <span
      className={`text-[15px] font-semibold tracking-tight leading-none ${
        dark ? "text-ink" : "text-paper"
      }`}
    >
      Alpha One
      <span className={dark ? "text-fog" : "text-fog"}> Studio</span>
    </span>
  </span>
);

export default Logo;
