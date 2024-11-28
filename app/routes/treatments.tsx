import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <section className="text-left m-12 flex flex-col space-y-12">
      <h2 className="text-4xl font-bold mb-6">Zabiegi</h2>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Zabiegi fizjoterapeutyczne</h3>
        <p className="text-lg">
          Prądy mała i dużej częstotliwości, laser, pole magnetyczne, solux,
          krioterapia, ultradźwięki. Zabiegi wykonywane na nowych sprzętach nowej
          technologii firmy Astar. Indywidualny dobór ćwiczeń w zależności od
          schorzenia i jednostek chorobowych.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Masaż</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Relaksacyjny</li>
          <li>Kobido</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Endermologia</h3>
        <p className="text-lg">
          Nowoczesne urządzenie BSS do modelowania sylwetki i redukcji tkanki
          tłuszczowej wyposażone w 4 głowice zabiegowe. Zabiegi skutecznie
          wspomagają walkę z cellulitem, wiotką skórą i nadmiarem tkanki
          tłuszczowej.
        </p>
        <ul className="list-disc list-inside space-y-2 py-4">
          <li>Ujędrnianie skóry na twarzy i ciele</li>
          <li>Redukcja cellulitu</li>
          <li>Modelowanie sylwetki</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Fala uderzeniowa</h3>
        <p className="text-lg">
          Terapia falą uderzeniową to skuteczna metoda walki z cellulitem i
          wiotkością skóry. Zwiększa ukrwienie tkanek, wspomaga metabolizm i
          redukcję depozytów tłuszczowych.
        </p>
        <ul className="list-disc list-inside space-y-2 py-4">
          <li>Cellulit II, III i IV stopnia</li>
          <li>Miejscowe depozyty tkanki tłuszczowej</li>
          <li>Nierówna struktura skóry</li>
        </ul>
        <p className="text-lg">Zaleca się serię 5–10 zabiegów w odstępach 5–7 dni.</p>
      </div>
    </section>
  );
}
