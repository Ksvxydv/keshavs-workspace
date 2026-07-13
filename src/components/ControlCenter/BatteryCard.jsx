import { FaBatteryThreeQuarters } from "react-icons/fa";
import useSystem from "../../core/system/useSystem";

export default function BatteryCard({ charging = false }) {
  const { battery } = useSystem();
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
            Battery
          </p>
          <h3 className="mt-1 text-2xl font-semibold">{battery}%</h3>
          <p
            className="mt-1 text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {charging ? "Charging" : "Power Source: Battery"}
          </p>
        </div>

        <FaBatteryThreeQuarters
          size={34}
          style={{
            color: battery <= 20 ? "#f87171" : "var(--text)",
          }}
        />
      </div>
    </div>
  );
}
