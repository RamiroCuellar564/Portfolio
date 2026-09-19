"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FadeIn from "./fade-in";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full border-t border-border py-20"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold text-text md:text-4xl">
            Contacto
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-10 text-center text-lg text-text-secondary">
            ¿Tenés un proyecto en mente? ¡Hablemos!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex w-full max-w-md flex-col gap-4">
            <a
              href="mailto:cuellar.ramiro564@gmail.com"
              className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <FaEnvelope size={18} />
              Enviar Email
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/RamiroCuellar564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ramirocuellar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-12 text-center text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Ramiro Cuellar. Todos los derechos reservados.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
