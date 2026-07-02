import { useDesktopSettings } from "../../context/DesktopSettingsContext";

export default function TerminalInput({
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  onAutocomplete,
}) {
  const { theme } = useDesktopSettings();

  return (
    <div className="mt-3 flex items-center gap-2 border-t border-neutral-700 pt-3">
      <span
        className={`select-none ${
          theme === "dark" ? "text-green-400" : "text-black"
        }`}
      >
        K-OS %
      </span>

      <input
        autoFocus
        spellCheck={false}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          } else if (e.key === "Tab") {
            e.preventDefault();
            onAutocomplete?.();
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            onHistoryUp?.();
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            onHistoryDown?.();
          }
        }}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        className={`flex-1 bg-transparent font-mono outline-none ${
          theme === "dark"
            ? "text-green-400 caret-green-400"
            : "text-black caret-black"
        }`}
      />
    </div>
  );
}