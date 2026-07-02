import Page from "../components/ui/Page";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";

const contacts = [
  {
    label: "Email",
    value: "ksvxydv@gmail.com",
    link: "mailto:ksvxydv@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/ksvxydv",
    link: "https://github.com/ksvxydv",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ksvxydv",
    link: "https://linkedin.com/in/ksvxydv",
  },
];

export default function Contact() {
  return (
    <Page>
      <SectionTitle>Contact</SectionTitle>

      <Card>
        <div className="space-y-6">
          {contacts.map((item) => (
            <div key={item.label}>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-1 text-lg hover:underline"
                style={{ color: "var(--text)" }}
              >
                {item.value}
              </a>
            </div>
          ))}

          <div className="pt-4">
            <PrimaryButton>Get in Touch</PrimaryButton>
          </div>
        </div>
      </Card>
    </Page>
  );
}
