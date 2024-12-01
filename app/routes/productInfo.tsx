// app/routes/productInfo.tsx

import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { db } from '../services/index';

export const loader: LoaderFunction = async ({ params }) => {
  const { productId } = params;

  // Pobieramy szczegóły produktu z bazy danych
  const product = await db.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error('Product not found');
  }

  return json(product);
};

export default function ProductInfo() {
  const product = useLoaderData();

  return (
    <main className="font-serif">
      <div className="p-8 w-full rounded-md">
        <h1 className="text-3xl">{product.name}</h1>
        <div className="mt-4 p-10">
          <div className="flex">
            <img src={product.image} alt={product.name} className="w-80 h-80 object-cover" />
            <div className="ml-4">
              <p>{product.description}</p>
              <div>{product.price} zł</div>
              {/* Możesz dodać inne szczegóły produktu */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
