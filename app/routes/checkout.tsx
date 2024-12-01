import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('cookie');
  const cart = new Map(JSON.parse(cookie || '[]'));

  return json({ cart });
};

export default function Checkout() {
  const { cart } = useLoaderData();

  return (
    <main className="font-serif">
      <div className="p-8 w-full rounded-md">
        <h1 className="text-3xl">Koszyk</h1>
        <div className="mt-4 p-10">
          <div>
            {cart.size === 0 ? (
              <p>Twój koszyk jest pusty</p>
            ) : (
              Array.from(cart.values()).map((product: any) => (
                <div key={product.id}>
                  <h2>{product.name}</h2>
                  <img src={product.image} alt={product.name} className="w-80 h-80 object-cover" />
                  <p>{product.price} zł</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
