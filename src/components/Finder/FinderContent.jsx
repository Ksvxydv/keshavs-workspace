import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Education from "../../pages/Education";
import Achievements from "../../pages/Achievements";
import Resume from "../../pages/Resume";
import Contact from "../../pages/Contact";

export default function FinderContent({ active }) {
  switch (active) {
    case "Projects":
      return <Projects />;

    case "Skills":
      return <Skills />;

    case "Education":
      return <Education />;

    case "Achievements":
      return <Achievements />;

    case "Resume":
      return <Resume />;

    case "Contact":
      return <Contact />;

    default:
      return <About />;
  }
}
