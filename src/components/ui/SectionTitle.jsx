export default function SectionTitle({ children }) {
  return (
    <h1 className="mb-8 text-5xl font-bold" style={{ color: "var(--text)" }}>
      {children}
    </h1>
  );
}
