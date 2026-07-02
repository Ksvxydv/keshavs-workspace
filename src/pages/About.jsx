import { profile } from "../data/profile";
import { education } from "../data/education";
import { social } from "../data/social";
import profilePhoto from "../assets/profile/ProfilePhoto.png";
import leetcodeLogo from "../assets/social/leetcodeLogo.png";
import codeforcesLogo from "../assets/social/codeforceslogo.png";
import githubLogo from "../assets/social/githubLogo.svg";
import linkedinLogo from "../assets/social/linkedinLogo.png";
import mnnitLogo from "../assets/education/mnnitLogo.png";
import {
  GraduationCap,
  MapPin,
  Code2,
  Rocket,
} from "lucide-react";

export default function About() {
  const primaryEducation = education[0];
  const socialLinks = [
    { icon: githubLogo, alt: "GitHub", url: social.github.url },
    { icon: linkedinLogo, alt: "LinkedIn", url: social.linkedin.url },
    { icon: leetcodeLogo, alt: "LeetCode", url: social.leetcode.url },
    { icon: codeforcesLogo, alt: "Codeforces", url: social.codeforces.url },
  ];
  return (
    <div
      className="h-full overflow-auto p-8 transition-colors duration-300"
      style={{
        background: "var(--window-secondary)",
        color: "var(--text)",
      }}
    >
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-400">About</p>
        <h1 className="mt-1 text-4xl font-bold">{profile.name}</h1>
        <p
          className="mt-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {profile.branch} • {profile.college}
        </p>
      </div>

      <div
        className="mb-8 flex items-center gap-10 rounded-3xl border p-10"
        style={{
          background: "var(--window)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="h-40 w-40 overflow-hidden rounded-3xl border shadow-xl shrink-0"
          style={{ borderColor: "var(--border)" }}
        >
          <img
            src={profilePhoto}
            alt={profile.name}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div className="flex-1">
          <p className="text-blue-400 font-medium">Hello, I'm</p>
          <h2 className="mt-1 text-5xl font-bold">{profile.name}</h2>
          <p
            className="mt-3 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {profile.bio}
          </p>

          <div className="mt-6 flex gap-3">
            <button className="rounded-lg bg-blue-500 px-5 py-2 transition hover:bg-blue-600">Resume</button>
            <button
              className="rounded-lg border px-5 py-2 transition"
              style={{
                background: "var(--toolbar)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              Contact
            </button>
          </div>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ icon, alt, url }) => (
              <a
                key={alt}
                href={url || "#"}
                target="_blank"
                rel="noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "var(--toolbar)",
                  borderColor: "var(--border)",
                }}
              >
                <img
                  src={icon}
                  alt={alt}
                  className="h-6 w-6 object-contain"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div
          className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{
            background: "var(--window)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <GraduationCap size={20} className="text-blue-500" />
            Education
          </h2>
          <div className="flex items-center gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border bg-white p-2"
              style={{ borderColor: "var(--border)" }}
            >
              <img
                src={mnnitLogo}
                alt={primaryEducation.shortName}
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>

            <div className="space-y-1">
              <p className="font-semibold">{primaryEducation.shortName}</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {primaryEducation.degree}
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {primaryEducation.branch}
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {primaryEducation.duration}
              </p>
            </div>
          </div>
        </div>

        <div
          className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{
            background: "var(--window)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <MapPin size={20} className="text-red-500" />
            Location
          </h2>
          <p
            className="mt-2 text-sm leading-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {profile.location}
          </p>
        </div>

        <div
          className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{
            background: "var(--window)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Code2 size={20} className="text-emerald-500" />
            Interests
          </h2>
          <p
            className="mt-2 text-sm leading-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {profile.currentFocus.join(" • ")}
          </p>
        </div>

        <div
          className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{
            background: "var(--window)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Rocket size={20} className="text-orange-500" />
            Current Goal
          </h2>
          <p
            className="mt-2 text-sm leading-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Building high-quality software and preparing for internships.
          </p>
        </div>
      </div>
    </div>
  );
}
