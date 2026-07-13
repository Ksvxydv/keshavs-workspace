import Page from "../components/ui/Page";
import Card from "../components/ui/Card";
import { skills } from "../data/skills";
import { HiCodeBracketSquare } from "react-icons/hi2";

export default function Skills() {
  const categories = [
    { title: "Languages", items: skills.programming },
    { title: "Frontend", items: skills.frontend },
    { title: "Tools", items: skills.tools },
    { title: "Learning", items: skills.currentlyLearning },
  ];

  return (
    <Page>
      <div className="h-full overflow-y-auto">
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
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)"}} />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-6">
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full border shadow-xl backdrop-blur-2xl"
                  style={{
                    background:"color-mix(in srgb, var(--window-secondary) 88%, var(--accent) 12%)",
                    borderColor:"var(--border)",
                  }}
                >
                  <HiCodeBracketSquare className="h-11 w-11" style={{color:"var(--accent)"}} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold lg:text-5xl" style={{color:"var(--text)"}}>Skills & Technologies</h1>
                  <p className="mt-3 max-w-2xl leading-7" style={{color:"var(--text-secondary)"}}>
                    Technologies, frameworks and tools I use to build modern software while continuously expanding my computer science foundation.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  `${skills.programming.length} Languages`,
                  `${skills.frontend.length} Frontend`,
                  `${skills.tools.length} Tools`,
                  `${skills.currentlyLearning.length} Learning`,
                ].map((chip)=>(
                  <span key={chip} className="rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5" style={{background:"color-mix(in srgb, var(--window-secondary) 86%, var(--accent) 14%)",borderColor:"var(--border)",color:"var(--text)"}}>{chip}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 pb-4 xl:grid-cols-2">
            {categories.map((category) => (
              <Card key={category.title} className="h-full">
                <h2
                  className="mb-6 text-2xl font-bold tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  <div className="flex items-center justify-between">
                    <span>{category.title}</span>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: "var(--window-secondary)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {category.items.length}
                    </span>
                  </div>
                </h2>

                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                  {category.items.map((skill) => {
                    const Icon = skill.icon;
                    const subtitleMap = {
                      Languages: "Programming Language",
                      Frontend: "Framework / Library",
                      Tools: "Development Tool",
                      Learning: "Currently Exploring",
                    };

                    return (
                      <div
                        key={skill.name}
                        className="group flex h-44 flex-col items-center justify-center rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.04] hover:border-white/20 hover:shadow-2xl"
                        style={{
                          background:
                            "linear-gradient(180deg, color-mix(in srgb, var(--toolbar) 96%, white 4%), var(--toolbar))",
                          borderColor: "var(--border)",
                          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                        }}
                      >
                        <Icon
                          size={46}
                          style={{
                            color: skill.color,
                            filter: `drop-shadow(0 0 10px ${skill.color}55)`,
                            transition: "transform 220ms ease",
                          }}
                          className="mb-3 group-hover:scale-110"
                        />

                        <div className="flex flex-col items-center text-center">
                          <span
                            className="text-sm font-semibold tracking-wide"
                            style={{ color: "var(--text)" }}
                          >
                            {skill.name}
                          </span>

                          <span
                            className="mt-1 text-[11px] font-medium"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {subtitleMap[category.title]}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
      </div>
    </Page>
  );
}
