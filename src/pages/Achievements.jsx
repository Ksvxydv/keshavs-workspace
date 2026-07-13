import Page from "../components/ui/Page";
import Card from "../components/ui/Card";
import { HiAcademicCap } from "react-icons/hi2";
import { HiCamera } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import { HiCommandLine, HiTrophy } from "react-icons/hi2";

const achievements = [
  {
    icon: HiAcademicCap,
    title: "B.Tech in Computer Science & Engineering",
    organization: "MNNIT Allahabad",
    year: "2025",
    description: "Started my undergraduate journey in Computer Science & Engineering.",
    badge: "Education",
  },
  {
    icon: HiCamera,
    title: "Media Specialist",
    organization: "MNNIT Times",
    year: "2025",
    description: "Contributing to media and creative initiatives within the institute.",
    badge: "Leadership",
  },
  {
    icon: HiUserGroup,
    title: "Educator",
    organization: "Anokhi Pehel",
    year: "2025",
    description: "Teaching and mentoring school students through the social initiative.",
    badge: "Community",
  },
  {
    icon: HiCommandLine,
    title: "K_OS Portfolio",
    organization: "Personal Project",
    year: "2026",
    description: "Designed and built a macOS-inspired interactive portfolio using React.",
    badge: "Development",
  },
];

export default function Achievements() {
  return (
    <Page>
      <div className="h-full overflow-y-auto">
        <div className="p-4 lg:p-5">
          <div
            className="relative mb-8 overflow-hidden rounded-[28px] border p-8 shadow-2xl backdrop-blur-2xl lg:p-10"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, var(--window-secondary) 90%), var(--window-secondary))",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{
                background: "color-mix(in srgb, var(--accent) 28%, transparent)",
                opacity: 0.5,
              }}
            />
            <div
              className="absolute -left-24 bottom-0 h-64 w-64 rounded-full blur-3xl"
              style={{
                background: "color-mix(in srgb, var(--accent) 18%, transparent)",
                opacity: 0.35,
              }}
            />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--text) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />

            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-6">
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full border shadow-xl backdrop-blur-2xl"
                  style={{
                    background: "color-mix(in srgb, var(--window-secondary) 88%, var(--accent) 12%)",
                    borderColor: "var(--border)",
                  }}
                >
                  <HiTrophy className="h-11 w-11" style={{ color: "var(--accent)" }} />
                </div>

                <div>
                  <h1 className="text-3xl font-bold lg:text-5xl" style={{ color: "var(--text)" }}>
                    Achievements & Milestones
                  </h1>
                  <p className="mt-3 max-w-2xl leading-7" style={{ color: "var(--text-secondary)" }}>
                    Tracking my journey through academics, leadership, community initiatives, and software development.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "2025–Present",
                  `${achievements.length} Milestones`,
                  "3 Organizations",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "color-mix(in srgb, var(--window-secondary) 86%, var(--accent) 14%)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-2 pl-8 pb-12">
            <div
              className="absolute left-6 top-4 bottom-20 w-px"
              style={{ background: "var(--border)" }}
            />
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
              <div key={item.title} className="relative mb-8 last:mb-0">
                <div
                  className="absolute -left-[16px] top-8 h-5 w-5 rounded-full border-4 shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_18px_var(--accent)]"
                  style={{
                    background: "var(--accent)",
                    borderColor: "var(--window)",
                  }}
                />

                <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--accent)]">
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border backdrop-blur-md"
                      style={{
                        background: "color-mix(in srgb, var(--accent) 8%, var(--window-secondary) 92%)",
                        borderColor: "var(--border)",
                      }}>
                      <Icon className="h-8 w-8" style={{ color: "var(--accent)" }} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                          {item.title}
                        </h2>
                        <span className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{ background: "var(--window-secondary)", color: "var(--text-secondary)" }}>
                          {item.year}
                        </span>
                      </div>

                      <p className="mt-1 font-medium" style={{ color: "var(--accent)" }}>
                        {item.organization}
                      </p>
                      <span
                        className="mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          background: "color-mix(in srgb, var(--accent) 14%, var(--window-secondary) 86%)",
                          color: "var(--accent)",
                        }}
                      >
                        {item.badge}
                      </span>
                      <p className="mt-3 leading-7" style={{ color: "var(--text-secondary)" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              );
            })}
            <div className="relative mt-2">
              <div
                className="absolute -left-[14px] top-8 h-4 w-4 rounded-full border-4"
                style={{
                  background: "var(--window-secondary)",
                  borderColor: "var(--window)",
                }}
              />

              <Card
                className="border-2 border-dashed"
                style={{ borderColor: "var(--border)" }}
              >
                <h2 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                  Coming Soon
                </h2>
                <p className="mt-3 leading-7" style={{ color: "var(--text-secondary)" }}>
                  Future milestones including hackathons, internships, certifications, open-source contributions, and research projects will appear here.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
