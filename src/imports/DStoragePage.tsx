import svgPaths from "./svg-24a5zbbcwu";
import MasterHeaderSectionNav from "./MasterHeaderSection";
import MStoragePage from "./MStoragePage";
import imgHero from "figma:asset/4d5fa78ee8e45ba30f49ba6b9e110ecd23f99c21.png";
import img01 from "figma:asset/373d8836315dbb869e63bca5851a9be69097db61.png";
import imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop from "figma:asset/7b0313324275ed35e154f80f40b37b3897ef270d.png";
import imgFrame10126045 from "figma:asset/d7628e2dae1d56b585dc40b5eea6d2e344c7ad79.png";
import imgPodsLogo from "figma:asset/92dc3e4d13f0281775a7bac82130f3aa11050644.png";

function HeadingOverline() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[592px]" data-name="Heading + Overline">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Month-to-Month flexibility</p>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#374151] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[60px]">Storage that fits your timeline.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <HeadingOverline />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[18px] w-[488px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">No contracts, adjust or cancel as your plans change.</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Right Icon">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00029 7.50042">
            <path d={svgPaths.p16cdfaf0} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] w-[488px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Estimate first. Adjust details later.</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Right Icon">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00029 7.50042">
            <path d={svgPaths.p16cdfaf0} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] w-[488px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Trusted storage for your belongings</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="St Hero CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
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
      <Frame26 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text />
      <Frame29 />
    </div>
  );
}

function Content1() {
  return <div className="flex-[1_0_0] h-[598px] min-h-px min-w-px" data-name="Content" />;
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative self-stretch shrink-0 w-[1216px] mx-auto" data-name="Container">
      <Content />
      <Content1 />
    </div>
  );
}

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
        <div className="content-stretch flex items-center justify-between pl-[104px] pr-[18px] py-[12px] relative size-full">
          <RibbonDetails />
        </div>
      </div>
    </div>
  );
}

function RibbonDetails1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0" data-name="Ribbon Details">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[9.38%_9.37%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
            <path d={svgPaths.p35840370} fill="var(--fill-0, #15803D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15803d] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[14px]">
          <span className="leading-[20px]">{`Save up to 25% with code: `}</span>
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            EPIC
          </span>
        </p>
      </div>
    </div>
  );
}

function Promo() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f0fdf4] content-stretch flex h-[32px] items-center left-1/2 px-[32px] py-[6px] rounded-bl-[12px] rounded-br-[12px] top-[64px]" data-name="Promo">
      <div aria-hidden="true" className="absolute border-[#15803d] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)]" />
      <RibbonDetails1 />
    </div>
  );
}

function Component210163PodsLogoSvg() {
  return (
    <div className="h-[28px] relative shrink-0 w-[125px]" data-name="21_0163-pods-logo.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 28">
        <g clipPath="url(#clip0_1_43008)" id="21_0163-pods-logo.svg">
          <path d={svgPaths.p204d4300} fill="var(--fill-0, #CE202F)" id="Vector" />
          <path d={svgPaths.p3120f580} fill="var(--fill-0, #CE202F)" id="Vector_2" />
          <path d="M30.8226 0H0V28H30.8226V0Z" fill="var(--fill-0, #CE202F)" id="Vector_3" />
          <path d="M125 0H94.2339V28H125V0Z" fill="var(--fill-0, #CE202F)" id="Vector_4" />
          <path d={svgPaths.p3065df00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p20136b70} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.pcd16840} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.ped82300} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p14e66d00} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_1_43008">
            <rect fill="white" height="28" width="125" />
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

function Frame() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="St Moving">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Moving</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="St Storage">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Storage</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="St Business">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Business Solutions</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <NavLogo />
      <Frame />
    </div>
  );
}

function TextCursor() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Text + Cursor">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Quick search...</p>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Left Content">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0141 13.0141">
            <path d={svgPaths.p2f7ec900} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <TextCursor />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#f3f3f7] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_1px_2px_0px_rgba(16,24,40,0.04)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <LeftContent />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[9.38%_9.37%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
            <path d={svgPaths.p842a692} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Log In</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[9.37%_9.39%_9.38%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2484 16.25">
            <path d={svgPaths.p21d9a200} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame7 />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame6 />
      <div className="bg-[#ce202f] content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="St Nav CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get a Quote
        </p>
      </div>
    </div>
  );
}

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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[38.889px] shrink-0 size-[14px]">
      <div className="bg-white h-[14px] overflow-clip relative rounded-[2px] shrink-0 w-[18.667px]" data-name="Media / Flags">
        <Flag />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative shrink-0">
      <Frame10 />
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25042 4.5005">
            <path d={svgPaths.p3c88c100} fill="var(--fill-0, #4B5563)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame5 />
      <div className="content-stretch flex flex-col items-end justify-center pl-[8px] relative shrink-0" data-name="Lang Select">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
        <Frame9 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[18px] py-[12px] right-0 rounded-[12px] top-0" data-name="Menu">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_24px_0px_rgba(16,24,40,0.05),0px_8px_24px_0px_rgba(16,24,40,0.1)]" />
      <Frame4 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[290px]" data-name="ST AI Search Field">
        <InputField />
      </div>
      <Frame3 />
    </div>
  );
}

function MenuGroupContainer() {
  return (
    <div className="h-[104px] max-w-[1200px] relative shrink-0 w-full" data-name="Menu group Container">
      <Promo />
      <Menu />
    </div>
  );
}

function MasterHeaderSection() {
  return (
    <div className="fixed left-0 top-0 w-full z-30">
      <MasterHeaderSectionNav activePage="storage" />
    </div>
  );
}

function Hero() {
  return (
    <div data-page-hero className="relative shrink-0 w-full" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 825\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(89.65 -63.4 71.024 100.43 22 825)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.45417\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-start pb-[64px] pt-[163px] px-[112px] relative size-full">
          <Container />
          <MasterHeaderSection />
        </div>
      </div>
    </div>
  );
}

function HeadingOverline1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[582px]" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#f3f3f7] text-[14px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        how it works
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] min-w-full relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        How PODS storage works at a glance.
      </p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[337px] relative rounded-[8px] shrink-0 w-[582px]" data-name="01">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img01} />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0">
      <HeadingOverline1 />
      <Component />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We deliver your container
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`A PODS container will be conveniently delivered to your chosen location, whether it's your driveway, parking lot, or any other suitable spot that works for you.`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#4b5563] h-[315px] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          01
        </p>
        <Frame12 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You load on your schedule
      </p>
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#f3f3f7] text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-0">{`Feel free to take your time. You can load at your own pace because there's absolutely no rush and no crew waiting around. `}</p>
        <p className="leading-[24px]">Enjoy the process!</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#4b5563] h-[315px] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          02
        </p>
        <Frame15 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We pick up or it stays on-site
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We can either transport your container to one of our secure PODS facilities for safekeeping, or if you prefer, it can remain right at your location. The choice is entirely yours!
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#4b5563] h-[315px] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          03
        </p>
        <Frame16 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Store month-to-month
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Store your belongings for as long as you need. Our flexible plans allow you to easily adjust your storage options when circumstances change, ensuring that you always have the perfect solution.
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#4b5563] h-[315px] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          04
        </p>
        <Frame20 />
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        05
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame108 />
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="St HIW CTA">
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

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Retrieve or redeliver anytime `}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`When you're ready, we will return your container to you, or if you prefer, we can deliver it to a new location of your choice. Just let us know what works best for you!`}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#4b5563] h-[315px] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Frame109 />
        <Frame22 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative max-w-[554px]">
      <Frame13 />
      <Frame14 />
      <Frame18 />
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-[#00324a] relative shrink-0 w-full" data-name="How it works">
      <div className="content-stretch flex gap-[64px] items-start justify-center px-[120px] py-[64px] relative size-full">
        <Frame25 />
        <Frame17 />
      </div>
    </div>
  );
}

function HeadingOverline2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[112px] items-center justify-center relative shrink-0 text-center w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why PODS
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Built around safety, trust, and reliability
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your belongings are protected in secure, climate-aware facilities across the country.
      </p>
    </div>
  );
}

function Frame49() {
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

function Frame30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame49 />
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]">Weather-resistant, steel-framed containers</p>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
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

function Frame31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame50 />
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]">Secure facilities with controlled access</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
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

function Frame34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame51 />
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]">Flexible scheduling on your timeline</p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
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

function Frame35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame52 />
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]">Dedicated support at every step</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
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

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame53 />
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]">Millions of containers delivered nationwide</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
      <Frame34 />
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame38 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function RatingContainer() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Bold',sans-serif] font-bold gap-[4px] items-baseline relative shrink-0 text-[#374151] whitespace-nowrap" data-name="Rating Container">
      <p className="leading-[40px] relative shrink-0 text-[32px] tracking-[-0.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.5
      </p>
      <p className="leading-[32px] relative shrink-0 text-[24px] tracking-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
      <RatingBarContainer />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
      <RatingBarContainer1 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
      <RatingBarContainer2 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2
      </p>
      <RatingBarContainer3 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
      <RatingBarContainer4 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#4b5563] text-[12px] w-[25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0 w-[408px]" data-name="reviewSummary">
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
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[36px]" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[248px] whitespace-nowrap" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amara Talbot
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chicago, IL
      </p>
    </div>
  );
}

function ReviewerUserHeading() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <Profile />
      <div className="flex flex-row items-center self-stretch">
        <Container1 />
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
    <div className="content-stretch flex flex-col gap-[6px] items-start py-[8px] relative shrink-0 w-[375.5px]" data-name="userReview">
      <ReviewerUserHeading />
      <Rating />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[36px]" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[248px] whitespace-nowrap" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nicole Nicholas
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        New York, NY
      </p>
    </div>
  );
}

function ReviewerUserHeading1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <Profile1 />
      <div className="flex flex-row items-center self-stretch">
        <Container2 />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
    <div className="content-stretch flex flex-col gap-[6px] items-start py-[8px] relative shrink-0 w-[375.5px]" data-name="userReview">
      <ReviewerUserHeading1 />
      <Rating1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Genuinely the best experience working with PODS for my cross country move. 10/10.
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
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[36px]" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[248px] whitespace-nowrap" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amara Talbot
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        New York, NY
      </p>
    </div>
  );
}

function ReviewerUserHeading2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <Profile2 />
      <div className="flex flex-row items-center self-stretch">
        <Container3 />
      </div>
    </div>
  );
}

function StarFilled14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star-filled">
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
    <div className="content-stretch flex flex-col gap-[6px] items-start py-[8px] relative shrink-0 w-[375.5px]" data-name="userReview">
      <ReviewerUserHeading2 />
      <Rating2 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Great experience, the product quality exceeded my expectations!
      </p>
    </div>
  );
}

function Reviews() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[83.654%] from-[rgba(255,255,255,0)] items-center relative shrink-0 to-[#f3f3f7] w-[800px]" data-name="reviews">
      <UserReview />
      <UserReview1 />
      <UserReview2 />
      <div className="absolute bg-gradient-to-r from-[64.691%] from-[rgba(255,255,255,0)] h-[132px] right-0 to-[#f3f3f7] top-0 w-[374px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[1232px]">
      <div className="flex flex-row items-center self-stretch">
        <ReviewSummary />
      </div>
      <Reviews />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] h-[28px] leading-[28px] min-w-full not-italic relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-[min-content]">What customers are saying</p>
      <Frame2 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function TransparentPricing() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Transparent Pricing">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[120px] py-[64px] relative size-full max-w-[1200px] mx-auto">
          <HeadingOverline2 />
          <Frame58 />
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function HeadingOverline3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 text-center w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Size guidance
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not sure what size you need?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Here are typical starting points. We'll recommend a size & you can always adjust.`}</p>
    </div>
  );
}

function RoomsInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 w-[181px]" data-name="Rooms Info">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Number of rooms</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Approx. 1,200 sqft</p>
      </div>
    </div>
  );
}

function ContCalcDecrement() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[7px] relative rounded-[8px] shrink-0" data-name="Cont Calc Decrement">
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

function ContCalcIncrement() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[7px] relative rounded-[8px] shrink-0" data-name="Cont Calc Increment">
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
      <ContCalcDecrement />
      <Heading1 />
      <ContCalcIncrement />
    </div>
  );
}

function RoomsSection() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[408px] relative shrink-0 w-[408px]" data-name="Rooms Section">
      <RoomsInfo />
      <RoomsControl />
    </div>
  );
}

function StContCalcLight() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="St Cont Calc Light">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18px]">Light</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Mostly boxes, no large items</p>
        </div>
      </div>
    </div>
  );
}

function StContCalcMed() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="St Cont Calc Med">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#005178] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18px]">Medium</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">A few large items</p>
        </div>
      </div>
    </div>
  );
}

function StContCalcHeavy() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="St Cont Calc Heavy">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18px]">Heavy</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Many large items</p>
        </div>
      </div>
    </div>
  );
}

function FurnishingOptions() {
  return (
    <div className="content-stretch flex gap-[8px] h-[86px] items-center max-w-[408px] relative shrink-0 w-full" data-name="Furnishing Options">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <StContCalcLight />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <StContCalcMed />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <StContCalcHeavy />
      </div>
    </div>
  );
}

function FurnishingSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Furnishing Section">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="St Cont Calc CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
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
  );
}

function LeftSection() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[408px]" data-name="Left Section">
      <ServiceSection />
    </div>
  );
}

function ContainerInfo() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container Info">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#374151] text-[24px] text-center tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Based on your needs</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ContainerInfo />
    </div>
  );
}

function Component116FtContainerSvg() {
  return (
    <div className="h-[376px] relative shrink-0 w-[504px]" data-name="1-16ft_container.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 504 376">
        <g id="1-16ft_container.svg">
          <path d={svgPaths.p1834c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3f71c380} fill="var(--fill-0, #C2C6C6)" id="Vector_2" />
          <path d={svgPaths.p2191e480} fill="var(--fill-0, #C41633)" id="Vector_3" />
          <path d={svgPaths.pba70f80} fill="var(--fill-0, #E9E9EA)" id="Vector_4" />
          <path d={svgPaths.p22bcda80} fill="var(--fill-0, #0069E5)" id="Vector_5" />
          <path d={svgPaths.p12f176e0} id="Vector_6" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.869666" />
          <path d={svgPaths.p14f53780} id="Vector_7" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.869666" />
          <path d={svgPaths.pd7eeee0} id="Vector_8" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.869666" />
          <path d={svgPaths.pef57100} id="Vector_9" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.869666" />
          <g id="Vector_10" />
          <path d={svgPaths.pd154580} fill="var(--fill-0, #222222)" id="Vector_11" />
          <path d={svgPaths.p11d29080} fill="var(--fill-0, #CE2030)" id="Vector_12" />
          <path d={svgPaths.p1e4c0000} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p1a6c3f00} fill="var(--fill-0, #222222)" id="Vector_14" />
          <path d={svgPaths.p1451d300} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p2793d300} fill="var(--fill-0, #222222)" id="Vector_16" />
          <path d={svgPaths.p36793c80} fill="var(--fill-0, #E9E9EA)" id="Vector_17" />
          <path d={svgPaths.p18239f80} id="Vector_18" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="1.73933" />
          <path d={svgPaths.p235fd000} fill="var(--fill-0, #E81D2D)" id="Vector_19" />
          <path d={svgPaths.p2e5eea00} fill="var(--fill-0, #CE2030)" id="Vector_20" />
          <path d={svgPaths.p2af3b080} fill="var(--fill-0, white)" id="Vector_21" />
        </g>
      </svg>
    </div>
  );
}

function ContainerInfo1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container Info">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#374151] text-[24px] text-center tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">16ft Container</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <ContainerInfo1 />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[14px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Based on your selections our 16ft container is the best fit for your space.*</p>
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Right Section">
      <Frame23 />
      <Component116FtContainerSvg />
      <Frame24 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex gap-[64px] h-[472px] items-center justify-center max-w-[1200px] relative shrink-0 w-full" data-name="Main Container">
      <div className="flex flex-row items-center self-stretch">
        <LeftSection />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <RightSection />
      </div>
    </div>
  );
}

function ContainerWidget() {
  return (
    <div className="bg-white h-[727px] relative shrink-0 w-full" data-name="Container Widget">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center justify-center px-[120px] py-[64px] relative size-full">
          <HeadingOverline3 />
          <MainContainer />
        </div>
      </div>
    </div>
  );
}

function HeadingOverline4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[112px] items-center justify-center relative shrink-0 text-center w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Transparent Pricing
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pricing and flexibility with no surprises
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your price depends on a few straightforward factors. Everything is month-to-month.
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[14px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[6.25%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 20.9998">
            <path d={svgPaths.p34ccd800} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame71 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Location
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
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

function Frame33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 152.75 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-18.076 21.746 -27.68 -10.221 257.14 -97.457)\\'><stop stop-color=\\'rgba(0,125,184,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(16,133,188,1)\\' offset=\\'0.057031\\'/><stop stop-color=\\'rgba(32,141,193,1)\\' offset=\\'0.11406\\'/><stop stop-color=\\'rgba(64,158,202,1)\\' offset=\\'0.22812\\'/><stop stop-color=\\'rgba(96,174,211,1)\\' offset=\\'0.34219\\'/><stop stop-color=\\'rgba(128,190,220,1)\\' offset=\\'0.45625\\'/><stop stop-color=\\'rgba(191,223,237,1)\\' offset=\\'0.68437\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.9125\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame72 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#005178] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Container size
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[14px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame73 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Duration
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#f3f3f7] content-stretch flex items-center p-[14px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[21.88%_0_12.48%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 15.7559">
            <path d={svgPaths.p1f500380} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <Frame74 />
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#4b5563] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Logistics
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame75() {
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

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative text-[#4b5563]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Container size & Quantity`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Containers range from 8’, 12’, to 16’! Choose the right containers for your needs.
      </p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 659 84\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-52.8 10.75 -6.4003 -31.436 816.5 -85.5)\\'><stop stop-color=\\'rgba(0,125,184,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(16,133,188,1)\\' offset=\\'0.036825\\'/><stop stop-color=\\'rgba(32,141,193,1)\\' offset=\\'0.073651\\'/><stop stop-color=\\'rgba(64,158,202,1)\\' offset=\\'0.1473\\'/><stop stop-color=\\'rgba(96,174,211,1)\\' offset=\\'0.22095\\'/><stop stop-color=\\'rgba(128,190,220,1)\\' offset=\\'0.2946\\'/><stop stop-color=\\'rgba(191,223,237,1)\\' offset=\\'0.4419\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.58921\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Frame75 />
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame54 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold h-[28px] leading-[28px] min-w-full relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        What affects your price
      </p>
      <Frame107 />
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="St Pricing Flex CTA">
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

function Frame110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[#374151] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Am I committing by getting an estimate?
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame110 />
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

function Frame113() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[#374151] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Is storage month-to-month
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame113 />
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

function Frame115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[#374151] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Can I change my details later?
      </p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame115 />
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

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Potter ipsum wand elf parchment wingardium. Dittany moon not scabbers cleansweep lady. Shack rock-cake weekly powder prefect’s under spider three-headed juice. And chasers cars yew world.
      </p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
        <Frame114 />
        <Frame117 />
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">What affects pricing?</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame119 />
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

function Frame121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">How do I get my stuff back?</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame121 />
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

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative z-[2]" data-name="Margin">
      <Container5 />
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

function Container6() {
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
          <Container6 />
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame111 />
      <Frame112 />
      <Frame116 />
      <Frame118 />
      <Frame120 />
      <Background />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[510px]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold h-[28px] leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Common questions
      </p>
      <Container4 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[31px] items-start justify-center relative shrink-0 w-full">
      <Frame45 />
      <Frame56 />
    </div>
  );
}

function TransparentPricing1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center justify-center px-[120px] py-[64px] relative shrink-0 w-[1440px] mx-auto" data-name="Transparent Pricing">
      <HeadingOverline4 />
      <Frame42 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You’re in control
      </p>
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full">Retrieval and access on your terms</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        No matter the distance, you’re not locked in early because plans can change.
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#007db8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn more about access
      </p>
      <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0005 12.5007">
            <path d={svgPaths.p22633f70} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeadingOverline5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Heading + Overline">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame66() {
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

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 text-[#4b5563] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Access when you need it.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Schedule a visit to a PODS location and we’ll have your container ready & waiting for you!`}</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 323 164\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-11.154 14.863 -6.8637 -26.23 323 -0.000031268)\\'><stop stop-color=\\'rgba(34,197,94,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(34,197,94,0)\\' offset=\\'0.92072\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame66 />
        <Frame67 />
      </div>
    </div>
  );
}

function Frame69() {
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

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 text-[#4b5563] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Flexible destinations
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Deliver back to you, to a new home, or keep it stored. You decide!
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 323 164\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-11.154 14.863 -6.8637 -26.23 323 -0.000031268)\\'><stop stop-color=\\'rgba(0,125,184,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,125,184,0)\\' offset=\\'0.92072\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame69 />
        <Frame70 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <Frame65 />
      <Frame68 />
    </div>
  );
}

function Frame77() {
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

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 text-[#4b5563] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Advance notice
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Give us a heads-up and we’ll coordinate redelivery within your timeframe.
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 323 344\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-12.395 17.2 -22.225 -19.382 323 -0.000084617)\\'><stop stop-color=\\'rgba(222,86,246,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(222,86,246,0)\\' offset=\\'0.92072\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame77 />
        <Frame78 />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame64 />
      <Frame76 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[662px]">
      <Frame63 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[64px] h-[344px] items-start min-h-px min-w-px relative">
      <HeadingOverline5 />
      <Frame62 />
    </div>
  );
}

function RetrievalSection() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[120px] py-[64px] relative shrink-0 w-[1440px] mx-auto" data-name="Retrieval section">
      <Frame59 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="Right Icon">
            <div className="absolute inset-[9.37%_3.13%_12.5%_3.13%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 25.0003">
                <path d={svgPaths.p8d2fa00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="Right Icon">
            <div className="absolute inset-[21.88%_0_12.48%_6.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 21.0078">
                <path d={svgPaths.p91b8b00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[64px]">
      <Frame81 />
      <div className="relative shrink-0 size-[24px]" data-name="Right Icon">
        <div className="absolute inset-[15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5008 16.5012">
            <path d={svgPaths.pf631f00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame82 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[196px] items-start relative shrink-0 w-[589px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Plans change? No problem.
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Storage can turn into a move
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        If your plans evolve, your stored container can be delivered to a new home instead of back to your current one. Storage transitions into a move — seamlessly.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`You don't need to decide now — just something to keep in mind.`}</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative">
      <Frame84 />
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="St Move to Store CTA">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
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
  );
}

function Frame79() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full max-w-[1200px] mx-auto" style={{ backgroundImage: "linear-gradient(-72.7631deg, rgb(15, 67, 117) 3.467%, rgb(0, 125, 184) 97.905%)" }}>
      <div className="flex flex-row items-center w-full max-w-[1200px] mx-auto">
        <div className="content-stretch flex gap-[64px] items-center p-[64px] relative size-full max-w-[1200px] mx-auto">
          <Frame80 />
          <Frame83 />
        </div>
      </div>
    </div>
  );
}

function StorageMove() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Storage -> move">
      <div className="content-stretch flex flex-col items-start px-[120px] py-[64px] relative size-full">
        <Frame79 />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.7)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] px-[16px] py-[4px] rounded-[8px] top-[195px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Real people. Real answers.
      </p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="overflow-clip relative rounded-[8px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)] shrink-0 size-[235px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#f3f4f6] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame10126045} />
      </div>
      <Frame87 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        No pressure, just answers
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#374151] text-[24px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Prefer talking to a human?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our storage experts can hlep with sizing, pricing, timing, or anything else.
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="St Help Call CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
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
      <div className="bg-[#fde8ea] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="St Help Chat CTA">
        <div aria-hidden="true" className="absolute border border-[#f8bbc0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
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

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[416px]">
      <Frame11 />
      <EstimatedWaitTimeContainer />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[523px]">
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center px-[120px] py-[64px] relative size-full">
          <Frame86 />
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ready to see what storage could cost?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get an estimate first. Adjust every detail later. No commitment until you’re ready.
      </p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0 w-[190px]" data-name="ST Ready to See CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
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
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[12px] text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Estimate first. Adjust details later.</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[523px]">
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[50px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.625">
            <path d={svgPaths.p6c89b00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
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

function Frame98() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame99 />
        <Frame100 />
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[50px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.625">
            <path d={svgPaths.p6c89b00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
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

function Frame101() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame102 />
        <Frame103 />
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[50px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
        <div className="absolute inset-[15.63%_12.5%_6.25%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.625">
            <path d={svgPaths.p6c89b00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
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

function Frame104() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame105 />
        <Frame106 />
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame98 />
      <Frame101 />
      <Frame104 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[419px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        What happens next
      </p>
      <Frame97 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[1200px] mx-auto">
      <Frame93 />
      <Frame96 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#003f5c] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[120px] py-[64px] relative size-full">
        <Frame92 />
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

function Container7() {
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

function List() {
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

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">About PODS</p>
      </div>
      <List />
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

function List1() {
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

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Services</p>
      </div>
      <List1 />
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

function List2() {
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

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Resources</p>
      </div>
      <List2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
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

function Container14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <LinkFollowPodsOnFacebook />
      <LinkFollowPodsOnInstagram />
      <LinkFollowPodsOnYouTube />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[116px]" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Country/Language</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">English</p>
      </div>
    </div>
  );
}

function OptionsSelectCountryLanguage() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Options - Select country/language">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[41px] py-[11px] relative size-full">
          <Container17 />
        </div>
      </div>
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

function Container18() {
  return (
    <div className="absolute bottom-[27.5%] content-stretch flex flex-col items-start left-[10px] top-[27.5%] w-[18px]" data-name="Container">
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

function Container19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16px] items-start right-[7.91px] top-[calc(50%+2px)] w-[12px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <OptionsSelectCountryLanguage />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[180px]" data-name="Container">
      <Heading3 />
      <Container16 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[64px] h-[324px] items-start max-w-[1200px] pb-[64px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container9 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[13.891px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Web Accessibility</p>
      </div>
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">California Privacy Notice</p>
      </div>
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <Link2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Manage Cookies</p>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <Button1 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[13.891px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Your Privacy Choices</p>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[21px]">Sitemap</p>
      </div>
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <Link5 />
    </div>
  );
}

function List3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="List">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center pl-[250.34px] pr-[250.36px] py-[10px] relative size-full">
          <Item16 />
          <Item17 />
          <Item18 />
          <Item19 />
          <Item20 />
          <Item21 />
          <Item22 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[41px] items-start justify-center relative shrink-0" data-name="Container">
      <List3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-center px-[404.16px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11.625px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">© 2006 - 2025 PODS Enterprises LLC. All rights reserved. PODS® is a registered trademark of PODS Enterprises LLC.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[0.48px] pr-[0.5px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] mb-0">{`*Offer available for new orders only. Customer receives 25% off local delivery and redelivery/final pick-up fees and first month's rental. Must mention promotional code at time of order. Cannot be combined with any`}</p>
        <p className="leading-[18px]">other offer. Offer void where prohibited by law. Available for a limited time, only at participating locations. Excludes special and exclusive promotions.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[68px] items-start justify-center max-w-[1200px] py-[16px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col h-[756px] items-center py-[65px] relative shrink-0 w-full" data-name="Footer">
      <Container7 />
      <Container8 />
      <Container20 />
      <Background1 />
      <Container21 />
    </div>
  );
}

export default function DStoragePage() {
  return (
    <>
      {/* Mobile-only fixed header */}
      <div className="fixed left-0 top-0 w-full z-30 lg:hidden">
        <MasterHeaderSectionNav activePage="storage" />
      </div>
      <div className="hidden lg:block w-full" data-name="D. Storage Page">
        <Hero />
        <HowItWorks />
        <TransparentPricing />
        <ContainerWidget />
        <TransparentPricing1 />
        <RetrievalSection />
        <StorageMove />
        <Frame85 />
        <Frame91 />
        <Footer />
      </div>
      <div className="block lg:hidden overflow-x-hidden w-full">
        <MStoragePage />
      </div>
    </>
  );
}