const RawLeagueUI = () => (
  <div
    className="select-none"
    data-testid="project-interface-raw-league"
    role="img"
    aria-label="Raw League CMS — Announcement Hub, shown on an Apple Studio Display"
  >
    <div className="rounded-[20px] bg-[#dad8d3] border border-[#b7b5af] p-[9px] pb-[10px]">
      <div className="rounded-[12px] overflow-hidden border border-[#3a3b39] bg-[#f5f4ef]">
        <img
          src="/raw-league-cms.png"
          alt="Raw League CMS — Announcement Hub with banner positions and live mobile preview"
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
  </div>
);

export default RawLeagueUI;
