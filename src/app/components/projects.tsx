"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoOpen } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi";

const Projects = () => {
   return (
      <div id="projects" className="z-20 w-full min-h-screen bg-darkBg/60 flex flex-col items-center justify-center py-12">
         <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Proyectos
         </h2>
         <div className="z-20 grid w-full max-w-7xl justify-center p-6 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start">
            <div className="card bg-base-100 w-full h-full shadow-sm">
               <figure className="relative w-full h-48">
                  <Image
                     src="/projects_portfolio.png"
                     alt="portfolio"
                     fill
                     className="object-cover"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">Portfolio Web</h2>
                  <p/>
                  <div className="card-actions justify-end gap-2">
                     <a
                        href="https://github.com/RamiroCuellar564/Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost text-white hover:text-gray-700 border border-gray-400"
                     >
                        <FaGithub size={20} />
                        GitHub
                     </a>
                  </div>
               </div>
            </div>
            <div className="card bg-base-100 w-full h-full shadow-sm">
               <figure className="relative w-full h-48">
                  <Image
                     src="/el_switcher.jpg"
                     alt="El Switcher"
                     fill
                     className="object-cover"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">El Switcher</h2>
                  <p>
                     Implementacion Web del juego de mesa &quot;El Switcher&quot;
                  </p>
                  <div className="card-actions justify-end gap-2">
                     <a
                        href="https://github.com/IngSof1-BoardByte-Devs/swicher-front"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost text-white hover:text-gray-700 border border-gray-400"
                     >
                        <FaGithub size={20} />
                        GitHub
                     </a>
                     <a
                        href="https://tienda.maldon.com.ar/productos/el-switcher?utm_source=Nuestraweb&utm_medium=BotonComprar&utm_id=COMPRAR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost text-white hover:text-gray-700 border border-gray-400"
                     >
                        <HiCurrencyDollar size={20} />
                        Comprar
                     </a>
                  </div>
               </div>
            </div>
            <div className="card bg-base-100 w-full h-full shadow-sm">
               <figure className="relative w-full h-48">
                  <Image
                     src="/feed_reader.png"
                     alt="El Switcher"
                     fill
                     className="object-cover"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">Feed Reader</h2>
                  <p>
                     Lector automático de feeds como aplicación de consola.
                  </p>
                  <div className="card-actions justify-end gap-2">
                     <a
                        href="https://github.com/RamiroCuellar564/feed-reader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost text-white hover:text-gray-700 border border-gray-400"
                     >
                        <FaGithub size={20} />
                        GitHub
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;
