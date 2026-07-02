import Page from "../components/ui/Page";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Page>
      <SectionTitle>Projects</SectionTitle>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h2
                    className="text-2xl font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h2>

                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: "var(--accent)",
                      color: "white",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <p
                  className="mt-4 max-w-3xl leading-7"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--toolbar)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center">
                <PrimaryButton>
                  View Project
                </PrimaryButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
}
