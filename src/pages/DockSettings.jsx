export default function DockSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Dock</h1>
        <p
          className="mt-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Configure Dock behavior and appearance.
        </p>
      </div>

      <div
        className="rounded-2xl border p-6"
        style={{
          background: "var(--window)",
          borderColor: "var(--border)",
        }}
      >
        <p>Dock settings will be implemented here.</p>
      </div>
    </div>
  );
}
