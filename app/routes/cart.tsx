import { useLoaderData } from "@remix-run/react";
import { db } from "../services/index"; // Zimportuj bazę danych
import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { getSession, commitSession, addToCart } from "../utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const formData = await request.formData();
  const productId = formData.get("productId");

  if (!productId) {
    return json({ error: "Brak ID produktu" }, { status: 400 });
  }

  // Dodaj produkt do koszyka w sesji (domyślna ilość 1)
  addToCart(session, productId, 1);

  // Zapisz sesję i przekieruj na stronę koszyka
  return redirect("/cart", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const cart = session.get("cart") || [];

  // Pobierz szczegóły produktów z bazy na podstawie `productId`
  const products = await Promise.all(
    cart.map(async (item: { productId: string; quantity: number }) => {
      const product = await db.product.findUnique({
        where: { id: item.productId },
        select: { id: true, name: true, price: true, image: true },
      });
      return { ...product, quantity: item.quantity };
    })
  );
  
  return json({ cart: products });
};

export default function Cart() {
  const { cart } = useLoaderData();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">Koszyk</h1>
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-md"
            >
              {/* Lewa strona: Obrazek i nazwa */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-lg font-medium">{item.name}</span>
              </div>

              {/* Prawa strona: Cena i ilość */}
              <div className="text-right">
                <p className="text-lg font-bold">{item.price} zł</p>
                <p className="text-sm text-gray-500">Ilość: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">Twój koszyk jest pusty.</p>
      )}
    </main>
  );
}