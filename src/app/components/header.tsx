import { IoDownload } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-darkBg/60 backdrop-blur-md border-b border-slate-700/50">
      <div className="navbar px-4 py-0.5">
        <div className="navbar-start">
          <div className="dropdown">
            <label aria-label="Open menu" tabIndex={0} className="btn btn-ghost lg:hidden text-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-white/90 text-slate-800 rounded-box w-52 backdrop-blur-sm border border-slate-200">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary text-xl">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="/curriculum.pdf"
            download="Ramiro_Cuellar_Curriculum.pdf"
            className="btn btn-sm btn-primary mr-2 md:hidden inline-flex gap-2"
          >
            <IoDownload size={16} />
            Descargar Curriculum
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;