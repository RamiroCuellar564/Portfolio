"use client";

import React, { useRef, useEffect, useState } from "react";
import { scroll, animate } from "motion/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FadeIn from "./fade-in";

const paragraphs = [
   {
      id: 1,
      image: "/about-1.jpg",
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
      image: "/about-2.jpg",
      text: "Tengo experiencia en desarrollo web full-stack utilizando tecnologías modernas como React, Next.js, TypeScript y Node.js. Estoy comprometido con escribir código limpio, mantenible y escalable que entregue valor real a los usuarios.",
   }
];



export default function AboutMe() {
   const scrollContainerRef = useRef(null);
   const groupRef = useRef(null);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   useEffect(() => {
      if (isMobile || !scrollContainerRef.current || !groupRef.current) return;

      const scrollDistance = (groupRef.current as HTMLElement).scrollWidth - window.innerWidth;

      scroll(
         animate(groupRef.current, {
            x: [0, -scrollDistance],
         }),
         { target: scrollContainerRef.current },
      );
   }, [isMobile]);

return (
      <div
         ref={scrollContainerRef}
         id="about"
         className="z-20 w-full bg-darkBg/60"
         style={{ height: isMobile ? 'auto' : `${(paragraphs.length - 1) * 100 + 100}vh` }}
      >
         {isMobile ? (
            // Mobile view: vertical stack
            <div className="py-20 px-6">
               <FadeIn>
                  <h2 className="text-4xl font-bold text-slate-700 mb-12 text-center">
                     Sobre mi
                  </h2>
               </FadeIn>
               <div className="space-y-16">
                  {paragraphs.map((paragraph, index) => (
                     <FadeIn key={paragraph.id} delay={index * 0.1}>
                        <div className="flex flex-col items-center gap-8">
                           <div className="flex justify-center">
                              <Image
                                 src={paragraph.image}
                                 alt={`About me - Image ${paragraph.id}`}
                                 width={280}
                                 height={280}
                                 className="rounded-lg object-cover"
                              />
                           </div>
                           <div className="text-center">
                              <TypeAnimation
                                 sequence={[paragraph.text]}
                                 wrapper="p"
                                 cursor={true}
                                 repeat={0}
                                 speed={70}
                                 deletionSpeed={75}
                                 className="text-lg text-pink-950 text-justify leading-relaxed max-w-prose"
                              />
                           </div>
                        </div>
                     </FadeIn>
                  ))}
               </div>
            </div>
         ) : (
            // Desktop view: horizontal scroll
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
               <FadeIn>
                  <h2 className="absolute top-20 left-16 text-4xl font-bold text-slate-700 z-10">
                     Sobre mi
                  </h2>
               </FadeIn>
               <FadeIn>
                  <div ref={groupRef} className="flex h-full">
                     {paragraphs.map((paragraph) => (
                        <div
                           key={paragraph.id}
                           className="flex-shrink-0 w-screen h-screen grid grid-cols-2 items-center gap-12 px-16 pl-35"
                        >
                           <div className="">
                              <TypeAnimation
                                 sequence={[paragraph.text]}
                                 wrapper="p"
                                 cursor={true}
                                 repeat={0}
                                 speed={70}
                                 deletionSpeed={75}
                                 className="text-xl text-pink-950 text-justify leading-relaxed max-w-prose"
                              />
                           </div>
                           <div className="flex justify-center">
                              <Image
                                 src={paragraph.image}
                                 alt={`About me - Image ${paragraph.id}`}
                                 width={320}
                                 height={320}
                                 className="rounded-lg object-cover"
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </FadeIn>
            </div>
         )}
      </div>
   );
}
