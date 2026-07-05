

export default function GlassWindow({
  children,
  className = "",
  style = {},
}) {
  return (
    <div
      className={`overflow-hidden rounded-[32px] border shadow-2xl backdrop-blur-3xl ${className}`}
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--wallpaper-primary) 14%, transparent), rgba(255,255,255,0.05) 35%, rgba(255,255,255,0.02) 70%, color-mix(in srgb, var(--wallpaper-secondary) 12%, transparent))",
        border: "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(42px) saturate(220%) brightness(1.08)",
        WebkitBackdropFilter:
          "blur(42px) saturate(220%) brightness(1.08)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.22)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}