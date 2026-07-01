export default function About() {
  return (
    <div className="h-full overflow-auto bg-[#1e1e1e] text-white">
      <div className="p-10">
        <div className="flex gap-8 items-center">
          {/* Profile Photo */}
          <div className="w-44 h-44 rounded-3xl bg-zinc-700 flex items-center justify-center text-6xl">
            👤
          </div>

          {/* Intro */}
          <div>
            <p className="text-blue-400 font-medium">Hello, I'm</p>

            <h1 className="text-6xl font-bold mt-1">Keshav</h1>

            <p className="mt-3 text-xl text-zinc-300">
              Computer Science & Engineering Student
            </p>

            <div className="mt-6 flex gap-3">
              <button className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
                Resume
              </button>

              <button className="px-5 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Information Cards */}

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="rounded-2xl bg-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Education</h2>

            <p className="mt-3 text-zinc-300">
              Motilal Nehru National Institute of Technology Allahabad
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Location</h2>

            <p className="mt-3 text-zinc-300">Haryana, India</p>
          </div>

          <div className="rounded-2xl bg-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Interests</h2>

            <p className="mt-3 text-zinc-300">
              Web Development • Competitive Programming • UI Design
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-800 p-6">
            <h2 className="text-xl font-semibold">Current Goal</h2>

            <p className="mt-3 text-zinc-300">
              Building high-quality software and preparing for internships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
