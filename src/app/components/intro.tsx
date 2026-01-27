"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { IoDownload } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import FadeIn from "./fade-in"

const Intro = () => {
   return (
      <div id="home" className="z-20 w-full min-h-screen bg-darkBg/60 flex items-center">
         <div className="z-20 grid w-full justify-center p-6 gap-6 md:grid-cols-2 items-center">
            <div className="flex justify-center items-center">
               <FadeIn direction="right">
               <Image
                  src="/foto.png"
                  alt="Profile pic"
                  priority
                  width={250}
                  height={250}
                  className="rounded-full  object-cover flex-shrink-0"
               />
               </FadeIn>
            </div>
            <div className="flex flex-col justify-center max-w-nd">
               <FadeIn direction="left">
               <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 text-slate-600">
                  Ramiro Cuellar <RiVerifiedBadgeFill className="inline ml-2" size={25} />
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
                     className="block font-bold text-secondary"
                  />
               </h1>
               
               <div className="">
                  <a
                     href="/Ramiro_Mauricio_Cuellar_Curriculum.pdf"
                     download="Ramiro_Mauricio_Cuellar_Curriculum.pdf"
                     className="btn btn-primary hidden md:inline-flex gap-2"
                  >
                     <IoDownload size={20} />
                     Descargar Curriculum
                  </a>
               </div>
               </FadeIn>
            </div>
         </div>
      </div>
   );
};

export default Intro;
