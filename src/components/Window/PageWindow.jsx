import WindowFrame from "../../core/window/WindowFrame";

export default function PageWindow({ title, Component, ...windowProps }) {
  return (
    <WindowFrame title={title} {...windowProps}>
      <Component />
    </WindowFrame>
  );
}
