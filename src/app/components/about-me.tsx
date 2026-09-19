"use client";

import React, { useRef, useEffect, useState } from "react";
import { scroll, animate, useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FadeIn from "./fade-in";

const paragraphs = [
  {
    id: 1,
    image: "/about-2.jpg",
    text: "Soy un estudiante y desarrollador de 24 años. Mi objetivo es enfrentar nuevos desafíos para crecer tanto en lo personal como en lo laboral. Me motiva aprender nuevas tecnologías y crecer profesionalmente en el área de las IT y el desarrollo web.",
  },
  {
    id: 2,
    image: "/about-4.jpg",
    text: "Como estudiante avanzado de Ciencias de la Computación en la Universidad Nacional de Cordoba (FAMAF), cuento con más de 4 años de formación técnica y experiencia práctica en desarrollo web y backend, manteniendo buenas prácticas de ingeniería de software.",
  },
  {
    id: 3,
    image: "/about-3.jpg",
    text: "Me apasiona resolver problemas complejos a través del código y continuamente busco mejorar mis habilidades. Disfruto colaborar con otros desarrolladores, compartir conocimiento y aprender de diferentes perspectivas en la industria tech.",
  },
  {
    id: 4,
    image: "/about-1.jpg",
    text: "Tengo experiencia en desarrollo web full-stack utilizando tecnologías modernas como React, Next.js, .NET, ASPNET y SpringBoot Java. Estoy comprometido con escribir código limpio, mantenible y escalable que entregue valor real a los usuarios.",
  },
];

function ProgressBar({ containerRef, show }: { containerRef: React.RefObject<HTMLDivElement | null>; show: boolean }) {
  const { scrollYProgress } = useScroll({ target: show ? containerRef : undefined });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!show) return null;

  return (
    <div className="absolute bottom-0 left-0 z-20 h-0.5 w-full bg-border">
      <motion.div
        className="h-full bg-accent"
        style={{ width }}
      />
    </div>
  );
}

function NumberBadge({ index, total }: { index: number; total: number }) {
  return (
    <span className="mb-6 inline-block text-xs font-semibold tracking-widest text-text-tertiary">
      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  );
}

export default function AboutMe() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    if (!scrollContainerRef.current || !groupRef.current) return;

    const scrollDistance =
    groupRef.current.scrollWidth - window.innerWidth;

  const controls = scroll(
    animate(groupRef.current, {
      x: [0, -scrollDistance],
    }),
    {
      target: scrollContainerRef.current,
    }
  );

  return () => {
    controls();
  };
  }, [isMobile]);

  return (
    <div
      ref={scrollContainerRef}
      id="about"
      className="w-full"
      style={{
        height: isMobile
          ? "auto"
          : `${(paragraphs.length - 1) * 100 + 100}vh`,
      }}
    >
      {isMobile ? (
        /* ── Mobile: horizontal snap scroll ── */
        <div key="mobile" className="px-6 py-20">
          <FadeIn>
            <h2 className="mb-10 text-3xl font-bold text-text">
              Sobre mi
            </h2>
          </FadeIn>
          <div
            ref={mobileScrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
            style={{ transform: "none", scrollbarWidth: "none" }}
          >
            {paragraphs.map((paragraph, index) => (
              <FadeIn key={paragraph.id} delay={index * 0.08} className="min-w-[85vw] snap-center">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                  <figure className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={paragraph.image}
                      alt={`Sobre mi - Imagen ${paragraph.id}`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-base/80 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-text-tertiary backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </figure>
                  <div className="flex flex-1 flex-col p-5">
                    <TypeAnimation
                      sequence={[paragraph.text]}
                      wrapper="p"
                      cursor={true}
                      repeat={0}
                      speed={70}
                      deletionSpeed={75}
                      className="text-sm leading-relaxed text-text-secondary"
                    />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-text-tertiary">
            Desliza para ver mas &rarr;
          </p>
        </div>
      ) : (
        /* ── Desktop: overlapping scroll-linked panels ── */
        <div key="desktop" className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="absolute left-8 top-20 z-20">
            <FadeIn>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-tertiary">
                Sobre mi
              </h2>
            </FadeIn>
          </div>

          <div ref={groupRef} className="flex h-full items-center pl-35">
            {paragraphs.map((paragraph, index) => (
              <div
                key={paragraph.id}
                className="relative flex h-[70vh] w-[75vw] flex-shrink-0 -ml-[10vw] first:ml-0"
              >
                <article className="relative flex h-full w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
                  <div className="flex flex-1 flex-col justify-center px-12 py-10">
                    <NumberBadge index={index} total={paragraphs.length} />
                    <TypeAnimation
                      sequence={[paragraph.text]}
                      wrapper="p"
                      cursor={true}
                      repeat={0}
                      speed={70}
                      deletionSpeed={75}
                      className="text-base leading-relaxed text-text-secondary"
                    />
                  </div>
                  <div className="relative w-[45%] overflow-hidden">
                    <Image
                      src={paragraph.image}
                      alt={`Sobre mi - Imagen ${paragraph.id}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </article>
              </div>
            ))}
          </div>

          <ProgressBar containerRef={scrollContainerRef} show={!isMobile} />
        </div>
      )}
    </div>
  );
}
