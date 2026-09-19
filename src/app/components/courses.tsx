"use client";

import Image from "next/image";
import FadeIn from "./fade-in";

const courses = [
  {
    image: "/courses_python.jpg",
    alt: "Curso de Python",
    title: "Plataforma Udemy: Python",
  },
  {
    image: "/courses_arg.jpg",
    alt: "Curso de Argentina Programa",
    title: "Argentina Programa: Programacion Front-end",
  },
  {
    image: "/certificate_aws.jpg",
    alt: "Certificacion AWS",
    title: "Entrena Argentina: Desarrollador de Nube AWS",
  },
  {
    image: "/certificate_csharp.jpg",
    alt: "Certificacion C#",
    title: "FreeCodeCamp: Foundational C# with Microsoft",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold text-text md:text-4xl">
            Cursos y certificaciones
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <FadeIn key={course.title} delay={(index + 1) * 0.1} direction="up">
              <article className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:border-border-hover">
                <figure className="relative h-56 overflow-hidden sm:h-64">
                  <Image
                    src={course.image}
                    alt={course.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-sm font-medium leading-snug text-text-secondary">
                    {course.title}
                  </h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
