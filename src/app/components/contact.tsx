"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
   return (
      <div id="contact" className="z-20 w-full min-h-screen bg-darkBg/60 flex flex-col items-center justify-center py-12">
         <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Contacto
         </h2>
         <div className="max-w-2xl w-full px-6 flex flex-col items-center gap-8">
            <p className="text-center text-lg text-slate-600">
               ¿Tenés un proyecto en mente? ¡Hablemos!
            </p>
            
            <div className="flex flex-col gap-4 w-full max-w-md">
               <a
                  href="mailto:cuellar.ramiro564@gmail.com"
                  className="btn btn-secondary w-full gap-2"
               >
                  <FaEnvelope size={20} />
                  Enviar Email
               </a>
               
               <div className="flex gap-4 justify-center">
                  <a
                     href="https://github.com/RamiroCuellar564"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-ghost text-white hover:text-gray-400 border border-gray-400 bg-slate-700 gap-2"
                  >
                     <FaGithub size={20} />
                     GitHub
                  </a>
                  <a
                     href="https://www.linkedin.com/in/ramirocuellar/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-ghost text-white hover:text-gray-400 border border-gray-400 bg-slate-700 gap-2"
                  >
                     <FaLinkedin size={20} />
                     LinkedIn
                  </a>
               </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
               © 2025 Portfolio. Todos los derechos reservados.
            </p>
         </div>
      </div>
   );
};

export default Contact;
