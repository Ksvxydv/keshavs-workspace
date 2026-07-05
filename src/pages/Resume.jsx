import Page from "../components/ui/Page";
import SectionTitle from "../components/ui/SectionTitle";
import { FiFileText } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Resume() {
  return (
    <Page>
      <SectionTitle>Resume</SectionTitle>

      <div className="min-h-[65vh] flex flex-col justify-center items-center gap-6 rounded-3xl border backdrop-blur-sm p-10"
        style={{
          backgroundColor: "var(--window)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <FiFileText
          size={84}
          className="transition-transform duration-300 ease-in-out hover:scale-110"
          style={{ color: "var(--text-secondary)" }}
        />
        <h2 className="text-3xl font-semibold">Resume</h2>
        <h3 className="text-xl font-medium text-[var(--text-secondary)]">
          Resume Coming Soon
        </h3>
        <p className="max-w-lg text-center leading-7 text-[var(--text-secondary)]">
          I'm currently building my experience through projects, competitive programming, and continuous learning. A polished resume and a macOS Preview-style viewer will be available here soon.
        </p>
        <div className="mt-6 rounded-full px-4 py-1 bg-[var(--window)] border border-[var(--border)] flex items-center gap-2 text-[var(--text-secondary)] select-none">
          <HiSparkles />
          <span>In Progress</span>
        </div>
      </div>
    </Page>
  );
}
