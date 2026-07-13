import { FaWifi } from "react-icons/fa";

export default function WifiCard({
  network = "K_OS Wi-Fi",
  connected = true,
  strength = "Strong",
}) {
  return (
    <div
      className="rounded-2xl border p-4 transition-all duration-300"
      style={{
        background: "var(--window)",
        borderColor: "var(--border)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      }}
    >
      <div className="flex items-center justify-between">
        <div style={{ color: "var(--text)" }}>
          <p
            className="text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            Wi-Fi
          </p>
          <h3 className="mt-1 text-lg font-semibold">
            {connected ? network : "Not Connected"}
          </h3>
          <p
            className="mt-1 text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {connected ? strength : "Select a network"}
          </p>
        </div>

        <FaWifi
          size={28}
          style={{
            color: connected ? "var(--accent)" : "var(--text-secondary)",
          }}
        />
      </div>
    </div>
  );
}
