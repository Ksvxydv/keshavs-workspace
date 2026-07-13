import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, House, Search } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import FileIcon from "./FileIcon";
import { getTerminalActions } from "../../terminal/terminalActions";
import GetInfoModal from "./GetInfoModal";
export default function FinderContent({
  currentPath,
  items,
  openDirectory,
  openItem,
  openPath,
  goHome,
  goBack,
  goForward,
  canGoBack,
  canGoForward,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const [gridItems, setGridItems] = useState(items);

  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    item: null,
    anchorRect: null,
  });

  const [infoItem, setInfoItem] = useState(null);
  const [previewItem, setPreviewItem] = useState(null);

  const mainRef = useRef(null);

  useEffect(() => {
    setGridItems(items);
  }, [items]);

  useEffect(() => {
    const handleClickOutside = () => {
      if (contextMenu.visible) {
        setContextMenu({ visible: false, x: 0, y: 0, item: null, anchorRect: null });
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [contextMenu.visible]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setPreviewItem(null);
        return;
      }

      if (e.code !== "Space") return;

      const item = gridItems.find((i) => i.id === selectedItem);
      if (!item) return;

      e.preventDefault();
      setPreviewItem(item);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, gridItems]);

  return (
    <main
      ref={mainRef}
      className="flex-1 overflow-auto px-8 py-6"
      style={{
        background: "var(--window-secondary)",
        color: "var(--text)",
      }}
      onClick={() => setSelectedItem(null)}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="mb-5 flex flex-wrap items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-2xl"
          style={{
            background: "rgba(255,255,255,.045)",
            borderColor: "rgba(255,255,255,.08)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          <button
            className="rounded-md p-2 transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-white/5"
            onClick={goBack}
            disabled={!canGoBack}
          >
            <ArrowLeft size={16} />
          </button>

          <button
            className="rounded-md p-2 transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-white/5"
            onClick={goForward}
            disabled={!canGoForward}
          >
            <ArrowRight size={16} />
          </button>

          <button
            className="rounded-md p-2 transition hover:bg-black/5 dark:hover:bg-white/5"
            onClick={goHome}
          >
            <House size={16} />
          </button>

          <div
            className="min-w-0 flex-1 overflow-hidden rounded-lg border px-3 py-2"
            style={{ borderColor: "var(--border)" }}
          >
            <Breadcrumbs
              currentPath={currentPath}
              goHome={goHome}
              openPath={openPath}
            />
          </div>

          <div
            className="flex min-w-[160px] max-w-[220px] flex-1 items-center gap-2 rounded-lg border px-3 py-2"
            style={{ borderColor: "var(--border)" }}
          >
            <Search size={15} />
            <input
              className="w-full min-w-0 bg-transparent text-sm outline-none"
              placeholder="Search"
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8 justify-items-center">
          {gridItems.map((item, index) => {
            const isSelected = selectedItem === item.id;

            const handleDragStart = (e) => {
              e.dataTransfer.setData("index", index);
            };

            const handleDrop = (e) => {
              const fromIndex = parseInt(e.dataTransfer.getData("index"), 10);
              const toIndex = index;

              if (fromIndex === toIndex) return;

              const updated = [...gridItems];
              const [moved] = updated.splice(fromIndex, 1);
              updated.splice(toIndex, 0, moved);

              setGridItems(updated);
            };

            const handleDragOver = (e) => {
              e.preventDefault();
            };

            const handleContextMenu = (e) => {
              e.preventDefault();
              setSelectedItem(item.id);
              const rect = mainRef.current.getBoundingClientRect();
              setContextMenu({
                visible: true,
                x: e.clientX - rect.left + mainRef.current.scrollLeft,
                y: e.clientY - rect.top + mainRef.current.scrollTop,
                item,
                anchorRect: null,
              });
            };

            return (
              <button
                key={item.id}
                type="button"
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDoubleClick={() => {
                  if (openItem) {
                    openItem(item);
                    return;
                  }

                  if (item.type === "directory") {
                    openDirectory(item.id);
                    return;
                  }

                  if (item.type === "page") {
                    getTerminalActions().openWindow?.(item.page);
                    return;
                  }

                  if (item.type === "app") {
                    getTerminalActions().openWindow?.(item.app);
                    return;
                  }
                }}
                onClick={(e) => {
                  if (e.defaultPrevented) return;
                  setSelectedItem(item.id);
                }}
                onContextMenu={handleContextMenu}
                className={`group transform-gpu flex w-36 flex-col items-center rounded-2xl p-4 cursor-pointer transition-transform duration-150 ease-out will-change-transform ${
                  isSelected
                    ? "shadow-sm scale-[1.02]"
                    : "hover:-translate-y-1 hover:scale-[1.03]"
                }`}
                style={{
                  background: isSelected
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                  color: "var(--text)",
                  borderRadius: "12px",
                  border: "1px solid transparent",
                }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-xl transform-gpu transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  <FileIcon item={item} size={60} />
                </div>

                <span
                  className="mt-2 w-full truncate text-center text-sm font-medium"
                  title={item.displayName ?? item.name}
                >
                  {item.displayName ?? item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {contextMenu.visible && (
        <div
          style={{
            position: "absolute",
            left: `${contextMenu.x}px`,
            top: `${contextMenu.y}px`,
            margin: 0,
            transform: "none",
            background: "rgba(35, 35, 40, 0.28)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--text)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: `
              0 10px 40px rgba(0,0,0,0.35),
              inset 0 1px 0 rgba(255,255,255,0.10),
              inset 0 -1px 0 rgba(255,255,255,0.04)
            `,
            backdropFilter: "blur(30px) saturate(180%)",
            WebkitBackdropFilter: "blur(30px) saturate(180%)",
            zIndex: 1000,
            minWidth: "160px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="w-full text-left px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => {
              if (openItem && contextMenu.item) {
                openItem(contextMenu.item);
              }
              setContextMenu({
                visible: false,
                x: 0,
                y: 0,
                item: null,
                anchorRect: null,
              });
            }}
          >
            Open
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => {
              if (contextMenu.item) {
                setInfoItem(contextMenu.item);
              }
              setContextMenu({
                visible: false,
                x: 0,
                y: 0,
                item: null,
                anchorRect: null,
              });
            }}
          >
            Get Info
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => {
              if (contextMenu.item) {
                navigator.clipboard.writeText(contextMenu.item.name);
              }
              setContextMenu({
                visible: false,
                x: 0,
                y: 0,
                item: null,
                anchorRect: null,
              });
            }}
          >
            Copy Name
          </button>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              margin: "4px 0",
            }}
          />
          <button
            className="w-full text-left px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => {
              setContextMenu({
                visible: false,
                x: 0,
                y: 0,
                item: null,
                anchorRect: null,
              });
            }}
          >
            Cancel
          </button>
        </div>
      )}
      {previewItem && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,.28)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          onClick={() => setPreviewItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[520px] rounded-3xl border p-8"
            style={{
              background: "rgba(35,35,40,.92)",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          >
            <div className="flex flex-col items-center">
              <FileIcon item={previewItem} size={120} />
              <h2 className="mt-6 text-2xl font-semibold">{previewItem.name}</h2>
              <p className="mt-3 text-sm opacity-70">{previewItem.type}</p>
            </div>
          </div>
        </div>
      )}
      <GetInfoModal
        item={infoItem}
        currentPath={currentPath}
        onClose={() => setInfoItem(null)}
      />
    </main>
  );
}
