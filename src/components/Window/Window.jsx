import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export default function Window({ title, children }) {
  const [position, setPosition] = useState({
    x: 180,
    y: 90,
  });

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
  });

  const x = position.x + (transform?.x || 0);
  const y = position.y + (transform?.y || 0);

  return (
    <div
      ref={setNodeRef}
      style={{
        position: "absolute",
        width: 800,
        height: 500,
        transform: `translate(${x}px, ${y}px)`,
      }}
      className="rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl"
    >
      <div
        {...listeners}
        {...attributes}
        className="h-12 bg-zinc-800 flex items-center px-4 cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <h2 className="text-white ml-5 font-medium">{title}</h2>
      </div>

      <div className="h-[calc(100%-48px)] p-6 text-white overflow-auto">
        {children}
      </div>
    </div>
  );
}
