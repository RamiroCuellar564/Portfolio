import type { IconType } from "react-icons";
import {
  FaCode,
  FaJava,
  FaWindows,
} from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiAngular,
  SiAnthropic,
  SiBitbucket,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrometheus,
  SiPydantic,
  SiPython,
  SiReact,
  SiRedis,
  SiSlack,
  SiTypescript,
} from "react-icons/si";
import FadeIn from "./fade-in";

type Skill = {
  name: string;
  icon?: IconType;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
  className?: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: SiReact },
      { name: "AngularJS", icon: SiAngular },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python (FastAPI)", icon: SiFastapi },
      { name: "REST APIs", icon: FaCode },
      { name: "Httpx", icon: FaCode },
      { name: "Pydantic", icon: SiPydantic },
    ],
  },
  {
    name: "Bases de datos",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgresSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    name: "Lenguajes de programación",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "C#", icon: FaCode },
      { name: "Java", icon: FaJava },
      { name: "Haskell", icon: SiHaskell },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    name: "Sistemas operativos",
    skills: [
      { name: "Linux/Unix", icon: SiLinux },
      { name: "Windows", icon: FaWindows },
    ],
  },
  {
    name: "Observabilidad",
    skills: [{ name: "Prometheus", icon: SiPrometheus }],
  },
  {
    name: "Herramientas",
    className: "md:col-span-2 lg:col-span-12",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Bitbucket", icon: SiBitbucket },
      { name: "Jira", icon: SiJira },
      { name: "Slack", icon: SiSlack },
      { name: "Docker", icon: SiDocker },
      { name: "AWS CLI", icon: SiAmazonwebservices },
      { name: "Claude", icon: SiAnthropic },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "OpenAI Codex", icon: SiOpenai },
      { name: "OpenCode", icon: FaCode },
      { name: "ChatGPT", icon: SiOpenai },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="w-full border-t border-border py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Mi stack
              </p>
              <h2
                id="skills-title"
                className="text-3xl font-bold text-text md:text-4xl"
              >
                Habilidades
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-text-secondary md:text-right md:text-base">
              Tecnologías, lenguajes y herramientas que forman parte de mi caja
              de trabajo.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {skillCategories.map((category, index) => (
            <FadeIn
              key={category.name}
              delay={index * 0.06}
              direction="up"
              className={
                category.className ??
                "sm:col-span-1 lg:col-span-6"
              }
            >
              <article className="h-full rounded-2xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-border-hover md:p-6">
                <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs font-semibold text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-text md:text-lg">
                    {category.name}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <li
                        key={skill.name}
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border bg-base px-3 py-2 text-sm font-medium text-text-secondary"
                      >
                        {Icon && (
                          <Icon
                            aria-hidden="true"
                            className="shrink-0 text-accent"
                            size={16}
                          />
                        )}
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
