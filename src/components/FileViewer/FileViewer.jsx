import WindowFrame from "../../core/window/WindowFrame";

export default function FileViewer(props) {
  const file = props.file || props.window?.file;
  const fileName = file || "";
  const ext = fileName.includes(".") ? fileName.split(".").pop() : "";

  return (
    <WindowFrame
      title="File Viewer"
      onClose={props.onClose}
      onMinimize={props.onMinimize}
      onMaximize={props.onMaximize}
      onFocus={props.onFocus}
      onDragStart={props.onDragStart}
      onResizeStart={props.onResizeStart}
    >
      <div className="h-full w-full overflow-auto p-8 space-y-4">
        <div className="mb-6">
          <h1 className="text-xl font-semibold">
            {fileName}
          </h1>

          <p style={{ color: "var(--text-secondary)", fontSize: "12px" }}>
            {ext ? `${ext.toUpperCase()} File` : "Unknown File"}
          </p>
        </div>

        {ext === "md" ? (
          <div style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
            <h2 className="text-lg font-semibold mb-2">Markdown Preview</h2>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "var(--window)",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
              }}
            >
              {fileName === "README.md" && `
# K-OS Portfolio

A macOS-inspired operating system built with React.

## Features
- Window management system
- Finder-like file explorer
- Dock with magnification
- App registry system

## Tech Stack
React, Tailwind, Framer Motion
              `}

              {fileName === "Notes.md" && `
# Notes

- Improve Finder UI
- Add file preview system
- Polish animations
- Add more macOS behaviors
              `}

              {fileName !== "README.md" && fileName !== "Notes.md" && `
# Markdown File

This is a markdown file preview.
              `}
            </pre>
          </div>
        ) : ext === "json" ? (
          <div style={{ color: "var(--text-secondary)" }}>
            <h2 className="text-lg font-semibold mb-2">JSON Preview</h2>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontSize: "12px",
                background: "var(--window)",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
              }}
            >
              {fileName === "package.json"
                ? JSON.stringify(
                    {
                      name: "k-os-portfolio",
                      version: "1.0.0",
                      description: "macOS inspired portfolio",
                      scripts: {
                        dev: "vite",
                        build: "vite build",
                        preview: "vite preview"
                      },
                      dependencies: {
                        react: "latest",
                        "framer-motion": "latest"
                      }
                    },
                    null,
                    2
                  )
                : `{
  "file": "${fileName}",
  "type": "generic json",
  "message": "No structured preview available"
}`}
            </pre>
          </div>
        ) : (
          <div style={{ color: "var(--text-secondary)" }}>
            No preview available for this file.
          </div>
        )}
      </div>
    </WindowFrame>
  );
}
