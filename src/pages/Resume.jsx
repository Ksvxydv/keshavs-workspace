import Page from "../components/ui/Page";
import resumePdf from "../assets/Keshav_Resume.pdf";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export default function Resume() {
  return (
    <Page>

      <div className="h-full overflow-y-auto">
        <div className="p-4 lg:p-5">
          <div
            className="overflow-hidden rounded-[28px] border shadow-2xl backdrop-blur-2xl"
            style={{
              backgroundColor: "var(--window)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4 backdrop-blur-xl"
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--window) 82%, transparent)",
              }}
            >
              <div>
                <h2 className="text-xl font-semibold">Resume</h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  View, download or open the latest PDF.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={resumePdf}
                  download
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border hover:opacity-80 transition"
                  style={{ borderColor: "var(--border)" }}
                >
                  <FiDownload />
                  <span>Download</span>
                </a>

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border hover:opacity-80 transition"
                  style={{ borderColor: "var(--border)" }}
                >
                  <FiExternalLink />
                  <span>Open</span>
                </a>
              </div>
            </div>

            <div
              className="h-[900px]"
              style={{ background: "#e5e7eb" }}
            >
              <iframe
                src={resumePdf}
                title="Resume"
                className="w-full h-full rounded-xl"
                style={{
                  border: "none",
                  background: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
