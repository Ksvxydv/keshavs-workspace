import wallpaper from "../../assets/wallpaper.jpg";

export default function Wallpaper() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    />
  );
}
