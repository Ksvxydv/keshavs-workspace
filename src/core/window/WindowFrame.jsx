export default function WindowFrame({ title, children }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 180,
        top: 90,
        width: 800,
        height: 500,
      }}
      className="rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl"
    >
      <div className="h-12 bg-zinc-800 flex items-center px-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <h2 className="text-white ml-5 font-medium">{title}</h2>
      </div>

      <div className="p-6 text-white h-[calc(100%-48px)] overflow-auto">
        {children}
      </div>
    </div>
  );
}
