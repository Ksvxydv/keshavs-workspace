export default function Card({ children, className = "" }) {
  return (
    <div
      className={`h-full rounded-2xl border p-6 transition-colors duration-300 ${className}`}
      style={{
        background: "var(--window)",
        borderColor: "var(--border)",
      }}
    >
      {children}
    </div>
  );
}
