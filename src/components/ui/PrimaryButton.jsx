export default function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-5 py-2.5 font-medium text-white transition hover:brightness-110 ${className}`}
      style={{
        background: "var(--accent)",
      }}
    >
      {children}
    </button>
  );
}
