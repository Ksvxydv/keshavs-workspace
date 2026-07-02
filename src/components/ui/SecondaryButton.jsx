export default function SecondaryButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-5 py-2.5 font-medium transition-colors duration-300 ${className}`}
      style={{
        background: "var(--toolbar)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      {children}
    </button>
  );
}
