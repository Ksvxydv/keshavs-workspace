

import { FaSun } from "react-icons/fa";

export default function BrightnessSlider({
  value = 75,
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
        <FaSun size={18} />
        <span className="text-sm font-medium">Display</span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="brightness-slider h-1.5 w-full cursor-pointer appearance-none rounded-full"
      />
      <div
        className="mt-2 flex items-center justify-between text-[11px]"
        style={{ color: "var(--text-secondary)" }}
      >
        <FaSun size={12} />
        <FaSun size={18} />
      </div>
      <div
        className="mt-2 text-center text-xs font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {value}%
      </div>
    </div>
  );
}