import Image from "next/image";
import FadeIn from "./fade-in";

export default function Courses() {
   return (
      <div
         id="courses"
         className="z-20 w-full min-h-screen bg-darkBg/60 flex flex-col items-center justify-center py-12"
      >
         <FadeIn>
            <h2 className="text-3xl font-semibold mb-4 items-center text-secondary pb-8">
               Cursos y certificaciones
            </h2>
         </FadeIn>
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} direction="up">
               <div className="flex flex-col items-center">
                  <div className="hover-3d w-full">
                     <figure className="w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden">
                        <Image
                           src="/courses_python.jpg"
                           alt="curso_python"
                           width={800}
                           height={600}
                           className="w-full h-full object-cover"
                        />
                     </figure>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
                  <div className="items-center justify-center pt-5">
                     <h1 className="text-slate-500">
                        Plataforma Udemy: Python
                     </h1>
                  </div>
               </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
               <div className="flex flex-col items-center">
                  <div className="hover-3d w-full">
                     <figure className="w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden">
                        <Image
                           src="/courses_arg.jpg"
                           alt="curso_arg"
                           width={800}
                           height={600}
                           className="w-full h-full object-cover"
                        />
                     </figure>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
                  <div className="items-center justify-center pt-5">
                     <h1 className="text-slate-500">
                        Argentina Programa: Programacion Front-end
                     </h1>
                  </div>
               </div>
             </FadeIn>

             <FadeIn delay={0.3} direction="up">
                 <div className="flex flex-col items-center">
                    <div className="hover-3d w-full">
                       <figure className="w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden">
                          <Image
                             src="/certificate_aws.jpg"
                             alt="certificate_aws"
                             width={800}
                             height={600}
                             className="w-full h-full object-cover"
                          />
                       </figure>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                    </div>
                    <div className="items-center justify-center pt-5">
                       <h1 className="text-slate-500">
                          Entrena Argentina: Desarrollador de Nube AWS
                       </h1>
                    </div>
                 </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                 <div className="flex flex-col items-center">
                    <div className="hover-3d w-full">
                       <figure className="w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden">
                          <Image
                             src="/certificate_csharp.jpg"
                             alt="certificate_csharp"
                             width={800}
                             height={600}
                             className="w-full h-full object-cover"
                          />
                       </figure>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                       <div></div>
                    </div>
                    <div className="items-center justify-center pt-5">
                       <h1 className="text-slate-500">
                          FreeCodeCamp: Fundational C# with Microsoft
                       </h1>
                    </div>
                 </div>
              </FadeIn>
          </div>
      </div>
   );
}
