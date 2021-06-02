import { Section } from "../components/wrapper";
import About from "../components/about";

const skill_dev = [
  "Java",
  "Python",
  "C#",
  "VanillaJS",
  "HTML5",
  "CSS3",
  "SASS",
  "jQuery",
  "ReactJS",
  "MySql",
  "SASS",
];
const skill_tools = [
  "Unity",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Sublime Text",
  "Visual Studio Code",
  "NetBeans",
  "Jupyter Notebook",
  "Figma",
  "Git + Github",
  "Wondershare Filmora",
];
const skill_knowledge = [
  "Videography",
  "Computer Hardware and Software",
  "Data Structures and Algorithms",
  "UI/UX",
];

function HomePage() {
  return (
    <>
      <Section>
        <About
          skillDev={skill_dev}
          skillTools={skill_tools}
          skillKnow={skill_knowledge}
        />
      </Section>
    </>
  );
}

export default HomePage;
