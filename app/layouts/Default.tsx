import React from "react";
import { Link } from "@remix-run/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 flex flex-col">
        <div className="flex justify-between items-center p-2 px-4 md:px-12 bg-slate-200 z-30">
          <div className="text-l sm:text-xl text-slate-900 font-bold">Artysta Zdrowia</div>
          <div className="flex space-x-4 sm:space-x-11 text-sm sm:text-base text-slate-800">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Szukaj"
                className="ml-4 pl-4 pr-4 py-2 md:pl-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="top-2 bottom-2 px-4 py-3 bg-black text-white rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 17a6 6 0 111.004-12.001A6 6 0 0111 17zM20 20l-4-4"
                  />
                </svg>
              </button>
            </div>
              <Link to="/" className="hover:underline py-2">
                Ulubione
              </Link>
              <Link to="/login" className="hover:underline py-2">
                Zaloguj się
              </Link>
              <Link to="/checkout" className="hover:underline py-2">
                Koszyk
              </Link>
          </div>
        </div>
        <div className="sticky top-0 flex flex-col justify-between items-center p-1 px-4 md:px-12 bg-slate-100 z-30">
          <div className="flex space-x-4 sm:space-x-8 p-1 text-sm sm:text-base text-slate-800">
            <Link to="/" className="hover:underline">
              Strona główna
            </Link>
            <Link to="/about" className="hover:underline">
              O firmie
            </Link>
            <Link to="/productList" className="hover:underline">
              Produkty
            </Link>
            <Link to="/treatments" className="hover:underline">
              Zabiegi
            </Link>
            <Link to="/dogotherapy" className="hover:underline">
              Dogoterapia
            </Link>
            <Link to="/felinotherapy" className="hover:underline">
              Felinoterapia
            </Link>
            {/* <Link to="/christmasIdeas" className="hover:underline">
              Pomysły na święta
            </Link> */}
            <Link to="/contact" className="hover:underline">
              Kontakt
            </Link>
          </div>
        </div>
        
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer id="contact" className="flex flex-row justify-between items-center p-4 bg-slate-200 text-slate-500 text-xs sm:text-sm">
        <p className="mb-1 sm:mb-2">O nas</p>
        <p className="mb-1 sm:mb-2">Pomoc</p>
      </footer>
    </div>
  );
};

export default Layout;
