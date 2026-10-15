"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import FadeIn from "./fade-in";

const projects = [
  {
    title: "AhorraMás",
    description: "Compará supermercados en tiempo real.",
    image: "/ahorramas-logo.svg",
    imageFit: "contain",
    featured: true,
    links: [
      {
        label: "Visitar sitio",
        href: "https://ahorramas-five.vercel.app/",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    title: "Portfolio Web",
    description: "Usted esta aqui.",
    image: "/projects_portfolio.png",
    imageFit: "cover",
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
    imageFit: "cover",
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
    imageFit: "cover",
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
            <FadeIn
              key={project.title}
              delay={(index + 1) * 0.1}
              direction="up"
              className={project.featured ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <article
                className={`group overflow-hidden rounded-2xl border bg-surface shadow-sm transition-all duration-300 hover:shadow-md ${
                  project.featured
                    ? "border-[#c9ef4d]/60 shadow-[0_18px_60px_-38px_rgba(12,47,28,0.45)] hover:border-[#1e7a45] md:grid md:grid-cols-[0.95fr_1.05fr]"
                    : "border-border hover:border-border-hover"
                }`}
              >
                <figure
                  className={`relative overflow-hidden ${
                    project.featured
                      ? "flex min-h-[260px] items-center justify-center bg-[#0c2f1c] px-6 py-12 md:min-h-[320px]"
                      : "h-48 bg-base"
                  }`}
                >
                  {project.featured && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute -right-20 -top-28 size-80 rounded-full border border-white/10"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -right-8 -top-16 size-56 rounded-full border border-white/10"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-24 -left-20 size-56 rounded-full bg-[#1e7a45]/35 blur-2xl"
                      />
                      <span className="absolute left-6 top-6 z-10 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d5f19a] md:left-8 md:top-8">
                        Proyecto destacado
                      </span>
                    </>
                  )}
                  {project.featured ? (
                    <div className="relative h-28 w-full max-w-[30rem] rounded-xl bg-[#f7f8f2] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.03]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-3 md:p-4"
                      />
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        project.imageFit === "contain"
                          ? "object-contain p-8"
                          : "object-cover"
                      }`}
                    />
                  )}
                </figure>
                <div
                  className={`flex flex-col items-start ${
                    project.featured
                      ? "justify-center p-7 md:p-10 lg:p-12"
                      : "p-6"
                  }`}
                >
                  <h3
                    className={`mb-2 font-semibold text-text ${
                      project.featured ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-5 leading-relaxed text-text-secondary ${
                      project.featured ? "text-base md:text-lg" : "text-sm"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                          project.featured
                            ? "bg-[#0c2f1c] text-white hover:bg-[#1e7a45]"
                            : "border border-border text-text-secondary hover:border-accent hover:text-accent"
                        }`}
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
