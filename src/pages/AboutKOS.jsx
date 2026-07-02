

export default function AboutKOS() {
  return (
    <div
      className="space-y-6"
      style={{ color: "var(--text)" }}
    >
      <div>
        <p className="text-sm font-medium text-blue-400">About</p>
        <h1 className="mt-1 text-4xl font-bold">K-OS</h1>
        <p
          className="mt-2"
          style={{ color: "var(--text-secondary)" }}
        >
          A macOS-inspired portfolio desktop built with modern web technologies.
        </p>
      </div>

      <div
        className="rounded-2xl border p-6"
        style={{
          background: "var(--window)",
          borderColor: "var(--border)",
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Info label="Version" value="1.0.0" />
          <Info label="Developer" value="Keshav" />
          <Info label="Framework" value="React + Vite" />
          <Info label="Styling" value="Tailwind CSS" />
          <Info label="Language" value="JavaScript" />
          <Info label="Status" value="In Active Development" />
        </div>
      </div>

      <div
        className="rounded-2xl border p-6"
        style={{
          background: "var(--window)",
          borderColor: "var(--border)",
        }}
      >
        <h2 className="text-xl font-semibold">Vision</h2>
        <p
          className="mt-3 leading-7"
          style={{ color: "var(--text-secondary)" }}
        >
          K-OS is designed to showcase software engineering and frontend skills
          through a desktop experience inspired by macOS. The goal is to combine
          polished UI, smooth interactions, and thoughtful architecture into an
          interactive portfolio.
        </p>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p
        className="text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}