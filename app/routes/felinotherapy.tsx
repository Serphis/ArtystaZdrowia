import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
        <h2 className="text-4xl font-bold px-12 py-8">Felinoterapia</h2>
        <div className="flex flex-col px-8">
            {/* <div className="p-8 flex flex-row"> */}
                {/* <div className="w-3/5"> */}
                    <h2 className="text-xl px-4 py-1">Spotkania z psem indywidualna  150 zł</h2>
                    <h2 className="text-xl px-4 py-1">Spotkania z psem grupowe  ustalane indywidualnie</h2>
                    <h2 className="text-xl px-4 py-1">Spotkania z kotem indywidualne 150 zł</h2>
                    <h2 className="text-xl px-4 py-1">Spotkania z kotem grupowe ustalane indywidualnie</h2>
                    <h2 className="text-xl px-4 py-1">Spotkania wspólne (pies i kot ) indywidulane    250  zł</h2>
                    <h2 className="text-xl px-4 py-1">Spotkania grupowe wspólne (pies kot) ustalane indywidualnie</h2>
                {/* </div> */}
                {/* <div className="w-2/5"> */}
                    <h2 className="text-l px-4 py-3 mt-6">Koty to zwierzęta bardzo tajemnicze, które jednak szybko potrafią zbudować specyficzną więź z człowiekiem. Zwierzę „zmusza” osobę do uspokojenia się, opanowania gwałtownych ruchów tylko po to, aby dać się pogłaskać. Towarzystwo kota poprawia humor, odciąga myśli od bólu czy osamotnienia. Zabawy z kotem często wywołują uśmiech na twarzy, angażują pacjenta do wspólnej aktywności. Według badań przebywanie w obecności kota, głaskanie i wspólna zabawa wzmagają wydzielanie endorfin, czyli tzw. hormonu szczęścia.</h2>
                    <h2 className="text-l px-4 py-3">Felinoterapia jest polecana przede wszystkim osobom starszym, które zmagają się z chorobą Alzheimera, Parkinsona, stwardnieniem rozsianym czy depresją. W tym przypadku felinoterapia polega na opiece nad kotem, jego czesaniu, głaskaniu, karmieniu i wspólnej zabawie. Dzięki temu pacjent jest zaangażowany do większej aktywności fizycznej. Starsza osoba ćwiczy swoje zdolności manualne, głównie w obrębie dłoni i nadgarstków.</h2>
                    <h2 className="text-l px-4 py-3">Terapia z towarzystwem kota znajduje zastosowanie także u dzieci z autyzmem, zespołem Aspergera, ADHD, czy dziecięcym porażeniem mózgowym. Podczas kontaktu z kotem dzieci uspokajają się, odprężają, stają się bardziej otwarte na środowisko zewnętrzne.</h2>
                {/* </div> */}
            {/* </div> */}
        </div>
    </div>
  );
}
