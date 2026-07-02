import Page from "../components/ui/Page";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const achievements = [
  {
    title: "B.Tech CSE",
    description: "Currently pursuing Computer Science & Engineering at MNNIT Allahabad.",
  },
  {
    title: "Competitive Programming",
    description: "Actively solving algorithmic problems and improving problem-solving skills.",
  },
  {
    title: "K-OS",
    description: "Building a macOS Tahoe-inspired interactive portfolio from scratch using React.",
  },
];

export default function Achievements() {
  return (
    <Page>
      <SectionTitle>Achievements</SectionTitle>

      <div className="grid gap-6">
        {achievements.map((item) => (
          <Card key={item.title}>
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text)" }}
            >
              {item.title}
            </h2>

            <p
              className="mt-3 leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Page>
  );
}
