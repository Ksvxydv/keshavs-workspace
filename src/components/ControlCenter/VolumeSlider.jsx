import { FaVolumeUp } from "react-icons/fa";

export default function VolumeSlider({
  value = 60,
  onChange,
}) {
  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        background: "var(--window)",
        borderColor: "var(--border)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      }}
    >
      <div
        className="mb-3 flex items-center gap-2"
        style={{ color: "var(--text)" }}
      >
        <FaVolumeUp size={18} />
        <span className="text-sm font-medium">Sound</span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="volume-slider h-2 w-full cursor-pointer appearance-none"
      />

      <div
        className="mt-2 flex justify-between text-xs"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>Mute</span>
        <span>{value}%</span>
        <span>Max</span>
      </div>
    </div>
  );
}
