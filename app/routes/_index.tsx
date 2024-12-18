import { Link } from "@remix-run/react";

export default function Index() {
  const HorizontalLine: React.FC<{ width: string }> = ({ width }) => {
    return (
      <svg width={width} height="1.5" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="1.5" fill="#a58783" />
      </svg>
    );
  };
  
  return (
    <div className="bg-[#f2e4ca] font-light tracking-widest">
      {/* Hero */}
      {/* <section className="text-center text-sm py-6 font-normal tracking-normal ">
        <p className="border-2 border-[#987867]">
          DARMOWA PRZESYŁKA NA TERENIE POLSKI DLA KAŻDEGO ZAMÓWIENIA POWYŻEJ 250 ZŁ
        </p>
      </section> */}

      <section className="text-center pt-20 flex flex-row justify-center text-[#7b6b63]">
        <div className="p-2 sm:py-8 flex flex-col sm:mr-12 lg:mr-28 xl:mr-40">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center lg:tracking-wide p-4 sm:p-4 mb-2 sm:mb-10 lg:mb-32">RĘCZNIE ROBIONE ŚWIECE</h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-center lg:tracking-wide p-4 sm:p-4 mb-2 sm:mb-10 lg:mb-24">W DOMOWYM ZACISZU</h2>
          <h2 className="text-l md:text-2xl lg:text-3xl text-center lg:tracking-wide p-3 sm:p-4">IDEALNY POMYSŁ NA PREZENT</h2>
        </div>
        <div className="flex flex-col w-32 sm:w-48 md:w-56 lg:w-80 xl:w-96">
          <img src="https://res.cloudinary.com/djio9fbja/image/upload/v1733048714/public/arxtmudlzzb186m0gvjp.jpg" alt="Opis zdjęcia" className='pr-4 sm:pr-12 object-cover' />
          <img src="https://res.cloudinary.com/djio9fbja/image/upload/v1733048713/public/lzaavy3qk8ihcxtrucib.jpg" alt="Opis zdjęcia" className='pl-4 sm:pl-12 object-cover' />
        </div>
      </section>

      <div className="flex justify-center pt-24 py-16">
        <HorizontalLine width="90%" />
      </div>

      <section className="text-center px-4 flex flex-col items-center justify-center text-[#7b6b63]">
        <h2 className="text-3xl font-light tracking-widest p-6">Jesteśmy dumni z naszego zobowiązania do ochrony naszej planety</h2>
        <h2 className="text-2xl font-light tracking-widest p-2 sm:p-6 sm:w-4/5 lg:w-3/5">Każdy krok w procesie produkcji starannie przemyślany. Nasze materiały pochodzą z ekologicznych źródeł, a nasza produkcja jest zoptymalizowana pod kątem redukcji odpadów i zużycia wody.</h2>
        <h2 className="text-4xl font-light tracking-widest p-6 flex flex-row">
          Eco-Friendly Materiały
          <img src="https://res.cloudinary.com/djio9fbja/image/upload/v1733249828/public/ecoleaf.png" alt="Opis zdjęcia" className='h-10 pl-4 object-cover opacity-70' />
        </h2>
        <h2 className="text-4xl font-light tracking-widest p-6 flex flex-row-reverse">
          Długotrwała Jakość
          <img src="https://res.cloudinary.com/djio9fbja/image/upload/v1733249829/public/quality.png" alt="Opis zdjęcia" className='h-10 pr-4 object-cover opacity-50' />
        </h2>
      </section>

      <div className="flex justify-center py-16">
        <HorizontalLine width="90%" />
      </div>

      <section className="text-center px-4 flex flex-col items-center justify-center text-[#7b6b63]">
        <h2 className="text-2xl font-light tracking-widest p-6 pt-10">KUPUJĄC NASZE PRODUKTY WSPIERASZ </h2>
        <h2 className="text-3xl font-light tracking-widest p-6">ZATRUDNIENIE OSÓB WYKLUCZONYCH SPOŁECZNIE</h2>
        <h2 className="text-4xl font-light tracking-widest p-6">DZIĘKUJEMY ŻE JESTEŚCIE Z NAMI</h2>

        <div className="flex justify-center pt-6 pb-10">
          <img src="https://res.cloudinary.com/djio9fbja/image/upload/v1733246569/public/heart.png" alt="Opis zdjęcia" className='h-20 object-cover' />
        </div>
      </section>
    </div>
  );
}
