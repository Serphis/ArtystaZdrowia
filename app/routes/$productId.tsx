import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { db } from '../services/index'; // Zimportuj bazę danych

export const loader: LoaderFunction = async ({ params }) => {
  const { productId } = params; // Pobierz ID produktu z URL
  
  // Załaduj dane produktu z bazy danych
  const product = await db.product.findUnique({
    where: { id: productId }, // Użyj ID z URL
  });

  // Jeśli produkt nie istnieje, zwróć błąd 404
  if (!product) {
    throw new Response('Produkt nie znaleziony', { status: 404 });
  }

  // Zwróć dane produktu
  return json({ product });
};

export default function ProductInfo() {
  const { product } = useLoaderData(); // Odbierz dane produktu z loadera

  return (
    <main className="font-serif">
      <div className="p-8 w-full rounded-md">
        <h1 className="text-3xl">{product.name}</h1>
        <div className="mt-4 p-10">
          <div className="flex flex-col items-center">
            <div className="mx-3 my-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-80 h-80 object-cover"
              />
            </div>
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div>{product.price} zł</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}