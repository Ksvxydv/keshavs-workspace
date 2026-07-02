import Page from "../components/ui/Page";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const education = [
  {
    title: "Motilal Nehru National Institute of Technology Allahabad",
    subtitle: "B.Tech in Computer Science & Engineering",
    duration: "2025 – Present",
    description:
      "Currently pursuing undergraduate studies with a focus on software engineering, algorithms, web development, and competitive programming.",
  },
];

export default function Education() {
  return (
    <Page>
      <SectionTitle>Education</SectionTitle>

      <div className="grid gap-6">
        {education.map((item) => (
          <Card key={item.title}>
            <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>
              {item.title}
            </h2>

            <p className="mt-2 text-lg" style={{ color: "var(--accent)" }}>
              {item.subtitle}
            </p>

            <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
              {item.duration}
            </p>

            <p className="mt-4 leading-7" style={{ color: "var(--text-secondary)" }}>
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Page>
  );
}
