

export default function Personalize() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Personalize</h1>
        <p
          className="mt-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Customize your K-OS experience.
        </p>
      </div>

      <div
        className="rounded-2xl border p-6"
        style={{
          background: "var(--window)",
          borderColor: "var(--border)",
        }}
      >
        <p>Personalization options will be implemented here.</p>
      </div>
    </div>
  );
}