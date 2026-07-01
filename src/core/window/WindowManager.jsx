export default function WindowManager({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
