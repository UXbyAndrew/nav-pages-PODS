import svgPaths from "./svg-1j4z4zko98";
import imgMockupDevices from "figma:asset/2957f9aa91a8715eeb96d1c47b75e072c2c15f31.png";
import imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop from "figma:asset/7b0313324275ed35e154f80f40b37b3897ef270d.png";
import img2 from "figma:asset/8d1040b262e222663fff0fe5ff27accbc77bd70b.png";
import imgMHomepage768Portrait1 from "figma:asset/4bea61bcb7e1d228dafe3fd7bb745b6a9485e9e9.png";
import imgMockupScreen from "figma:asset/dbea0b46c992e869360fd937b9e76ee589832490.png";
import imgImage368 from "figma:asset/c70a6e97bdf4af62eefb4c4a32e8932e433a48b1.png";
import imgScreenShot20251002At114523Am1 from "figma:asset/46996678c77593a4b46faf140092406cf8dd6a44.png";
import imgPods5454201ContainerImagesDoorClosed16Ft1 from "figma:asset/d3c06fade149cafd1f42e2a7e5b7040e7967ce4d.png";
import imgAuthorImage from "figma:asset/adf4b395ffc06132311079dda4223ac641771748.png";
import imgUnsplash52H5Nfi5WiE from "figma:asset/9269481e46c91275613cfdb754b1668f0d0d2967.png";
import imgFrame10125996 from "figma:asset/390e5fec7ee4de5e3d80f8ad48cf6528daf578d3.png";
import imgPodsLogo from "figma:asset/92dc3e4d13f0281775a7bac82130f3aa11050644.png";
import MasterHeaderSectionNav from "./MasterHeaderSection";
import MMovingPage from "./MMovingPage";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeadingOverline() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full max-w-[592px]" data-name="Heading + Overline">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Moving with pods</p>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#374151] text-[32px] md:text-[48px] lg:text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">A flexible way to move on your schedule.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <HeadingOverline />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[16px] md:text-[18px] w-full max-w-[488px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.6]">Plan your move with PODS. Choose your dates later, adjust as plans change, and move at your own pace.</p>
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Text />
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="Mo Hero CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Plan your move
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

function Frame183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[32px] relative shrink-0 text-[#007db8] text-[24px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        30+
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#6b7280] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Years in business
      </p>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]">
      <p className="font-['Open_Sans:ExtraBold','Noto_Sans:Black',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#007db8] text-[0px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[32px] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          4.8
        </span>
        <span className="leading-[32px] text-[#f59e0b] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          ★
        </span>
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#6b7280] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Customer rating
      </p>
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[32px] min-w-full relative shrink-0 text-[#007db8] text-[24px] tracking-[-0.48px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        250K+
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Moves completed
      </p>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex gap-[55px] items-center relative rounded-[8px] shrink-0 w-full">
      <Frame183 />
      <Frame184 />
      <Frame185 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Frame187 />
      <Frame186 />
    </div>
  );
}

function MockupDevices() {
  return (
    <div className="-translate-x-1/2 absolute h-[319px] left-[calc(50%-3px)] rounded-bl-[24px] rounded-tl-[24px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)] top-[139px] w-[598px]" data-name="Mockup / Devices">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[24px] rounded-tl-[24px]">
        <div className="absolute bg-[#f3f3f7] inset-0 rounded-bl-[24px] rounded-tl-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-bl-[24px] rounded-tl-[24px] size-full" src={imgMockupDevices} />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] h-[300px] md:h-[400px] lg:h-[598px] min-h-px min-w-px w-full relative overflow-hidden" data-name="Content">
      <MockupDevices />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[32px] items-center relative shrink-0 w-full max-w-[1200px]" data-name="Container">
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

function Frame59() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="Mo Moving">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Moving</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="Mo Storage">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Storage</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="Mo Business">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Business Solutions</p>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <NavLogo />
      <Frame59 />
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

function Frame66() {
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

function Frame60() {
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

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame66 />
      <Frame60 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame65 />
      <div className="bg-[#ce202f] content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Mo Nav CTA">
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

function Frame137() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[38.889px] shrink-0 size-[14px]">
      <div className="bg-white h-[14px] overflow-clip relative rounded-[2px] shrink-0 w-[18.667px]" data-name="Media / Flags">
        <Flag />
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame137 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative shrink-0">
      <Frame139 />
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

function Frame64() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame62 />
      <div className="content-stretch flex flex-col items-end justify-center pl-[8px] relative shrink-0" data-name="Lang Select">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
        <Frame138 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[18px] py-[12px] right-0 rounded-[12px] top-0" data-name="Menu">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_24px_0px_rgba(16,24,40,0.05),0px_8px_24px_0px_rgba(16,24,40,0.1)]" />
      <Frame63 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[290px]" data-name="Mo AI Search Field">
        <InputField />
      </div>
      <Frame64 />
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
      <MasterHeaderSectionNav activePage="moving" />
    </div>
  );
}

function Hero() {
  return (
    <div data-page-hero className="bg-white relative shrink-0 w-full" data-name="Hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-start justify-center pb-[32px] md:pb-[64px] pt-[120px] md:pt-[163px] px-[16px] md:px-[32px] lg:px-[64px] xl:px-[112px] relative size-full">
          <Container />
          <MasterHeaderSection />
        </div>
      </div>
    </div>
  );
}

function HeadingOverline1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why PODS
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Built around safety, trust, and reliability
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your belongings are protected in secure, climate-aware facilities across the country.
      </p>
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
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[408px]" data-name="reviewSummary">
      <RatingSummary />
      <RatingBreakdownContainer />
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full">
      <HeadingOverline1 />
      <ReviewSummary />
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
    <div className="content-stretch flex flex-col h-full items-start relative min-w-0 flex-1 overflow-hidden" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amara Talbot
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        New York, NY
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
          <path d={svgPaths.p3e4cb200} fill="var(--fill-0, #FBBF24)" id="Icon" />
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
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading />
      <Rating />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I had an amazing experience with PODS! The quality of their service truly surpassed what I expected.
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
    <div className="content-stretch flex flex-col h-full items-start relative min-w-0 flex-1 overflow-hidden" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lila Prescott
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Austin, TX
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
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading1 />
      <Rating1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I had such a great time! The service from PODS totally blew me away.
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
    <div className="content-stretch flex flex-col h-full items-start relative min-w-0 flex-1 overflow-hidden" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lila Hawthorne
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Boulder, CO
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
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading2 />
      <Rating2 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        My experience was incredible! The service from PODS exceeded all my expectations!
      </p>
    </div>
  );
}

function AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop3() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="A young woman with shoulder-length brown hair and a friendly smile posing against a simple backdrop.">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function Profile3() {
  return (
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[36px]" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative min-w-0 flex-1 overflow-hidden" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lila Harrington
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Maplewood, NJ
      </p>
    </div>
  );
}

function ReviewerUserHeading3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <Profile3 />
      <div className="flex flex-row items-center self-stretch">
        <Container4 />
      </div>
    </div>
  );
}

function StarFilled19() {
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

function StarFilled20() {
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

function StarFilled21() {
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

function StarFilled22() {
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

function StarFilled23() {
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

function Rating3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="rating">
      <StarFilled19 />
      <StarFilled20 />
      <StarFilled21 />
      <StarFilled22 />
      <StarFilled23 />
    </div>
  );
}

function UserReview3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading3 />
      <Rating3 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fantastic experience! The quality of the PODS service truly surpassed my expectations!
      </p>
    </div>
  );
}

function AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop4() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="A young woman with shoulder-length brown hair and a friendly smile posing against a simple backdrop.">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function Profile4() {
  return (
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[36px]" data-name="profile">
      <AYoungWomanWithShoulderLengthBrownHairAndAFriendlySmilePosingAgainstASimpleBackdrop4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative min-w-0 flex-1 overflow-hidden" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#374151] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amara Talbot
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[14px] overflow-hidden relative shrink-0 text-[#4b5563] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        New York, NY
      </p>
    </div>
  );
}

function ReviewerUserHeading4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="reviewerUserHeading">
      <Profile4 />
      <div className="flex flex-row items-center self-stretch">
        <Container5 />
      </div>
    </div>
  );
}

function StarFilled24() {
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

function StarFilled25() {
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

function StarFilled26() {
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

function StarFilled27() {
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

function StarFilled28() {
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

function Rating4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="rating">
      <StarFilled24 />
      <StarFilled25 />
      <StarFilled26 />
      <StarFilled27 />
      <StarFilled28 />
    </div>
  );
}

function UserReview4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="userReview">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ReviewerUserHeading4 />
      <Rating4 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Great experience, the product quality exceeded my expectations!
      </p>
    </div>
  );
}

function Reviews() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[1728px]" data-name="reviews">
      <UserReview />
      <UserReview1 />
      <UserReview2 />
      <UserReview3 />
      <UserReview4 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[1299px]">
      <Reviews />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Icon Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[15.63%_34.37%_15.62%_28.12%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00067 11.0006">
              <path d={svgPaths.p271ef380} fill="var(--fill-0, #374151)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Icon Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <div className="relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[15.63%_28.12%_15.62%_34.37%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00067 11.0006">
              <path d={svgPaths.p1f520d80} fill="var(--fill-0, #374151)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
      <Frame190 />
    </div>
  );
}

function Frame171() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <style>{`
        .testimonial-slider .slick-list { margin: 0 -12px; overflow: hidden; }
        .testimonial-slider .slick-slide { padding: 0 12px; box-sizing: border-box; }
      `}</style>
      <div className="testimonial-slider w-full">
        <Slider ref={sliderRef} {...settings}>
          <div><UserReview /></div>
          <div><UserReview1 /></div>
          <div><UserReview2 /></div>
          <div><UserReview3 /></div>
          <div><UserReview4 /></div>
        </Slider>
      </div>
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer border-none hover:bg-gray-50 transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[15.63%_34.37%_15.62%_28.12%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00067 11.0006">
                  <path d={svgPaths.p271ef380} fill="var(--fill-0, #374151)" />
                </svg>
              </div>
            </div>
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer border-none hover:bg-gray-50 transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[15.63%_28.12%_15.62%_34.37%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00074 11.0006">
                  <path d={svgPaths.p30f66e00} fill="var(--fill-0, #374151)" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function TransparentPricing() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Transparent Pricing">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="w-full max-w-[1200px]">
          <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center justify-center px-[16px] md:px-[32px] lg:px-[64px] xl:px-[120px] py-[32px] md:py-[64px] relative size-full">
            <Frame189 />
            <Frame171 />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadingOverline2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#f3f3f7] text-[14px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        how it works
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] min-w-full relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our process for delivering flawless relocations
      </p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[337px] overflow-clip relative rounded-[8px] shrink-0 w-[582px]" data-name="2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[136.08%] left-[-11.74%] max-w-none top-[-18.04%] w-[144.46%]" src={img2} />
      </div>
      <div className="absolute h-[528px] left-[180px] top-[-5px] w-[542px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 528">
          <ellipse cx="271" cy="264" fill="url(#paint0_radial_8_48374)" id="Ellipse 889" opacity="0.9" rx="271" ry="264" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(271 264) rotate(90) scale(264 283.24)" gradientUnits="userSpaceOnUse" id="paint0_radial_8_48374" r="1">
              <stop offset="0.306214" stopColor="#435446" />
              <stop offset="1" stopColor="#435446" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[406px] left-[333px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)] top-[17px] w-[206px]" data-name="M. Homepage  768-portrait 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMHomepage768Portrait1} />
      </div>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative flex-1 min-w-0">
      <HeadingOverline2 />
      <Component />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We deliver your container
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start you move with confidence. We guide you through preparing a fair and transparent quote based on your requirements, so you know exactly what to expect.
      </p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-[#4b5563] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[72px] items-start p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          01
        </p>
        <Frame143 />
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Container drop-off & packing`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Find out why our customers rave about our drivers’ service and professionality when they drop off your container. No more driving trucks, pack at your pace and let us know when your finished!
      </p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-[#4b5563] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[72px] items-start p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          02
        </p>
        <Frame146 />
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Need more time?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Store your container at your place or at a secure PODS storage facility until you’re ready to go! Peace of mind and flexibility to know that when life calls for flexibility, we can adapt to your timeline.
      </p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-[#4b5563] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[72px] items-start p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          03
        </p>
        <Frame147 />
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Container delivery & Unpacking`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We’ll deliver your container right where you need it whether it is across town or across the country! Take your time and forget about the stress of rushing to return your rental gear.
      </p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-[#4b5563] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[72px] items-start p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          04
        </p>
        <Frame151 />
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[135px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[40px] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Post-move support
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#f3f3f7] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Manage your PODS experience via MyPODS, your online portal that keeps you in control of your move from start to finish...and more!
      </p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-[#4b5563] relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[72px] items-start p-[24px] relative size-full">
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[60px] relative shrink-0 text-[#7fbddb] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          05
        </p>
        <Frame153 />
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="bg-[#111827] relative shrink-0 w-full">
      <div className="max-w-[1200px] mx-auto flex gap-[34px] items-start px-[16px] py-[64px]">
        <Frame161 />
        <div className="content-stretch flex flex-col gap-[24px] items-start relative flex-1 min-w-0" data-name="Scroll">
          <Frame144 />
          <Frame145 />
          <Frame148 />
          <Frame150 />
          <Frame152 />
        </div>
      </div>
    </div>
  );
}

function HeadingOverline3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading + Overline">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#007db8] text-[14px] tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Moving a little farther?
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        We have solutions for moves of any size or distance!
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        No matter the distance, you’re not locked in early because plans can change.
      </p>
    </div>
  );
}

function MockupScreen() {
  return (
    <div className="-translate-y-1/2 absolute h-[515px] right-0 rounded-br-[24px] rounded-tr-[24px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)] top-[calc(50%+0.5px)] w-[824px]" data-name="Mockup / Screen">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-br-[24px] rounded-tr-[24px] size-full" src={imgMockupScreen} />
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] h-[556px] min-h-px min-w-px relative" data-name="Content">
      <MockupScreen />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#e5f2f8] overflow-clip relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute inset-[29.17%]" data-name="Icon">
        <div className="absolute inset-[12.5%_6.23%_15.63%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7534 14.3751">
            <path d={svgPaths.p53719a0} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Experience peace of mind whether your moving next door or cross-country.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your container. Your lock. Your timeline.
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text1 />
    </div>
  );
}

function Feature() {
  return (
    <div className="relative shrink-0 w-full" data-name="Feature">
      <div aria-hidden="true" className="absolute border-[#007db8] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[12px] relative size-full">
          <Icon1 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#e5f2f8] overflow-clip relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute inset-[29.17%]" data-name="Icon">
        <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.25">
            <path d={svgPaths.p369c2f00} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Your timeline doesn't have to match your closing date.`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pack now. Move later. Store in between. We do it all.
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text2 />
    </div>
  );
}

function Feature1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Feature">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[12px] relative size-full">
          <Icon2 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#e5f2f8] overflow-clip relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute inset-[29.17%]" data-name="Icon">
        <div className="absolute inset-[6.25%_9.33%_6.25%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2594 17.4999">
            <path d={svgPaths.p77c6300} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        One container. Three jobs. Move, store, and deliver on your schedule.
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`No juggling a truck rental, storage unit & a move-in date.`}</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text3 />
    </div>
  );
}

function Feature2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Feature">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[12px] relative size-full">
          <Icon3 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#e5f2f8] overflow-clip relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute inset-[29.17%]" data-name="Icon">
        <div className="absolute inset-[18.75%_0.01%_12.5%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9976 13.7486">
            <path d={svgPaths.p3ee22280} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Sold your house but haven't closed on the new one?`}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Store your at a secure PODS facility for as long as you need. `}</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text4 />
    </div>
  );
}

function Feature3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Feature">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[12px] relative size-full">
          <Icon4 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Feature />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Content">
      <Row />
    </div>
  );
}

function Features() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Features">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-[32px] items-start justify-center px-[16px] py-[64px] relative">
          <HeadingOverline3 />
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
            <Content2 />
            <Content3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Header Section">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[44px]">How many containers?</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">{`Tell us how much stuff you have, and we'll estimate the containers you need.`}</p>
      </div>
    </div>
  );
}

function MoContCalc() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Mo Cont Calc 50+">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18px]">Long Move</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">over 50 miles</p>
        </div>
      </div>
    </div>
  );
}

function MoContCalcUnder() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Mo Cont Calc under 50">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#005178] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18px]">Local Move</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">under 50 miles</p>
        </div>
      </div>
    </div>
  );
}

function MoContCalcStore() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Mo Cont Calc Store">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[12px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18px]">Storage</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">only</p>
        </div>
      </div>
    </div>
  );
}

function ServiceOptions() {
  return (
    <div className="content-stretch flex gap-[8px] h-[66px] items-center max-w-[408px] relative shrink-0 w-full" data-name="Service Options">
      <MoContCalc />
      <MoContCalcUnder />
      <MoContCalcStore />
    </div>
  );
}

function ServiceHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Service Header">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">What service do you need?</p>
      </div>
      <ServiceOptions />
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
    <div className="content-stretch flex items-center justify-between max-w-[408px] relative shrink-0 w-[408px]" data-name="Rooms Section">
      <RoomsInfo />
      <RoomsControl />
    </div>
  );
}

function FurnishingOption() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
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

function FurnishingOption1() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
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

function FurnishingOption2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
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
    <div className="content-stretch flex gap-[8px] items-center max-w-[408px] relative shrink-0 w-full" data-name="Furnishing Options">
      <FurnishingOption />
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
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">How furnished is your space?</p>
      </div>
      <FurnishingOptions />
    </div>
  );
}

function ServiceSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative w-full" data-name="Service Section">
      <ServiceHeader />
      <RoomsSection />
      <FurnishingSection />
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="Mo Cont Calc CTA">
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
    <div className="content-stretch flex flex-col gap-[40px] h-full items-center justify-center relative shrink-0 w-[408px]" data-name="Left Section">
      <HeaderSection />
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

function Frame154() {
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

function Frame155() {
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
      <Frame154 />
      <Component116FtContainerSvg />
      <Frame155 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between max-w-[1200px] min-h-px min-w-px relative w-full" data-name="Main Container">
      <LeftSection />
      <RightSection />
    </div>
  );
}

function ContainerWidget() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[727px] items-center justify-center max-h-[727px] px-[104px] py-[64px] relative shrink-0 w-[1440px]" data-name="Container Widget">
      <MainContainer />
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ready to see what moving could cost?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get an estimate first. Adjust every detail later. No commitment until you’re ready.
      </p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0 w-[190px]" data-name="Mo Ready to see CTA">
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

function Frame174() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[523px]">
      <Frame172 />
      <Frame173 />
    </div>
  );
}

function Frame177() {
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

function Frame168() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[20px] min-h-px min-w-px relative text-white">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Step 1
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Answer a few quick questions about your moving needs
      </p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame177 />
        <Frame168 />
      </div>
    </div>
  );
}

function Frame182() {
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

function Frame169() {
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

function Frame175() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame182 />
        <Frame169 />
      </div>
    </div>
  );
}

function Frame188() {
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

function Frame170() {
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

function Frame176() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame188 />
        <Frame170 />
      </div>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame167 />
      <Frame175 />
      <Frame176 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[419px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[1px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        What happens next
      </p>
      <Frame178 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[1200px] mx-auto">
      <Frame174 />
      <Frame179 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="bg-[#003f5c] h-[496px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[120px] py-[64px] relative size-full">
        <Frame180 />
      </div>
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="absolute left-0 size-[11.407px] top-0" data-name="magnifying-glass 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4066 11.4066">
        <g id="magnifying-glass 1">
          <path d={svgPaths.p15c8c500} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Sparkle() {
  return (
    <div className="absolute left-[228.13px] overflow-clip size-[11.407px] top-[9.7px]" data-name="sparkle 1">
      <MagnifyingGlass />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute border-[#cbcbcb] border-b-[0.57px] border-solid h-[32.509px] left-0 overflow-clip top-[0.57px] w-[250.944px]">
      <div className="-translate-y-1/2 absolute h-[12.666px] left-[30.8px] overflow-clip top-[calc(50%+0.06px)] w-[56.462px]" data-name="Pods Logo">
        <div className="absolute inset-[0_50.38%_0_25.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6967 12.6658">
            <path d={svgPaths.p12d72340} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_25.32%_0_50.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7295 12.6658">
            <path d={svgPaths.p15516e40} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_75.34%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9225 12.6658">
            <path d={svgPaths.p1673380} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0_0_75.39%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.897 12.6658">
            <path d={svgPaths.p3266ee00} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[15.24%_76.77%_12.34%_2.35%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7855 9.17242">
            <path d={svgPaths.p8196200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[14.75%_51.76%_10.26%_26.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3069 9.49715">
            <path d={svgPaths.p1962200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[15.99%_26.99%_11.65%_52.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7944 9.16526">
            <path d={svgPaths.p3767aae0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[14.66%_2.6%_10.33%_76.85%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6058 9.50086">
            <path d={svgPaths.p10478180} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4.2%_1.48%_80.62%_95.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.93795 1.92383">
            <path d={svgPaths.p16f2ce00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-[9.125px] left-[9.13px] top-1/2 w-[12.547px]" data-name="icon-menu">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5469 9.125">
          <path d={svgPaths.p3637e300} fill="var(--fill-0, #372E2C)" id="icon menu" />
        </svg>
      </div>
      <Sparkle />
      <div className="absolute inset-[calc(43.86%+0.25px)_9.09%_calc(35.09%-0.37px)_88.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84393 6.84393">
          <path d={svgPaths.p25198800} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[2.281px] items-end relative shrink-0 text-[#083544] whitespace-nowrap">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[11.407px]">Austin</p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[6.844px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        TX
      </p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64.447px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[5.703px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        35956 Morse Willow Ct
      </p>
      <Frame84 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[9.13px] top-[6.84px] w-[170.528px]">
      <Frame96 />
      <div className="relative shrink-0 size-[9.125px]" data-name="Chevron">
        <div className="absolute inset-0 overflow-clip" data-name="Icon/Outline/cheveron-right">
          <div className="absolute flex inset-[20.83%_33.33%_20.83%_37.5%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Icon">
                <div className="absolute inset-[-21.43%_-10.71%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.46371 3.80219">
                    <path d={svgPaths.p226b3380} id="Icon" stroke="var(--stroke-0, #636363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14066" />
                  </svg>
                </div>
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
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col h-[35.931px] items-start left-[46.77px] pl-[9.125px] pr-[9.696px] py-[3.422px] rounded-[7.985px] top-[151.71px] w-[188.778px]">
      <div aria-hidden="true" className="absolute border-[#c2c5c9] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[7.985px]" />
      <Frame97 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[2.281px] items-end relative shrink-0 text-[#083544] whitespace-nowrap">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[11.407px]">Tampa</p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[6.844px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        FL
      </p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64.447px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[5.703px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        34601 Green Arbor St.
      </p>
      <Frame85 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[9.13px] top-[6.84px] w-[170.528px]">
      <Frame101 />
      <div className="relative shrink-0 size-[9.125px]" data-name="Chevron">
        <div className="absolute inset-0 overflow-clip" data-name="Icon/Outline/cheveron-right">
          <div className="absolute flex inset-[20.83%_33.33%_20.83%_37.5%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Icon">
                <div className="absolute inset-[-21.43%_-10.71%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.46371 3.80219">
                    <path d={svgPaths.p226b3380} id="Icon" stroke="var(--stroke-0, #636363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14066" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col h-[35.931px] items-start left-[46.77px] pl-[9.125px] pr-[9.696px] py-[3.422px] rounded-[7.985px] top-[195.62px] w-[188.778px]">
      <div aria-hidden="true" className="absolute border-[#c2c5c9] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[7.985px]" />
      <Frame100 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[30.8px] top-[269.77px]">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] relative shrink-0 text-[#007db8] text-[10.266px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Add storage
      </p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        August
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="absolute bg-[#e8f5fc] content-stretch flex flex-col h-[31.938px] items-start left-[15.4px] pb-[2.852px] pt-[3.422px] px-[9.696px] rounded-[14.258px] top-[104.94px] w-[48.478px]">
      <div aria-hidden="true" className="absolute border-[#007db8] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame103 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        September
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[31.938px] items-start left-[71.29px] pb-[2.852px] pt-[3.422px] px-[9.696px] rounded-[14.258px] top-[104.94px] w-[61.025px]">
      <div aria-hidden="true" className="absolute border-[#bab7b7] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame106 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        October
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[31.938px] items-start left-[139.73px] pb-[2.852px] pt-[3.422px] px-[9.696px] rounded-[14.258px] top-[104.94px] w-[61.025px]">
      <div aria-hidden="true" className="absolute border-[#bab7b7] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame108 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        November
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[31.938px] items-start left-[209.31px] pb-[2.852px] pt-[3.422px] px-[9.696px] rounded-[14.258px] top-[104.94px] w-[61.025px]">
      <div aria-hidden="true" className="absolute border-[#bab7b7] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame110 />
    </div>
  );
}

function CalendarDots() {
  return (
    <div className="absolute left-[15.4px] size-[10.266px] top-[85.55px]" data-name="CalendarDots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2659 10.2659">
        <g id="CalendarDots">
          <path d={svgPaths.p2ae07180} fill="var(--fill-0, #646A6F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CalendarDots1() {
  return (
    <div className="absolute left-[17.11px] size-[10.266px] top-[250.37px]" data-name="CalendarDots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2659 10.2659">
        <g id="CalendarDots">
          <path d={svgPaths.p2d89ea80} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CalendarDots2() {
  return (
    <div className="absolute left-[17.11px] size-[10.266px] top-[270.91px]" data-name="CalendarDots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2659 10.2659">
        <g id="CalendarDots">
          <path d={svgPaths.p2cd05ae0} id="Icon" stroke="var(--stroke-0, #007DB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.737559" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute left-[23.95px] size-[11.407px] top-[163.68px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4066 11.4067">
        <g id="Group 913">
          <circle cx="5.70329" cy="5.70342" fill="var(--fill-0, white)" id="Ellipse 25" r="5.46564" stroke="var(--stroke-0, #083544)" strokeWidth="0.475273" />
          <circle cx="5.70396" cy="5.70339" fill="var(--fill-0, #083544)" id="Ellipse 27" r="3.56455" stroke="var(--stroke-0, #083544)" strokeWidth="0.475273" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return <div className="h-[14.85px] shrink-0 w-[64.351px]" />;
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col h-[36.507px] items-start justify-center relative shrink-0">
      <Frame40 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[9.9px] h-[36.507px] items-start relative shrink-0 w-[71.776px]">
      <div className="h-[43.313px] relative shrink-0 w-[71.776px]" data-name="image 368">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage368} />
      </div>
      <Frame39 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[2.475px] h-[40.22px] items-start pt-[4.95px] relative shrink-0 w-[81.677px]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.85px] relative shrink-0 text-[#083544] text-[9.9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        16-ft container
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[8.663px] relative shrink-0 text-[#636363] text-[7.425px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Up to 1,400 sq ft space
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[9.9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.9002 9.9002">
          <circle cx="4.9501" cy="4.9501" fill="var(--fill-0, #CE202F)" id="Ellipse 22" r="4.9501" />
        </svg>
      </div>
      <div className="col-1 ml-[1.8px] mt-[1.57px] overflow-clip relative row-1 size-[6.75px]" data-name="Minus">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Icon">
          <div className="absolute inset-[-0.28px_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.50009 0.562511">
              <path d="M0.281256 0.281256H4.21884" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.562511" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[13.365px] relative rounded-[1.485px] shrink-0 w-[19.8px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[12.994px] left-[7.43px] text-[#083544] text-[8.663px] top-[-0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b1b1b1] border-[0.495px] border-solid inset-0 pointer-events-none rounded-[1.485px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[11.138px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1377 11.1377">
          <circle cx="5.56886" cy="5.56886" fill="var(--fill-0, #CE202F)" id="Ellipse 21" r="5.56886" />
        </svg>
      </div>
      <div className="col-1 ml-[1.52px] mt-[1.77px] overflow-clip relative row-1 size-[8.1px]" data-name="Plus">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.40011 5.40011">
              <path d={svgPaths.p63d6e00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.675014" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4.331px] items-center relative shrink-0">
      <Group1 />
      <Frame1 />
      <Group />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col h-[40.22px] items-end justify-between relative shrink-0 w-[49.501px]">
      <Frame2 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[11.756px] h-[45.17px] items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e0dcdc] border-b-[0.619px] border-solid inset-0 pointer-events-none" />
      <Frame89 />
      <Frame90 />
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return <div className="h-[14.85px] shrink-0 w-[64.351px]" />;
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col h-[36.507px] items-start justify-center relative shrink-0">
      <Frame43 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[9.9px] h-[36.507px] items-start relative shrink-0 w-[71.776px]">
      <div className="h-[43.313px] relative shrink-0 w-[71.776px]" data-name="image 368">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage368} />
      </div>
      <Frame42 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[2.475px] h-[40.22px] items-start pt-[4.95px] relative shrink-0 w-[81.677px]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.85px] relative shrink-0 text-[#083544] text-[9.9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        8-ft container
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[8.663px] relative shrink-0 text-[#636363] text-[7.425px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Up to 800 sq ft space
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[11.756px] items-start relative shrink-0">
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Column() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4.95px] items-start left-[calc(50%-0.02px)] py-[4.95px] top-[331.93px] w-[232.655px]" data-name="Column">
      <Frame91 />
      <Frame92 />
      <div className="absolute bg-white content-stretch flex gap-[4.95px] h-[22.275px] items-center justify-center left-0 px-[9.9px] py-[4.95px] rounded-[2.443px] top-[100.24px] w-[49.501px]" data-name="button-pods">
        <div aria-hidden="true" className="absolute border-[#ce202f] border-[0.619px] border-solid inset-0 pointer-events-none rounded-[2.443px]" />
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#ce202f] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[21px] text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            A
          </span>
          <span className="leading-[7.657px] text-[5.36px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`dd `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[15.969px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#083544] text-[9.125px] whitespace-nowrap">
        <p className="leading-[19.391px]">Your containers</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Row">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636363] text-[7.985px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Our recommendation based off of your sq. footage
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15.4px] top-[299.99px] w-[214.443px]">
      <Frame7 />
      <Row1 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[6.844px] items-baseline relative shrink-0 text-right whitespace-nowrap">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[10.266px] line-through relative shrink-0 text-[#757575] text-[7.985px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $4,250
      </p>
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] relative shrink-0 text-[#1c843c] text-[10.266px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $3,598
      </p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
      <Frame78 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] relative shrink-0 text-[#8d8989] text-[10.266px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Total:
      </p>
      <Frame67 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex font-['Nunito_Sans:Bold',sans-serif] font-bold items-center justify-between leading-[13.688px] relative shrink-0 text-[11.407px] text-black w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Due today:
      </p>
      <p className="relative shrink-0 text-right" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $0.00
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[7.414px] items-start relative shrink-0 w-full">
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame70 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[10.266px] h-[27.376px] items-start relative shrink-0 w-[234.405px]">
      <div className="bg-white content-stretch flex gap-[4.563px] h-[30.227px] items-center justify-center px-[9.125px] py-[6.844px] relative rounded-[5.703px] shrink-0 w-[112.069px]" data-name="button-pods">
        <div aria-hidden="true" className="absolute border-[#9b0000] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[5.703px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[13.688px] relative shrink-0 text-[#ce202f] text-[9.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          View quote details
        </p>
      </div>
      <div className="bg-[#ce202f] content-stretch flex gap-[4.563px] h-[30.227px] items-center justify-center px-[9.125px] py-[6.844px] relative rounded-[5.703px] shrink-0 w-[112.069px]" data-name="button-pods">
        <div aria-hidden="true" className="absolute border-[#9b0000] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[5.703px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[13.688px] relative shrink-0 text-[9.13px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reserve
        </p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[10.266px] items-end relative shrink-0 w-full">
      <Frame72 />
      <Frame83 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bottom-[17.68px] content-stretch flex flex-col items-center justify-end left-[9.13px] w-[234.405px]">
      <Frame75 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6.844px] h-[120.339px] items-center left-[-1.14px] p-[9.125px] rounded-tl-[17.68px] rounded-tr-[17.68px] top-[430.03px] w-[252.655px]">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.57px] border-solid inset-0 pointer-events-none rounded-tl-[17.68px] rounded-tr-[17.68px] shadow-[0px_-2.281px_5.076px_0px_rgba(171,171,171,0.25)]" />
      <div className="h-0 relative shrink-0 w-[20.532px]">
        <div className="absolute inset-[-3.42px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5318 3.42197">
            <line id="Line 294" stroke="var(--stroke-0, #DBDCDF)" strokeLinecap="round" strokeWidth="3.42197" x1="1.71098" x2="18.8208" y1="1.71098" y2="1.71098" />
          </svg>
        </div>
      </div>
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[13.688px] relative shrink-0 text-[11.407px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your Quote
      </p>
      <Frame86 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-1.14px] top-[430.03px]">
      <Frame77 />
    </div>
  );
}

function MagnifyingGlass1() {
  return (
    <div className="absolute left-0 size-[11.407px] top-0" data-name="magnifying-glass 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4066 11.4066">
        <g id="magnifying-glass 1">
          <path d={svgPaths.p18b0a00} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Sparkle1() {
  return (
    <div className="absolute left-[228.13px] overflow-clip size-[11.407px] top-[9.7px]" data-name="sparkle 1">
      <MagnifyingGlass1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute border-[#cbcbcb] border-b-[0.57px] border-solid h-[32.509px] left-0 overflow-clip top-[0.57px] w-[250.944px]">
      <div className="-translate-y-1/2 absolute h-[12.666px] left-[30.8px] overflow-clip top-[calc(50%+0.06px)] w-[56.462px]" data-name="Pods Logo">
        <div className="absolute inset-[0_50.38%_0_25.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6967 12.6658">
            <path d={svgPaths.p12d72340} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_25.32%_0_50.36%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7295 12.6658">
            <path d={svgPaths.p15516e40} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_75.34%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9225 12.6658">
            <path d={svgPaths.p1673380} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0_0_75.39%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.897 12.6658">
            <path d={svgPaths.p3266ee00} fill="var(--fill-0, #CE202F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[15.24%_76.77%_12.34%_2.35%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7855 9.17242">
            <path d={svgPaths.p8196200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[14.75%_51.76%_10.26%_26.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3069 9.49715">
            <path d={svgPaths.p1962200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[15.99%_26.99%_11.65%_52.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7944 9.16526">
            <path d={svgPaths.p3767aae0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[14.66%_2.6%_10.33%_76.85%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6058 9.50086">
            <path d={svgPaths.p10478180} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4.2%_1.48%_80.62%_95.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.93795 1.92383">
            <path d={svgPaths.p16f2ce00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-[9.125px] left-[9.13px] top-1/2 w-[12.547px]" data-name="icon-menu">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5469 9.125">
          <path d={svgPaths.p3637e300} fill="var(--fill-0, #372E2C)" id="icon menu" />
        </svg>
      </div>
      <Sparkle1 />
      <div className="absolute inset-[calc(43.86%+0.25px)_9.09%_calc(35.09%-0.37px)_88.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84393 6.84393">
          <path d={svgPaths.p25198800} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        August
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-[#e8f5fc] content-stretch flex flex-col h-[31.938px] items-start pb-[2.852px] pt-[3.422px] px-[9.696px] relative rounded-[14.258px] shrink-0 w-[48.478px]">
      <div aria-hidden="true" className="absolute border-[#007db8] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame113 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        September
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[31.938px] items-start pb-[2.852px] pt-[3.422px] px-[9.696px] relative rounded-[14.258px] shrink-0 w-[61.025px]">
      <div aria-hidden="true" className="absolute border-[#bab7b7] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame115 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        October
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[31.938px] items-start pb-[2.852px] pt-[3.422px] px-[9.696px] relative rounded-[14.258px] shrink-0 w-[61.025px]">
      <div aria-hidden="true" className="absolute border-[#bab7b7] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame117 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[12.547px] relative shrink-0 text-[7.985px] text-black text-center w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        November
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[31.938px] items-start pb-[2.852px] pt-[3.422px] px-[9.696px] relative rounded-[14.258px] shrink-0 w-[61.025px]">
      <div aria-hidden="true" className="absolute border-[#bab7b7] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[14.258px]" />
      <Frame119 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute content-stretch flex gap-[6.34px] items-center left-[15.4px] top-[130.83px]">
      <Frame112 />
      <Frame114 />
      <Frame116 />
      <Frame118 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[30.8px] top-[295.65px]">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] relative shrink-0 text-[#007db8] text-[10.266px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Add storage
      </p>
    </div>
  );
}

function CalendarDots3() {
  return (
    <div className="absolute left-[17.11px] size-[10.266px] top-[276.26px]" data-name="CalendarDots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2659 10.2659">
        <g id="CalendarDots">
          <path d={svgPaths.pe993f40} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CalendarDots4() {
  return (
    <div className="absolute left-[17.11px] size-[10.266px] top-[296.79px]" data-name="CalendarDots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2659 10.2659">
        <g id="CalendarDots">
          <path d={svgPaths.p1a85c580} id="Icon" stroke="var(--stroke-0, #007DB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.737559" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[17.11px] top-[275.12px]">
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] left-[30.8px] text-[#007db8] text-[10.266px] top-[275.12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Add final delivery date
      </p>
      <Frame120 />
      <CalendarDots3 />
      <CalendarDots4 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[2.281px] items-end relative shrink-0 text-[#083544] whitespace-nowrap">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[11.407px]">Austin</p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[6.844px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        TX
      </p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64.447px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[5.703px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        35956 Morse Willow Ct
      </p>
      <Frame87 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[9.13px] top-[6.84px] w-[170.528px]">
      <Frame123 />
      <div className="relative shrink-0 size-[9.125px]" data-name="Chevron">
        <div className="absolute inset-0 overflow-clip" data-name="Icon/Outline/cheveron-right">
          <div className="absolute flex inset-[20.83%_33.33%_20.83%_37.5%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Icon">
                <div className="absolute inset-[-21.43%_-10.71%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.46371 3.80219">
                    <path d={svgPaths.p226b3380} id="Icon" stroke="var(--stroke-0, #636363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14066" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col h-[35.931px] items-start left-[46.77px] pl-[9.125px] pr-[9.696px] py-[3.422px] rounded-[7.985px] top-[177.59px] w-[188.778px]">
      <div aria-hidden="true" className="absolute border-[#c2c5c9] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[7.985px]" />
      <Frame122 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[2.281px] items-end relative shrink-0 text-[#083544] whitespace-nowrap">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[11.407px]">Tampa</p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[6.844px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        FL
      </p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64.447px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[5.703px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        34601 Green Arbor St.
      </p>
      <Frame88 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[9.13px] top-[6.84px] w-[170.528px]">
      <Frame126 />
      <div className="relative shrink-0 size-[9.125px]" data-name="Chevron">
        <div className="absolute inset-0 overflow-clip" data-name="Icon/Outline/cheveron-right">
          <div className="absolute flex inset-[20.83%_33.33%_20.83%_37.5%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full" data-name="Icon">
                <div className="absolute inset-[-21.43%_-10.71%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.46371 3.80219">
                    <path d={svgPaths.p226b3380} id="Icon" stroke="var(--stroke-0, #636363)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14066" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col h-[35.931px] items-start left-[46.77px] pl-[9.125px] pr-[9.696px] py-[3.422px] rounded-[7.985px] top-[221.51px] w-[188.778px]">
      <div aria-hidden="true" className="absolute border-[#c2c5c9] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[7.985px]" />
      <Frame125 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute left-[23.95px] size-[11.407px] top-[189.57px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4066 11.4066">
        <g id="Group 913">
          <circle cx="5.70328" cy="5.70333" fill="var(--fill-0, white)" id="Ellipse 25" r="5.46564" stroke="var(--stroke-0, #083544)" strokeWidth="0.475273" />
          <circle cx="5.70255" cy="5.7033" fill="var(--fill-0, #083544)" id="Ellipse 27" r="3.56455" stroke="var(--stroke-0, #083544)" strokeWidth="0.475273" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[23.95px] top-[177.59px]">
      <div className="absolute flex h-[40.493px] items-center justify-center left-[29.66px] top-[194.13px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40.493px]">
            <div className="absolute inset-[-0.37px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4933 0.371874">
                <line id="Line 258" stroke="var(--stroke-0, #083544)" strokeDasharray="0.74 0.74" strokeWidth="0.371874" x2="40.4933" y1="0.185937" y2="0.185937" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame121 />
      <Frame124 />
      <Group7 />
      <div className="absolute left-[23.95px] overflow-clip size-[11.407px] top-[233.48px]" data-name="MapPin">
        <div className="absolute inset-[6.25%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.84201 9.98064">
            <path d={svgPaths.p4d7fb80} fill="var(--fill-0, #2B2B2B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return <div className="h-[14.85px] shrink-0 w-[64.351px]" />;
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col h-[36.507px] items-start justify-center relative shrink-0">
      <Frame45 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[9.9px] h-[36.507px] items-start relative shrink-0 w-[71.776px]">
      <div className="h-[43.313px] relative shrink-0 w-[71.776px]" data-name="image 368">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage368} />
      </div>
      <Frame44 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[2.475px] h-[40.22px] items-start pt-[4.95px] relative shrink-0 w-[81.677px]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.85px] relative shrink-0 text-[#083544] text-[9.9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        16-ft container
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[8.663px] relative shrink-0 text-[#636363] text-[7.425px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Up to 1,400 sq ft space
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[9.9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.9002 9.9002">
          <circle cx="4.9501" cy="4.9501" fill="var(--fill-0, #CE202F)" id="Ellipse 22" r="4.9501" />
        </svg>
      </div>
      <div className="col-1 ml-[1.8px] mt-[1.58px] overflow-clip relative row-1 size-[6.75px]" data-name="Minus">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Icon">
          <div className="absolute inset-[-0.28px_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.50009 0.562511">
              <path d="M0.281256 0.281256H4.21884" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.562511" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[13.365px] relative rounded-[1.485px] shrink-0 w-[19.8px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[12.994px] left-[7.43px] text-[#083544] text-[8.663px] top-[-0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b1b1b1] border-[0.495px] border-solid inset-0 pointer-events-none rounded-[1.485px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[11.138px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1377 11.1377">
          <circle cx="5.56886" cy="5.56886" fill="var(--fill-0, #CE202F)" id="Ellipse 21" r="5.56886" />
        </svg>
      </div>
      <div className="col-1 ml-[1.52px] mt-[1.77px] overflow-clip relative row-1 size-[8.1px]" data-name="Plus">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.40011 5.40011">
              <path d={svgPaths.p63d6e00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.675014" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4.331px] items-center relative shrink-0">
      <Group2 />
      <Frame4 />
      <Group3 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col h-[40.22px] items-end justify-between relative shrink-0 w-[49.501px]">
      <Frame3 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[11.756px] h-[45.17px] items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e0dcdc] border-b-[0.619px] border-solid inset-0 pointer-events-none" />
      <Frame127 />
      <Frame128 />
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return <div className="h-[14.85px] shrink-0 w-[64.351px]" />;
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col h-[36.507px] items-start justify-center relative shrink-0">
      <Frame48 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[9.9px] h-[36.507px] items-start relative shrink-0 w-[71.776px]">
      <div className="h-[43.313px] relative shrink-0 w-[71.776px]" data-name="image 368">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage368} />
      </div>
      <Frame47 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[2.475px] h-[40.22px] items-start pt-[4.95px] relative shrink-0 w-[81.677px]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14.85px] relative shrink-0 text-[#083544] text-[9.9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        8-ft container
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[8.663px] relative shrink-0 text-[#636363] text-[7.425px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Up to 800 sq ft space
      </p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[11.756px] items-start relative shrink-0">
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Column1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4.95px] items-start left-[calc(50%-0.02px)] py-[4.95px] top-[357.82px] w-[232.655px]" data-name="Column">
      <Frame95 />
      <Frame129 />
      <div className="absolute bg-white content-stretch flex gap-[4.95px] h-[22.275px] items-center justify-center left-0 px-[9.9px] py-[4.95px] rounded-[2.443px] top-[100.24px] w-[49.501px]" data-name="button-pods">
        <div aria-hidden="true" className="absolute border-[#ce202f] border-[0.619px] border-solid inset-0 pointer-events-none rounded-[2.443px]" />
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#ce202f] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[21px] text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            A
          </span>
          <span className="leading-[7.657px] text-[5.36px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`dd `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[15.969px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#083544] text-[9.125px] whitespace-nowrap">
        <p className="leading-[19.391px]">Your containers</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Row">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#636363] text-[7.985px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Our recommendation based off of your sq. footage
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15.4px] top-[325.88px] w-[214.443px]">
      <Frame8 />
      <Row2 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[9.12px] top-[325.88px]">
      <Column1 />
      <Frame6 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[9.12px] top-[177.59px]">
      <Group10 />
      <Group9 />
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[9.12px] top-[130.83px]">
      <Frame111 />
      <Group12 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[6.844px] items-baseline relative shrink-0 text-right whitespace-nowrap">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[10.266px] line-through relative shrink-0 text-[#757575] text-[7.985px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $4,250
      </p>
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] relative shrink-0 text-[#1c843c] text-[10.266px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $3,598
      </p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
      <Frame81 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] relative shrink-0 text-[#8d8989] text-[10.266px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Total:
      </p>
      <Frame80 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex font-['Nunito_Sans:Bold',sans-serif] font-bold items-center justify-between leading-[13.688px] relative shrink-0 text-[11.407px] text-black w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Due today:
      </p>
      <p className="relative shrink-0 text-right" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        $0.00
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[7.414px] items-start relative shrink-0 w-full">
      <Frame74 />
      <Frame82 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame71 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[10.266px] h-[27.376px] items-start relative shrink-0 w-[234.405px]">
      <div className="bg-white content-stretch flex gap-[4.563px] h-[30.227px] items-center justify-center px-[9.125px] py-[6.844px] relative rounded-[5.703px] shrink-0 w-[112.069px]" data-name="button-pods">
        <div aria-hidden="true" className="absolute border-[#9b0000] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[5.703px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[13.688px] relative shrink-0 text-[#ce202f] text-[9.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          View quote details
        </p>
      </div>
      <div className="bg-[#ce202f] content-stretch flex gap-[4.563px] h-[30.227px] items-center justify-center px-[9.125px] py-[6.844px] relative rounded-[5.703px] shrink-0 w-[112.069px]" data-name="button-pods">
        <div aria-hidden="true" className="absolute border-[#9b0000] border-[0.57px] border-solid inset-0 pointer-events-none rounded-[5.703px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[13.688px] relative shrink-0 text-[9.13px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reserve
        </p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[10.266px] items-end relative shrink-0 w-full">
      <Frame73 />
      <Frame133 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="absolute bottom-[17.68px] content-stretch flex flex-col items-center justify-end left-[9.13px] w-[234.405px]">
      <Frame76 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6.844px] h-[120.339px] items-center left-[-1.14px] p-[9.125px] rounded-tl-[17.68px] rounded-tr-[17.68px] top-[430.03px] w-[252.655px]">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.57px] border-solid inset-0 pointer-events-none rounded-tl-[17.68px] rounded-tr-[17.68px] shadow-[0px_-2.281px_5.076px_0px_rgba(171,171,171,0.25)]" />
      <div className="h-0 relative shrink-0 w-[20.532px]">
        <div className="absolute inset-[-3.42px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5318 3.42197">
            <line id="Line 294" stroke="var(--stroke-0, #DBDCDF)" strokeLinecap="round" strokeWidth="3.42197" x1="1.71098" x2="18.8208" y1="1.71098" y2="1.71098" />
          </svg>
        </div>
      </div>
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[13.688px] relative shrink-0 text-[11.407px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your Quote
      </p>
      <Frame132 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-1.14px] top-[421.06px]">
      <div className="absolute bg-white content-stretch flex gap-[4.95px] h-[22.275px] items-center justify-center left-[186.49px] px-[9.9px] py-[4.95px] rounded-[2.443px] top-[421.06px] w-[49.501px]" data-name="button-pods">
        <div aria-hidden="true" className="absolute border-[#ce202f] border-[0.619px] border-solid inset-0 pointer-events-none rounded-[2.443px]" />
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#ce202f] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="leading-[21px] text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            A
          </span>
          <span className="leading-[7.657px] text-[5.36px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`dd `}</span>
        </p>
      </div>
      <Frame79 />
    </div>
  );
}

function CalendarDots5() {
  return (
    <div className="absolute left-[15.32px] size-[10.266px] top-[110.42px]" data-name="CalendarDots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2659 10.2659">
        <g id="CalendarDots">
          <path d={svgPaths.p16eb2d00} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MCQ1() {
  return (
    <div className="absolute bg-[#fbfbfb] h-[545.233px] left-[0.53px] overflow-clip top-0 w-[250.944px]" data-name="M_C&Q">
      <Frame17 />
      <p className="absolute font-['Nunito_Sans:Black',sans-serif] font-black leading-[0] left-[15.4px] text-[18.25px] text-black top-[50.13px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <span className="leading-[27.376px]">{`Let’s get you to `}</span>
        <span className="leading-[27.376px] text-[#007db8]">Tampa!</span>
      </p>
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] left-[15.32px] text-[#646a6f] text-[10.566px] top-[90.34px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Initial delivery date
      </p>
      <Group13 />
      <Group5 />
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] left-[28.53px] text-[#007db8] text-[10.266px] top-[109.36px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Flexible
      </p>
      <CalendarDots5 />
    </div>
  );
}

function MCQ() {
  return (
    <div className="absolute bg-[#fbfbfb] h-[545.233px] left-0 overflow-clip top-0 w-[250.944px]" data-name="M_C&Q">
      <Frame16 />
      <p className="absolute font-['Nunito_Sans:Black',sans-serif] font-black leading-[0] left-[15.4px] text-[18.25px] text-black top-[42.2px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <span className="leading-[27.376px]">{`Let’s get you to `}</span>
        <span className="leading-[27.376px] text-[#007db8]">Tampa!</span>
      </p>
      <div className="absolute flex h-[40.493px] items-center justify-center left-[29.66px] top-[168.25px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40.493px]">
            <div className="absolute inset-[-0.37px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4933 0.371874">
                <line id="Line 258" stroke="var(--stroke-0, #083544)" strokeDasharray="0.74 0.74" strokeWidth="0.371874" x2="40.4933" y1="0.185937" y2="0.185937" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame98 />
      <Frame99 />
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] left-[29.09px] text-[#646a6f] text-[10.266px] top-[84.41px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Initial Delivery
      </p>
      <p className="absolute font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[12.547px] left-[30.8px] text-[#007db8] text-[10.266px] top-[249.23px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Add final delivery date
      </p>
      <Frame105 />
      <Frame102 />
      <Frame104 />
      <Frame107 />
      <Frame109 />
      <CalendarDots />
      <CalendarDots1 />
      <CalendarDots2 />
      <Group6 />
      <div className="absolute left-[23.95px] overflow-clip size-[11.407px] top-[207.6px]" data-name="MapPin">
        <div className="absolute inset-[6.25%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.84201 9.98064">
            <path d={svgPaths.p4d7fb80} fill="var(--fill-0, #2B2B2B)" id="Vector" />
          </svg>
        </div>
      </div>
      <Column />
      <Frame5 />
      <Group4 />
      <MCQ1 />
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-[10.429px]" data-name="UserCircle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4288 10.4288">
        <g id="UserCircle">
          <path d={svgPaths.p2c010a70} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function QuickLinkChips() {
  return (
    <div className="bg-white content-stretch flex gap-[2.607px] items-center px-[7.822px] py-[5.214px] relative rounded-[7.822px] shrink-0" data-name="Quick Link Chips">
      <div aria-hidden="true" className="absolute border-[#007db8] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[7.822px]" />
      <UserCircle />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[7.822px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[11.732px]">Edit Account</p>
      </div>
    </div>
  );
}

function Wallet() {
  return (
    <div className="relative shrink-0 size-[10.429px]" data-name="Wallet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4288 10.4288">
        <g id="Wallet">
          <path d={svgPaths.p1e11a100} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function QuickLinkChips1() {
  return (
    <div className="bg-white content-stretch flex gap-[2.607px] items-center px-[7.822px] py-[5.214px] relative rounded-[7.822px] shrink-0" data-name="Quick Link Chips">
      <div aria-hidden="true" className="absolute border-[#007db8] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[7.822px]" />
      <Wallet />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[7.822px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[11.732px]">Payment Methods</p>
      </div>
    </div>
  );
}

function QuickLinkChips2() {
  return (
    <div className="bg-white content-stretch flex gap-[2.607px] items-center px-[7.822px] py-[5.214px] relative rounded-[7.822px] shrink-0" data-name="Quick Link Chips">
      <div aria-hidden="true" className="absolute border-[#007db8] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[7.822px]" />
      <div className="overflow-clip relative shrink-0 size-[10.429px]" data-name="Receipt">
        <div className="absolute inset-[15.63%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.47339 7.16962">
            <path d={svgPaths.p2a0b6400} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[7.822px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[11.732px]">Invoices</p>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex gap-[5.214px] items-start relative shrink-0 w-[237.255px]">
      <QuickLinkChips />
      <QuickLinkChips1 />
      <QuickLinkChips2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[17.599px] justify-center leading-[0] min-h-px min-w-px relative text-[#636363] text-[9.125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.688px]">{` Order #34343`}</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[15.643px]" data-name="ChevronUp">
        <div className="absolute inset-[28.12%_15.62%_34.37%_15.62%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7553 5.86696">
            <path d={svgPaths.p1eb8af80} fill="var(--fill-0, #2B2B2B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[2.607px] items-end relative shrink-0 text-[#083544] whitespace-nowrap" data-name="Location">
      <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[22.813px] relative shrink-0 text-[19.554px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Colorado Springs
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[9.125px] relative shrink-0 text-[9.125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CO
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center pt-[5.866px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[11.732px]" data-name="ArrowRight">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79958 7.33315">
            <path d={svgPaths.p3532f780} fill="var(--fill-0, #2B2B2B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[2.607px] items-end relative shrink-0 text-[#083544] whitespace-nowrap" data-name="Location">
      <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[22.813px] relative shrink-0 text-[19.554px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        San Jose
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[9.125px] relative shrink-0 text-[9.125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CA
      </p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-center flex flex-wrap gap-[7.821594715118408px_7.822px] items-center relative shrink-0 w-full">
      <Location />
      <Frame53 />
      <Location1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[2.607px] right-[6.52px] rounded-[10.429px] top-[6.32px]">
      <div className="overflow-clip relative shrink-0 size-[15.643px]" data-name="ArrowsOutCardinal">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6886 13.6886">
            <path d={svgPaths.p1d3b7d00} fill="var(--fill-0, #636363)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[7.822px]" data-name="ArrowLeft">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82159 7.82159">
        <g id="ArrowLeft">
          <path d={svgPaths.p18bd5600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DeliveryArrow() {
  return (
    <div className="bg-[#1c843c] content-stretch flex gap-[5.214px] items-center p-[1.304px] relative rounded-[5.214px] shrink-0" data-name="Delivery Arrow">
      <ArrowLeft />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.607px] items-center min-h-px min-w-px relative">
      <DeliveryArrow />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b5e20] text-[7.822px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.688px]">Transit</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#083544] text-[0px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <span className="leading-[10.429px] text-[9.125px]">{`Arriving `}</span>
        <span className="leading-[10.429px] text-[9.125px]">in 4 days,</span>
        <span className="leading-[10.429px] text-[9.125px]">{` `}</span>
        <span className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[10.429px] text-[9.125px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          to PODS storage center
        </span>
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#636363] text-[7.822px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1057 Montague Expy, Milpitas, CA 95035
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame57 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame18 />
      <Frame56 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6.518px] items-center pb-[4.563px] relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start px-[5.214px] relative size-full">
        <Frame19 />
      </div>
    </div>
  );
}

function ActiveStepCard() {
  return (
    <div className="absolute bg-white bottom-[10.43px] content-stretch flex items-center left-[10.71px] overflow-clip pl-[5.214px] py-[3.911px] right-[10.15px] rounded-[5.866px] shadow-[0px_0px_3.911px_0px_rgba(0,0,0,0.2)]" data-name="Active step card">
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#1c843c] h-full rounded-[1.955px] shrink-0 w-[3.259px]" />
      </div>
      <Frame55 />
    </div>
  );
}

function Pin() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[5.214px] h-[20.206px] items-center left-[calc(50%+90.27px)] shadow-[0px_3.911px_9.777px_0px_rgba(16,24,40,0.08),0px_3.911px_9.777px_0px_rgba(16,24,40,0.08)] top-[calc(50%-29.85px)] w-[18.25px]" data-name="Pin">
      <div className="h-[20.206px] relative shrink-0 w-[18.25px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.25 20.2061">
          <path d={svgPaths.p2338ad80} fill="var(--fill-0, #083544)" id="Union" />
        </svg>
      </div>
      <div className="absolute left-[23.46px] overflow-clip size-[11.732px] top-[10.1px]" data-name="Warehouse">
        <div className="absolute inset-[15.61%_3.05%_21.88%_3.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0081 7.33471">
            <path d={svgPaths.p2109d200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute left-[90.6px] size-[24.116px] top-[30.44px]">
      <div className="absolute inset-[-32.43%_-43.24%_-54.05%_-43.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9738 44.9738">
          <g id="Group 10123137">
            <g filter="url(#filter0_d_8_47865)" id="Union">
              <mask fill="white" id="path-1-inside-1_8_47865">
                <path d={svgPaths.p3974cf00} />
              </mask>
              <path d={svgPaths.p3974cf00} fill="var(--fill-0, #F2F7FE)" />
              <path d={svgPaths.p29c29b00} fill="var(--stroke-0, #083544)" mask="url(#path-1-inside-1_8_47865)" />
            </g>
            <g id="Group 10123181">
              <path d={svgPaths.p25056900} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p29817a00} fill="var(--fill-0, #C2C6C6)" id="Vector_2" />
              <path d={svgPaths.p14412600} fill="var(--fill-0, #C41633)" id="Vector_3" />
              <path d={svgPaths.p2ce93400} fill="var(--fill-0, #C41633)" id="Vector_4" />
              <path d={svgPaths.p23c0a200} fill="var(--fill-0, #E9E9EA)" id="Vector_5" />
              <path d={svgPaths.p158dde00} fill="var(--fill-0, #0069E5)" id="Vector_6" />
              <path d={svgPaths.p11b6d600} id="Vector_7" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p19649700} id="Vector_8" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p186cab00} id="Vector_9" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p2f190a80} id="Vector_10" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p20c71700} id="Vector_11" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p85eeb80} id="Vector_12" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p455bb00} id="Vector_13" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.pc1b9400} id="Vector_14" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p1fb3000} id="Vector_15" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.pd40b900} id="Vector_16" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p3c88ce80} id="Vector_17" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p18765480} id="Vector_18" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p2d989f80} id="Vector_19" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p2a223a00} id="Vector_20" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p3662e300} id="Vector_21" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.pd03e040} id="Vector_22" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.pb13fc80} id="Vector_23" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p140f8d80} id="Vector_24" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p36532780} id="Vector_25" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p10768d80} id="Vector_26" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p16cb8e97} id="Vector_27" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.p1f36a680} id="Vector_28" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <g id="Vector_29" />
              <g id="Group">
                <g id="Group_2">
                  <path d={svgPaths.p1ef4600} fill="var(--fill-0, #222222)" id="Vector_30" />
                  <path d={svgPaths.p3a4af080} fill="var(--fill-0, #222222)" id="Vector_31" />
                  <path d={svgPaths.p1c4d3b80} fill="var(--fill-0, #222222)" id="Vector_32" />
                  <path d={svgPaths.p13c8f00} fill="var(--fill-0, #222222)" id="Vector_33" />
                  <path d={svgPaths.p2b40a8f0} fill="var(--fill-0, #222222)" id="Vector_34" />
                  <path d={svgPaths.p1a01e780} fill="var(--fill-0, #222222)" id="Vector_35" />
                  <path d={svgPaths.p29352970} fill="var(--fill-0, #222222)" id="Vector_36" />
                  <path d={svgPaths.p73acc80} fill="var(--fill-0, #222222)" id="Vector_37" />
                  <path d={svgPaths.pd7e5500} fill="var(--fill-0, #222222)" id="Vector_38" />
                  <path d={svgPaths.p14297b00} fill="var(--fill-0, #222222)" id="Vector_39" />
                  <path d={svgPaths.p362baa00} fill="var(--fill-0, #222222)" id="Vector_40" />
                  <path d={svgPaths.p446dc80} fill="var(--fill-0, #222222)" id="Vector_41" />
                  <path d={svgPaths.p275f7dd0} fill="var(--fill-0, #222222)" id="Vector_42" />
                  <path d={svgPaths.p2ad9a200} fill="var(--fill-0, #222222)" id="Vector_43" />
                </g>
                <path d={svgPaths.p37238980} fill="var(--fill-0, #CE2030)" id="Vector_44" />
                <path d={svgPaths.p302b100} fill="var(--fill-0, white)" id="Vector_45" />
                <path d={svgPaths.p1ea03700} fill="var(--fill-0, white)" id="Vector_46" />
                <path d={svgPaths.p39bb4580} fill="var(--fill-0, white)" id="Vector_47" />
                <path d={svgPaths.pc8d8200} fill="var(--fill-0, white)" id="Vector_48" />
                <path d={svgPaths.p1da22d80} fill="var(--fill-0, #222222)" id="Vector_49" />
                <path d={svgPaths.p3eb03980} fill="var(--fill-0, #222222)" id="Vector_50" />
                <path d={svgPaths.p3057afb0} fill="var(--fill-0, #222222)" id="Vector_51" />
                <path d={svgPaths.p231026c0} fill="var(--fill-0, white)" id="Vector_52" />
                <path d={svgPaths.pdce5f00} fill="var(--fill-0, #222222)" id="Vector_53" />
              </g>
              <path d={svgPaths.p29be0900} fill="var(--fill-0, #E9E9EA)" id="Vector_54" />
              <path d={svgPaths.p210bbc00} id="Vector_55" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="0.6518" />
              <path d={svgPaths.pce63c00} fill="var(--fill-0, #E81D2D)" id="Vector_56" />
              <path d={svgPaths.p1caf4a00} fill="var(--fill-0, #E81D2D)" id="Vector_57" />
              <g id="Group_3">
                <g id="Group_4">
                  <path d={svgPaths.p3a94600} fill="var(--fill-0, #CE2030)" id="Vector_58" />
                  <path d={svgPaths.p1a4d2200} fill="var(--fill-0, #CE2030)" id="Vector_59" />
                  <path d={svgPaths.p3fe09b00} fill="var(--fill-0, #CE2030)" id="Vector_60" />
                  <path d={svgPaths.p10eb9c00} fill="var(--fill-0, #CE2030)" id="Vector_61" />
                </g>
                <path d={svgPaths.p2a952c80} fill="var(--fill-0, white)" id="Vector_62" />
                <path d={svgPaths.p314381f0} fill="var(--fill-0, white)" id="Vector_63" />
                <path d={svgPaths.p2b0ccb30} fill="var(--fill-0, white)" id="Vector_64" />
                <path d={svgPaths.p31ebba00} fill="var(--fill-0, white)" id="Vector_65" />
                <path d={svgPaths.p31ee9d00} fill="var(--fill-0, white)" id="Vector_66" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44.9738" id="filter0_d_8_47865" width="44.9738" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.6072" />
              <feGaussianBlur stdDeviation="5.2144" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_47865" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_47865" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="bg-white h-[155.128px] overflow-clip relative rounded-[10.429px] shrink-0 w-[224.871px]" data-name="Map">
      <div className="absolute h-[162.95px] left-0 top-[-0.2px] w-[224.871px]" data-name="Screen Shot 2025-10-02 at 11.45.23 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenShot20251002At114523Am1} />
      </div>
      <Frame14 />
      <ActiveStepCard />
      <Pin />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[5.214px] h-[20.206px] items-center left-[calc(50%-104.12px)] shadow-[0px_3.911px_9.777px_0px_rgba(16,24,40,0.08),0px_3.911px_9.777px_0px_rgba(16,24,40,0.08)] top-[calc(50%-11.92px)] w-[18.25px]" data-name="Pin">
        <div className="h-[20.206px] relative shrink-0 w-[18.25px]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.25 20.2061">
            <path d={svgPaths.p36642900} fill="var(--fill-0, #083544)" id="Union" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.036px] top-[calc(50%-1.63px)]" data-name="HouseLine">
          <div className="absolute inset-[9.37%_3.13%_12.5%_3.13%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2212 10.1845">
              <path d={svgPaths.p6a6a980} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[47.023px] items-center justify-center left-[8.87px] top-[31.65px] w-[191.205px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-6.03deg]">
          <div className="h-[27.295px] relative w-[189.386px]">
            <div className="absolute inset-[-2.39%_-0.19%_-1.97%_-0.24%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190.202 28.4858">
                <path d={svgPaths.p2e3508c0} id="Line 327" stroke="var(--stroke-0, #CE202F)" strokeWidth="1.3036" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[9.12px] size-[5.235px] top-[75.98px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-17.43deg]">
          <div className="relative size-[4.176px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61657 3.13205">
                <path d={svgPaths.p1ed7fb00} fill="var(--fill-0, #CE202F)" id="Polygon 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[199.45px] size-[3.911px] top-[57.81px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.9108 3.9108">
          <circle cx="1.9554" cy="1.9554" id="Ellipse 888" r="1.6295" stroke="var(--stroke-0, #CE202F)" strokeWidth="0.6518" />
        </svg>
      </div>
      <Group8 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[10.429px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame52 />
      <Map />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[15.643px] relative shrink-0 text-[#007db8] text-[12.384px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`16ft Container #1 `}</p>
      <div className="h-[8.473px] relative shrink-0 w-[5.214px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2144 8.47339">
          <path d={svgPaths.p26ffad80} fill="var(--fill-0, #007DB8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Hash() {
  return (
    <div className="relative shrink-0 size-[7.822px]" data-name="Hash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82159 7.82159">
        <g clipPath="url(#clip0_8_48332)" id="Hash">
          <path d={svgPaths.p3114470} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_48332">
            <rect fill="white" height="7.82159" width="7.82159" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[1.304px] items-center relative shrink-0">
      <Hash />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[11.732px] relative shrink-0 text-[#7d7d7d] text-[6.518px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        21314
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[1.304px] items-start relative shrink-0 w-full">
      <Frame135 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame9 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Content">
      <Frame33 />
    </div>
  );
}

function ContainerDetails() {
  return (
    <div className="content-stretch flex gap-[9.125px] items-center relative shrink-0 w-full" data-name="Container details">
      <div className="h-[44.322px] relative shrink-0 w-[48.885px]" data-name="pods_54542_01_container_images_door_closed_16ft 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPods5454201ContainerImagesDoorClosed16Ft1} />
      </div>
      <Content9 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.304px] items-start min-h-px min-w-px relative">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#1c843c] text-[9.125px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[11.732px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Transit May 22,
        </span>
        <span className="leading-[11.732px]">{` `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[11.732px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          estimated arrival May 30
        </span>
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[11.732px] relative shrink-0 text-[#636363] text-[7.822px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1398 Boysea Dr, San Jose, CA 95118
      </p>
    </div>
  );
}

function ScheduleOverview() {
  return (
    <div className="content-stretch flex gap-[3.911px] items-start relative shrink-0 w-full" data-name="Schedule overview">
      <div className="bg-[#1c843c] h-[20.206px] rounded-[1.304px] shrink-0 w-[2.607px]" />
      <Frame30 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[1.955px] items-start relative shrink-0 w-full">
      <ContainerDetails />
      <ScheduleOverview />
    </div>
  );
}

function Truck() {
  return (
    <div className="relative shrink-0 size-[15.643px]" data-name="Truck">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6432 15.6432">
        <g id="Truck">
          <path d={svgPaths.p182d1100} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[7.17px] items-start pb-[10.429px] pl-[15.643px] pr-[10.429px] pt-[5.214px] relative size-full">
        <Frame49 />
        <div className="content-stretch flex items-center pb-[10.429px] pl-[3.911px] pr-[5.214px] relative shrink-0 w-[198.8px]" data-name="Move-timeline">
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.125 9.125">
                <path d={svgPaths.p19c71480} fill="var(--fill-0, #083544)" id="Subtract" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.56px] text-[6.52px] text-black text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Delivery</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[5.214px] relative" data-name="Component 65">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.33px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <path d="M0 0.3259H25.6812" id="Vector 130" stroke="var(--stroke-0, #083544)" strokeWidth="0.6518" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.125 9.125">
                <path d={svgPaths.p19c71480} fill="var(--fill-0, #083544)" id="Subtract" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.56px] text-[6.52px] text-black text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Pick up</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[5.214px] relative" data-name="Component 66">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.33px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <path d="M0 0.3259H25.6812" id="Vector 130" stroke="var(--stroke-0, #083544)" strokeWidth="0.6518" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.125 9.125">
                <path d={svgPaths.p19c71480} fill="var(--fill-0, #083544)" id="Subtract" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.56px] text-[6.52px] text-black text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Storage</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[5.214px] relative" data-name="Component 69">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.33px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <path d="M0 0.3259H25.6812" id="Vector 130" stroke="var(--stroke-0, #083544)" strokeWidth="0.6518" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] items-center relative shrink-0" data-name="Progress indicator">
            <Truck />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[7.33px] text-[#007db8] text-[0px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px] text-[6.518px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Transit
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 67">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Drop-off</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 68">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCard() {
  return (
    <div className="bg-white relative rounded-[13.036px] shrink-0 w-full" data-name="Container card">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame20 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[13.036px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[6.518px] items-start relative shrink-0 w-full">
      <ContainerCard />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[15.643px] relative shrink-0 text-[#007db8] text-[12.384px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`16ft Container #2 `}</p>
      <div className="h-[8.473px] relative shrink-0 w-[5.214px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2144 8.47339">
          <path d={svgPaths.p26ffad80} fill="var(--fill-0, #007DB8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Hash1() {
  return (
    <div className="relative shrink-0 size-[7.822px]" data-name="Hash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82159 7.82159">
        <g clipPath="url(#clip0_8_47997)" id="Hash">
          <path d={svgPaths.p2fb99200} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_47997">
            <rect fill="white" height="7.82159" width="7.82159" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[1.304px] items-center relative shrink-0">
      <Hash1 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[11.732px] relative shrink-0 text-[#7d7d7d] text-[6.518px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        21315
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame136 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame37 />
      <Frame10 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Content">
      <Frame34 />
    </div>
  );
}

function ContainerDetails1() {
  return (
    <div className="content-stretch flex gap-[9.125px] items-center relative shrink-0 w-full" data-name="Container details">
      <div className="h-[44.322px] relative shrink-0 w-[48.885px]" data-name="pods_54542_01_container_images_door_closed_16ft 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPods5454201ContainerImagesDoorClosed16Ft1} />
      </div>
      <Content10 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.304px] items-start min-h-px min-w-px relative">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#1c843c] text-[9.125px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[11.732px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Delivered May 17,
        </span>
        <span className="leading-[11.732px]">{` `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[11.732px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          1pm
        </span>
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[11.732px] relative shrink-0 text-[#083544] text-[7.822px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        715 N Sheridan Ave, Colorado Springs, CO 80909
      </p>
    </div>
  );
}

function ScheduleOverview1() {
  return (
    <div className="content-stretch flex gap-[3.911px] items-start relative shrink-0 w-full" data-name="Schedule overview">
      <div className="bg-[#1c843c] h-[20.206px] rounded-[1.304px] shrink-0 w-[2.607px]" />
      <Frame31 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[1.955px] items-start relative shrink-0 w-full">
      <ContainerDetails1 />
      <ScheduleOverview1 />
    </div>
  );
}

function Truck1() {
  return (
    <div className="relative shrink-0 size-[15.643px]" data-name="Truck">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6432 15.6432">
        <g id="Truck">
          <path d={svgPaths.p182d1100} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[7.17px] items-start pb-[10.429px] pl-[15.643px] pr-[10.429px] pt-[5.214px] relative size-full">
        <Frame50 />
        <div className="content-stretch flex items-center pb-[10.429px] pl-[3.911px] pr-[5.214px] relative shrink-0 w-[198.8px]" data-name="Move-timeline">
          <div className="content-stretch flex flex-col gap-[5.214px] items-center relative shrink-0" data-name="Progress indicator">
            <Truck1 />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[7.33px] text-[#083544] text-[0px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px] text-[6.518px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Delivery
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 65">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Pick up</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 66">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Storage</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 69">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Transit</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 67">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Drop-off</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 68">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCard1() {
  return (
    <div className="bg-white relative rounded-[13.036px] shrink-0 w-full" data-name="Container card">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[13.036px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ContainerCard1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[15.643px] relative shrink-0 text-[#007db8] text-[12.384px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`16ft Container #1 `}</p>
      <div className="h-[8.473px] relative shrink-0 w-[5.214px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2144 8.47339">
          <path d={svgPaths.p26ffad80} fill="var(--fill-0, #007DB8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Hash2() {
  return (
    <div className="relative shrink-0 size-[7.822px]" data-name="Hash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82159 7.82159">
        <g clipPath="url(#clip0_8_47983)" id="Hash">
          <path d={svgPaths.p3d7b2780} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_47983">
            <rect fill="white" height="7.82159" width="7.82159" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[1.304px] items-center justify-center relative shrink-0">
      <Hash2 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[11.732px] relative shrink-0 text-[#7d7d7d] text-[6.518px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        21314
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame38 />
      <Frame11 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Content">
      <Frame35 />
    </div>
  );
}

function ContainerDetails2() {
  return (
    <div className="content-stretch flex gap-[9.125px] items-center relative shrink-0 w-full" data-name="Container details">
      <div className="h-[44.322px] relative shrink-0 w-[48.885px]" data-name="pods_54542_01_container_images_door_closed_16ft 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPods5454201ContainerImagesDoorClosed16Ft1} />
      </div>
      <Content11 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.304px] items-start min-h-px min-w-px relative">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#1c843c] text-[9.125px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[11.732px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Arriving May 6,
        </span>
        <span className="leading-[11.732px]">{` `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[11.732px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          10am-2pm
        </span>
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[11.732px] relative shrink-0 text-[#083544] text-[7.822px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        715 N Sheridan Ave, Colorado Springs, CO 80909
      </p>
    </div>
  );
}

function ScheduleOverview2() {
  return (
    <div className="content-stretch flex gap-[3.911px] items-start relative shrink-0 w-full" data-name="Schedule overview">
      <div className="bg-[#1c843c] h-[20.206px] rounded-[1.304px] shrink-0 w-[2.607px]" />
      <Frame32 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[1.955px] items-start relative shrink-0 w-full">
      <ContainerDetails2 />
      <ScheduleOverview2 />
    </div>
  );
}

function Truck2() {
  return (
    <div className="relative shrink-0 size-[15.643px]" data-name="Truck">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6432 15.6432">
        <g id="Truck">
          <path d={svgPaths.p182d1100} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col gap-[7.17px] items-start pb-[10.429px] pl-[15.643px] pr-[10.429px] pt-[5.214px] relative size-full">
        <Frame51 />
        <div className="content-stretch flex items-center pb-[10.429px] pl-[3.911px] pr-[5.214px] relative shrink-0 w-[198.8px]" data-name="Move-timeline">
          <div className="content-stretch flex flex-col gap-[5.214px] items-center relative shrink-0" data-name="Progress indicator">
            <Truck2 />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[7.33px] text-[#083544] text-[0px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px] text-[6.518px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Delivery
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 65">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Pick up</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 66">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Storage</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 69">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Transit</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 67">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Drop-off</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[15.643px] items-start justify-center min-h-px min-w-px relative" data-name="Component 68">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.65px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6812 0.6518">
                  <line id="Line 323" stroke="var(--stroke-0, #083544)" strokeDasharray="1.3 1.3" strokeOpacity="0.4" strokeWidth="0.6518" x2="25.6812" y1="0.3259" y2="0.3259" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5.214px] h-[15.643px] items-center justify-center relative shrink-0" data-name="Progress indicator">
            <div className="relative shrink-0 size-[9.125px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12519 9.12519">
                <path d={svgPaths.p3ae2b500} fill="var(--fill-0, #979797)" id="Vector" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.89px] text-[#636363] text-[6.52px] text-center top-[20.86px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[9.125px]">Return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCard2() {
  return (
    <div className="bg-white relative rounded-[13.036px] shrink-0 w-full" data-name="Container card">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame22 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[13.036px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ContainerCard2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[5.866px] items-start relative rounded-[10.429px] shrink-0 w-full">
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative rounded-[10.429px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[10.429px]" />
      <div className="content-stretch flex flex-col gap-[7.822px] items-start p-[7.822px] relative size-full">
        <Frame26 />
        <Frame28 />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Details">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[17.599px] justify-center leading-[0] min-h-px min-w-px relative text-[#636363] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[25px] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Previous orders
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[15.643px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[15.643px]" data-name="ChevronDown">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7552 5.86685">
                <path d={svgPaths.p2ec47780} fill="var(--fill-0, #7D7D7D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Details />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Column2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column">
      <div className="content-stretch flex flex-col gap-[10.429px] items-start pt-[10.429px] px-[5.214px] relative size-full">
        <Frame134 />
        <Frame58 />
        <div className="bg-[#f7f5f5] content-stretch flex flex-col items-start justify-center px-[10.429px] py-[15.643px] relative rounded-[9px] shrink-0 w-[240.515px]" data-name="MyMove">
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-white h-[50.84px] relative rounded-bl-[2.607px] rounded-br-[2.607px] shrink-0 w-full" data-name="Column">
      <div className="size-full" />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-[5.21px] h-[23.465px] left-0 right-0" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bg-black bottom-[5.21px] h-[3.259px] left-1/2 rounded-[65.18px] w-[87.993px]" data-name="Line" />
    </div>
  );
}

function ChatCircleDots() {
  return (
    <div className="relative shrink-0 size-[15.643px]" data-name="ChatCircleDots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6432 15.6432">
        <g id="ChatCircleDots">
          <path d={svgPaths.pbfda780} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LiveChat() {
  return (
    <div className="absolute bg-white bottom-[927.51px] content-stretch flex items-center justify-center left-[206.62px] p-[5.214px] rounded-[20.858px] size-[31.286px]" data-name="LiveChat">
      <div aria-hidden="true" className="absolute border-[#cbcbcb] border-[0.652px] border-solid inset-0 pointer-events-none rounded-[20.858px] shadow-[0px_3.911px_9.777px_0px_rgba(16,24,40,0.08),0px_3.911px_9.777px_0px_rgba(16,24,40,0.08)]" />
      <ChatCircleDots />
    </div>
  );
}

function MyPodsHomeMobile() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col h-[1447.647px] items-start left-[calc(50%-0.03px)] overflow-x-clip overflow-y-auto top-[0.22px] w-[250.944px]" data-name="MyPODS Home Mobile">
      <div className="bg-white content-stretch flex gap-[10.429px] h-[33.894px] items-center px-[10.429px] relative shrink-0 w-[250.944px]" data-name="MobileNav-Right">
        <div aria-hidden="true" className="absolute border-[#ebebeb] border-b-[0.652px] border-solid inset-0 pointer-events-none shadow-[0px_0px_7.17px_0px_rgba(0,0,0,0.11)]" />
        <div className="h-[10.429px] relative shrink-0 w-[14.34px]" data-name="icon-menu">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3398 10.4287">
            <path d={svgPaths.p2c196a00} fill="var(--fill-0, #083544)" id="icon menu" />
          </svg>
        </div>
        <div className="h-[14.34px] overflow-clip relative shrink-0 w-[65.18px]" data-name="Pods Logo">
          <div className="absolute inset-[0_50.38%_0_25.36%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8114 14.3396">
              <path d={svgPaths.p37548400} fill="var(--fill-0, #CE202F)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_25.32%_0_50.36%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8492 14.3396">
              <path d={svgPaths.p5b9eb70} fill="var(--fill-0, #CE202F)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_75.34%_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0721 14.3396">
              <path d={svgPaths.p65a6b40} fill="var(--fill-0, #CE202F)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_0_75.39%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0427 14.3396">
              <path d={svgPaths.p364f1600} fill="var(--fill-0, #CE202F)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[15.24%_76.77%_12.34%_2.35%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6051 10.3846">
              <path d={svgPaths.pe055480} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[14.75%_51.76%_10.26%_26.44%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.207 10.7522">
              <path d={svgPaths.p12994b00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[15.99%_26.99%_11.65%_52.12%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6154 10.3765">
              <path d={svgPaths.p38d7e3c0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[14.66%_2.6%_10.33%_76.85%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3976 10.7564">
              <path d={svgPaths.p1db0b580} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[4.2%_1.48%_80.62%_95.08%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.23716 2.17806">
              <path d={svgPaths.p216d3600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Column2 />
      <Column3 />
      <HomeIndicator />
      <LiveChat />
    </div>
  );
}

function PopulatedMobileCollapse() {
  return (
    <div className="absolute bg-white h-[544.153px] left-[242px] rounded-[22.354px] top-[55px] w-[251px]" data-name="Populated Mobile - Collapse">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MCQ />
        <MyPodsHomeMobile />
      </div>
      <div aria-hidden="true" className="absolute border-[#070606] border-[7.664px] border-solid inset-[-7.664px] pointer-events-none rounded-[30.018px] shadow-[3.17px_2.113px_11.728px_3.17px_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function AuthorImage() {
  return (
    <div className="relative rounded-[27.125px] shrink-0 size-[30px]" data-name="Author Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.125px]">
        <div className="absolute bg-white inset-0 rounded-[27.125px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[27.125px] size-full" src={imgAuthorImage} />
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center leading-[0] relative shrink-0 text-[#6b7280] whitespace-nowrap">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Tommy Oliver</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Irvine, TX</p>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <AuthorImage />
      <Frame158 />
    </div>
  );
}

function Star() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RatingContainer1() {
  return (
    <div className="content-stretch flex gap-[2.17px] items-center relative shrink-0" data-name="Rating Container">
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star1 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star2 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star3 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star4 />
      </div>
    </div>
  );
}

function QuoteAuthorContainer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Quote Author Container">
      <Frame159 />
      <RatingContainer1 />
    </div>
  );
}

function QuoteTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Quote Text Container">
      <QuoteAuthorContainer />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Using MyPODS made my entire moving experience seamless and stress-free!</p>
      </div>
    </div>
  );
}

function QuoteContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Quote Content">
      <QuoteTextContainer />
    </div>
  );
}

function QuoteContainer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[446px] p-[8.68px] rounded-[4.34px] top-[32px] w-[286px]" data-name="Quote Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.543px] border-solid inset-0 pointer-events-none rounded-[4.34px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)]" />
      <QuoteContent />
    </div>
  );
}

function AuthorImage1() {
  return (
    <div className="relative rounded-[27.125px] shrink-0 size-[30px]" data-name="Author Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.125px]">
        <div className="absolute bg-white inset-0 rounded-[27.125px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[27.125px] size-full" src={imgAuthorImage} />
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center leading-[0] relative shrink-0 text-[#6b7280] whitespace-nowrap">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Billy Cranston</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Chicago, IL</p>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <AuthorImage1 />
      <Frame162 />
    </div>
  );
}

function Star5() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star6() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star7() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star8() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star9() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RatingContainer2() {
  return (
    <div className="content-stretch flex gap-[2.17px] items-center relative shrink-0" data-name="Rating Container">
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star5 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star6 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star7 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star8 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star9 />
      </div>
    </div>
  );
}

function QuoteAuthorContainer1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Quote Author Container">
      <Frame160 />
      <RatingContainer2 />
    </div>
  );
}

function QuoteTextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Quote Text Container">
      <QuoteAuthorContainer1 />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">MyPODS made my entire moving experience so much easier and kept me informed every step of the way!</p>
      </div>
    </div>
  );
}

function QuoteContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Quote Content">
      <QuoteTextContainer1 />
    </div>
  );
}

function QuoteContainer1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[19px] p-[8.68px] rounded-[4.34px] top-[227px] w-[286px]" data-name="Quote Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.543px] border-solid inset-0 pointer-events-none rounded-[4.34px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)]" />
      <QuoteContent1 />
    </div>
  );
}

function AuthorImage2() {
  return (
    <div className="relative rounded-[27.125px] shrink-0 size-[30px]" data-name="Author Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.125px]">
        <div className="absolute bg-white inset-0 rounded-[27.125px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[27.125px] size-full" src={imgAuthorImage} />
      </div>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center leading-[0] relative shrink-0 text-[#6b7280] whitespace-nowrap">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Kimberly Hart</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Tampa, FL</p>
      </div>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <AuthorImage2 />
      <Frame164 />
    </div>
  );
}

function Star10() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star11() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star12() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star13() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star14() {
  return (
    <div className="absolute left-0 size-[10.85px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.85 10.85">
        <g clipPath="url(#clip0_8_47943)" id="Star">
          <path d={svgPaths.p27af3500} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_8_47943">
            <rect fill="white" height="10.85" width="10.85" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RatingContainer3() {
  return (
    <div className="content-stretch flex gap-[2.17px] items-center relative shrink-0" data-name="Rating Container">
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star10 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star11 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star12 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star13 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[10.85px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.51872 9.07951">
              <path d={svgPaths.p2fbefd00} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star14 />
      </div>
    </div>
  );
}

function QuoteAuthorContainer2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Quote Author Container">
      <Frame163 />
      <RatingContainer3 />
    </div>
  );
}

function QuoteTextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Quote Text Container">
      <QuoteAuthorContainer2 />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">MyPODS helped me stay up to date for my entire move!</p>
      </div>
    </div>
  );
}

function QuoteContent2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Quote Content">
      <QuoteTextContainer2 />
    </div>
  );
}

function QuoteContainer2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[426px] p-[8.68px] rounded-[4.34px] top-[367px] w-[286px]" data-name="Quote Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.543px] border-solid inset-0 pointer-events-none rounded-[4.34px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)]" />
      <QuoteContent2 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[500px] overflow-clip relative shrink-0 w-[751px]" data-name="Image">
      <PopulatedMobileCollapse />
      <QuoteContainer />
      <QuoteContainer1 />
      <QuoteContainer2 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[44px] relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stay up to date with MyPODS
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4b5563] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[24px] text-[16px]">{`Manage your PODS order in one convenient place. Quickly `}</span>
        <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          view your schedule, make payments, access important documents, and update service details
        </span>
        <span className="leading-[24px] text-[16px]">{` so you stay informed and in control of your move or storage.`}</span>
      </p>
    </div>
  );
}

function TextAction() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text + Action">
      <Text5 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <Image />
      <TextAction />
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#e5f2f8] overflow-clip relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute inset-[29.17%]" data-name="Icon">
        <div className="absolute inset-[3.13%_12.5%_9.37%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17.5">
            <path d={svgPaths.p8cc7f80} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        How long can I keep it?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rentals are billed on a month-to-month basis, giving you the flexibility to store it for the duration of your move or as long as you need storage.
      </p>
    </div>
  );
}

function Feature4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px relative" data-name="Feature">
      <Icon5 />
      <Text6 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#e5f2f8] overflow-clip relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute inset-[29.17%]" data-name="Icon">
        <div className="absolute inset-[21.88%_0_12.48%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 13.1299">
            <path d={svgPaths.p1346ed00} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Who triggers pickup?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You decide when your container is picked up. Simply schedule a pickup when you’re ready, and PODS will handle the rest.
      </p>
    </div>
  );
}

function Feature5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px relative" data-name="Feature">
      <Icon6 />
      <Text7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#e5f2f8] overflow-clip relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute inset-[29.17%]" data-name="Icon">
        <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.25">
            <path d={svgPaths.p14ab8b00} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#374151] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        What if plans change?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You can update your dates or make adjustments to your order whenever you need, giving you flexibility if your timeline shifts.
      </p>
    </div>
  );
}

function Feature6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px relative" data-name="Feature">
      <Icon7 />
      <Text8 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[32px] h-[188px] items-center relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Feature4 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Feature5 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Feature6 />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full max-w-[1200px] mx-auto" data-name="Container">
      <Content8 />
      <Content12 />
    </div>
  );
}

function Features1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Features">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[112px] py-[64px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#374151] text-[36px] tracking-[-0.72px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[44px]">Help is a phone call away</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Talk to a PODS moving expert (real person) who can tailor your move over the phone!</p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="Mo Help Schedule Call CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Schedule a call
        </p>
        <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
          <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.25">
              <path d={svgPaths.p22e1ce00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#fde8ea] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="Mo Help Live Chat CTA">
        <div aria-hidden="true" className="absolute border border-[#f8bbc0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#ce202f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Live Chat
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

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text9 />
      <Frame142 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] h-[430px] min-h-px min-w-px overflow-clip relative rounded-[8px]">
      <div className="absolute h-[430px] left-0 top-0 w-[592px]" data-name="unsplash:52H5Nfi5WiE">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUnsplash52H5Nfi5WiE} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full max-w-[1200px] mx-auto" data-name="Container">
      <Content13 />
      <Frame />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[112px] py-[64px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[386px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start you move with trusted experts who keep things simple.
      </p>
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="Mo Bottom Social Proof CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get your quote
        </p>
        <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
          <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.25">
              <path d={svgPaths.p22e1ce00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-between left-0 pb-[32px] px-[104px] w-[1440px]">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.12px] w-[415px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Ready for a smooth move?
      </p>
      <Frame165 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold items-end left-[104px] text-white top-[34px] w-[586px]">
      <p className="leading-[40px] relative shrink-0 text-[32px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`"PODS was awesome! No hidden fees, upfront pricing and great customer service."`}</p>
      <p className="leading-[36px] relative shrink-0 text-[28px] text-right tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        -Laura N.
      </p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="h-[700px] overflow-clip relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame10125996} />
        <div className="absolute bg-gradient-to-b from-[58.742%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" />
      </div>
      <Frame157 />
      <Frame166 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center leading-[0] relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#374151] text-[36px] text-center tracking-[-0.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[44px]">Plan your move with confidence!</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4b5563] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">No commitment. You can adjust everything later.</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="bg-[#e5f2f8] content-stretch flex items-center justify-center mix-blend-multiply p-[12px] relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[15.63%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 16.4996">
            <path d={svgPaths.p5324400} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Text+Icon">
      <Icon8 />
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[28px] min-w-full relative shrink-0 text-[#374151] text-[20px] text-center tracking-[-0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get your quote
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.
      </p>
    </div>
  );
}

function ActionText() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Action+text">
      <TextIcon />
      <div className="bg-[#ce202f] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="Mo Final get Quote CTA">
        <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Start planning
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

function Content14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[383px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center overflow-clip px-[48px] py-[24px] relative rounded-[inherit] size-full">
        <ActionText />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-[#e5f2f8] content-stretch flex items-center justify-center mix-blend-multiply p-[12px] relative rounded-[200px] shrink-0 size-[48px]" data-name="Icon">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[9.38%_9.38%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7499 18.7498">
            <path d={svgPaths.p240b44c0} fill="var(--fill-0, #007DB8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Text+Icon">
      <Icon9 />
      <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[28px] min-w-full relative shrink-0 text-[#374151] text-[20px] text-center tracking-[-0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get a call
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.
      </p>
    </div>
  );
}

function ActionText1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Action+text">
      <TextIcon1 />
      <div className="bg-[#fde8ea] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[14px] relative rounded-[4px] shrink-0" data-name="Mo Final Schedule Call CTA">
        <div aria-hidden="true" className="absolute border border-[#f8bbc0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#ce202f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Schedule a call
        </p>
        <div className="relative shrink-0 size-[20px]" data-name="Right Icon">
          <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.25">
              <path d={svgPaths.p22e1ce00} fill="var(--fill-0, #CE202F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[383px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center overflow-clip px-[48px] py-[24px] relative rounded-[inherit] size-full">
        <ActionText1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)]" />
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full">
      <Content14 />
      <Content15 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Frame140 />
      <Frame141 />
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[112px] py-[64px] relative size-full">
          <Container8 />
        </div>
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

function Container9() {
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

function Container12() {
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

function Container13() {
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

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Resources</p>
      </div>
      <List2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading() {
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

function Container16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <LinkFollowPodsOnFacebook />
      <LinkFollowPodsOnInstagram />
      <LinkFollowPodsOnYouTube />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[116px]" data-name="Container">
      <Heading />
      <Container16 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Country/Language</p>
      </div>
    </div>
  );
}

function Container19() {
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
          <Container19 />
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

function Container20() {
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

function Container21() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16px] items-start right-[7.91px] top-[calc(50%+2px)] w-[12px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <OptionsSelectCountryLanguage />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[180px]" data-name="Container">
      <Heading2 />
      <Container18 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[64px] h-[324px] items-start max-w-[1200px] pb-[64px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container11 />
      <Container15 />
      <Container17 />
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

function Button() {
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
      <Button />
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

function Container22() {
  return (
    <div className="content-stretch flex h-[41px] items-start justify-center relative shrink-0" data-name="Container">
      <List3 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-center px-[404.16px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11.625px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">© 2006 - 2025 PODS Enterprises LLC. All rights reserved. PODS® is a registered trademark of PODS Enterprises LLC.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[0.48px] pr-[0.5px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] mb-0">{`*Offer available for new orders only. Customer receives 25% off local delivery and redelivery/final pick-up fees and first month's rental. Must mention promotional code at time of order. Cannot be combined with any`}</p>
        <p className="leading-[18px]">other offer. Offer void where prohibited by law. Available for a limited time, only at participating locations. Excludes special and exclusive promotions.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[68px] items-start justify-center max-w-[1200px] py-[16px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col h-[756px] items-center py-[65px] relative shrink-0 w-full" data-name="Footer">
      <Container9 />
      <Container10 />
      <Container22 />
      <Background />
      <Container23 />
    </div>
  );
}

export default function DMovingPage() {
  return (
    <>
      {/* Mobile-only fixed header */}
      <div className="fixed left-0 top-0 w-full z-30 lg:hidden">
        <MasterHeaderSectionNav activePage="moving" />
      </div>
      <div className="hidden lg:block w-full" data-name="D. Moving Page">
        <Hero />
        <TransparentPricing />
        <Frame149 />
        <Features />
        <ContainerWidget />
        <Frame181 />
        <Features1 />
        <Cta />
        <Frame156 />
        <Cta1 />
        <Footer />
      </div>
      <div className="block lg:hidden overflow-x-hidden w-full">
        <MMovingPage />
      </div>
    </>
  );
}