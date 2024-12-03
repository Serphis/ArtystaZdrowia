import { Link } from "@remix-run/react";

function Login(props) {
  return <Link to="/login">Zaloguj się</Link>;
}

function Logout(props) {
  return <form method="post" action="/logout">
    <button type="submit">Wyloguj się</button>
    </form>;
}

export function HandleLogin(props){
  const userId = props.userId;
  if (userId) {
    return <Logout />;
  }
  return <Login />;
}

const DefaultLayout: React.FC<{ children: React.ReactNode, userId: string | null, isAdmin?: boolean | null }> = ({ children, userId, isAdmin }) => {

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 bg-slate-200 z-30 shadow-sm">
        <div className="flex justify-between items-center p-4 px-8">
          <Link to="/" className="text-xl font-bold text-blue-900">
            Artysta Zdrowia
          </Link>

          <div className="flex items-center space-x-6">
            {/* Pasek wyszukiwania */}
            {/* <div className="flex">
              <input
                type="text"
                placeholder="Szukaj"
                className="pl-4 pr-2 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-3 bg-black text-white rounded-r-md hover:bg-gray-700">
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
            </div> */}

            {/* Linki do Ulubione, Zaloguj/Wyloguj, Koszyk */}
            {/* <Link to="/" className="hover:underline">
              Ulubione
            </Link> */}

            <HandleLogin userId={userId} />

            <Link to="/cart" className="hover:underline">
              Koszyk
            </Link>
          </div>
        </div>

        {/* Dolny pasek nawigacyjny */}
        <nav className="flex justify-center space-x-6 bg-slate-100 p-2">
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
          <Link to="/contact" className="hover:underline">
            Kontakt
          </Link>
        </nav>
      </header>

      {/* MAIN */}
      <main className="flex-grow">{children}</main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="flex justify-between items-center p-4 bg-slate-200 text-slate-500 text-sm"
      >
        <p>O nas</p>
        <p>Pomoc</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;