import Page from "../components/ui/Page";
import Card from "../components/ui/Card";
import profileImage from "../assets/profile/ProfilePhoto.png";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const contacts = [
  {
    label: "Email",
    value: "ksvxydv@gmail.com",
    link: "mailto:ksvxydv@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "@ksvxydv",
    link: "https://github.com/ksvxydv",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "Keshav",
    link: "https://linkedin.com/in/ksvxydv",
    icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <Page>
      <Card className="h-full p-0 overflow-hidden">
        <div
          className="flex h-full min-h-0 overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Sidebar */}
          <div
            className="w-72 h-full flex-shrink-0 flex flex-col"
            style={{ background: "var(--window-secondary)" }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "var(--border)" }}>
              <span className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Contacts
              </span>
              <div className="flex gap-2">
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#34C759" }} />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#0A84FF" }} />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto">
              <div className="flex flex-col items-center gap-3">
                <img
                  src={profileImage}
                  alt="Keshav"
                  className="w-16 h-16 rounded-full object-cover border"
                  style={{ borderColor: "var(--border)" }}
                  draggable={false}
                />
                <div className="text-base font-medium" style={{ color: "var(--text)" }}>
                  Keshav
                </div>
              </div>
            </div>
          </div>
          {/* Details panel */}
          <div className="flex-1 h-full flex flex-col items-center justify-center overflow-y-auto" style={{ background: "var(--window)" }}>
            <div className="flex flex-col items-center gap-4 w-full max-w-lg px-10">
              <img
                src={profileImage}
                alt="Keshav"
                className="w-28 h-28 rounded-full object-cover border shadow-lg mb-2"
                style={{ borderColor: "var(--border)" }}
                draggable={false}
              />
              <div className="text-3xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                Keshav
              </div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                MNNIT Allahabad
              </div>
              <div className="w-full mt-8 flex flex-col gap-3">
                {contacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                      style={{
                        background: "var(--window-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                    >
                      <>
                        <div className="flex items-center gap-4 min-w-0">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl"
                            style={{ background: "var(--window)" }}
                          >
                            <Icon size={18} />
                          </div>

                          <div className="min-w-0">
                            <div
                              className="text-xs uppercase tracking-wide"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {item.label}
                            </div>
                            <div
                              className="truncate text-base font-medium underline underline-offset-4 transition-opacity group-hover:opacity-80"
                              style={{ color: "var(--text)" }}
                            >
                              {item.value}
                            </div>
                          </div>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M8 7h9v9" />
                        </svg>
                      </>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Page>
  );
}
