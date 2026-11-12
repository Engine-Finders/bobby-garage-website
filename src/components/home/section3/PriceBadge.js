/** Orange pill used for "From £x" rebuild guide prices. */
export default function PriceBadge({ children }) {
  return (
    <span className="inline-flex min-w-[112px] items-center justify-center rounded-md bg-[#fde7da] px-3 py-2 text-[14px] font-extrabold text-brand lg:min-w-[140px] lg:px-4 lg:text-[16px]">
      {children}
    </span>
  );
}
