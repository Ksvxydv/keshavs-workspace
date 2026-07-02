

import { fileSystem } from "./filesystem";

export function findDirectoryByPath(root = fileSystem, path = "/") {
  if (path === "/") return root;

  const parts = path.split("/").filter(Boolean);
  let current = root;

  for (const part of parts) {
    current = current.children?.find(
      (item) =>
        item.type === "directory" &&
        item.name.toLowerCase() === part.toLowerCase()
    );

    if (!current) {
      return null;
    }
  }

  return current;
}

export function listDirectory(directory) {
  return directory?.children ?? [];
}

export function resolvePath(currentPath, target) {
  if (!target || target === ".") {
    return currentPath;
  }

  if (target === "/") {
    return "/";
  }

  if (target.startsWith("/")) {
    return target;
  }

  const segments = currentPath.split("/").filter(Boolean);

  for (const part of target.split("/")) {
    if (!part || part === ".") continue;

    if (part === "..") {
      segments.pop();
    } else {
      segments.push(part);
    }
  }

  return "/" + segments.join("/");
}