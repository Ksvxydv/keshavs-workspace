import useTheme from "../theme/useTheme";

export default function DevThemeToggle() {
  const { themeName, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex gap-2 rounded-xl border border-white/10 bg-black/40 p-2 backdrop-blur-xl">
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-lg px-4 py-2 ${
          themeName === "dark" ? "bg-blue-500 text-white" : "text-white"
        }`}
      >
        🌙 Dark
      </button>

      <button
        onClick={() => setTheme("light")}
        className={`rounded-lg px-4 py-2 ${
          themeName === "light" ? "bg-blue-500 text-white" : "text-white"
        }`}
      >
        ☀️ Light
      </button>
    </div>
  );
}
