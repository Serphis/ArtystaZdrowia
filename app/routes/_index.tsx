import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center">
        <p className="text-l py-4">
        DARMOWA PRZESYŁKA NA TERENIE POLSKI DLA KAŻDEGO ZAMÓWIENIA POWYŻEJ 250 ZŁ
        </p>
      </section>

      {/* Polecane produkty */}
      <section className="container mx-auto my-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Polecane Produkty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Produkt 1 */}
          <div className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/200"
              alt="Produkt 1"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Smartfon XYZ</h3>
            <p className="text-gray-700 mb-2">Cena: 999,99 zł</p>
            <Link
              to="/"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Szczegóły
            </Link>
          </div>
          {/* Produkt 2 */}
          <div className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/200"
              alt="Produkt 2"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Zegarek Smart A1</h3>
            <p className="text-gray-700 mb-2">Cena: 499,99 zł</p>
            <Link
              to="/"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Szczegóły
            </Link>
          </div>
          {/* Produkt 3 */}
          <div className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/200"
              alt="Produkt 3"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">Laptop Pro 15</h3>
            <p className="text-gray-700 mb-2">Cena: 2999,99 zł</p>
            <Link
              to="/"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Szczegóły
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center m-12 flex flex-row justify-between">
        <div className="p-10 flex flex-col">
          <h2 className="text-4xl font-bold m-4 mb-10">RĘCZNIE ROBIONE ŚWIECE</h2>
          <h2 className="text-4xl font-bold m-4 mb-10">W DOMOWYM ZACISZU</h2>
          <h2 className="text-4xl font-bold m-4 mb-10">IDEALNY POMYSŁ NA PREZENT</h2>
        </div>
        <div className="p-10 flex flex-col">
          <h2 className="text-4xl font-bold m-4 mb-10"> </h2>
          <h2 className="text-4xl font-bold m-4 my-10">CHLEB</h2>
          <h2 className="text-4xl font-bold m-4 mb-10"> </h2>
        </div>
      </section>

      <section className="text-center m-12 flex flex-col justify-between">
        <h2 className="text-4xl font-bold m-4 mb-10">Jesteśmy dumni z naszego zobowiązania do ochrony naszej planety</h2>
        <h2 className="text-4xl font-bold m-4 mb-10">Każdy krok w procesie produkcji starannie przemyślany. Nasze materiały pochodzą z ekologicznych źródeł, a nasza produkcja jest zoptymalizowana pod kątem redukcji odpadów i zużycia wody.</h2>
        <h2 className="text-4xl font-bold m-4 mb-10">Eco-Friendly Materiały</h2>
        <h2 className="text-4xl font-bold m-4 mb-10">Długotrwała Jakość</h2>
        <h2 className="text-4xl font-bold m-4 mb-10">KUPUJĄC NASZE PRODUKTY WSPIERASZ ZATRUDNIENIE</h2>
        <h2 className="text-4xl font-bold m-4 mb-10">OSÓB WYKLUCZONYCH SPOŁECZNIE </h2>
        <h2 className="text-4xl font-bold m-4 mb-10"> DZIĘKUJEMY ŻE JESTEŚCIE Z NAMI </h2>
        <h2 className="text-4xl font-bold m-4 mb-10">serduszko</h2>
      </section>
    </div>
  );
}
