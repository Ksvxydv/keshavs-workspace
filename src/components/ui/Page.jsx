export default function Page({ children }) {
  return (
    <div
      className="h-full overflow-auto p-8 transition-colors duration-300"
      style={{
        background: "var(--window-secondary)",
        color: "var(--text)",
      }}
    >
      {children}
    </div>
  );
}
