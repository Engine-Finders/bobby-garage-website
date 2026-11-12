export default function Slashes({ className = "h-4" }) {
  return (
    <span className={`inline-flex items-center gap-[3px] ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span key={i} className="block h-full w-[5px] -skew-x-[24deg] bg-brand" />
      ))}
    </span>
  );
}
