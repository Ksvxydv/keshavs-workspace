import Page from "../components/ui/Page";
import SectionTitle from "../components/ui/SectionTitle";

export default function Projects() {
  return (
    <Page>
      <SectionTitle>Projects</SectionTitle>

      <div
        className="min-h-[65vh] flex flex-col justify-center items-center gap-6 rounded-3xl border backdrop-blur-sm p-10"
        style={{
          backgroundColor: "var(--window)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <div className="text-7xl">🚀</div>

        <h2 className="text-3xl font-semibold">Projects Coming Soon</h2>

        <h3 className="text-xl font-medium text-[var(--text-secondary)]">
          Currently Building
        </h3>

        <p className="max-w-2xl text-center leading-7 text-[var(--text-secondary)]">
          I'm currently working on real-world projects that showcase my skills in
          software development, problem solving, and modern web technologies.
          This section will be updated as I complete and publish each project.
        </p>

        <div className="mt-6 rounded-full px-4 py-1 bg-[var(--window)] border bo`rder-[var(--border)] text-[var(--text-secondary)] select-none">
          Building...
        </div>
      </div>
    </Page>
  );
}
