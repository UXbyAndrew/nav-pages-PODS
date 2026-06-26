import svgPaths from "./svg-g8rnbnt24f";
import MasterHeaderSectionNew from "./MasterHeaderSection";
import MHomepage from "./MHomepage";
import imgAuthorImage from "figma:asset/adf4b395ffc06132311079dda4223ac641771748.png";
import imgMainImage from "figma:asset/cceb1a31b1c05f7988aca8997e11aebb2632d386.png";
import imgTravelSafelyAvif from "figma:asset/0e9275e9e4bf15bc058ce5fdbf1f97a496618ec4.png";
import imgA16FootPodsContainer from "figma:asset/03681f2619aeb15927981bf9ccd56dfd54b2beab.png";
import imgPods12FootContainer from "figma:asset/a28387226d783ecde3e14d8e8eafa0a2c97600a4.png";
import imgTruckSection from "figma:asset/80e06aa4d8de6eb5552d706af3b1c35d7f7c9441.png";
import imgLogoUsn1 from "figma:asset/de0ab2133d302c405bb4f90e92a8511c9bb48dc7.png";
import imgMoveOrgLogo from "figma:asset/8d49d92c54826c4aad58e66a9326a8d2cc597673.png";
import imgUsaTodayLogo from "figma:asset/9c11eea10b6314ed424c5452caa267c6a82e18ed.png";
import imgNewsweekLogo from "figma:asset/fdb3a6dc91d2e5a6b5e8540598facb35b1499be9.png";
import imgRectangle6 from "figma:asset/583642533eb9c2c91313d7c7288a87fbd2180ff8.png";
import imgRectangle9 from "figma:asset/53e1bfdabc003d91c6c3c6cf910db77906460fc2.png";
import imgRectangle12 from "figma:asset/d2b0327fb31d0cba47345df219fa384621b42709.png";
import imgRectangle11 from "figma:asset/5ff75437bc9f2a247643cf51dc3f54ecd57300ec.png";
import imgRectangle13 from "figma:asset/d15c43f58c22dae53e24f7994556ad77a5059546.png";
import imgRectangle14 from "figma:asset/afd953233e09f894799175ced3395c83c44681de.png";
import imgRectangle16 from "figma:asset/748fb36ff863d21160fedba7c8b43db58c8903e7.png";
import imgRectangle7 from "figma:asset/510915757f9b55aea29b700648c67f988b558bc8.png";
import imgRectangle5 from "figma:asset/915176358e400a178fdf2135f6ca5f0ab5c41b68.png";
import imgYouCanCrossLearnHowToDriveAMovingTruckOffYourList from "figma:asset/b6a4dcc0e1577c00f816316d106dedb4b9673fd2.png";
import imgTrackYourMoveAndEasilyUpdateDeliveryOrPickupDates from "figma:asset/b1fcd694ed7ef69c0deb62fe049ad2a41298c1d8.png";
import imgYouHaveTheOptionToStoreYourBelongingsAtOurStorageCentersWhileYoureBetweenHomes from "figma:asset/907bfcfe124877e999cbd841519b8fe77d889efb.png";
import imgBottomQuote from "figma:asset/4bb8907c1201ad87f16c067afefbbde00b0c7e56.png";
import imgPodsLogo from "figma:asset/92dc3e4d13f0281775a7bac82130f3aa11050644.png";

function HeadlineLockup() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start leading-[0] min-h-px min-w-px relative" data-name="Headline Lockup">
      <div className="flex flex-col font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#007db8] text-[56px] tracking-[-1.12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[60px]">Make your next move your easiest one yet.</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#6b7280] text-[24px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">{`Take the stress out of moving with PODS' flexible container rentals.`}</p>
      </div>
    </div>
  );
}

function AuthorImage() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[20px]" data-name="Author Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px]">
        <div className="absolute bg-white inset-0 rounded-[50px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[50px] size-full" src={imgAuthorImage} />
      </div>
    </div>
  );
}

function QuoteAuthorContainer() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Quote Author Container">
      <AuthorImage />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Tracy Klempner</p>
      </div>
    </div>
  );
}

function QuoteTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Quote Text Container">
      <QuoteAuthorContainer />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">"PODS was awesome! No hidden fees, upfront pricing and great customer service."</p>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_43083)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_43083">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_43083)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_43083">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_43083)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_43083">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_43083)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_43083">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_43083)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FBBF24)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_43083">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RatingContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Rating Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
              <path d={svgPaths.p30303900} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star />
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
              <path d={svgPaths.p30303900} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star1 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
              <path d={svgPaths.p30303900} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star2 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
              <path d={svgPaths.p30303900} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star3 />
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Media / Rating">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
              <path d={svgPaths.p30303900} fill="var(--fill-0, #F3F4F6)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star4 />
      </div>
    </div>
  );
}

function QuoteContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Quote Content">
      <QuoteTextContainer />
      <RatingContainer />
    </div>
  );
}

function QuoteContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Quote Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <QuoteContent />
    </div>
  );
}

function QuotesWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[399px]" data-name="Quotes Wrapper">
      <QuoteContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <HeadlineLockup />
      <QuotesWrapper />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#083544] text-[14px] tracking-[-0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">How can we help?</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[20px] underline">Try PODS for business</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Link />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Moving</p>
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[64px] relative rounded-[4px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#cbcbcb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_8px_0px_#cbcbcb]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center min-w-[inherit] p-[13px] relative size-full">
          <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#636363] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[10px] shrink-0 size-[20px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-[#007db8] rounded-[6px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Storage</p>
      </div>
    </div>
  );
}

function Radio1() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] min-h-px min-w-[64px] relative rounded-[4px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#007db8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center min-w-[inherit] p-[13px] relative size-full">
          <Border />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Both</p>
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-[64px] relative rounded-[4px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#cbcbcb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_8px_0px_#cbcbcb]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center min-w-[inherit] p-[13px] relative size-full">
          <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#636363] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Radiogroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Radiogroup">
      <Radio />
      <Radio1 />
      <Radio2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Radiogroup />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#083544] text-[14px] tracking-[-0.14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Where are you located?</p>
      </div>
    </div>
  );
}

function SvgZipCodeAdornment() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="SVG - Zip code adornment">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
        <g id="SVG - Zip code adornment">
          <path d={svgPaths.p19650900} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <SvgZipCodeAdornment />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[0.16px] items-center max-h-[32px] relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[0.16px] items-start max-h-[32px] pr-[8px] relative shrink-0" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-42 overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Enter ZIP code</p>
      </div>
    </div>
  );
}

function InputPostalCode() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[32px] items-start min-h-px min-w-px overflow-clip pb-[5px] pt-[4px] relative" data-name="Input - postal code">
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[8px] relative size-full">
          <Margin />
          <InputPostalCode />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ce202f] flex-[1_0_0] min-h-px min-w-[64px] relative rounded-[4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[17px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[22px]">Start my quote</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="h-full min-w-[68px] relative shrink-0" data-name="Button:margin">
      <div className="flex flex-col justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] p-[2px] relative size-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="max-w-[400px] min-h-[54px] relative rounded-[4px] shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[#cbcbcb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] p-px relative size-full">
          <Container9 />
          <div className="flex flex-row items-center self-stretch">
            <ButtonMargin />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Form />
    </div>
  );
}

function QuoteWidget() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[191px] items-start left-[32px] overflow-clip p-[16px] rounded-[12px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)] top-[32px] w-[400px]" data-name="Quote Widget">
      <Container1 />
      <Container7 />
    </div>
  );
}

function Fill() {
  return <div className="absolute bg-white h-[6px] left-0 rounded-[50px] top-0 w-[80px]" data-name="Fill" />;
}

function Bg() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] h-[6px] left-0 rounded-[50px] top-0 w-[100px]" data-name="BG" />;
}

function ProgressBar() {
  return (
    <div className="h-[6px] relative shrink-0 w-[100px]" data-name="Progress Bar">
      <Fill />
      <Bg />
    </div>
  );
}

function Pill() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[6px] rounded-[50px] shrink-0 w-[12px]" data-name="Pill" />;
}

function Pill1() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[6px] rounded-[50px] shrink-0 w-[12px]" data-name="Pill" />;
}

function Pagination() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[29px] content-stretch flex gap-[8px] items-center left-1/2" data-name="Pagination">
      <ProgressBar />
      <Pill />
      <Pill1 />
    </div>
  );
}

function Previous() {
  return (
    <div className="bg-[rgba(249,250,251,0.6)] content-stretch flex items-center p-[8px] relative rounded-[50px] shrink-0" data-name="Previous">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0004 10.0006">
            <path d={svgPaths.p2ea5b600} fill="var(--fill-0, #374151)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Next() {
  return (
    <div className="bg-[rgba(249,250,251,0.6)] content-stretch flex items-center p-[8px] relative rounded-[50px] shrink-0" data-name="Next">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0004 10.0006">
            <path d={svgPaths.p16866180} fill="var(--fill-0, #374151)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Next1() {
  return (
    <div className="bg-[rgba(249,250,251,0.6)] content-stretch flex items-center p-[8px] relative rounded-[50px] shrink-0" data-name="Next">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[12.5%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
            <path d={svgPaths.p3a4cf580} fill="var(--fill-0, #374151)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex gap-[8px] items-center right-[16px]" data-name="Controls">
      <Previous />
      <Next />
      <Next1 />
    </div>
  );
}

function MainImage() {
  return (
    <div className="h-[513px] max-h-[526px] max-w-[1232px] overflow-clip relative rounded-[8px] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08),0px_6px_15px_-2px_rgba(16,24,40,0.08)] shrink-0 w-[1202px]" data-name="Main Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgMainImage} />
        <div className="absolute bg-gradient-to-b from-[68.686%] from-[rgba(0,0,0,0)] inset-0 rounded-[8px] to-[93.75%] to-[rgba(8,53,68,0.6)]" />
      </div>
      <QuoteWidget />
      <Pagination />
      <Controls />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center rounded-[inherit] size-full">
        <div className="w-full max-w-[1200px]">
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center py-[64px] relative size-full">
            <HeaderContainer />
            <MainImage />
          </div>
        </div>
      </div>
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
    <div className="h-[44px] relative shrink-0 w-full" data-name=".Primary RIbbon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="w-full max-w-[1200px] px-[18px]">
          <div className="bg-[#083544] h-[44px] relative rounded-[12px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)]">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-center px-[18px] py-[12px] relative size-full">
                <RibbonDetails />
              </div>
            </div>
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
    <div className="content-stretch flex flex-col h-[28px] items-center justify-center overflow-clip relative shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] shrink-0" data-name="Nav Logo">
      <Component210163PodsLogoSvg />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="HP Moving">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Moving</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="HP Storage">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Storage</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative shrink-0" data-name="HP Business">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Business Solutions</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <NavLogo />
      <Frame19 />
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

function Frame28() {
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

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame27 />
      <div className="bg-[#ce202f] content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="HP Nav CTA">
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

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[38.889px] shrink-0 size-[14px]">
      <div className="bg-white h-[14px] overflow-clip relative rounded-[2px] shrink-0 w-[18.667px]" data-name="Media / Flags">
        <Flag />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative shrink-0">
      <Frame31 />
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

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame24 />
      <div className="content-stretch flex flex-col items-end justify-center pl-[8px] relative shrink-0" data-name="Lang Select">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
        <Frame30 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute bg-white left-0 right-0 top-0 flex items-center justify-center" data-name="Menu">
      <div className="w-full max-w-[1200px] px-[18px]">
        <div className="bg-white content-stretch flex items-center justify-between px-[18px] py-[12px] rounded-[12px] relative" data-name="Menu Inner">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_24px_0px_rgba(16,24,40,0.05),0px_8px_24px_0px_rgba(16,24,40,0.1)]" />
          <Frame23 />
          <div className="content-stretch flex flex-col gap-[8px] items-start opacity-0 relative shrink-0 w-[290px]" data-name="HP AI Search Field">
            <InputField />
          </div>
          <Frame22 />
        </div>
      </div>
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
      <MasterHeaderSectionNew />
    </div>
  );
}

function Head() {
  return (
    <div data-page-hero className="content-stretch flex flex-col items-start pt-[124px] relative shrink-0 w-full" data-name="Head">
      <Container />
      <MasterHeaderSection />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#007db8] content-stretch flex items-center justify-center pb-px relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[32px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[48px]">1</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[20px] relative self-stretch shrink-0 z-[2]" data-name="Container">
      <Background />
      <div className="absolute bg-[#007db8] inset-[36.64%_60.82%_-36.64%_33.29%]" data-name="Background" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2b2b2b] text-[32px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[42px]">We deliver your container</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[27px] mb-0">{`Choose from 8', 12', or 16' weather-resistant`}</p>
        <p className="leading-[27px]">containers, delivered right to your door.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="Container">
      <Heading1 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[131px] isolate items-start max-w-[880px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#007db8] content-stretch flex items-center justify-center pb-px relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[32px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[48px]">2</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[20px] relative self-stretch shrink-0 z-[2]" data-name="Container">
      <Background1 />
      <div className="absolute bg-[#007db8] inset-[30.38%_60.82%_-30.38%_33.29%]" data-name="Background" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2b2b2b] text-[32px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[42px]">Pack at your own pace</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[27px] mb-0">Your first 30 days are included, then rent</p>
        <p className="leading-[27px] mb-0">monthly if needed. Need help loading? We can</p>
        <p className="leading-[27px]">connect you with pros.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="Container">
      <Heading2 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[158px] isolate items-start max-w-[880px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#007db8] content-stretch flex items-center justify-center pb-px relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[32px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[48px]">3</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[20px] relative self-stretch shrink-0 z-[2]" data-name="Container">
      <Background2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2b2b2b] text-[32px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[42px]">Next stop: your new home</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[27px] mb-0">{`We'll deliver to your new home whenever you're`}</p>
        <p className="leading-[27px] mb-0">ready. Need storage between homes? You have</p>
        <p className="leading-[27px] mb-0">the option to keep your container at one of our</p>
        <p className="leading-[27px]">secure Storage Centers.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="Container">
      <Heading3 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[185px] isolate items-start max-w-[880px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[45px] h-[564px] items-start relative shrink-0 w-[525px]">
      <Container13 />
      <Container17 />
      <Container21 />
    </div>
  );
}

function ButtonBtnMoving() {
  return (
    null
  );
}

function ButtonBtnStorage() {
  return (
    <div className="bg-white flex-[1_0_0] h-[53px] max-w-[238px] min-h-px min-w-[64px] relative rounded-br-[8px] rounded-tr-[8px]" data-name="Button - btnStorage">
      
      
    </div>
  );
}

function Container25() {
  return (
    null
  );
}

function TravelSafelyAvif() {
  return (
    <div className="aspect-[464/395] max-h-[395px] max-w-[464px] relative rounded-[16px] shrink-0 w-full" data-name="travel_safely.avif">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-13.82%] max-w-none top-0 w-[127.63%]" src={imgTravelSafelyAvif} />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <TravelSafelyAvif />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[50px] items-center justify-center min-h-px min-w-px relative">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center max-w-[1200px] relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function HiwSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="HIW Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-center px-[104px] py-[64px] relative size-full">
          <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[48px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[55px]">How PODS works</p>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#083544] w-full" data-name="Header Section">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[55px] mb-0">How many</p>
        <p className="leading-[55px]">containers?</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-0">{`Tell us how much stuff you have, and we'll estimate`}</p>
        <p className="leading-[24px]">the containers you need.</p>
      </div>
    </div>
  );
}

function ContCalc() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Cont Calc 50+">
      <div aria-hidden="true" className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize content-stretch flex flex-col items-start leading-[0] p-[12px] relative size-full text-[#083544]">
        <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="leading-[21px]">Long Move</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px]">over 50 miles</p>
        </div>
      </div>
    </div>
  );
}

function ContCalcUnder() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Cont Calc under 50">
      <div aria-hidden="true" className="absolute border-2 border-[#083544] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize content-stretch flex flex-col items-start leading-[0] p-[12px] relative size-full text-[#083544]">
        <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="leading-[21px]">Local Move</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px]">under 50 miles</p>
        </div>
      </div>
    </div>
  );
}

function ContCalcStore() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Cont Calc Store">
      <div aria-hidden="true" className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize content-stretch flex flex-col items-start leading-[0] p-[12px] relative size-full text-[#083544]">
        <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="leading-[21px]">Storage</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px]">only</p>
        </div>
      </div>
    </div>
  );
}

function ServiceOptions() {
  return (
    <div className="content-stretch flex gap-[8px] h-[66px] items-center max-w-[408px] relative shrink-0 w-full" data-name="Service Options">
      <ContCalc />
      <ContCalcUnder />
      <ContCalcStore />
    </div>
  );
}

function ServiceHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Service Header">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">What service do you need?</p>
      </div>
      <ServiceOptions />
    </div>
  );
}

function RoomsInfo() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] relative shrink-0 text-[#083544] w-[170px]" data-name="Rooms Info">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">Number of rooms</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Approx. 1,200 sqft</p>
      </div>
    </div>
  );
}

function RoomDecrement() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[7px] relative rounded-[8px] shrink-0" data-name="Room Decrement">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0069e5] text-[23px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[29px]">-</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] max-h-[28.010000228881836px] relative shrink-0 text-[#083544] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[28px]">3</p>
      </div>
    </div>
  );
}

function RoomIncrement() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[7px] relative rounded-[8px] shrink-0" data-name="Room Increment">
      <div aria-hidden="true" className="absolute border-2 border-[#007db8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0069e5] text-[23px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[29px]">+</p>
      </div>
    </div>
  );
}

function RoomsControl() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Rooms Control">
      <RoomDecrement />
      <Heading4 />
      <RoomIncrement />
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
      <div aria-hidden="true" className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize content-stretch flex flex-col items-start leading-[0] p-[12px] relative size-full text-[#083544]">
        <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="leading-[21px]">Light</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px] mb-0">Mostly boxes,</p>
          <p className="leading-[21px]">no large items</p>
        </div>
      </div>
    </div>
  );
}

function FurnishingOption1() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
      <div aria-hidden="true" className="absolute border-2 border-[#083544] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize content-stretch flex flex-col items-start leading-[0] p-[12px] relative size-full text-[#083544]">
        <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="leading-[21px]">Medium</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px] mb-0">A few large</p>
          <p className="leading-[21px]">items</p>
        </div>
      </div>
    </div>
  );
}

function FurnishingOption2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Furnishing Option">
      <div aria-hidden="true" className="absolute border border-[#979797] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="capitalize content-stretch flex flex-col items-start leading-[0] p-[12px] relative size-full text-[#083544]">
        <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          <p className="leading-[21px]">Heavy</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px] mb-0">Many large</p>
          <p className="leading-[21px]">items</p>
        </div>
      </div>
    </div>
  );
}

function FurnishingOptions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center max-w-[408px] relative shrink-0 w-full" data-name="Furnishing Options">
      <FurnishingOption />
      <FurnishingOption1 />
      <FurnishingOption2 />
    </div>
  );
}

function FurnishingSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Furnishing Section">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">How furnished is your space?</p>
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
    </div>
  );
}

function LeftSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Left Section">
      <HeaderSection />
      <ServiceSection />
    </div>
  );
}

function Component116FtContainerSvg() {
  return (
    <div className="aspect-[375/375.8696594238281] flex-[1_0_0] min-h-px min-w-px overflow-clip relative" data-name="1-16ft_container.svg">
      <div className="absolute inset-[22.35%_19.64%_42.71%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 262.89 151.629">
          <path d={svgPaths.p33261980} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.05%_19.64%_22.35%_36.76%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188.783 197.921">
          <path d={svgPaths.p16650380} fill="var(--fill-0, #C2C6C6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.27%_61.8%_26.24%_36.76%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.22582 58.5428">
          <path d={svgPaths.p1b0a8770} fill="var(--fill-0, #C41633)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.5%_63.24%_22.35%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.1074 130.843">
          <path d={svgPaths.p2f310700} fill="var(--fill-0, #E9E9EA)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.9%_65.19%_24.22%_21.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.8357 107.948">
          <path d={svgPaths.p1baf6f00} fill="var(--fill-0, #0069E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.06%_65.19%_26.49%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-0.41%_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.2678 93.8411">
            <path d={svgPaths.p1711e200} id="Vector" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[51.83%_65.19%_26.72%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-0.41%_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.2678 93.8411">
            <path d={svgPaths.p1711e200} id="Vector" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[67.58%_65.19%_24.94%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-1.16%_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.2668 33.1898">
            <path d={svgPaths.p9b34a00} id="Vector" stroke="var(--stroke-0, #0058C0)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[67.35%_65.19%_25.17%_21.68%]" data-name="Vector">
        <div className="absolute inset-[-1.16%_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.2668 33.1898">
            <path d={svgPaths.p9b34a00} id="Vector" stroke="var(--stroke-0, #4D96ED)" strokeMiterlimit="10" strokeWidth="0.869666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.48%_63.24%_22.37%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.89%_33.12%_36.42%_49.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3082 50.7359">
          <path d={svgPaths.p10816b80} fill="var(--fill-0, #222222)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.23%_33.14%_39.1%_49.79%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.9065 67.982">
          <path d={svgPaths.p22185980} fill="var(--fill-0, #CE2030)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.99%_33.6%_40.07%_50.21%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.0907 56.1436">
          <path d={svgPaths.p3655d580} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.87%_37.41%_41.74%_54.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.9533 45.087">
          <path d={svgPaths.p301e1600} fill="var(--fill-0, #222222)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.86%_33.44%_53.31%_66%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.40999 3.615">
          <path d={svgPaths.p354b7510} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.16%_33.09%_38.94%_49.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.4086 68.9861">
          <path d={svgPaths.p1efb1600} fill="var(--fill-0, #222222)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.48%_63.24%_22.37%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.1074 130.843">
          <path d={svgPaths.p3d8d4ef0} fill="var(--fill-0, #E9E9EA)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.35%_19.64%]" data-name="Vector">
        <div className="absolute inset-[-0.42%_-0.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264.63 242.002">
            <path d={svgPaths.p20c44700} id="Vector" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="1.73933" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[51.41%_63.24%_26.24%_19.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.1074 97.0023">
          <path d={svgPaths.p3ba94f00} fill="var(--fill-0, #E81D2D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.94%_69.71%_44.84%_26.51%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3679 13.9579">
          <path d={svgPaths.p1306700} fill="var(--fill-0, #CE2030)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.15%_69.78%_45.1%_26.6%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.665 11.9245">
          <path d={svgPaths.p2dc84800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ContCalcCta() {
  return (
    <div className="bg-[#ce202f] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Cont Calc CTA">
      <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Get a quote
          </p>
        </div>
      </div>
    </div>
  );
}

function ContainerInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[375px] relative shrink-0 w-full" data-name="Container Info">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[24px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[28.8px]">16ft Container</p>
      </div>
      <ContCalcCta />
    </div>
  );
}

function RightSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[68px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Right Section">
      <Component116FtContainerSvg />
      <ContainerInfo />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center max-w-[1200px] min-h-px min-w-px relative w-full" data-name="Main Container">
      <LeftSection />
      <RightSection />
    </div>
  );
}

function ContainerWidget() {
  return (
    <div className="bg-[#f5f5f7] h-[727px] max-h-[727px] relative shrink-0 w-full" data-name="Container Widget">
      <div className="flex flex-col items-center justify-center max-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[inherit] px-[104px] py-[64px] relative size-full">
          <MainContainer />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[48px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[55px]">Your Container</p>
      </div>
    </div>
  );
}

function A16FootPodsContainer() {
  return (
    <div className="h-[604px] max-w-[1000px] relative shrink-0 w-full" data-name="A 16 foot PODS container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgA16FootPodsContainer} />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">{`You're the only keyholder`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Your belongings stay private—no</p>
        <p className="leading-[20px]">movers handle your items, just you.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container30 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-2%_63%_88.75%_10%] items-start p-[7px]" data-name="Background">
      <Container29 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">Weather-resistant and secure</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Our steel-frame containers are</p>
        <p className="leading-[20px] mb-0">designed to keep your belongings</p>
        <p className="leading-[20px]">protected from the elements.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container32 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-9%_15.2%_88.14%_57.8%] items-start p-[7px]" data-name="Background">
      <Container31 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">Ground-level for easy loading</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">No ramps or stairs to navigate—just</p>
        <p className="leading-[20px]">walk right in and start packing.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container34 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[87%_54%_-4.55%_19%] items-start p-[7px]" data-name="Background">
      <Container33 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">Designed for flexibility</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#083544] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Convenient tie-down rings enable you</p>
        <p className="leading-[20px] mb-0">to secure your belongings for transit</p>
        <p className="leading-[20px]">with ropes or straps.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container36 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[79%_8%_4.44%_65%] items-start p-[7px]" data-name="Background">
      <Container35 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#007db8] bottom-[68.03%] content-stretch flex items-center justify-center left-[268px] rounded-[12px] top-[28%] w-[24px]" data-name="Background">
      <div className="bg-[#007db8] relative rounded-[10px] shrink-0 size-[20px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#007db8] bottom-[79.03%] content-stretch flex items-center justify-center left-[581px] rounded-[12px] top-[17%] w-[24px]" data-name="Background">
      <div className="bg-[#007db8] relative rounded-[10px] shrink-0 size-[20px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-[#007db8] bottom-[24.03%] content-stretch flex items-center justify-center left-[203px] rounded-[12px] top-[72%] w-[24px]" data-name="Background">
      <div className="bg-[#007db8] relative rounded-[10px] shrink-0 size-[20px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#007db8] bottom-[31.03%] content-stretch flex items-center justify-center left-[662px] rounded-[12px] top-[65%] w-[24px]" data-name="Background">
      <div className="bg-[#007db8] relative rounded-[10px] shrink-0 size-[20px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="aspect-[1000/604] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <A16FootPodsContainer />
      <div className="absolute inset-[6%_71.65%_71%_27.95%]" data-name="Border">
        <div aria-hidden="true" className="absolute border-l-2 border-r-2 border-solid border-white inset-0 pointer-events-none bg-[#4689f5]" />
      </div>
      <div className="absolute inset-[4%_40.5%_83%_59.1%]" data-name="Border">
        <div aria-hidden="true" className="absolute border-l-2 border-r-2 border-solid border-white inset-0 pointer-events-none" />
      </div>
      <div className="absolute bottom-[12.5%] left-[21.3%] right-[78.3%] top-3/4" data-name="Border">
        <div aria-hidden="true" className="absolute border-l-2 border-r-2 border-solid border-white inset-0 pointer-events-none" />
      </div>
      <div className="absolute inset-[68%_32.45%_20%_67.15%]" data-name="Border">
        <div aria-hidden="true" className="absolute border-l-2 border-r-2 border-solid border-white inset-0 pointer-events-none" />
      </div>
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 />
      <Background8 />
      <Background9 />
      <Background10 />
      <Background11 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1000px] min-w-[1000px] py-[64px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Background3 />
    </div>
  );
}

function ContainerBlock() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container Block">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[104px] relative size-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Pods12FootContainer() {
  return (
    <div className="aspect-[352/215] max-h-[234.5454559326172px] max-w-[384px] relative rounded-[20px] shrink-0 w-full" data-name="PODS 12 foot container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[4.76%] max-w-none top-0 w-[90.49%]" src={imgPods12FootContainer} />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="font-['Nunito_Sans:Black',sans-serif] font-black h-[38px] leading-[0] relative shrink-0 text-[#083544] tracking-[-3px] w-[71.94px]" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-0 text-[37.656px] top-[18px] w-[42.2px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[36px]">16</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-[49.3px] text-[32.344px] top-[19.5px] w-[22.84px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[36px]">ft</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[39.03px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px]">Our largest size, and a popular choice for moving a 3 to 4 bedroom home.</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container38 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.pc289880} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">{`16' x 8' x 8'`}</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.pe29c300} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">{`About the size of a 10'x15' storage unit or a 20' truck`}</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p1958a100} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">Fits 1,200 sqft</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container43 />
      <Container46 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container37 />
      <Container39 />
    </div>
  );
}

function Background12() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#007db8] content-stretch flex flex-col items-center left-1/2 px-[24px] py-[8px] rounded-bl-[4px] rounded-br-[4px] top-0 w-[192px]" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px]">Most Popular</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_0.707px_0.707px_-0.625px_rgba(0,0,0,0.04),0px_1.807px_1.807px_-1.25px_rgba(0,0,0,0.04),0px_3.622px_3.622px_-1.875px_rgba(0,0,0,0.04),0px_6.866px_6.866px_-2.5px_rgba(0,0,0,0.03),0px_13.647px_13.647px_-3.125px_rgba(0,0,0,0.03),0px_30px_30px_-3.75px_rgba(0,0,0,0.01)]" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative size-full">
          <Pods12FootContainer />
          <Frame3 />
          <Background12 />
        </div>
      </div>
    </div>
  );
}

function Pods12FootContainer1() {
  return (
    <div className="aspect-[352/215] max-h-[234.5454559326172px] max-w-[384px] relative rounded-[20px] shrink-0 w-full" data-name="PODS 12 foot container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[4.76%] max-w-none top-0 w-[90.49%]" src={imgPods12FootContainer} />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="font-['Nunito_Sans:Black',sans-serif] font-black h-[38px] leading-[0] relative shrink-0 text-[#083544] tracking-[-3px] w-[71.94px]" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-0 text-[37.656px] top-[18px] w-[42.2px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[36px]">12</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-[49.3px] text-[32.344px] top-[19.5px] w-[22.84px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[36px]">ft</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[39.03px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px]">A great choice for smaller and local apartment moves.</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container50 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.pc289880} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">{`12' x 8' x 8'`}</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.pe29c300} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">{`About the size of a 10'x10' storage unit or 15' truck`}</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p1958a100} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">Fits 500-800 sqft</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container55 />
      <Container58 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container49 />
      <Container51 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_0.707px_0.707px_-0.625px_rgba(0,0,0,0.04),0px_1.807px_1.807px_-1.25px_rgba(0,0,0,0.04),0px_3.622px_3.622px_-1.875px_rgba(0,0,0,0.04),0px_6.866px_6.866px_-2.5px_rgba(0,0,0,0.03),0px_13.647px_13.647px_-3.125px_rgba(0,0,0,0.03),0px_30px_30px_-3.75px_rgba(0,0,0,0.01)]" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative size-full">
          <Pods12FootContainer1 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Pods12FootContainer2() {
  return (
    <div className="aspect-[352/215] max-h-[234.5454559326172px] max-w-[384px] relative rounded-[20px] shrink-0 w-full" data-name="PODS 12 foot container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[4.76%] max-w-none top-0 w-[90.49%]" src={imgPods12FootContainer} />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="font-['Nunito_Sans:Black',sans-serif] font-black h-[38px] leading-[0] relative shrink-0 text-[#083544] tracking-[-3px] w-[50.94px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-0 text-[38.125px] top-[18px] w-[21.2px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[36px]">8</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-[28.3px] text-[32.344px] top-[19.5px] w-[22.84px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[36px]">ft</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[39.03px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px]">Perfect for apartment residents, college students, or downsizing.</p>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container62 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.pc289880} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">{`8' x 7' x 8'`}</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.pe29c300} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">{`About the size of a 5'x10' storage unit or 10' truck`}</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p1958a100} fill="var(--fill-0, #7D7D7D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px]">Fits up to 500 sqft</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container67 />
      <Container70 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container61 />
      <Container63 />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] shadow-[0px_0.707px_0.707px_-0.625px_rgba(0,0,0,0.04),0px_1.807px_1.807px_-1.25px_rgba(0,0,0,0.04),0px_3.622px_3.622px_-1.875px_rgba(0,0,0,0.04),0px_6.866px_6.866px_-2.5px_rgba(0,0,0,0.03),0px_13.647px_13.647px_-3.125px_rgba(0,0,0,0.03),0px_30px_30px_-3.75px_rgba(0,0,0,0.01)]" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative size-full">
          <Pods12FootContainer2 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function ContainerContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center max-w-[1200px] relative shrink-0 w-full" data-name="Container container">
      <BackgroundShadow />
      <BackgroundShadow1 />
      <BackgroundShadow2 />
    </div>
  );
}

function FIndYourFit() {
  return (
    <div className="bg-[#f5f5f7] relative shrink-0 w-full" data-name="FInd your fit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[75px] items-center px-[104px] py-[48px] relative size-full">
          <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[48px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[55px]">Find your fit</p>
          </div>
          <ContainerContainer />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[80px] items-start left-[calc(50%+48.99px)] top-[80px] w-[207px]" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black h-[80px] justify-center leading-[0] relative shrink-0 text-[#003f5c] text-[56px] text-shadow-[2px_3px_3px_rgba(0,0,0,0.3)] w-[189px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[40px] mb-0">million</p>
        <p className="leading-[40px]">moves</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[132px] left-0 top-[14px] w-[251px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black h-[160px] justify-center leading-[0] left-[calc(50%-102.5px)] text-[#003f5c] text-[160px] text-center text-shadow-[2px_3px_3px_rgba(0,0,0,0.3)] top-[80px] w-[96px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[160px]">7</p>
      </div>
      <Container73 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[249px] left-[calc(75%-48px)] right-[calc(8.33%+72px)] top-[151px]">
      <Frame7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black h-[54px] justify-center leading-[0] left-[79px] text-[39.844px] text-shadow-[2px_3px_3px_rgba(0,0,0,0.4)] text-white top-[199.18px] w-[209.61px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[40px]">in 25 years</p>
      </div>
    </div>
  );
}

function TruckSection() {
  return (
    <div className="h-[800px] overflow-clip relative shrink-0 w-full" data-name="Truck Section">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTruckSection} />
      <Frame6 />
    </div>
  );
}

function MoveOrgLogo() {
  return (
    <div className="aspect-[152/33.27000045776367] flex-[1_0_0] min-h-px min-w-px relative" data-name="Move.org logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMoveOrgLogo} />
      </div>
    </div>
  );
}

function UsaTodayLogo() {
  return (
    <div className="aspect-[152/47.72999954223633] flex-[1_0_0] min-h-px min-w-px relative" data-name="USA Today logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[0.01%] max-w-none top-0 w-[99.98%]" src={imgUsaTodayLogo} />
      </div>
    </div>
  );
}

function NewsweekLogo() {
  return (
    <div className="aspect-[152/23.979999542236328] flex-[1_0_0] min-h-px min-w-px relative" data-name="Newsweek logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[0.02%] max-w-none top-0 w-[99.96%]" src={imgNewsweekLogo} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
      <div className="h-[39px] relative shrink-0 w-[152px]" data-name="logo_usn 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoUsn1} />
      </div>
      <MoveOrgLogo />
      <UsaTodayLogo />
      <NewsweekLogo />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center px-[104px] py-[64px] relative size-full">
          <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[26px] mb-0">Rated #1 in moving</p>
            <p className="leading-[26px]">and customer service</p>
          </div>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="SVG">
          <path d={svgPaths.p186c1700} fill="var(--fill-0, #00324A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#cce1fa] content-stretch flex items-center justify-center relative rounded-[25px] shrink-0 size-[50px]" data-name="Background">
      <Svg9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between leading-[0] relative shrink-0 w-[113px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#00324a] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">Elizabeth S.</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#666] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Stored Mar. 2024</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[26px] items-end relative shrink-0">
      <Background13 />
      <div className="flex flex-row items-end self-stretch">
        <Frame12 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[400px] min-h-[398px] min-w-[400px] relative rounded-[20px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] p-[30px] relative size-full">
        <Frame10 />
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#083544] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p>
            <span className="leading-[24px]">{`Storage with PODS was `}</span>
            <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              easy, convenient, and more affordable than self-storage units
            </span>
            <span className="leading-[24px]">{` without the hassle of transporting belongings across town. Nice.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="SVG">
          <path d={svgPaths.p25a46870} fill="var(--fill-0, #00324A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#f8bbc0] content-stretch flex items-center justify-center relative rounded-[25px] shrink-0 size-[50px]" data-name="Background">
      <Svg10 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between leading-[0] relative shrink-0 w-[113px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#00324a] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">Alice W.</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#666] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Moved Aug. 2024</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[26px] items-end relative shrink-0">
      <Background14 />
      <div className="flex flex-row items-end self-stretch">
        <Frame16 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[400px] min-h-[398px] min-w-[400px] relative rounded-[20px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] p-[30px] relative size-full">
        <Frame14 />
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#083544] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">I would highly recommend using PODS for local and cross-country moving and storage. I used PODS to store my belongings and then move them across four states. Everything arrived in one piece and exactly as packed. From the person I booked everything with on the phone to the delivery driver to the person who picked up the empty container, everyone was lovely and incredibly professional. I will use PODS for any future moving needs.</p>
        </div>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="SVG">
          <path d={svgPaths.p25a46870} fill="var(--fill-0, #00324A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#f8bbc0] content-stretch flex items-center justify-center relative rounded-[25px] shrink-0 size-[50px]" data-name="Background">
      <Svg11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between leading-[0] relative shrink-0 w-[113px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#00324a] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">JoBeth W.</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#666] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Moved Jul. 2024</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[26px] items-end relative shrink-0">
      <Background15 />
      <div className="flex flex-row items-end self-stretch">
        <Frame20 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[400px] min-h-[398px] min-w-[400px] relative rounded-[20px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] p-[30px] relative size-full">
        <Frame18 />
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#083544] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">{`I have used PODS twice in the last 2 years for long-distance moving. I can't say enough good things about this company. So helpful, truck drivers very kind and thoughtful. I highly recommend PODS!`}</p>
        </div>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="SVG">
          <path d={svgPaths.p25a46870} fill="var(--fill-0, #00324A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f8bbc0] content-stretch flex items-center justify-center relative rounded-[25px] shrink-0 size-[50px]" data-name="Background">
      <Svg12 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between leading-[0] relative shrink-0 w-[113px]">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#00324a] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">LaVern G.</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#666] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Moved Jul. 2024</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[26px] items-end relative shrink-0">
      <Background16 />
      <div className="flex flex-row items-end self-stretch">
        <Frame26 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[400px] min-h-[398px] min-w-[400px] relative rounded-[20px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] p-[30px] relative size-full">
        <Frame25 />
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#083544] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">PODS takes the burden off of cross-country moving. Ordering the PODS container is easy, setting up the delivery dates was smooth and the pricing is clear. The container is always clean with a strong securing latch. I move with confidence when I move with PODS.</p>
        </div>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="SVG">
          <path d={svgPaths.p92f09b0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNextTestimonial() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center left-[1296px] rounded-[20px] size-[40px] top-[231.25px]" data-name="Button - Next Testimonial">
      <Svg13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[104px] py-[64px] relative size-full">
          <Frame11 />
          <Frame13 />
          <Frame17 />
          <Frame21 />
          <ButtonNextTestimonial />
        </div>
      </div>
    </div>
  );
}

function Bento() {
  return (
    <div className="aspect-[1200/967] gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] max-h-[967px] max-w-[1200px] relative shrink-0 w-full" data-name="Bento">
      <div className="aspect-[285/309] col-4 justify-self-stretch relative rounded-[8px] row-1 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle6} />
        </div>
      </div>
      <div className="aspect-[590/309] col-[1/span_2] justify-self-stretch relative rounded-[8px] row-2 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle9} />
        </div>
      </div>
      <div className="aspect-[285/309] col-3 justify-self-stretch relative rounded-[8px] row-2 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle12} />
        </div>
      </div>
      <div className="aspect-[285/309] col-4 justify-self-stretch relative rounded-[8px] row-2 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle11} />
        </div>
      </div>
      <div className="aspect-[285/309] col-1 justify-self-stretch relative rounded-[8px] row-3 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle13} />
        </div>
      </div>
      <div className="aspect-[285/309] col-2 justify-self-stretch relative rounded-[8px] row-3 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle14} />
        </div>
      </div>
      <div className="aspect-[590/309] col-[3/span_2] justify-self-stretch relative rounded-[8px] row-3 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle16} />
        </div>
      </div>
      <div className="aspect-[590/309] col-[2/span_2] justify-self-stretch relative rounded-[8px] row-1 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle7} />
        </div>
      </div>
      <div className="aspect-[285/309] col-1 justify-self-stretch relative rounded-[8px] row-1 shrink-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle5} />
        </div>
      </div>
    </div>
  );
}

function BentoContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bento Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[104px] py-[64px] relative size-full">
          <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[48px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[55px]">Real stories, real moves</p>
          </div>
          <Bento />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return <div className="self-stretch shrink-0 w-[550px]" data-name="Container" />;
}

function Heading12() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#083544] text-[48px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[55px]">{`Let PODS help you `}</p>
      </div>
      <Container76 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[24px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[31px]">You don’t have to worry about driving</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] pt-[10px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading13 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">{`You can cross "learn how to drive a moving truck" off your list.`}</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Heading3Margin />
        <Container80 />
      </div>
    </div>
  );
}

function YouCanCrossLearnHowToDriveAMovingTruckOffYourList() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="You can cross 'learn how to drive a moving truck' off your list.">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYouCanCrossLearnHowToDriveAMovingTruckOffYourList} />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex h-[316.8px] items-start relative shrink-0 w-full" data-name="Container">
      <YouCanCrossLearnHowToDriveAMovingTruckOffYourList />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container81 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="aspect-[570/481.79998779296875] bg-[rgba(255,255,255,0)] col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-[1/span_2] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.18)] shrink-0" data-name="Overlay+Shadow">
      <Container78 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[24px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[31px]">Manage your move online</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] pt-[10px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading14 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Track your move and easily update delivery or pickup dates.</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative self-stretch shrink-0 w-[493.33px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Heading3Margin1 />
        <Container84 />
      </div>
    </div>
  );
}

function TrackYourMoveAndEasilyUpdateDeliveryOrPickupDates() {
  return (
    <div className="absolute bottom-[-109.34%] left-0 top-0 w-[226.67px]" data-name="Track your move and easily update delivery or pickup dates.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTrackYourMoveAndEasilyUpdateDeliveryOrPickupDates} />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Container">
      <TrackYourMoveAndEasilyUpdateDeliveryOrPickupDates />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative self-stretch shrink-0 w-[326.67px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[15px] px-[50px] relative size-full">
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex h-[230.89px] items-start justify-center min-h-[230.88999938964844px] relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Margin2 />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="aspect-[865/230.89666748046875] bg-[rgba(255,255,255,0)] col-[1/span_3] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-3 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.18)] shrink-0" data-name="Overlay+Shadow">
      <Container82 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[24px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[31px]">Home-to-home without the hassle</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] pt-[10px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading15 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-0">You have the option to store your</p>
        <p className="leading-[24px] mb-0">belongings at our Storage Centers while</p>
        <p className="leading-[24px]">{`you're between homes.`}</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative z-[2]" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Heading3Margin2 />
        <Container88 />
      </div>
    </div>
  );
}

function YouHaveTheOptionToStoreYourBelongingsAtOurStorageCentersWhileYoureBetweenHomes() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[310px] min-h-px min-w-px relative z-[1]" data-name="You have the option to store your belongings at our Storage Centers while you're between homes.">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYouHaveTheOptionToStoreYourBelongingsAtOurStorageCentersWhileYoureBetweenHomes} />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] isolate items-start justify-center min-h-[230.88999938964844px] min-w-px relative w-full" data-name="Container">
      <Container87 />
      <YouHaveTheOptionToStoreYourBelongingsAtOurStorageCentersWhileYoureBetweenHomes />
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="aspect-[570/230.89666748046875] bg-[rgba(255,255,255,0)] col-[3/span_2] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-1 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.18)] shrink-0" data-name="Overlay+Shadow">
      <Container86 />
    </div>
  );
}

function IconCalendarCheckmarkSvg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon_calendar_checkmark.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon_calendar_checkmark.svg">
          <path d={svgPaths.p17041600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCalendarCheckmarkSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="icon_calendar_checkmark.svg fill">
      <IconCalendarCheckmarkSvg />
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[52px] overflow-clip relative shrink-0" data-name="Calendar icon">
      <IconCalendarCheckmarkSvgFill />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start p-[10px] relative rounded-[26px] shrink-0 w-[52px]" data-name="Background">
      <CalendarIcon />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[10px] relative shrink-0 w-full" data-name="Margin">
      <Background17 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">Ditch the moving deadline</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Our monthly rentals mean you can tackle your move one box at a time.</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Margin3 />
        <Heading16 />
        <Container91 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-[230.88999938964844px] min-w-px relative w-full" data-name="Container">
      <Container90 />
    </div>
  );
}

function OverlayShadow3() {
  return (
    <div className="aspect-[275/230.89666748046875] bg-[rgba(255,255,255,0)] col-4 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-2 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.18)] shrink-0" data-name="Overlay+Shadow">
      <Container89 />
    </div>
  );
}

function IconWalletSvg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon_wallet.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon_wallet.svg">
          <path d={svgPaths.p2255aa00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWalletSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="icon_wallet.svg fill">
      <IconWalletSvg />
    </div>
  );
}

function WalletIcon() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[52px] overflow-clip relative shrink-0" data-name="Wallet icon">
      <IconWalletSvgFill />
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#007db8] flex-[1_0_0] max-h-[52px] max-w-[52px] min-h-px min-w-px relative rounded-[26px] w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start max-h-[inherit] max-w-[inherit] p-[10px] relative size-full">
        <WalletIcon />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[82px] items-start pb-[20px] pt-[10px] relative shrink-0 w-full" data-name="Margin">
      <Background18 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">Move now, pay later</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Monthly financing is available to make your move fit your budget.</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Margin4 />
        <Heading17 />
        <Container94 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex h-[230.89px] items-start justify-center min-h-[230.88999938964844px] relative shrink-0 w-full" data-name="Container">
      <Container93 />
    </div>
  );
}

function OverlayShadow4() {
  return (
    <div className="aspect-[275/230.89666748046875] bg-[rgba(255,255,255,0)] col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-2 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.18)] shrink-0" data-name="Overlay+Shadow">
      <Container92 />
    </div>
  );
}

function IconHandHeartSvg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="icon_hand_heart.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_42906)" id="icon_hand_heart.svg">
          <path d={svgPaths.p20d320f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_42906">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconHandHeartSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="icon_hand_heart.svg fill">
      <IconHandHeartSvg />
    </div>
  );
}

function HandHoldingAHeartIcon() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[52px] overflow-clip relative shrink-0" data-name="Hand holding a heart icon">
      <IconHandHeartSvgFill />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-start p-[10px] relative rounded-[26px] shrink-0 w-[52px]" data-name="Background">
      <HandHoldingAHeartIcon />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[10px] relative shrink-0 w-full" data-name="Margin">
      <Background19 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">10x safer for your stuff</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-0">Our content damage claims rate is</p>
        <p className="leading-[24px] mb-0">less than 1/10th the moving industry</p>
        <p className="leading-[24px]">average.</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Margin5 />
        <Heading18 />
        <Container97 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-[230.88999938964844px] min-w-px relative w-full" data-name="Container">
      <Container96 />
    </div>
  );
}

function OverlayShadow5() {
  return (
    <div className="aspect-[275/230.89666748046875] bg-[rgba(255,255,255,0)] col-4 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[16px] row-3 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.18)] shrink-0" data-name="Overlay+Shadow">
      <Container95 />
    </div>
  );
}

function Container77() {
  return (
    <div className="aspect-[1200/772.6900024414062] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] p-[20px] relative size-full">
        <OverlayShadow />
        <OverlayShadow1 />
        <OverlayShadow2 />
        <OverlayShadow3 />
        <OverlayShadow4 />
        <OverlayShadow5 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[1200px] pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container77 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Margin">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[128px] pt-[64px] px-[120px] relative size-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[446.3900146484375px] pr-[31.79px] relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#372e2c] text-[56px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[62px]">{`Let's get moving.`}</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Heading19 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-42 overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Current ZIP</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[10.5px] relative size-full">
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Fieldset() {
  return (
    <div className="absolute inset-[-5px_0_0_0] overflow-clip rounded-[4px]" data-name="Fieldset">
      <div className="absolute border border-[#093544] border-solid inset-[5px_0_0_0] rounded-[4px]" data-name="Fieldset:styles" />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Input />
      <Fieldset />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bg-white h-[17.25px] left-[14px] overflow-clip top-[-9px] w-[219.6px]" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#093544] text-[12px] top-[8.25px] w-[219.971px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17.25px]">Where should we bring your container?</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Label />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[295px] relative shrink-0 w-[270px]" data-name="Container">
      <Container101 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[64px] pb-[15.19px] pt-[14px] px-[15px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[19.2px]">Get a quote</p>
      </div>
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="bg-[#ce202f] content-stretch flex items-center justify-center overflow-clip px-[77.05px] relative rounded-[4px] shadow-[0px_0.711px_0.711px_-0.75px_rgba(0,0,0,0.14),0px_1.937px_1.937px_-1.5px_rgba(0,0,0,0.14),0px_4.253px_4.253px_-2.25px_rgba(0,0,0,0.13),0px_9.441px_9.441px_-3px_rgba(0,0,0,0.11),0px_24px_24px_-3.75px_rgba(0,0,0,0.05)] shrink-0" data-name="Background+Shadow">
      <Button1 />
    </div>
  );
}

function BottomPageCta() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[277px] relative shrink-0" data-name="Bottom page CTA">
      <BackgroundShadow4 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between max-w-[595px] min-w-[595px] overflow-clip p-[16px] relative rounded-[4px] shadow-[0px_0.602px_0.602px_-1.25px_rgba(0,0,0,0.18),0px_2.289px_2.289px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)] shrink-0" data-name="Background+Shadow">
      <Container100 />
      <BottomPageCta />
    </div>
  );
}

function Container98() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-[calc(25%+41.5px)] max-w-[1200px] top-[152.7px]" data-name="Container">
      <Container99 />
      <BackgroundShadow3 />
    </div>
  );
}

function BottomQuote() {
  return (
    <div className="h-[800px] overflow-clip relative shrink-0 w-full" data-name="Bottom Quote">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBottomQuote} />
      <Container98 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] max-h-[56.02000045776367px] relative shrink-0 text-[#083544] text-[48px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[55px]">FAQs</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[25px]">{`How do Billing & Payments Work with PODS?`}</p>
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex h-[25px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading20 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative z-[2]" data-name="Margin">
      <Container106 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d={svgPaths.p9827400} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Container">
      <Plus />
    </div>
  );
}

function Button2() {
  return (
    <div className="min-h-[48px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-between min-h-[inherit] pr-[20px] relative size-full">
          <Margin6 />
          <Container107 />
        </div>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#e5f2f8] content-stretch flex flex-col items-start py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Button2 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[25px]">How long do I have to load or unload my PODS container?</p>
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex h-[25px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading21 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative z-[2]" data-name="Margin">
      <Container108 />
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d={svgPaths.p9827400} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Container">
      <Plus1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="min-h-[48px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-between min-h-[inherit] pr-[20px] relative size-full">
          <Margin7 />
          <Container109 />
        </div>
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#e5f2f8] content-stretch flex flex-col items-start py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Button3 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[25px]">How are PODS Moving prices calculated?</p>
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex h-[25px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading22 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative z-[2]" data-name="Margin">
      <Container110 />
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d={svgPaths.p9827400} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Container">
      <Plus2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="min-h-[48px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-between min-h-[inherit] pr-[20px] relative size-full">
          <Margin8 />
          <Container111 />
        </div>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#e5f2f8] content-stretch flex flex-col items-start py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Button4 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[25px]">How are PODS Storage prices calculated?</p>
        </div>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[25px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading23 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative z-[2]" data-name="Margin">
      <Container112 />
    </div>
  );
}

function Plus3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d={svgPaths.p9827400} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Container">
      <Plus3 />
    </div>
  );
}

function Button5() {
  return (
    <div className="min-h-[48px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-between min-h-[inherit] pr-[20px] relative size-full">
          <Margin9 />
          <Container113 />
        </div>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#e5f2f8] content-stretch flex flex-col items-start py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Button5 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[25px]">Are PODS Storage Centers climate-controlled?</p>
        </div>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex h-[25px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading24 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative z-[2]" data-name="Margin">
      <Container114 />
    </div>
  );
}

function Plus4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d={svgPaths.p9827400} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="Container">
      <Plus4 />
    </div>
  );
}

function Button6() {
  return (
    <div className="min-h-[48px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-between min-h-[inherit] pr-[20px] relative size-full">
          <Margin10 />
          <Container115 />
        </div>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#e5f2f8] content-stretch flex flex-col items-start py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Button6 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Background20 />
      <Background21 />
      <Background22 />
      <Background23 />
      <Background24 />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[104px] py-[64px] relative size-full">
          <Heading />
          <Container105 />
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

function Container116() {
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

function Container119() {
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

function Container120() {
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

function Container121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Resources</p>
      </div>
      <List2 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container119 />
      <Container120 />
      <Container121 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Follow us</p>
      </div>
    </div>
  );
}

function Svg14() {
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
      <Svg14 />
    </div>
  );
}

function Svg15() {
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
      <Svg15 />
    </div>
  );
}

function Svg16() {
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
      <Svg16 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <LinkFollowPodsOnFacebook />
      <LinkFollowPodsOnInstagram />
      <LinkFollowPodsOnYouTube />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[116px]" data-name="Container">
      <Heading25 />
      <Container123 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[24px]">Country/Language</p>
      </div>
    </div>
  );
}

function Container126() {
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
          <Container126 />
        </div>
      </div>
    </div>
  );
}

function Svg17() {
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

function Container127() {
  return (
    <div className="absolute bottom-[27.5%] content-stretch flex flex-col items-start left-[10px] top-[27.5%] w-[18px]" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Svg18() {
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

function Container128() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16px] items-start right-[7.91px] top-[calc(50%+2px)] w-[12px]" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <OptionsSelectCountryLanguage />
      <Container127 />
      <Container128 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[180px]" data-name="Container">
      <Heading26 />
      <Container125 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex gap-[64px] h-[324px] items-start max-w-[1200px] pb-[64px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container118 />
      <Container122 />
      <Container124 />
    </div>
  );
}

function Link1() {
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
      <Link1 />
    </div>
  );
}

function Link2() {
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
      <Link2 />
    </div>
  );
}

function Link3() {
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
      <Link3 />
    </div>
  );
}

function Button7() {
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
      <Button7 />
    </div>
  );
}

function Link4() {
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
      <Link4 />
    </div>
  );
}

function Link5() {
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
      <Link5 />
    </div>
  );
}

function Link6() {
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
      <Link6 />
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

function Container129() {
  return (
    <div className="content-stretch flex h-[41px] items-start justify-center relative shrink-0" data-name="Container">
      <List3 />
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-center px-[404.16px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11.625px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">© 2006 - 2025 PODS Enterprises LLC. All rights reserved. PODS® is a registered trademark of PODS Enterprises LLC.</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[0.48px] pr-[0.5px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] mb-0">{`*Offer available for new orders only. Customer receives 25% off local delivery and redelivery/final pick-up fees and first month's rental. Must mention promotional code at time of order. Cannot be combined with any`}</p>
        <p className="leading-[18px]">other offer. Offer void where prohibited by law. Available for a limited time, only at participating locations. Excludes special and exclusive promotions.</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex h-[68px] items-start justify-center max-w-[1200px] py-[16px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container131 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#007db8] content-stretch flex flex-col items-center py-[65px] relative shrink-0 w-full" data-name="Footer">
      <Container116 />
      <Container117 />
      <Container129 />
      <Background25 />
      <Container130 />
    </div>
  );
}

export default function DHomepage() {
  return (
    <>
      {/* Mobile-only fixed header */}
      <div className="fixed left-0 top-0 w-full z-30 lg:hidden">
        <MasterHeaderSectionNew />
      </div>
      <div className="hidden lg:block bg-white w-full" data-name="D.Homepage">
        <Head />
        <HiwSection />
        <ContainerWidget />
        <ContainerBlock />
        <FIndYourFit />
        <TruckSection />
        <Frame8 />
        <Frame15 />
        <BentoContainer />
        <Margin1 />
        <BottomQuote />
        <Container104 />
        <Footer />
      </div>
      <div className="block lg:hidden overflow-x-hidden w-full">
        <MHomepage />
      </div>
    </>
  );
}