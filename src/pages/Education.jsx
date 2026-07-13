import { useState } from "react";
import Page from "../components/ui/Page";
import Card from "../components/ui/Card";
import mnnitLogo from "../assets/education/mnnitLogo.png";
import mnnitCampus from "../assets/education/mnnitCampus.png";

const education = [
  {
    title: "Motilal Nehru National Institute of Technology Allahabad",
    subtitle: "B.Tech in Computer Science & Engineering",
    duration: "2025 – Present",
    cgpa: "8.09",
    status: "Sophomore",
    location: "Prayagraj, Uttar Pradesh",
    coursework: [
      "Programming in C",
      "Data Structures",
      "Object-Oriented Programming",
      "Discrete Mathematics",
      "Engineering Mathematics",
      "Computer Organization",
      "Web Development",
      "Competitive Programming",
    ],
    interests: [
      "Software Engineering",
      "Web Development",
      "Competitive Programming",
      "Data Structures & Algorithms",
      "System Design (Learning)",
    ],
    activities: ["MNNIT Times — Media Specialist", "Anokhi Pehel — Educator"],
    description:
      "Passionate about software engineering, full-stack web development, and competitive programming. Currently strengthening my foundations in computer science while building real-world projects and preparing for software engineering internships.",
  },
];

export default function Education() {
  const [heroOffset, setHeroOffset] = useState({ x: 0, y: 0 });
  return (
    <Page>
      <div className="h-full overflow-y-auto">
        <div className="p-4 lg:p-5">
          {education.map((item) => (
            <Card key={item.title} className="overflow-hidden p-0">
              <div className="flex flex-col overflow-visible p-7 lg:p-9">
                <div
                  className="relative min-h-[320px] overflow-hidden rounded-[28px] border p-8 shadow-2xl backdrop-blur-2xl lg:min-h-[340px] lg:p-10"
                  style={{
                    background: "var(--window-secondary)",
                    borderColor: "var(--border)",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
                    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
                    setHeroOffset({ x, y });
                  }}
                  onMouseLeave={() => setHeroOffset({ x: 0, y: 0 })}
                >
                  <div
                    className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
                    style={{
                      background: "color-mix(in srgb, var(--accent) 28%, transparent)",
                      opacity: 0.45,
                    }}
                  />
                  <div
                    className="absolute -left-24 bottom-0 h-64 w-64 rounded-full blur-3xl"
                    style={{
                      background: "color-mix(in srgb, var(--accent) 18%, transparent)",
                      opacity: 0.3,
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
                  <img
                    src={mnnitCampus}
                    alt="MNNIT Campus"
                    draggable={false}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
                    style={{
                      objectPosition: "center 35%",
                      opacity: 0.28,
                      transform: `translate(${heroOffset.x}px, ${heroOffset.y}px) scale(1.22)`,
                      transformOrigin: "center center",
                      filter: "contrast(1.05) saturate(1.05)",
                      transition: "transform 180ms ease-out",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, color-mix(in srgb, var(--window) 88%, transparent), color-mix(in srgb, var(--window) 62%, transparent), color-mix(in srgb, var(--window) 25%, transparent))",
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-8 2xl:flex-row 2xl:items-center 2xl:justify-between">
                    <div className="flex min-w-0 items-center gap-5 lg:gap-7 2xl:flex-1">
                      <img
                        src={mnnitLogo}
                        alt="MNNIT Logo"
                        draggable={false}
                        className="h-28 w-28 shrink-0 rounded-3xl border p-3 shadow-2xl object-contain"
                        style={{
                          background: "rgba(255,255,255,.9)",
                          borderColor: "rgba(255,255,255,.25)",
                        }}
                      />
                      <div>
                        <h2
                          className="max-w-full text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl 2xl:text-5xl break-words"
                          style={{ color: "var(--text)" }}
                        >
                          {item.title}
                        </h2>
                        <p
                          className="mt-2 text-base md:text-lg"
                          style={{ color: "var(--accent)" }}
                        >
                          {item.subtitle}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="w-full 2xl:w-auto 2xl:max-w-[420px] shrink-0">
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: "Duration", value: item.duration },
                          { label: "Status", value: item.status },
                          { label: "CGPA", value: item.cgpa },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="flex min-h-[82px] flex-col justify-center rounded-2xl border px-5 py-4 transition-all duration-200 hover:-translate-y-1"
                            style={{
                              background:
                                "color-mix(in srgb, var(--window-secondary) 92%, var(--accent) 8%)",
                              borderColor: "var(--border)",
                            }}
                          >
                            <div
                              className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {stat.label}
                            </div>

                            <div
                              className="mt-1 text-lg font-bold leading-tight"
                              style={{ color: "var(--text)" }}
                            >
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-8 rounded-2xl border p-5"
                  style={{
                    background: "var(--window-secondary)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3
                    className="mb-2 text-lg font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    Academic Profile
                  </h3>
                  <p
                    className="leading-7"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 grid flex-1 gap-6 lg:grid-cols-2 auto-rows-fr">
                  <div
                    className="rounded-2xl border p-6 h-full"
                    style={{
                      background: "var(--window-secondary)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h3
                      className="mb-4 text-lg font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      Relevant Coursework
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full px-4 py-2 text-sm font-medium"
                          style={{
                            background: "var(--window-secondary)",
                            color: "var(--text)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border p-6 h-full"
                    style={{
                      background: "var(--window-secondary)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h3
                      className="mb-4 text-lg font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      Academic Interests
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {item.interests.map((interest) => (
                        <span
                          key={interest}
                          className="rounded-full px-4 py-2 text-sm font-medium"
                          style={{
                            background: "var(--window-secondary)",
                            color: "var(--text)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="mt-8 mb-4 text-lg font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      Campus Activities
                    </h3>

                    <div className="space-y-3">
                      {item.activities.map((activity) => (
                        <div
                          key={activity}
                          className="flex items-center gap-3 rounded-2xl border px-4 py-4 transition-all duration-200 hover:translate-x-1"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--text)",
                            background: "var(--window-secondary)",
                          }}
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-8 rounded-2xl border p-5"
                      style={{
                        background:
                          "color-mix(in srgb, var(--window-secondary) 94%, var(--accent) 6%)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Current Focus
                      </div>
                      <div
                        className="mt-2 text-lg font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        Building full-stack applications, strengthening DSA, and
                        preparing for software engineering internships.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Page>
  );
}
