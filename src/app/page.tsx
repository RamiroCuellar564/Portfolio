import Header from "./components/header";
import Intro from "./components/intro";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Courses from "./components/courses";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Header />
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
      <Courses />
      <Contact />
    </main>
  );
}
