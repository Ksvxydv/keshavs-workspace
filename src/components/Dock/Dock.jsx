import { FaFolder, FaUser, FaCode, FaGithub, FaEnvelope } from "react-icons/fa";

const icons = [FaFolder, FaUser, FaCode, FaGithub, FaEnvelope];

export default function Dock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <div className="flex gap-3 px-4 py-3 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10">
        {icons.map((Icon, index) => (
          <button
            key={index}
            className="w-14 h-14 rounded-2xl bg-white/10 hover:scale-110 transition duration-200 flex items-center justify-center text-white text-2xl"
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}
