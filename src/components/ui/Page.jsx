export default function Page({ children, className = "", style = {} }) {
  return (
    <div
      className={`h-full w-full overflow-hidden transition-colors duration-300 ${className}`}
      style={{
        background: "var(--window-secondary)",
        color: "var(--text)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
