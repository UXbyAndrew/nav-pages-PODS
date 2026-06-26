import svgPaths from "./svg-dp4vuoheda";

function X({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[24px] cursor-pointer" data-name="X" onClick={onClick}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p5ff8500} fill="var(--fill-0, #083544)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <X onClick={onClose} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-[252px]">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center relative shrink-0 text-[#093544] text-[20px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[26px]">Real pricing in 60 seconds</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[#636363] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[12px]">
          <span className="leading-[17px]">{`Get transparent pricing + `}</span>
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[17px] text-[#1c843c]" style={{ fontVariationSettings: "'wdth' 100" }}>
            25% off
          </span>
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[46px] items-start justify-between relative shrink-0 w-full" data-name="Header">
      <Frame />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold h-full leading-[20px] relative shrink-0 text-[#007db8] text-[14px] text-right underline w-[153px]" style={{ fontVariationSettings: "'wdth' 100" }}>PODS for Business</p>
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0" data-name="Question">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#093544] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[17px]">How can we help?</p>
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Question container">
      <Question />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 1">
          <circle cx="12" cy="12" id="Ellipse 1" r="11" stroke="var(--stroke-0, #007DB8)" strokeWidth="2" />
          <circle cx="12" cy="12" fill="var(--fill-0, #007DB8)" id="Ellipse 2" r="6" stroke="var(--stroke-0, #007DB8)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Option() {
  return (
    <div className="bg-[#e5f2f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Option">
      <div aria-hidden="true" className="absolute border border-[#007db8] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_8px_0px_#cbcbcb]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[16px] py-[4px] relative size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="_RadioCircle">
            <Group />
          </div>
          <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#007db8] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">Moving</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Option">
      <div aria-hidden="true" className="absolute border border-[#cbcbcb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_8px_0px_#cbcbcb]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[16px] py-[4px] relative size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="_RadioCircle">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #7D7D7D)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#494949] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">Storage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Option">
      <div aria-hidden="true" className="absolute border border-[#cbcbcb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_8px_0px_#cbcbcb]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[16px] py-[4px] relative size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="_RadioCircle">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 1" r="11" stroke="var(--stroke-0, #7D7D7D)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#494949] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">Both</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Options">
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <QuestionContainer />
      <Options />
    </div>
  );
}

function MapPinLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MapPinLine">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MapPinLine">
          <path d={svgPaths.p2af1b880} fill="var(--fill-0, #007DB8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-[143px]" data-name="Container">
      <MapPinLine />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636363] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Enter ZIP code</p>
      </div>
    </div>
  );
}

function ButtonPods() {
  return (
    <div className="bg-[#ce202f] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[4px]" data-name="button-pods">
      <div aria-hidden="true" className="absolute border border-[#9b0000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Start your quote
          </p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex gap-[27px] h-[44px] items-center left-[0.5px] overflow-clip pl-[8px] pr-[4px] py-[10.5px] right-[-0.5px] top-1/2" data-name="Input">
      <Container4 />
      <ButtonPods />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-[44px] min-h-px min-w-px overflow-clip relative" data-name="Input">
      <Input1 />
    </div>
  );
}

function Fieldset() {
  return (
    <div className="absolute inset-[-5px_0_0_0] overflow-clip rounded-[4px]" data-name="Fieldset">
      <div className="absolute border border-[#636363] border-solid inset-[5px_0_0_0] rounded-[4px]" data-name="Fieldset:styles" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[4px] w-full" data-name="Container">
      <Input />
      <Fieldset />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Container3 />
    </div>
  );
}

function InputGroup() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between relative shadow-[0px_4px_8px_0px_#cbcbcb] shrink-0 w-full" data-name="Input group">
      <Container2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#093544] text-[14px] w-[343px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[17px]">Where are we starting from?</p>
      </div>
      <InputGroup />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container />
      <Container1 />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form container">
      <Frame2 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <Header />
      <FormContainer />
    </div>
  );
}

export default function Spe({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[24px] size-full" data-name="SPE">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_6px_15px_0px_rgba(16,24,40,0.08),0px_6px_15px_0px_rgba(16,24,40,0.08)]" />
      <Frame1 onClose={onClose} />
      <ContentContainer />
    </div>
  );
}