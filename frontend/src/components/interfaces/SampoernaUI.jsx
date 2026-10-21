const SampoernaUI = () => (
  <div
    className="relative select-none"
    data-testid="project-interface-sampoerna"
    role="img"
    aria-label="Sampoerna University website — desktop display and mobile phone mockups"
  >
    <div className="rounded-[20px] bg-[#dad8d3] border border-[#b7b5af] p-[9px] pb-[10px]">
      <div className="rounded-[12px] overflow-hidden border border-[#3a3b39] bg-[#f5f4ef]">
        <img
          src="/sampoerna-desktop.webp"
          alt="Sampoerna University website — homepage with accreditation banner and program navigation"
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
    </div>
    <div
      className="mx-auto w-[15%] h-10 md:h-14 bg-[#c9c7c1] border-x border-[#b7b5af]"
      style={{ clipPath: "polygon(24% 0, 76% 0, 100% 100%, 0 100%)" }}
      aria-hidden="true"
    />
    <div
      className="mx-auto w-[24%] h-2 rounded-[3px] bg-[#cfcdc8] border border-[#b7b5af]"
      aria-hidden="true"
    />

    <div className="absolute -bottom-4 right-[2%] w-[23%] sm:w-[21%] translate-y-[35%]">
      <div className="relative rounded-[24px] bg-[#262725] border border-[#4a4c48] p-[4px] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
        <div className="rounded-[20px] overflow-hidden border border-[#141514] aspect-[9/18] bg-[#f5f4ef]">
          <img
            src="/sampoerna-mobile.webp"
            alt="Sampoerna University website — visa information page on mobile"
            className="w-full h-full object-cover object-top block"
            loading="lazy"
          />
        </div>
        <div
          className="absolute top-[7px] left-1/2 -translate-x-1/2 h-[9px] w-[40%] bg-[#262725] border border-[#4a4c48] rounded-full"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
);

export default SampoernaUI;
