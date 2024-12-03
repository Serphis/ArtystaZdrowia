import { LoaderFunction, json, ActionFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { loadProductData } from '../utils/dataLoader.server';
import { db } from '../services/index';
import { Link } from 'react-router-dom';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "ArtystaZdrowia" },
    { name: "description", content: "Candle store" },
  ];
};

export const loader: LoaderFunction = async () => {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      sizes: true, // Pobieramy nowe pole
    },
  });

  return json({ products });
};


export default function ProductList(){
    const { products } = useLoaderData();
    const isAdmin = true;
  
    return (
      <main className="font-serif">
        <form method="post">
          <div className="p-8 w-full rounded-md">
            <h1 className="text-3xl">
              Produkty
            </h1>
            <div className="mt-4 p-10">
              {products ? (
                <div className="flex flex-row flex-wrap gap-5">
                  {products.map((Product: Product) => {
                    return (
                      <div key={Product.id}>
                        <div className="flex flex-col ring-1 w-60 md:w-80 ring-slate-300 bg-slate-100 text-slate-600 rounded-sm shadow-md">
                          <div className="flex flex-col items-center">
                            <div className="mx-3 my-6">
                              <img src={Product.image} alt="Opis zdjęcia" className='w-80 h-80 object-cover' />
                            </div>
                          </div>
                          <div className="mx-3 my-1 mt-4 flex flex-col justify-left items-left">
                            <div>
                              {Product.name}
                            </div>
                            <div>Od 12 zł</div>
                          </div>
                          <div className="flex justify-start p-2">
                            <Link
                              to={`/${Product.id}`}
                              className="hover:bg-slate-600 bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-sm shadow-md"
                            >
                              Pokaż więcej
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>Brak produktów</div>
              )}
            </div>
          </div>
        </form>
      </main>
    );
  }
