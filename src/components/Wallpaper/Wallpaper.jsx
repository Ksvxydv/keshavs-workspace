import { useDesktopSettings } from "../../context/DesktopSettingsContext";

export default function Wallpaper() {
  const { wallpaper } = useDesktopSettings();
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${wallpaper.image})`,
      }}
    />
  );
}
