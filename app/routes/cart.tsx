import { useLoaderData } from "@remix-run/react";
import { db } from "../services/index"; // Zimportuj bazę danych
import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { getSession, commitSession, addToCart } from "../utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const cart = session.get("cart") || [];  // Upewnij się, że domyślnie jest to pusta tablica

  console.log("Cart from session:", cart);  // Sprawdź, co jest w koszyku na początku

  if (cart.length === 0) {
    return json({ cart: [], message: "Koszyk jest pusty." });
  }

  const enhancedCart = await Promise.all(
    cart.map(async (item) => {
      const product = await db.product.findUnique({
        where: { id: item.productId },
        select: { name: true, image: true },
      });
      
      console.log("Product for item:", product);  // Zobacz, co zwraca zapytanie do bazy

      return {
        ...item,
        name: product?.name || "Nieznany produkt",
        image: product?.image || "/placeholder.jpg",
      };
    })
  );

  return cart ;
};

export const action: ActionFunction = async ({ request }) => {
  // Pobranie danych z formularza za pomocą FormData
  const formData = await request.formData();

  // Pobieranie danych z formularza
  const productId = formData.get("productId")?.toString();
  const sizeId = formData.get("size")?.toString();
  const quantity = parseInt(formData.get("quantity")?.toString() || "1", 10);
  const price = parseFloat(formData.get("price")?.toString() || "0");

  // Walidacja danych
  if (!productId || !sizeId || isNaN(quantity) || isNaN(price)) {
    console.warn("Brakuje danych w formularzu lub dane są nieprawidłowe.");
    console.warn({ productId, sizeId, quantity, price });
  }

  // Pobranie sesji
  const session = await getSession(request);

  // Dodanie produktu do koszyka w sesji
  await addToCart(session, productId, quantity, sizeId, price);

  // Zatwierdzenie sesji
  const commit = await commitSession(session);

  // Przekierowanie do strony koszyka z ciasteczkiem sesji
  return redirect("/cart", {
    headers: {
      "Set-Cookie": commit,
    },
  });
};

export default function Cart() {
  const cart = useLoaderData();

  console.log("Cart component - loaded cart data:", cart);

  const cartItems = Array.isArray(cart) ? cart : [];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">Koszyk</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-lg font-medium">{item.name}</span>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">{item.price} zł</p>
                <p className="text-sm text-gray-500">Ilość: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">{message || "Twój koszyk jest pusty."}</p>
      )}
    </main>
  );
}
