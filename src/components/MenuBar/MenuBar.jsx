export default function MenuBar() {
  return (
    <header className="fixed top-0 left-0 w-full h-10 backdrop-blur-xl bg-white/10 border-b border-white/10 flex items-center justify-between px-5 text-white text-sm">
      <div className="flex items-center gap-6">
        <span className="font-bold">K OS</span>
        <span>Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>

      <div>Wed 12:10 PM</div>
    </header>
  );
}
