import svgPaths from "./svg-hv3hdczsly";

function Flag() {
  return (
    <div className="absolute h-[14px] left-0 top-0 w-[18.667px]" data-name="flag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.667 14">
        <g id="flag">
          <path clipRule="evenodd" d={svgPaths.p15d23f61} fill="var(--fill-0, #E31D1C)" fillRule="evenodd" id="middle" />
          <path d={svgPaths.p249fff00} fill="var(--fill-0, #F7FCFF)" id="Combined Shape" />
          <rect fill="var(--fill-0, #2E42A5)" height="8.16667" id="Rectangle 82" width="10.5" x="0.000326395" />
          <path d={svgPaths.p148ef580} fill="var(--fill-0, #F7FCFF)" id="Stars" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[38.889px] shrink-0 size-[14px]">
      <div className="bg-white h-[14px] overflow-clip relative rounded-[2px] shrink-0 w-[18.667px]" data-name="Media / Flags">
        <Flag />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative size-full">
      <Frame />
    </div>
  );
}