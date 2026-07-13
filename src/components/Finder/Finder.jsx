import useFileSystem from "../../terminal/useFileSystem";
import FinderSidebar from "./FinderSidebar";
import FinderContent from "./FinderContent";
import WindowFrame from "../../core/window/WindowFrame";

export default function Finder({
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onDragStart,
  onResizeStart,
}) {
  const {
    currentPath,
    items,
    openDirectory,
    openItem,
    openRootDirectory,
    openPath,
    goHome,
    goBack,
    goForward,
    canGoBack,
    canGoForward,
  } = useFileSystem();

  // Remove '.app' suffix from displayed names for application entries
  const displayItems = items.map(item => {
    if (item.name.endsWith('.app')) {
      return { ...item, displayName: item.name.slice(0, -4) };
    }
    return { ...item, displayName: item.name };
  });

  return (
    <WindowFrame
      title="Finder"
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onFocus={onFocus}
      onDragStart={onDragStart}
      onResizeStart={onResizeStart}
    >
      <div className="flex h-[calc(100%-48px)]">
        <FinderSidebar
          currentPath={currentPath}
          goHome={goHome}
          openRootDirectory={openRootDirectory}
        />

        <FinderContent
          currentPath={currentPath}
          items={displayItems}
          openDirectory={openDirectory}
          openItem={openItem}
          goHome={goHome}
          goBack={goBack}
          goForward={goForward}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          openPath={openPath}
          itemLabel={(item) => item.displayName ?? item.name}
        />
      </div>
    </WindowFrame>
  );
}
