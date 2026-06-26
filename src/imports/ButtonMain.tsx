export default function ButtonMain() {
  return (
    <div className="bg-[#f17781] content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] size-full" data-name="button-main">
      <div aria-hidden="true" className="absolute border border-[#ef606c] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#f8bbc0] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get a Quote
      </p>
    </div>
  );
}