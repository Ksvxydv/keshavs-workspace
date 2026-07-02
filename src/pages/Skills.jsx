import Page from "../components/ui/Page";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { skills } from "../data/skills";

export default function Skills() {
  const categories = [
    { title: "Languages", items: skills.programming },
    { title: "Frontend", items: skills.frontend },
    { title: "Tools", items: skills.tools },
    { title: "Learning", items: skills.currentlyLearning },
  ];

  return (
    <Page>
      <SectionTitle>Skills</SectionTitle>

      <div className="grid gap-8 xl:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.title}>
            <h2
              className="mb-6 text-2xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              {category.title}
            </h2>

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {category.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="group flex h-40 flex-col items-center justify-center rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.05] hover:border-white/20 hover:shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(180deg, color-mix(in srgb, var(--toolbar) 96%, white 4%), var(--toolbar))",
                      borderColor: "var(--border)",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Icon
                      size={40}
                      style={{
                        color: skill.color,
                        filter: `drop-shadow(0 0 10px ${skill.color}55)`,
                        transition: "transform 220ms ease",
                      }}
                      className="mb-3 group-hover:scale-110"
                    />

                    <span
                      className="flex h-10 items-center justify-center text-center text-sm font-medium tracking-wide leading-tight"
                      style={{ color: "var(--text)" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
}
