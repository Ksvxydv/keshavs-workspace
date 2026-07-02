import { useRef, useState } from "react";
import FileIcon from "./FileIcon";

export default function GetInfoModal({ item, currentPath, onClose }) {
  const [showTrafficIcons, setShowTrafficIcons] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef({ dragging: false, offsetX: 0, offsetY: 0 });
  if (!item) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.25)",
        zIndex: 5000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 360,
          borderRadius: 14,
          overflow: "hidden",
          background: "rgba(35,35,40,0.55)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          color: "var(--text)",
          boxShadow: "0 20px 60px rgba(0,0,0,.45)",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          onMouseEnter={() => setShowTrafficIcons(true)}
          onMouseLeave={() => setShowTrafficIcons(false)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 14px",
            borderBottom: "1px solid var(--border)",
            userSelect: "none",
            cursor: "grab",
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            dragRef.current.dragging = true;
            e.currentTarget.style.cursor = "grabbing";
            dragRef.current.offsetX = e.clientX - position.x;
            dragRef.current.offsetY = e.clientY - position.y;

            const move = (ev) => {
              if (!dragRef.current.dragging) return;
              setPosition({
                x: ev.clientX - dragRef.current.offsetX,
                y: ev.clientY - dragRef.current.offsetY,
              });
            };

            const up = () => {
              if (e.currentTarget) {
                e.currentTarget.style.cursor = "grab";
              }
              dragRef.current.dragging = false;
              window.removeEventListener("mousemove", move);
              window.removeEventListener("mouseup", up);
            };

            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", up);
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <button
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                color: "rgba(0,0,0,.65)",
                background: "#ff5f57",
              }}
              onClick={onClose}
              tabIndex={-1}
              type="button"
            >
              {showTrafficIcons ? "×" : null}
            </button>
            <button
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                color: "rgba(0,0,0,.65)",
                background: "#febc2e",
              }}
              tabIndex={-1}
              type="button"
            >
              {showTrafficIcons ? "−" : null}
            </button>
            <button
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                color: "rgba(0,0,0,.65)",
                background: "#28c840",
              }}
              tabIndex={-1}
              type="button"
            >
              {showTrafficIcons ? "↗" : null}
            </button>
          </div>
          <div style={{ flex: 1, textAlign: "center", fontWeight: 600 }}>Get Info</div>
          <div style={{ width: 44 }} />
        </div>

        <div style={{padding:24,textAlign:"center"}}>
          <FileIcon item={item} size={72} />
          <h3 style={{margin:"14px 0 20px"}}>{item.name}</h3>

          <table style={{width:"100%",fontSize:14,borderSpacing:"0 10px",textAlign:"left"}}>
            <tbody>
              <tr><td><strong>Type</strong></td><td>{item.type}</td></tr>
              <tr><td><strong>Location</strong></td><td>{currentPath}</td></tr>
              <tr><td><strong>ID</strong></td><td>{item.id}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}