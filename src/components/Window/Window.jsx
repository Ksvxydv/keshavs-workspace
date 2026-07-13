import { useDraggable } from "@dnd-kit/core";

export default function Window({ title, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        transform: `translate(${transform?.x || 0}px, ${transform?.y || 0}px)`,
      }}
      className="h-full overflow-hidden rounded-none border-0 bg-zinc-900/90 shadow-2xl backdrop-blur-3xl"
    >
      <div
        {...listeners}
        {...attributes}
        className="relative h-14 flex items-center px-5 pt-5 bg-zinc-800/90 border-b border-white/10 cursor-grab active:cursor-grabbing"
      >
        <div className="absolute left-5 top-1/2 -translate-y-1/2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <h2 className="absolute left-1/2 -translate-x-1/2 text-white text-[13px] font-medium pointer-events-none">{title}</h2>
      </div>

      <div className="flex flex-1 h-[calc(100%-56px)] w-full overflow-hidden text-white min-h-0">
        {children}
      </div>
    </div>
  );
}
