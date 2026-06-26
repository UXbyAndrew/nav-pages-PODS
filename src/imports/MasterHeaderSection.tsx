import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import svgPaths from "./svg-berzt8rqbr";
import mobileSvg from "./svg-wof3zpi9z8";
import menuSvg from "./svg-whgorm1za6";
import Spe from "./Spe";
import FlagComponent from "./Frame10125906";

// ─── DESKTOP COMPONENTS ──────────────────────────────────────────────────────

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
    <div className="bg-[#083544] h-[44px] relative rounded-[12px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)] w-full" data-name=".Primary RIbbon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="w-full max-w-[1200px]">
          <div className="content-stretch flex items-center justify-between px-[18px] py-[12px] relative size-full">
            <RibbonDetails />
          </div>
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
    <Link to="/" className="content-stretch flex flex-col h-[28px] items-center justify-center overflow-clip relative shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] shrink-0 no-underline" data-name="Nav Logo">
      <Component210163PodsLogoSvg />
    </Link>
  );
}

function Frame({ activePage }: { activePage?: string }) {
  const isMovingActive = activePage === "moving";
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0">
      <Link
        to="/moving"
        className={`content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0 transition-colors no-underline ${isMovingActive ? "pointer-events-none cursor-default" : "cursor-pointer"}`}
        data-name="HP Moving"
        onClick={isMovingActive ? (e) => e.preventDefault() : undefined}
      >
        <div
          className={`flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap transition-colors ${isMovingActive ? "text-[#007DB8]" : "text-[#6b7280] hover:text-[#003f5c]"}`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[16px]">Moving</p>
        </div>
      </Link>
      <Link
        to="/storage"
        className={`content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0 transition-colors no-underline ${activePage === "storage" ? "pointer-events-none cursor-default" : "cursor-pointer"}`}
        data-name="HP Storage"
        onClick={activePage === "storage" ? (e) => e.preventDefault() : undefined}
      >
        <div
          className={`flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap transition-colors ${activePage === "storage" ? "text-[#007DB8]" : "text-[#6b7280] hover:text-[#003f5c]"}`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[16px]">Storage</p>
        </div>
      </Link>
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0 cursor-pointer transition-colors" data-name="HP Business">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] hover:text-[#003f5c] text-[14px] whitespace-nowrap transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Business Solutions</p>
        </div>
      </div>
    </div>
  );
}

function Frame2({ activePage }: { activePage?: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <NavLogo />
      <Frame activePage={activePage} />
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

function Frame5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f9fafb] transition-colors">
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Flag() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <FlagComponent />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame 6">
      <Flag />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">EN</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame 8">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0 cursor-pointer" data-name="Frame 7">
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Frame3({ onGetQuote, isQuoteOpen, showQuoteBtn }: { onGetQuote: () => void; isQuoteOpen: boolean; showQuoteBtn: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame4 />
      <AnimatePresence>
        {showQuoteBtn && (
          <motion.div
            initial={{ x: 48, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 48, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            <div
              className={`content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors ${
                isQuoteOpen
                  ? "bg-[#f17781]"
                  : "bg-[#ce202f] hover:bg-[#b71c2a]"
              }`}
              data-name="HP Nav CTA"
              onClick={onGetQuote}
            >
              <div
                aria-hidden="true"
                className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] ${
                  isQuoteOpen ? "border-[#ef606c]" : "border-[#9b0000]"
                }`}
              />
              <p
                className={`font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[12px] whitespace-nowrap ${
                  isQuoteOpen ? "text-[#f8bbc0]" : "text-white"
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Get a Quote
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Frame1({ onGetQuote, isQuoteOpen, showQuoteBtn }: { onGetQuote: () => void; isQuoteOpen: boolean; showQuoteBtn: boolean }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame3 onGetQuote={onGetQuote} isQuoteOpen={isQuoteOpen} showQuoteBtn={showQuoteBtn} />
      <div className="content-stretch flex flex-col items-end justify-center pl-[8px] relative shrink-0" data-name="Lang Select">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
        <Frame7 />
      </div>
    </div>
  );
}

function Menu({ activePage, onGetQuote, isQuoteOpen, showQuoteBtn }: { activePage?: string; onGetQuote: () => void; isQuoteOpen: boolean; showQuoteBtn: boolean }) {
  return (
    <div className="absolute left-0 right-0 top-0 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="bg-white content-stretch flex items-center justify-between px-[18px] py-[12px] rounded-[12px] relative" data-name="Menu">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_24px_0px_rgba(16,24,40,0.05),0px_8px_24px_0px_rgba(16,24,40,0.1)]" />
          <Frame2 activePage={activePage} />
          <div className="content-stretch flex flex-col gap-[8px] items-start opacity-0 relative shrink-0 w-[290px]" data-name="HP AI Search Field">
            <InputField />
          </div>
          <Frame1 onGetQuote={onGetQuote} isQuoteOpen={isQuoteOpen} showQuoteBtn={showQuoteBtn} />
        </div>
      </div>
    </div>
  );
}

function MenuGroupContainer({ activePage, onGetQuote, isQuoteOpen, showQuoteBtn }: { activePage?: string; onGetQuote: () => void; isQuoteOpen: boolean; showQuoteBtn: boolean }) {
  return (
    <div className="h-[104px] max-w-[1200px] relative shrink-0 w-full" data-name="Menu group Container">
      <Promo />
      <Menu activePage={activePage} onGetQuote={onGetQuote} isQuoteOpen={isQuoteOpen} showQuoteBtn={showQuoteBtn} />
    </div>
  );
}

// ─── MOBILE COMPONENTS ───────────────────────────────────────────────────────

function MobilePodsLogo() {
  return (
    <div className="h-[22px] relative shrink-0 w-[99px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 22">
        <g clipPath="url(#clip0_mobile_logo)">
          <path d={mobileSvg.p61c1200} fill="#CE202F" />
          <path d={mobileSvg.p2f967400} fill="#CE202F" />
          <path d="M24.4115 0H0V22H24.4115V0Z" fill="#CE202F" />
          <path d="M99 0H74.6332V22H99V0Z" fill="#CE202F" />
          <path d={mobileSvg.p2cebc900} fill="white" />
          <path d={mobileSvg.p21fe1db0} fill="white" />
          <path d={mobileSvg.p4129880} fill="white" />
          <path d={mobileSvg.p1d1a7900} fill="white" />
          <path d={mobileSvg.p3cf0d300} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_mobile_logo">
            <rect fill="white" height="22" width="99" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MobileRibbon() {
  return (
    <div className="bg-[#083544] h-[44px] relative rounded-[12px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center justify-center min-h-px min-w-px relative">
            <div className="relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.5%_3.13%_3.13%_12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8748 16.8748">
                  <path d={svgPaths.p2e6fc800} fill="white" />
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
        </div>
      </div>
    </div>
  );
}

function MobileNavBar({
  onOpen,
  bottomRadius,
  bottomBorderOpacity,
  cardShadow,
  showQuoteBtn,
}: {
  onOpen: () => void;
  bottomRadius: MotionValue<number>;
  bottomBorderOpacity: MotionValue<number>;
  cardShadow: MotionValue<string>;
  showQuoteBtn: boolean;
}) {
  return (
    <motion.div
      className="bg-white relative w-full"
      style={{
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: bottomRadius,
        borderBottomRightRadius: bottomRadius,
        boxShadow: cardShadow,
      }}
    >
      {/* Top + side border (always visible) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          borderTopWidth: 1.5,
          borderLeftWidth: 1.5,
          borderRightWidth: 1.5,
          borderStyle: 'solid',
          borderColor: '#e5e7eb',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        }}
      />
      {/* Bottom border — fades in as you scroll */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 border-b border-[#e5e7eb] pointer-events-none"
        style={{ opacity: bottomBorderOpacity }}
      />
      <div className="content-stretch flex items-center justify-between px-[18px] py-[14px] relative">
        {/* Left: hamburger + logo */}
        <div className="flex gap-[16px] h-[22px] items-center shrink-0">
          <button
            onClick={onOpen}
            className="relative size-[20px] bg-transparent border-0 p-0 cursor-pointer flex items-center justify-center"
            aria-label="Open menu"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M3.125 10H16.875" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.125 5H16.875" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.125 15H16.875" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link to="/" className="no-underline flex items-center">
            <MobilePodsLogo />
          </Link>
        </div>
        {/* Right: search + animated Get a Quote */}
        <div className="flex items-center gap-[8px] overflow-hidden">
          <motion.div layout transition={{ type: "spring", stiffness: 350, damping: 30 }} className="shrink-0">
            <div className="bg-white flex items-center p-[10px] relative rounded-[4px] cursor-pointer">
              <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
              <div className="relative size-[20px]">
                <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
                    <path d={mobileSvg.p362cbd80} fill="#6B7280" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          <AnimatePresence>
            {showQuoteBtn && (
              <motion.div
                className="shrink-0"
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 120, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              >
                <div className="bg-[#ce202f] flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative rounded-[4px] cursor-pointer">
                  <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
                  <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Get a Quote
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function MobileDrawer({ activePage, onClose }: { activePage?: string; onClose: () => void }) {
  const itemCls = "no-underline block w-full border-b border-[#e5e7eb] cursor-pointer";
  const iconBox = "bg-white flex items-center p-[6px] relative rounded-[4px] shrink-0";
  const iconBorder = "absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]";
  const chevron = (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[21.88%_21.87%_21.87%_21.87%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00028 9.00028">
          <path d={menuSvg.p19e6c200} fill="#6B7280" />
        </svg>
      </div>
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/40 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-full max-w-[375px] bg-white z-[70] flex flex-col overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-[16px] py-[16px] border-b border-[#e5e7eb] shrink-0">
          <div className="flex gap-[8px] items-center">
            <button
              onClick={onClose}
              className="relative size-[20px] bg-transparent border-0 p-0 cursor-pointer flex items-center justify-center"
              aria-label="Close menu"
            >
              <div className="absolute inset-[18.75%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5007 12.5007">
                  <path d={menuSvg.p3e5fcf0} fill="#6B7280" />
                </svg>
              </div>
            </button>
            <Link to="/" onClick={onClose} className="no-underline flex items-center">
              <MobilePodsLogo />
            </Link>
          </div>
          <div className="bg-white flex gap-[8px] items-center px-[12px] py-[12px] relative rounded-[4px] cursor-pointer shrink-0">
            <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
            <div className="relative size-[20px]">
              <div className="absolute inset-[9.38%_9.37%_9.37%_9.37%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
                  <path d={menuSvg.p842a692} fill="#6B7280" />
                </svg>
              </div>
            </div>
            <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#6b7280] text-[14px] leading-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Log In</span>
          </div>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto">
          {/* Moving */}
          <Link to="/moving" onClick={onClose} className={itemCls}>
            <div className="flex gap-[14px] items-center px-[20px] pt-[10px] pb-[20px]">
              <div className={iconBox}>
                <div aria-hidden="true" className={iconBorder} />
                <div className="relative size-[20px]">
                  <div className="absolute inset-[6.26%_9.38%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 17.4954">
                      <path d={menuSvg.p2141a700} fill="#6B7280" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#4b5563] text-[14px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Moving</p>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#6b7280] text-[12px] leading-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>PODZilla gobbles all your stuff</p>
              </div>
              {chevron}
            </div>
          </Link>

          {/* Storage */}
          <Link to="/storage" onClick={onClose} className={itemCls}>
            <div className="flex gap-[14px] items-center px-[20px] py-[20px]">
              <div className={iconBox}>
                <div aria-hidden="true" className={iconBorder} />
                <div className="relative size-[20px]">
                  <div className="absolute inset-[15.61%_3.05%_21.87%_3.13%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7653 12.5034">
                      <path d={menuSvg.p287ba100} fill="#6B7280" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#4b5563] text-[14px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Storage</p>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#6b7280] text-[12px] leading-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>Your stuff + Our container</p>
              </div>
              {chevron}
            </div>
          </Link>

          {/* Business Solutions */}
          <div className="block w-full border-b border-[#e5e7eb] cursor-pointer">
            <div className="flex gap-[14px] items-center px-[20px] py-[20px]">
              <div className={iconBox}>
                <div aria-hidden="true" className={iconBorder} />
                <div className="relative size-[20px]">
                  <div className="absolute inset-[6.25%_3.13%_12.5%_3.13%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 16.2508">
                      <path d={menuSvg.p2ffdcc00} fill="#6B7280" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#4b5563] text-[14px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Business Solutions</p>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#6b7280] text-[12px] leading-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>Need 50 Containers?</p>
              </div>
              {chevron}
            </div>
          </div>

          {/* Contact */}
          <div className="block w-full border-b border-[#e5e7eb] cursor-pointer">
            <div className="flex gap-[14px] items-center px-[20px] py-[20px]">
              <div className={iconBox}>
                <div aria-hidden="true" className={iconBorder} />
                <div className="relative size-[20px]">
                  <div className="absolute inset-[9.38%_9.37%_3.13%_9.38%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2501 17.5">
                      <path d={menuSvg.p246f200} fill="#6B7280" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#4b5563] text-[14px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Contact</p>
                <div className="font-['Open_Sans:Regular',sans-serif] font-normal text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="text-[12px]">
                    <span className="text-[#6b7280] leading-[20px]">Still need help? Call us at </span>
                    <span className="text-[#007db8] underline leading-[20px]">1-800-234-2345</span>
                  </p>
                </div>
              </div>
              {chevron}
            </div>
          </div>
        </div>

        {/* Language selector */}
        <div className="shrink-0 px-[16px] pb-[22px] pt-[12px]">
          <div className="bg-white p-[8px] rounded-[24px] border border-[#e5e7eb] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08)]">
            <div className="flex gap-[14px] items-center px-[12px] py-[10px]">
              {/* Flag */}
              <div className={iconBox}>
                <div aria-hidden="true" className={iconBorder} />
                <div className="flex flex-col items-center justify-center overflow-clip relative rounded-full shrink-0 size-[20px]">
                  <div className="bg-white h-[20px] overflow-clip relative rounded-[2px] shrink-0 w-[26.667px]">
                    <div className="absolute h-[20px] left-0 top-0 w-[26.667px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.667 20">
                        <g>
                          <path clipRule="evenodd" d={menuSvg.p1f533b00} fill="#E31D1C" fillRule="evenodd" />
                          <path d={menuSvg.p21b0de0} fill="#F7FCFF" />
                          <rect fill="#2E42A5" height="11.6667" width="15" x="0.000327587" />
                          <path d={menuSvg.p5d1b900} fill="#F7FCFF" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#4b5563] text-[14px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Select your language:</p>
                <div className="flex gap-[5px] h-[16px] items-start">
                  <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#6b7280] text-[12px] leading-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>English</span>
                  <div className="bg-[#f3f3f7] flex items-center justify-center px-[2px] py-px rounded-[2px]">
                    <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#6b7280] text-[10px] leading-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Default</span>
                  </div>
                </div>
              </div>
              {/* Ellipsis dots */}
              <div className="relative shrink-0 size-[16px]">
                <div className="absolute inset-[45.31%_18.75%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1.5">
                    <path d={menuSvg.p2944b1f0} fill="#6B7280" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function MasterHeaderSection({ activePage }: { activePage?: string }) {
  const [showSpe, setShowSpe] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showQuoteBtn, setShowQuoteBtn] = useState(false);
  const toggleSpe = () => setShowSpe((prev) => !prev);
  const location = useLocation();

  // Scroll-driven animation for mobile nav
  const { scrollY } = useScroll();

  // Bottom corners of the white nav card: 0 → 12px (square → fully rounded)
  const bottomRadius = useTransform(scrollY, [0, 50], [0, 12]);
  // Bottom border fades in as card lifts off
  const bottomBorderOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  // Dark teal bg behind the nav card fades out (Frame3 equivalent)
  const darkBgColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(8, 53, 68, 1)", "rgba(8, 53, 68, 0)"]
  );
  // Outer wrapper background: covers the ribbon corners at scroll=0, fades away
  const outerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(8, 53, 68, 1)", "rgba(8, 53, 68, 0)"]
  );
  // Outer padding: 0 at top (full-bleed) → 8px when scrolled (floating card look)
  const outerPaddingX = useTransform(scrollY, [0, 50], [0, 8]);
  const outerPaddingTop = useTransform(scrollY, [0, 50], [0, 8]);
  // Gap between ribbon and nav card: 0 at top → 4px when scrolled
  const navCardMarginTop = useTransform(scrollY, [0, 50], [0, 4]);
  // Drop shadow on the white card: none at top → visible when scrolled
  const cardShadow = useTransform(
    scrollY,
    [0, 50],
    [
      "0px 0px 0px 0px rgba(16, 24, 40, 0)",
      "0px 8px 24px 0px rgba(16, 24, 40, 0.12)",
    ]
  );

  // Show "Get a Quote" button on all pages when hero scrolls out of view
  useEffect(() => {
    setShowQuoteBtn(false);
    const observers: IntersectionObserver[] = [];
    const timer = setTimeout(() => {
      const heroes = document.querySelectorAll('[data-page-hero]');
      if (!heroes.length) return;
      heroes.forEach((hero) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
              setShowQuoteBtn(true);
            } else if (entry.isIntersecting || entry.boundingClientRect.top >= 0) {
              setShowQuoteBtn(false);
            }
          },
          { threshold: 0 }
        );
        observer.observe(hero);
        observers.push(observer);
      });
    }, 50);
    return () => {
      clearTimeout(timer);
      observers.forEach((o) => o.disconnect());
    };
  }, [location.pathname]);

  return (
    <div className="w-full relative">
      {/* ── Desktop nav (lg+) ── */}
      <div className="hidden lg:flex flex-col gap-[8px] items-center pt-[8px] px-[16px]">
        <PrimaryRIbbon />
        <MenuGroupContainer activePage={activePage} onGetQuote={toggleSpe} isQuoteOpen={showSpe} showQuoteBtn={showQuoteBtn} />
        <AnimatePresence>
          {showSpe && (
            <>
              <motion.div
                className="fixed inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setShowSpe(false)}
              />
              <motion.div
                className="absolute top-[144px] left-0 right-0 flex justify-center z-50 pointer-events-none"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="w-full max-w-[1200px] flex justify-end">
                  <div className="w-[440px] h-[310px] pointer-events-auto">
                    <Spe onClose={() => setShowSpe(false)} />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile nav (<lg) ── */}
      {/* outerBg fills behind ribbon corners at scroll=0; padding expands as user scrolls */}
      <motion.div
        className="flex lg:hidden flex-col w-full"
        style={{
          backgroundColor: outerBg,
          paddingLeft: outerPaddingX,
          paddingRight: outerPaddingX,
          paddingTop: outerPaddingTop,
        }}
      >
        <MobileRibbon />
        {/* Dark teal bg (Frame3) behind the white card — fades as user scrolls */}
        <motion.div style={{ backgroundColor: darkBgColor, marginTop: navCardMarginTop }}>
          <MobileNavBar
            onOpen={() => setMobileMenuOpen(true)}
            bottomRadius={bottomRadius}
            bottomBorderOpacity={bottomBorderOpacity}
            cardShadow={cardShadow}
            showQuoteBtn={showQuoteBtn}
          />
        </motion.div>
      </motion.div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileDrawer activePage={activePage} onClose={() => setMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}