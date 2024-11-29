import React from "react";
import { Link } from "@remix-run/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-col">
        <p>zdjęcie produktu</p>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer id="contact" className="flex flex-row justify-between items-center p-4 bg-slate-200 text-slate-500 text-xs sm:text-sm">
            <p>nazwa produktu</p>
      </footer>
    </div>
  );
};

export default Layout;
