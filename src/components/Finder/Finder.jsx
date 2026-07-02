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
          items={items}
          openDirectory={openDirectory}
          openItem={openItem}
          goHome={goHome}
          goBack={goBack}
          goForward={goForward}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          openPath={openPath}
        />
      </div>
    </WindowFrame>
  );
}
