import {
  Folder,
  FolderOpen,
  FileText,
  AppWindow,
  Settings,
  SquareTerminal,
  User,
  Briefcase,
  GraduationCap,
  Trophy,
  Mail,
  Link2,
} from "lucide-react";

export default function FileIcon({ item, size = 44 }) {
  if (item.type === "directory") {
    return <Folder size={size} strokeWidth={1.8} />;
  }

  if (item.type === "app") {
    switch (item.app) {
      case "finder":
        return <FolderOpen size={size} strokeWidth={1.8} />;
      case "terminal":
        return <SquareTerminal size={size} strokeWidth={1.8} />;

      case "settings":
        return <Settings size={size} strokeWidth={1.8} />;

      default:
        return <AppWindow size={size} strokeWidth={1.8} />;
    }
  }

  if (item.type === "page") {
    switch (item.page) {
      case "about":
        return <User size={size} strokeWidth={1.8} />;

      case "projects":
        return <Briefcase size={size} strokeWidth={1.8} />;

      case "skills":
        return <FileText size={size} strokeWidth={1.8} />;

      case "education":
        return <GraduationCap size={size} strokeWidth={1.8} />;

      case "achievements":
        return <Trophy size={size} strokeWidth={1.8} />;

      case "resume":
        return <FileText size={size} strokeWidth={1.8} />;

      case "contact":
        return <Mail size={size} strokeWidth={1.8} />;

      default:
        return <FileText size={size} strokeWidth={1.8} />;
    }
  }

  if (item.type === "file") {
    return <FileText size={size} strokeWidth={1.8} />;
  }

  if (item.type === "link") {
    return <Link2 size={size} strokeWidth={1.8} />;
  }

  return <FileText size={size} strokeWidth={1.8} />;
}
