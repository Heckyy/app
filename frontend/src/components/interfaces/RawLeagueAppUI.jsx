const PhoneFrame = ({ src, alt, className = "" }) => (
  <div className={`relative rounded-[22px] bg-[#262725] border border-[#4a4c48] p-[4px] ${className}`}>
    <div className="relative rounded-[18px] overflow-hidden border border-[#141514] bg-[#f5f4ef]">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>
    <div
      className="absolute top-[6px] left-1/2 -translate-x-1/2 h-[7px] w-[36%] bg-[#262725] border border-[#4a4c48] rounded-full"
      aria-hidden="true"
    />
  </div>
);

const RawLeagueAppUI = () => (
  <div
    className="flex items-center justify-center gap-4 sm:gap-8 select-none"
    data-testid="project-interface-raw-league-app"
    role="img"
    aria-label="Raw League student web app on three phones — home with match schedule, QR check-in, and check-in success screens"
  >
    <div className="w-[27%] sm:w-[24%] translate-y-[6%]">
      <PhoneFrame
        src="/raw-app-qr.webp"
        alt="Raw League web app — scan QR to check in"
      />
    </div>
    <div className="w-[40%] sm:w-[35%] z-10">
      <PhoneFrame
        src="/raw-app-home.webp"
        alt="Raw League web app — home with event registration, match schedule and points history"
      />
    </div>
    <div className="w-[27%] sm:w-[24%] translate-y-[6%]">
      <PhoneFrame
        src="/raw-app-success.webp"
        alt="Raw League web app — successful check-in screen"
      />
    </div>
  </div>
);

export default RawLeagueAppUI;
