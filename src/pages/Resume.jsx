import Page from "../components/ui/Page";
import resumePdf from "../assets/Keshav_Resume.pdf";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export default function Resume() {
  return (
    <Page>

      <div
        className="h-full min-h-0 rounded-3xl border overflow-hidden flex flex-col"
        style={{
          backgroundColor: "var(--window)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center justify-between px-5 py-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <h2 className="font-semibold text-lg">Resume</h2>

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
          className="flex-1 min-h-0 p-0"
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
    </Page>
  );
}
