"use client";
import { FullScreen } from "@tsparticles/engine";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
   return (
      <div className="z-20 w-full min-h-screen bg-darkBg/60 flex items-center">
         <div className="z-20 grid w-full justify-center p-6 gap-6 md:grid-cols-2 items-center">
            <div className="flex justify-center items-center">
               <Image
                  src="/foto.png"
                  alt="Profile pic"
                  priority
                  width={250}
                  height={250}
                  className="rounded-full  object-cover flex-shrink-0"
               />
            </div>
            <div className="flex flex-col justify-center max-w-nd">
               <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 text-slate-600">
                  Ramiro Cuellar
                  <TypeAnimation
                     sequence={[
                        "Front End",
                        1000,
                        "Back End",
                        1000,
                        "Full-Stack",
                        1000,
                     ]}
                     wrapper="span"
                     speed={50}
                     repeat={Infinity}
                     className="block font-bold text-secondary"
                  />
               </h1>
               <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-pink-950 text-justify">
                  Soy un estudiante y desarrollador de 24 años. Mi objetivo es
                  enfrentar nuevos desafíos para crecer tanto en lo personal
                  como en lo laboral. Me motiva aprender nuevas tecnologías y
                  crecer profesionalmente en el área de las IT y el desarrollo
                  web.
               </p>
               <div className="">
                  <button className="btn hidden md:inline-block">Descargar Curriculum</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Intro;
