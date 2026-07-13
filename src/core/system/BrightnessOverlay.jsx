

import useSystem from "./useSystem";

export default function BrightnessOverlay() {
  const { brightness } = useSystem();

  const opacity = ((100 - brightness) / 100) * 0.75;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-150"
      style={{
        background: "#000",
        opacity,
      }}
    />
  );
}