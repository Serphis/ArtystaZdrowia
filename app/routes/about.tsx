import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <section className="text-left p-12 flex flex-col space-y-6">
      <h2 className="text-4xl font-bold mb-6">O firmie</h2>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Artysta Zdrowia Sp. z o.o.</h3>
        <p className="text-lg">
          Jesteśmy jedynym przedsiębiorstwem społecznym na terenie powiatu
          Sochaczewskiego. Inspiracją do założenia firmy była Fundacja Pomocy
          Osobom z Chorobą Alzheimera. "Artysta Zdrowia" opiera swoją działalność
          na trzech filarach:
        </p>
        <ul className="list-disc list-inside space-y-2 py-4">
          <li>Zabiegi rehabilitacyjne i branża beauty</li>
          <li>Dogoterapia i felinoterapia</li>
          <li>Produkcja ręcznie robionych świec</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold pb-3">Nasze świece</h3>
        <p className="text-lg">
          Wykonane w 100% z wosku sojowego i naturalnych olejków zapachowych.
          Nie zawierają składników pochodzenia zwierzęcego i są zgodne z normami
          alergologicznymi.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold pb-3">Nasza misja</h3>
        <p className="text-lg">
          Dochód przeznaczamy na zatrudnienie osób wykluczonych społecznie oraz
          realizację celów statutowych. Kupując nasze produkty, wspierasz tę misję.
        </p>
      </div>
    </section>
  );
}
