"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import FadeIn from "./fade-in";

const projects = [
  {
    title: "Portfolio Web",
    description: "Usted esta aqui.",
    image: "/projects_portfolio.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/RamiroCuellar564/Portfolio",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "El Switcher",
    description: 'Implementacion Web del juego de mesa "El Switcher"',
    image: "/el_switcher.jpg",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/IngSof1-BoardByte-Devs/swicher-front",
        icon: FaGithub,
      },
      {
        label: "Comprar",
        href: "https://tienda.maldon.com.ar/productos/el-switcher?utm_source=Nuestraweb&utm_medium=BotonComprar&utm_id=COMPRAR",
        icon: HiCurrencyDollar,
      },
    ],
  },
  {
    title: "Feed Reader",
    description: "Lector automatico de feeds por consola.",
    image: "/feed_reader.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/RamiroCuellar564/feed-reader",
        icon: FaGithub,
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold text-text md:text-4xl">
            Proyectos
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={(index + 1) * 0.1} direction="up">
              <article className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:border-border-hover">
                <figure className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-text">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        <link.icon size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
