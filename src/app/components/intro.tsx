"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { IoDownload } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import FadeIn from "./fade-in";

const Intro = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 py-20 md:grid-cols-2 md:gap-12">
        <div className="flex justify-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-accent/10 blur-2xl" />
              <Image
                src="/foto.png"
                alt="Foto de perfil de Ramiro Cuellar"
                priority
                width={250}
                height={250}
                className="relative rounded-full object-cover"
              />
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <FadeIn direction="left">
            <h1 className="text-3xl font-bold leading-tight text-text md:text-5xl">
              Ramiro Cuellar{" "}
              <RiVerifiedBadgeFill
                className="inline-block ml-1 text-accent"
                size={28}
              />
            </h1>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <TypeAnimation
              sequence={[
                "Desarrollador Front End",
                1000,
                "Desarrollador Back End",
                1000,
                "Desarrollador Full-Stack",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg font-medium text-accent md:text-xl"
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <a
              href="/Ramiro_Mauricio_Cuellar_Curriculum.pdf"
              download="Ramiro_Mauricio_Cuellar_Curriculum.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <IoDownload size={18} />
              Descargar Curriculum
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Intro;
