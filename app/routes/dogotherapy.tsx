import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
        <h2 className="text-4xl font-bold px-12 py-8">Dogoterapia</h2>
        <div className="flex flex-col px-8">
            <h2 className="text-xl px-4 py-1">Spotkania z psem indywidualna 150 zł</h2>
            <h2 className="text-xl px-4 py-1">Spotkania z psem grupowe ustalane indywidualnie</h2>
            <h2 className="text-xl px-4 py-1">Spotkania z kotem indywidualne 150 zł</h2>
            <h2 className="text-xl px-4 py-1">Spotkania z kotem grupowe ustalane indywidualnie</h2>
            <h2 className="text-xl px-4 py-1">Spotkania wspólne (pies i kot) indywidualne 250 zł</h2>
            <h2 className="text-xl px-4 py-1">Spotkania grupowe wspólne (pies i kot) ustalane indywidualnie</h2>
            <h2 className="text-l px-4 py-3 mt-6">
            Dogoterapia jest rodzajem terapii, którą wykorzystuje się do osiągnięcia konkretnych celów terapeutycznych. Nawiązywanie relacji z psem ma na celu uwalnianie pozytywnych uczuć, inspirowanie do działania oraz wspieranie budowania zaufania między pacjentem a terapeutą. 
            Zakres dogoterapii dostosowany jest do indywidualnych wymagań pacjenta, gdzie pies może pełnić rolę bodźca do aktywności fizycznej i umysłowej. Może to obejmować różne formy, takie jak wspólna zabawa, spacery, szkolenie czy opieka nad zwierzęciem.
            </h2>
            <h2 className="text-l px-4 py-3">
            Dogoterapia przynosi liczne korzyści osobom z różnych grup wiekowych, wzmacniając efektywność zastosowanego leczenia i rehabilitacji u pacjentów dotkniętych różnymi schorzeniami, takimi jak:
            </h2>
            <ul className="list-disc px-8 py-2">
            <li className="text-l py-1">zespół Aspergera,</li>
            <li className="text-l py-1">zespół Downa,</li>
            <li className="text-l py-1">porażenie mózgowe,</li>
            <li className="text-l py-1">autyzm,</li>
            <li className="text-l py-1">nadpobudliwość psychoruchowa</li>
            </ul>
            <h2 className="text-l px-4 py-3">
            Do głównych celów dogoterapii zalicza się:
            </h2>
            <ul className="list-disc px-8 py-2">
            <li className="text-l py-1">usprawnianie ruchowe i psychoruchowe motoryki dużej i małej,</li>
            <li className="text-l py-1">poprawa koordynacji wzrokowo-ruchowej,</li>
            <li className="text-l py-1">usprawnianie percepcji wzrokowej,</li>
            <li className="text-l py-1">usprawnianie percepcji słuchowej,</li>
            <li className="text-l py-1">poprawa koncentracji,</li>
            <li className="text-l py-1">rozwój mowy</li>
            </ul>
        </div>
        </div>
  );
}
