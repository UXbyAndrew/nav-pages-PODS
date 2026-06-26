import svgPaths from "./svg-58ie7jvt8z";
import imgMockupDevices from "figma:asset/7dcf2f38f9e29395d3ca692fa28c3fcb665240e9.png";
import imgMockupDevices1 from "figma:asset/f61a377803f27abb82e6486fc412d394d7829600.png";
import imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop from "figma:asset/7b0313324275ed35e154f80f40b37b3897ef270d.png";
import imgFrame10126045 from "figma:asset/d87ab8a90c78d196175bee4c37bcac66b4dd7d56.png";
import imgPodsLogo from "figma:asset/92dc3e4d13f0281775a7bac82130f3aa11050644.png";

function RibbonDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center justify-center min-h-px min-w-px relative" data-name="Ribbon Details">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[12.5%_3.13%_3.13%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8748 16.8748">
            <path d={svgPaths.p2e6fc800} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[14px]">
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save up to 25%
          </span>
          <span className="leading-[20px]">{` when you get a quote!`}</span>
        </p>
      </div>
    </div>
  );
}

function PrimaryRIbbon() {
  return (
    <div className="bg-[#083544] h-[44px] relative rounded-[12px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)] shrink-0 w-full" data-name=".Primary RIbbon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[104px] py-[12px] relative size-full">
          <RibbonDetails />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_16387)" id="List">
          <g id="Vector" />
          <path d="M3.125 10H16.875" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.125 5H16.875" id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.125 15H16.875" id="Vector_4" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_23_16387">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component210163PodsLogoSvg() {
  return (
    <div className="h-[22px] relative shrink-0 w-[99px]" data-name="21_0163-pods-logo.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 22">
        <g clipPath="url(#clip0_23_16364)" id="21_0163-pods-logo.svg">
          <path d={svgPaths.p61c1200} fill="var(--fill-0, #CE202F)" id="Vector" />
          <path d={svgPaths.p2f967400} fill="var(--fill-0, #CE202F)" id="Vector_2" />
          <path d="M24.4115 0H0V22H24.4115V0Z" fill="var(--fill-0, #CE202F)" id="Vector_3" />
          <path d="M99 0H74.6332V22H99V0Z" fill="var(--fill-0, #CE202F)" id="Vector_4" />
          <path d={svgPaths.p2cebc900} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p21fe1db0} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p4129880} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1d1a7900} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3cf0d300} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_23_16364">
            <rect fill="white" height="22" width="99" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavLogo() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center justify-center overflow-clip relative shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] shrink-0" data-name="Nav Logo">
      <Component210163PodsLogoSvg />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[22px] items-center relative shrink-0">
      <List />
      <NavLogo />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-center p-[10px] relative rounded-[4px] shrink-0" data-name="Buttons">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p362cbd80} fill="var(--fill-0, #6B7280)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-white relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Menu">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[18px] py-[14px] relative size-full">
          <Frame2 />
          <Frame1 />
          <div className="absolute left-[1058.5px] size-[9px] top-[24px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="var(--fill-0, #CE202F)" id="Ellipse 1" r="4.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#083544] content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Menu />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <PrimaryRIbbon />
      <Frame3 />
    </div>
  );
}

function MockupDevices() {
  return (
    <div className="aspect-[1184/540] relative rounded-[8px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)] shrink-0 w-full" data-name="Mockup / Devices">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f3f3f7] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[199.47%] left-[-29.04%] max-w-none top-[-79.74%] w-[136.44%]" src={imgMockupDevices} />
        </div>
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgMockupDevices1} />
      </div>
    </div>
  );
}

function HeadingOverline() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading + Overline">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#007db8] text-[12px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Month-to-Month flexibility</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[44px]">Storage that fits your timeline.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <HeadingOverline />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">No contracts, adjust or cancel as your plans change.</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[12px]" data-name="Right Icon">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00029 7.50042">
            <path d={svgPaths.p16cdfaf0} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Estimate first. Adjust details later.</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[12px]" data-name="Right Icon">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00029 7.50042">
            <path d={svgPaths.p16cdfaf0} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Trusted storage for your belongings</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#ce202f] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative size-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Plan your storage
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0005 12.5007">
                  <path d={svgPaths.p22633f70} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Text />
      <Frame22 />
    </div>
  );
}

function Frame93() {
  return (
    <div data-page-hero className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[96px] pt-[48px] px-[16px] relative size-full">
        <MockupDevices />
        <Content />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame5 />
      <Frame93 />
    </div>
  );
}

function HeadingOverline1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#f3f3f7] text-[12px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        how it works
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        How PODS storage works at a glance.
      </p>
    </div>
  );
}

function Component4() {
  return (
    <div className="aspect-[582/337] relative rounded-[8px] shrink-0 w-full" data-name="02">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/937ff976adff9c38ff9c387687bc5857ba09332d" />
      </video>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <HeadingOverline1 />
      <Component4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We deliver your container
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f7] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`A PODS container will be conveniently delivered to your chosen location, whether it's your driveway, parking lot, or any other suitable spot that works for you.`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#4b5563] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#7fbddb] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          01
        </p>
        <Frame7 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You load on your schedule
      </p>
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#f3f3f7] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">{`Feel free to take your time. You can load at your own pace because there's absolutely no rush and no crew waiting around. `}</p>
        <p className="leading-[20px]">Enjoy the process!</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#4b5563] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#7fbddb] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          02
        </p>
        <Frame10 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We pick up or it stays on-site
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f7] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We can either transport your container to one of our secure PODS facilities for safekeeping, or if you prefer, it can remain right at your location. The choice is entirely yours!
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#4b5563] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#7fbddb] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          03
        </p>
        <Frame11 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[36px] min-h-[72px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Store month-to-month
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f7] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Store your belongings for as long as you need. Our flexible plans allow you to adjust your storage options when things change, ensuring that you always have the perfect solution.
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#4b5563] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#7fbddb] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          04
        </p>
        <Frame15 />
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#7fbddb] text-[36px] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        05
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame91 />
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get a storage estimate
        </p>
        <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0005 12.5007">
              <path d={svgPaths.p22633f70} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Retrieve or redeliver anytime `}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f7] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`When you're ready, we will return your container to you, or if you prefer, we can deliver it to a new location of your choice. Just let us know what works best for you!`}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#4b5563] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[21px] items-start p-[16px] relative size-full">
        <Frame92 />
        <Frame17 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
      <Frame13 />
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-[#00324a] relative shrink-0 w-full" data-name="How it works">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] py-[48px] relative size-full">
        <Frame18 />
        <Frame12 />
      </div>
    </div>
  );
}

function HeadingOverline2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 text-center w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[12px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why PODS
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[#374151] text-[32px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Built around safety, trust, and reliability
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your belongings are protected in secure, climate-aware facilities across the country.
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7501">
            <path d={svgPaths.pf64d800} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame40 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#4b5563] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Weather-resistant, steel-framed containers
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7501">
            <path d={svgPaths.pf64d800} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Frame41 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#4b5563] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Secure facilities with controlled access
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7501">
            <path d={svgPaths.pf64d800} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame42 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#4b5563] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Flexible scheduling on your timeline
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7501">
            <path d={svgPaths.pf64d800} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame43 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-h-[40px] min-w-full relative shrink-0 text-[#4b5563] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Dedicated support at every step
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7501">
            <path d={svgPaths.pf64d800} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="min-w-[185.60000610351562px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center min-w-[inherit] p-[16px] relative size-full">
          <Frame44 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Millions of containers delivered nationwide
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame95 />
      <Frame96 />
      <Frame28 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function RatingContainer() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Bold',sans-serif] font-bold gap-[4px] items-baseline relative shrink-0 text-[#374151] whitespace-nowrap" data-name="Rating Container">
      <p className="leading-[36px] relative shrink-0 text-[28px] tracking-[-0.56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.5
      </p>
      <p className="leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        / 5.0
      </p>
    </div>
  );
}

function StarFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="star-filled">
          <path d={svgPaths.p1e4ce300} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="star-filled">
          <path d={svgPaths.p1e4ce300} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="star-filled">
          <path d={svgPaths.p1e4ce300} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="star-filled">
          <path d={svgPaths.p1e4ce300} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[8.33%_8.33%_12.42%_8.33%]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.02">
        <g id="Icon">
          <mask height="19" id="mask0_8_48437" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <path d={svgPaths.p2a2a9480} fill="var(--fill-0, #387AC0)" id="Vector" />
          </mask>
          <g mask="url(#mask0_8_48437)">
            <path d={svgPaths.p2a2a9480} fill="var(--fill-0, #DA9081)" fillOpacity="0.09" id="Vector_2" />
            <path d={svgPaths.p20d93700} fill="var(--fill-0, #FBBF24)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StarHalfFilled() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="star-half-filled">
      <Icon />
    </div>
  );
}

function Stars() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="stars">
      <StarFilled />
      <StarFilled1 />
      <StarFilled2 />
      <StarFilled3 />
      <StarHalfFilled />
    </div>
  );
}

function RatingSummary() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="ratingSummary">
      <RatingContainer />
      <Stars />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#6b7280] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        434 reviews
      </p>
    </div>
  );
}

function RatingBarContainer() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[6px] min-h-px min-w-px overflow-clip relative rounded-[28px]" data-name="Rating Bar Container">
      <div className="absolute bg-[#fbbf24] inset-[0_18%_0_0]" data-name="Rating Bar" />
    </div>
  );
}

function RatingBreakDownPercentWhoRatedScore1To() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="ratingBreakDown{-percentWhoRated,score1to5}">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
      <RatingBarContainer />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        82%
      </p>
    </div>
  );
}

function RatingBarContainer1() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[6px] min-h-px min-w-px overflow-clip relative rounded-[28px]" data-name="Rating Bar Container">
      <div className="absolute bg-[#fbbf24] inset-[0_90%_0_0]" data-name="Rating Bar" />
    </div>
  );
}

function RatingBreakDownPercentWhoRatedScore1To1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="ratingBreakDown{-percentWhoRated,score1to5}">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
      <RatingBarContainer1 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10%
      </p>
    </div>
  );
}

function RatingBarContainer2() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[6px] min-h-px min-w-px overflow-clip relative rounded-[28px]" data-name="Rating Bar Container">
      <div className="absolute bg-[#fbbf24] inset-[0_96%_0_0]" data-name="Rating Bar" />
    </div>
  );
}

function RatingBreakDownPercentWhoRatedScore1To2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="ratingBreakDown{-percentWhoRated,score1to5}">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
      <RatingBarContainer2 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4%
      </p>
    </div>
  );
}

function RatingBarContainer3() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[6px] min-h-px min-w-px overflow-clip relative rounded-[28px]" data-name="Rating Bar Container">
      <div className="absolute bg-[#fbbf24] inset-[0_99%_0_0]" data-name="Rating Bar" />
    </div>
  );
}

function RatingBreakDownPercentWhoRatedScore1To3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="ratingBreakDown{-percentWhoRated,score1to5}">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2
      </p>
      <RatingBarContainer3 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1%
      </p>
    </div>
  );
}

function RatingBarContainer4() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[6px] min-h-px min-w-px overflow-clip relative rounded-[28px]" data-name="Rating Bar Container">
      <div className="absolute bg-[#fbbf24] inset-[0_97%_0_0]" data-name="Rating Bar" />
    </div>
  );
}

function RatingBreakDownPercentWhoRatedScore1To4() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full" data-name="ratingBreakDown{-percentWhoRated,score1to5}">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
      <RatingBarContainer4 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[10px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3%
      </p>
    </div>
  );
}

function RatingBreakdownContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Rating Breakdown Container">
      <RatingBreakDownPercentWhoRatedScore1To />
      <RatingBreakDownPercentWhoRatedScore1To1 />
      <RatingBreakDownPercentWhoRatedScore1To2 />
      <RatingBreakDownPercentWhoRatedScore1To3 />
      <RatingBreakDownPercentWhoRatedScore1To4 />
    </div>
  );
}

function ReviewSummary() {
  return (
    <div className="content-stretch flex gap-[12px] h-[132px] items-center relative shrink-0 w-full" data-name="reviewSummary">
      <RatingSummary />
      <RatingBreakdownContainer />
    </div>
  );
}

function AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="A young woman with shoulder-length brown hair and a friendly smile posing against a simple backdrop.">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function Profile() {
  return (
    <div className="aspect-[36/36] h-full overflow-clip relative rounded-[999px] shrink-0" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-full items-start leading-[14px] relative shrink-0 w-[248px] whitespace-nowrap" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold overflow-hidden relative shrink-0 text-[#374151] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amara Talbot
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#4b5563] text-[10px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chicago, IL
      </p>
    </div>
  );
}

function ReviewerUserHeading() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <div className="flex flex-row items-center self-stretch">
        <Profile />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container />
      </div>
    </div>
  );
}

function StarFilled4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="rating">
      <StarFilled4 />
      <StarFilled5 />
      <StarFilled6 />
      <StarFilled7 />
      <StarFilled8 />
    </div>
  );
}

function UserReview() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[301px]" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading />
      <Rating />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#374151] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Great experience, the product quality exceeded my expectations!
      </p>
    </div>
  );
}

function AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop1() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="A young woman with shoulder-length brown hair and a friendly smile posing against a simple backdrop.">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function Profile1() {
  return (
    <div className="aspect-[36/36] h-full overflow-clip relative rounded-[999px] shrink-0" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start leading-[14px] relative shrink-0 w-[248px] whitespace-nowrap" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold overflow-hidden relative shrink-0 text-[#374151] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amara Talbot
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#4b5563] text-[10px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        New York, NY
      </p>
    </div>
  );
}

function ReviewerUserHeading1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <div className="flex flex-row items-center self-stretch">
        <Profile1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container1 />
      </div>
    </div>
  );
}

function StarFilled9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Rating1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="rating">
      <StarFilled9 />
      <StarFilled10 />
      <StarFilled11 />
      <StarFilled12 />
      <StarFilled13 />
    </div>
  );
}

function UserReview1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[301px]" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading1 />
      <Rating1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#374151] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Great experience, the product quality exceeded my expectations!
      </p>
    </div>
  );
}

function AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop2() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="A young woman with shoulder-length brown hair and a friendly smile posing against a simple backdrop.">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function Profile2() {
  return (
    <div className="aspect-[36/36] h-full overflow-clip relative rounded-[999px] shrink-0" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start leading-[14px] relative shrink-0 w-[248px] whitespace-nowrap" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold overflow-hidden relative shrink-0 text-[#374151] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amara Talbot
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#4b5563] text-[10px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        New York, NY
      </p>
    </div>
  );
}

function ReviewerUserHeading2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <div className="flex flex-row items-center self-stretch">
        <Profile2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container2 />
      </div>
    </div>
  );
}

function StarFilled14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StarFilled18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p180fccf2} fill="var(--fill-0, #FBBF24)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Rating2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="rating">
      <StarFilled14 />
      <StarFilled15 />
      <StarFilled16 />
      <StarFilled17 />
      <StarFilled18 />
    </div>
  );
}

function UserReview2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[301px]" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading2 />
      <Rating2 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#374151] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Great experience, the product quality exceeded my expectations!
      </p>
    </div>
  );
}

function Reviews() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="reviews">
      <UserReview />
      <UserReview1 />
      <UserReview2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <ReviewSummary />
      <Reviews />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold h-[28px] leading-[24px] relative shrink-0 text-[#374151] text-[18px] tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        What customers are saying
      </p>
      <Frame />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function TransparentPricing() {
  return (
    <div className="relative shrink-0 w-full" data-name="Transparent Pricing">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[16px] py-[48px] relative size-full">
          <HeadingOverline2 />
          <Frame49 />
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function HeadingOverline3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 text-center w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[12px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Size guidance
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[#374151] text-[32px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not sure what size you need?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Here are typical starting points. We'll recommend a size & you can always adjust.`}</p>
    </div>
  );
}

function RoomsInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-center leading-[0] relative shrink-0 w-[170px]" data-name="Rooms Info">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Number of rooms</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Approx. 1,200 sqft</p>
      </div>
    </div>
  );
}

function ButtonDecreaseButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button - decrease-button">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[23px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[29px]">-</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] max-h-[28.010000228881836px] relative shrink-0 text-[#005178] text-[24px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">3</p>
      </div>
    </div>
  );
}

function ButtonIncreaseButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button - increase-button">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[23px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[29px]">+</p>
      </div>
    </div>
  );
}

function RoomsControl() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Rooms Control">
      <ButtonDecreaseButton />
      <Heading1 />
      <ButtonIncreaseButton />
    </div>
  );
}

function RoomsSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Rooms Section">
      <div className="flex flex-row items-center self-stretch">
        <RoomsInfo />
      </div>
      <RoomsControl />
    </div>
  );
}

function FurnishingOption() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Light</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Mostly boxes, no large items</p>
        </div>
      </div>
    </div>
  );
}

function FurnishingOption1() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#005178] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Medium</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[14px]">A few large items</p>
        </div>
      </div>
    </div>
  );
}

function FurnishingOption2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Heavy</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[14px]">Many large items</p>
        </div>
      </div>
    </div>
  );
}

function FurnishingOptions() {
  return (
    <div className="content-stretch flex gap-[8px] h-[82px] items-center relative shrink-0 w-[343px]" data-name="Furnishing Options">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <FurnishingOption />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <FurnishingOption1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <FurnishingOption2 />
      </div>
    </div>
  );
}

function FurnishingSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Furnishing Section">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">How furnished is your space?</p>
      </div>
      <FurnishingOptions />
    </div>
  );
}

function ServiceSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Service Section">
      <RoomsSection />
      <FurnishingSection />
    </div>
  );
}

function LeftSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" data-name="Left Section">
      <HeadingOverline3 />
      <ServiceSection />
    </div>
  );
}

function Component116FtContainerSvg() {
  return (
    <div className="aspect-[375/375.8696594238281] overflow-clip relative shrink-0 w-full" data-name="1-16ft_container.svg">
      <div className="absolute inset-[22.35%_19.64%_42.71%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208.25 120.114">
          <path d={svgPaths.pd922100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.05%_19.64%_22.35%_36.76%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.545 156.784">
          <path d={svgPaths.p161f1f0} fill="var(--fill-0, #C2C6C6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.27%_61.8%_26.24%_36.76%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93182 46.375">
          <path d={svgPaths.p169e500} fill="var(--fill-0, #C41633)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.5%_63.24%_22.35%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.7046 103.648">
          <path d={svgPaths.p3afff700} fill="var(--fill-0, #E9E9EA)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.9%_65.19%_24.22%_21.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.0227 85.5114">
          <path d={svgPaths.p3de92280} fill="var(--fill-0, #0069E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.06%_65.19%_26.49%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-0.51%_-0.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4548 74.4937">
            <path d={svgPaths.p3c83a500} id="Vector" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[51.83%_65.19%_26.72%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-0.51%_-0.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4548 74.4937">
            <path d={svgPaths.p3c83a500} id="Vector" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[67.58%_65.19%_24.94%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-1.47%_-0.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4538 26.4485">
            <path d={svgPaths.p104ff00} id="Vector" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[67.35%_65.19%_25.17%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-1.47%_-0.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4538 26.4485">
            <path d={svgPaths.p104ff00} id="Vector" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.48%_63.24%_22.37%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.89%_33.12%_36.42%_49.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.8636 40.1907">
          <path d={svgPaths.p128bab00} fill="var(--fill-0, #222222)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.23%_33.14%_39.1%_49.79%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.5454 53.8523">
          <path d={svgPaths.p56c6600} fill="var(--fill-0, #CE2030)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.99%_33.6%_40.07%_50.21%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.5227 44.4744">
          <path d={svgPaths.p162af710} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.87%_37.41%_41.74%_54.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.2727 35.7159">
          <path d={svgPaths.p217dd700} fill="var(--fill-0, #222222)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.86%_33.44%_53.31%_66%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.90909 2.86364">
          <path d={svgPaths.p1e094d80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.16%_33.09%_38.94%_49.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.9432 54.6477">
          <path d={svgPaths.p167b7800} fill="var(--fill-0, #222222)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.48%_63.24%_22.37%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.7046 103.648">
          <path d={svgPaths.p344de980} fill="var(--fill-0, #E9E9EA)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.35%_19.64%]" data-name="Vector">
        <div className="absolute inset-[-0.53%_-0.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209.989 192.12">
            <path d={svgPaths.p1eb5d700} id="Vector" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="1.73933" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[51.41%_63.24%_26.24%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.7046 76.8409">
          <path d={svgPaths.p5087980} fill="var(--fill-0, #E81D2D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.94%_69.71%_44.84%_26.51%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9659 11.0568">
          <path d={svgPaths.p1ff87900} fill="var(--fill-0, #CE2030)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.15%_69.78%_45.1%_26.6%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4091 9.44603">
          <path d={svgPaths.p106d1800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ContainerInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[375px] relative shrink-0 w-full" data-name="Container Info">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#083544] text-[24px] text-center tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">16ft Container</p>
      </div>
      <div className="bg-[#ce202f] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative size-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              See my move
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0005 12.5007">
                  <path d={svgPaths.p22633f70} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div className="content-stretch flex flex-col gap-[68px] items-center justify-center relative shrink-0 w-full" data-name="Right Section">
      <Component116FtContainerSvg />
      <ContainerInfo />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full" data-name="Main Container">
      <LeftSection />
      <RightSection />
    </div>
  );
}

function ContainerWidget() {
  return (
    <div className="h-[1040.795px] relative shrink-0 w-full" data-name="Container Widget">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[48px] relative size-full">
          <MainContainer />
        </div>
      </div>
    </div>
  );
}

function HeadingOverline4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 text-center w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Transparent Pricing
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[#374151] text-[32px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pricing and flexibility with no surprises
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your price depends on a few straightforward factors. Everything is month-to-month.
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Right Icon">
        <div className="absolute inset-[6.25%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13.9999">
            <path d={svgPaths.p1b7bab10} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="flex-[1_0_0] h-[94px] min-h-px min-w-px relative rounded-[8px]" data-name="1">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[8px] relative size-full">
          <Frame62 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] min-w-full relative shrink-0 text-[#6b7280] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Location
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Right Icon">
        <div className="absolute inset-[6.25%_6.24%_6.25%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0009 13.9997">
            <path d={svgPaths.pfd95580} fill="var(--fill-0, #005178)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="flex-[1_0_0] h-[94px] min-h-px min-w-px relative rounded-[8px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 79.75 94\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-9.4375 17.034 -14.452 -8.0068 134.25 -76.341)\\'><stop stop-color=\\'rgba(0,125,184,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(16,133,188,1)\\' offset=\\'0.057031\\'/><stop stop-color=\\'rgba(32,141,193,1)\\' offset=\\'0.11406\\'/><stop stop-color=\\'rgba(64,158,202,1)\\' offset=\\'0.22812\\'/><stop stop-color=\\'rgba(96,174,211,1)\\' offset=\\'0.34219\\'/><stop stop-color=\\'rgba(128,190,220,1)\\' offset=\\'0.45625\\'/><stop stop-color=\\'rgba(191,223,237,1)\\' offset=\\'0.68437\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.9125\\'/></radialGradient></defs></svg>')" }} data-name="2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[8px] relative size-full">
          <Frame63 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] min-w-full relative shrink-0 text-[#005178] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Container size
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Right Icon">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2d8df900} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="flex-[1_0_0] h-[94px] min-h-px min-w-px relative rounded-[8px]" data-name="3">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[8px] relative size-full">
          <Frame64 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] min-w-full relative shrink-0 text-[#6b7280] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Duration
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Right Icon">
        <div className="absolute inset-[21.88%_0_12.48%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.5039">
            <path d={svgPaths.p27655280} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="flex-[1_0_0] h-[94px] min-h-px min-w-px relative rounded-[8px]" data-name="4">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[8px] relative size-full">
          <Frame65 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] min-w-full relative shrink-0 text-[#6b7280] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Logistics
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[14px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0014 20.9995">
            <path d={svgPaths.p81e5700} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[20px] min-h-px min-w-px relative text-[#4b5563]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Container size & Quantity`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Containers range from 8’, 12’, to 16’! Choose the right containers for your needs.
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 343 96\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-28.6 20.584 -18.219 -25.314 457.5 -109.84)\\'><stop stop-color=\\'rgba(0,125,184,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(16,133,188,1)\\' offset=\\'0.052079\\'/><stop stop-color=\\'rgba(32,141,193,1)\\' offset=\\'0.10416\\'/><stop stop-color=\\'rgba(64,158,202,1)\\' offset=\\'0.20832\\'/><stop stop-color=\\'rgba(96,174,211,1)\\' offset=\\'0.31248\\'/><stop stop-color=\\'rgba(128,190,220,1)\\' offset=\\'0.41664\\'/><stop stop-color=\\'rgba(191,223,237,1)\\' offset=\\'0.62495\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.83327\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Frame66 />
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold h-[28px] leading-[24px] relative shrink-0 text-[#374151] text-[18px] tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        What affects your price
      </p>
      <Frame90 />
      <div className="bg-[#ce202f] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative size-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Get a storage estimate
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0005 12.5007">
                  <path d={svgPaths.p22633f70} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[#374151] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Am I committing by getting an estimate?
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame98 />
          <div className="relative shrink-0 size-[16px]" data-name="Icon">
            <div className="absolute inset-[34.38%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 6.00067">
                <path d={svgPaths.p10c93a80} fill="var(--fill-0, #374151)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[#374151] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Is storage month-to-month
      </p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame101 />
          <div className="relative shrink-0 size-[16px]" data-name="Icon">
            <div className="absolute inset-[34.38%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 6.00067">
                <path d={svgPaths.p10c93a80} fill="var(--fill-0, #374151)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[#374151] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Can I change my details later?
      </p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame103 />
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[28.13%_15.62%_34.37%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0007 6.00079">
            <path d={svgPaths.p25546bb0} fill="var(--fill-0, #374151)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Potter ipsum wand elf parchment wingardium. Dittany moon not scabbers cleansweep lady. Shack rock-cake weekly powder prefect’s under spider three-headed juice. And chasers cars yew world.
      </p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
        <Frame102 />
        <Frame105 />
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">What affects pricing?</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame107 />
          <div className="relative shrink-0 size-[16px]" data-name="Icon">
            <div className="absolute inset-[34.38%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 6.00067">
                <path d={svgPaths.p10c93a80} fill="var(--fill-0, #374151)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">How do I get my stuff back?</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame109 />
          <div className="relative shrink-0 size-[16px]" data-name="Icon">
            <div className="absolute inset-[34.38%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 6.00067">
                <path d={svgPaths.p10c93a80} fill="var(--fill-0, #374151)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-full">
          <p className="leading-[20px]">Are there any hidden fees?</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative z-[2]" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Plus">
          <path d={svgPaths.p29792800} fill="var(--fill-0, #374151)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px] z-[1]" data-name="Container">
      <Plus />
    </div>
  );
}

function Button() {
  return (
    <div className="min-h-[48px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-between min-h-[inherit] pr-[20px] relative size-full">
          <Margin />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame99 />
      <Frame100 />
      <Frame104 />
      <Frame106 />
      <Frame108 />
      <Background />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold h-[28px] leading-[24px] relative shrink-0 text-[#374151] text-[18px] tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Common questions
      </p>
      <Container3 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-center relative shrink-0 w-full">
      <Frame35 />
      <Frame33 />
    </div>
  );
}

function TransparentPricing1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Transparent Pricing">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[16px] py-[96px] relative size-full">
          <HeadingOverline4 />
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[12px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You’re in control
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[#374151] text-[32px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Retrieval and access on your terms
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        No matter the distance, you’re not locked in early because plans can change.
      </p>
    </div>
  );
}

function HeadingOverline5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Heading + Overline">
      <Frame38 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7501">
            <path d={svgPaths.pf64d800} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 text-[#4b5563] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Access when you need it.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Schedule a visit to a PODS location and we’ll have your container ready & waiting for you!`}</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 343 160\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-11.844 14.5 -7.2887 -25.59 343 -0.000030506)\\'><stop stop-color=\\'rgba(34,197,94,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(34,197,94,0)\\' offset=\\'0.92072\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame47 />
        <Frame50 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[13.25%_12.5%_13.26%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.6377">
            <path d={svgPaths.p3f524200} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 text-[#4b5563] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Flexible destinations
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Deliver back to you, to a new home, or keep it stored. You decide!
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 343 160\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-11.844 14.5 -7.2887 -25.59 343 -0.000030506)\\'><stop stop-color=\\'rgba(0,125,184,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,125,184,0)\\' offset=\\'0.92072\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame52 />
        <Frame53 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame46 />
      <Frame51 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[13.25%_12.5%_13.26%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.6377">
            <path d={svgPaths.p3f524200} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 text-[#4b5563] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Advance notice
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Give us a heads-up and we’ll coordinate redelivery within your timeframe.
      </p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 343 160\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-11.844 14.5 -7.2887 -25.59 343 -0.000030506)\\'><stop stop-color=\\'rgba(222,86,246,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(222,86,246,0)\\' offset=\\'0.92072\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame55 />
        <Frame56 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame45 />
      <Frame54 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <HeadingOverline5 />
      <Frame37 />
    </div>
  );
}

function RetrievalSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Retrieval section">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[48px] relative size-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center p-[16px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[32px]" data-name="Right Icon">
        <div className="absolute inset-[9.37%_3.13%_12.5%_3.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 25.0003">
            <path d={svgPaths.p8d2fa00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center p-[16px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[32px]" data-name="Right Icon">
        <div className="absolute inset-[21.88%_0_12.48%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 21.0078">
            <path d={svgPaths.p91b8b00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
      <Frame59 />
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_15.62%_15.62%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5012 16.5008">
            <path d={svgPaths.p14ff7a70} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame60 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[12px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Plans change? No problem.
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[32px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Storage can turn into a move
      </p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-white w-full">
      <Frame97 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        If your plans evolve, your stored container can be delivered to a new home instead of back to your current one. Storage transitions into a move — seamlessly.
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame67 />
      <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative size-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Explore moving options
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0005 12.5007">
                  <path d={svgPaths.p22633f70} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-85.0948deg, rgb(15, 67, 117) 3.467%, rgb(0, 125, 184) 97.905%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[16px] py-[32px] relative size-full">
          <Frame58 />
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function StorageMove() {
  return (
    <div className="relative shrink-0 w-full" data-name="Storage -> move">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[48px] relative size-full">
        <Frame57 />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] px-[16px] py-[4px] rounded-[8px] top-[195px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Real people. Real answers.
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="overflow-clip relative rounded-[8px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)] shrink-0 size-[235px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f3f4f6] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame10126045} />
      </div>
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[12px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        No pressure, just answers
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Prefer talking to a human?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our storage experts can hlep with sizing, pricing, timing, or anything else.
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#ce202f] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative size-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Talk to a storage expert
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
              <div className="absolute inset-[9.38%_9.38%_12.5%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6249 15.6248">
                  <path d={svgPaths.p2a759680} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fde8ea] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#f8bbc0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative size-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#ce202f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Chat with us
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
              <div className="absolute inset-[9.39%_9.37%_9.37%_9.38%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.2484">
                  <path d={svgPaths.p6ac040} fill="var(--fill-0, #CE202F)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EstimatedWaitTimeContainer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center justify-center relative shrink-0" data-name="Estimated Wait Time Container">
      <div className="relative shrink-0 size-[16px]" data-name="Indicator">
        <div className="absolute left-0 size-[16px] top-0" data-name="Pulse me">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #BFDEED)" id="Pulse me" r="8" />
          </svg>
        </div>
        <div className="absolute left-[3.2px] size-[9.6px] top-[3.2px]" data-name="Base">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
            <circle cx="4.8" cy="4.8" fill="var(--fill-0, #007DB8)" id="Base" r="4.8" />
          </svg>
        </div>
      </div>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#374151] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[14px] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Estimated call wait time:
        </span>
        <span className="leading-[14px] text-[#4b5563] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] text-[#4b5563] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          less than 2 minutes
        </span>
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <EstimatedWaitTimeContainer />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame72 />
      <Frame73 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[96px] pt-[48px] px-[16px] relative size-full">
          <Frame69 />
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[32px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ready to see what storage could cost?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get an estimate first. Adjust every detail later. No commitment until you’re ready.
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#ce202f] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="button-main">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative size-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Get a quote
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0005 12.5007">
                  <path d={svgPaths.p22633f70} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Estimate first. Adjust details later.</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[50px] shrink-0">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
          <div className="absolute inset-[6.25%_15.63%_9.37%_15.63%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 16.8749">
              <path d={svgPaths.p39b81b00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[20px] min-h-px min-w-px relative text-white">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Step 1
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Answer a few quick questions about your storage needs
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame82 />
        <Frame83 />
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[50px] shrink-0">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
          <div className="absolute inset-[15.63%_9.24%_15.63%_9.38%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.278 13.75">
              <path d={svgPaths.p200b5900} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[20px] min-h-px min-w-px relative text-white">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Step 2
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        See an estimated price range based on your details.
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame85 />
        <Frame86 />
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[50px] shrink-0">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.37%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p35840370} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[20px] min-h-px min-w-px relative text-white">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Step 3
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose your next steps, adjust, confirm, or save for later.
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame88 />
        <Frame89 />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame81 />
      <Frame84 />
      <Frame87 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[12px] text-white tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        What happens next
      </p>
      <Frame80 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame76 />
      <Frame79 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#003f5c] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[48px] relative size-full">
        <Frame75 />
      </div>
    </div>
  );
}

function PodsLogo() {
  return (
    <div className="h-[111px] max-w-[300px] relative shrink-0 w-[300px]" data-name="PODS logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPodsLogo} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-[64px] relative shrink-0" data-name="Container">
      <PodsLogo />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">How PODS Works</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Careers</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Contact Us</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">About Us</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">PODS Containers</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[116px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-px" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">About PODS</p>
      </div>
      <List1 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Moving</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Storage</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Financing</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Car Shipping</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">{`Packing & Loading Assistance`}</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Military Moves</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[192px]" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-px" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Services</p>
      </div>
      <List2 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">FAQs</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Moving Costs</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Storage Costs</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Locations</p>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">What To Expect When Moving</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[194px]" data-name="List">
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-px" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Resources</p>
      </div>
      <List3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Follow us</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.pf708700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkFollowPodsOnFacebook() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Link - Follow PODS on Facebook">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p25186a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkFollowPodsOnInstagram() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Link - Follow PODS on Instagram">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p39105d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkFollowPodsOnYouTube() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Link - Follow PODS on YouTube">
      <Svg2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <LinkFollowPodsOnFacebook />
      <LinkFollowPodsOnInstagram />
      <LinkFollowPodsOnYouTube />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container12 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Country/Language</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">English</p>
      </div>
    </div>
  );
}

function OptionsSelectCountryLanguage() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center left-0 max-w-[250px] px-[41px] py-[11px] right-[65.61%] rounded-[8px] top-1/2" data-name="Options - Select country/language">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Container15 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p2bce7340} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bottom-[27.5%] content-stretch flex flex-col items-start left-[10px] top-[27.5%]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3cfe5200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[26px] items-start left-[139.5px] pt-[10px] top-[3px] w-[12px]" data-name="Margin">
      <Svg4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <OptionsSelectCountryLanguage />
      <Container16 />
      <Margin1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container14 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#007db8] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[20px] relative size-full">
          <Container7 />
          <Container11 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[13.891px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Web Accessibility</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">California Privacy Notice</p>
      </div>
    </div>
  );
}

function ItemButton() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Item → Button">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Manage Cookies</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[13.891px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Your Privacy Choices</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Sitemap</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="h-full relative shrink-0" data-name="List">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pl-[20px] pr-[188px] py-[20px] relative size-full">
          <ItemLink />
          <ItemLink1 />
          <ItemLink2 />
          <ItemButton />
          <ItemLink3 />
          <ItemLink4 />
          <ItemLink5 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[259px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <List4 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#007db8] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[16px] pl-[7.5px] pr-[7.52px] pt-[15px] relative size-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[9.688px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[15px]">© 2006 - 2025 PODS Enterprises LLC. All rights reserved. PODS® is a registered trademark of PODS Enterprises LLC.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">{`*Offer available for new orders only. Customer receives 25% off local delivery and redelivery/final pick-up fees and first month's rental. Must mention promotional code at time of order. Cannot be combined with any other offer. Offer void where prohibited by law. Available for a limited time, only at participating locations. Excludes special and exclusive promotions.`}</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[16px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col h-[1819px] items-center px-[16px] py-[48px] relative shrink-0 w-[375px]" data-name="Footer">
      <Container6 />
      <Background1 />
      <Container17 />
      <Background2 />
      <Container18 />
    </div>
  );
}

export default function MStoragePage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="M. Storage Page">
      <Frame94 />
      <HowItWorks />
      <TransparentPricing />
      <ContainerWidget />
      <TransparentPricing1 />
      <RetrievalSection />
      <StorageMove />
      <Frame68 />
      <Frame74 />
      <Footer />
    </div>
  );
}