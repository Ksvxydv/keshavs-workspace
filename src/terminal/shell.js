import { fileSystem } from "./filesystem";
import {
  resolvePath,
  findDirectoryByPath,
  listDirectory,
} from "./filesystemNavigation";

let currentDirectory = fileSystem;
let currentPath = "/";

export function getCurrentDirectory() {
  return currentDirectory;
}

export function getCurrentPath() {
  return currentPath;
}

export function listCurrentDirectory() {
  return listDirectory(currentDirectory);
}

export function findItemInCurrentDirectory(name) {
  return (
    currentDirectory.children?.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    ) ?? null
  );
}

export function changeDirectory(target) {
  const nextPath = resolvePath(currentPath, target || "/");

  const nextDirectory = findDirectoryByPath(fileSystem, nextPath);

  if (!nextDirectory) {
    return false;
  }

  currentDirectory = nextDirectory;
  currentPath = nextPath;

  return true;
}
