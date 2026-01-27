import CoverParticles from "./components/cover-particles";
import Header from "./components/header";
import Intro from "./components/intro";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Courses from "./components/courses";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <div className="relative flex flex-col min-h-screen bg-no-repeat bg-gradient-to-r from-pink-50 via-pink-100/60 to-pink-200/80">
        <CoverParticles />
        <Header />
        <Intro />
        <AboutMe />
        <Projects/>
        <Courses/>
        <Contact/>
      </div>
    </main>
  );
}
