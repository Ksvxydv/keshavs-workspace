import { useMemo, useState } from "react";
import { fileSystem } from "./filesystem";

import { findDirectoryByPath } from "./filesystemNavigation";
import { getTerminalActions } from "./terminalActions";

export default function useFileSystem() {
  const [currentDirectory, setCurrentDirectory] = useState(fileSystem);
  const [currentPath, setCurrentPath] = useState("/");
  const [history, setHistory] = useState(["/"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const items = useMemo(
    () => currentDirectory.children ?? [],
    [currentDirectory]
  );

  function openDirectory(directoryId) {
    const next = items.find(
      (item) => item.id === directoryId && item.type === "directory"
    );

    if (!next) return;

    const nextPath =
      currentPath === "/"
        ? `/${next.name}`
        : `${currentPath}/${next.name}`;

    setCurrentDirectory(next);
    setCurrentPath(nextPath);

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(nextPath);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  function openRootDirectory(directoryId) {
    const next = fileSystem.children?.find(
      (item) => item.id === directoryId && item.type === "directory"
    );

    if (!next) return;

    const nextPath = `/${next.name}`;

    setCurrentDirectory(next);
    setCurrentPath(nextPath);

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(nextPath);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  function openPath(path) {
    const directory = findDirectoryByPath(fileSystem, path);

    if (!directory) return;

    setCurrentDirectory(directory);
    setCurrentPath(path);

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(path);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  function goHome() {
    setCurrentDirectory(fileSystem);
    setCurrentPath("/");

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push("/");

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  function goBack() {
    if (historyIndex === 0) return;

    const nextIndex = historyIndex - 1;
    const path = history[nextIndex];

    const directory = findDirectoryByPath(fileSystem, path);
    if (!directory) return;
    setCurrentDirectory(directory);
    setCurrentPath(path);
    setHistoryIndex(nextIndex);
  }

  function goForward() {
    if (historyIndex >= history.length - 1) return;

    const nextIndex = historyIndex + 1;
    const path = history[nextIndex];

    const directory = findDirectoryByPath(fileSystem, path);
    if (!directory) return;
    setCurrentDirectory(directory);
    setCurrentPath(path);
    setHistoryIndex(nextIndex);
  }

  function openItem(item) {
    switch (item.type) {
      case "directory":
        openDirectory(item.id);
        break;

      case "page":
        getTerminalActions().openWindow?.(item.page);
        break;

      case "app":
        getTerminalActions().openWindow?.(item.app);
        break;

      case "link":
        window.open(item.url, "_blank", "noopener,noreferrer");
        break;

      case "file":
        switch (item.name) {
          case "Resume.pdf":
            getTerminalActions().openWindow?.("resume");
            break;

          case "README.md":
            getTerminalActions().openWindow?.("fileviewer", {
              file: item.name,
            });
            break;

          case "package.json":
            getTerminalActions().openWindow?.("fileviewer", {
              file: item.name,
            });
            break;

          case "Notes.md":
            getTerminalActions().openWindow?.("fileviewer", {
              file: item.name,
            });
            break;

          default:
            console.log("Open file:", item.name);
            break;
        }
        break;

      default:
        break;
    }
  }

  return {
    currentDirectory,
    currentPath,
    items,
    openDirectory,
    openItem,
    openRootDirectory,
    openPath,
    goHome,
    goBack,
    goForward,
    canGoBack: historyIndex > 0,
    canGoForward: historyIndex < history.length - 1,
  };
}