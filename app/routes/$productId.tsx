import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "../services/index"; // Zimportuj bazę danych
import { getUserSession } from "../utils/auth.server"; // Zimportuj funkcję getUserSession
import { getSession, commitSession, addToCart } from "../utils/session.server";
import { useState, useEffect } from 'react';

export const action: ActionFunction = async ({ request, params }) => {
  const formData = new URLSearchParams(await request.text());
  const quantity = parseInt(formData.get("quantity") || "1", 10); // Domyślnie 1
  const productId = params.productId;

  const session = await getSession(request);
  
  // Dodaj produkt do koszyka
  addToCart(session, productId, quantity);
  
  const sessionHeader = await commitSession(session);
  
  // Przekierowanie na stronę koszyka z nowymi danymi w sesji
  return new Response("", {
    headers: {
      "Set-Cookie": sessionHeader,
      Location: "/cart", // Strona koszyka
    },
    status: 302,
  });
};
export const loader: LoaderFunction = async ({ request, params }) => {
  try {
    // Odbierz dane o użytkowniku z sesji
    const userSession = await getUserSession(request);
    const userId = userSession?.userId;
    const isAdmin = userSession?.isAdmin;

    // Pobierz produkt z bazy danych na podstawie id
    const productId = params.productId;

    const product = await db.product.findUnique({
      where: { id: productId },
        include: {
          sizes: true, // Załadowanie powiązanych rozmiarów
        },
      });

    if (!product) {
      throw new Response("Produkt nie znaleziony", { status: 404 });
    }

    // Odbierz dane o koszyku z sesji
    const session = await getSession(request);
    const cart = session.get("cart") || [];

    // Zwróć dane o produkcie, użytkowniku i koszyku
    return json({ product, userId, isAdmin, cart });
  } catch (error) {
    // Obsłuż błąd związany z nieprawidłowym ObjectID lub innymi błędami
    if (error.code === 'P2023') {
      console.log("Błąd związany z nieprawidłowym ObjectID, ignorowany.");
      // Zwróć odpowiedź z ogólnym komunikatem o błędzie
      return json({ error: "Błąd podczas pobierania produktu. Spróbuj ponownie." }, { status: 500 });
    }

    // Inne błędy
    throw error;
  }
};

export default function ProductInfo() {
  const { product, userId, isAdmin, cart } = useLoaderData(); // Odbierz dane z loadera

  console.log("Dane produktu:", product); // Logi dla danych produktu, sprawdź, czy są poprawne

  if (!product.sizes) {
    console.error("Brak rozmiarów w danych produktu!");
  } else {
    console.log("Rozmiary produktu przed konwersją:", product.sizes); // Logi przed konwersją
  }

  const sizesArray = Object.entries(product.sizes).map(([name, { price }]) => ({
    name,
    price,
  }));

  console.log("Rozmiary po konwersji na tablicę:", sizesArray); // Logi po konwersji na tablicę

  if (!sizesArray || sizesArray.length === 0) {
    return <div>Brak dostępnych rozmiarów dla tego produktu.</div>;
  }

  const [selectedSize, setSelectedSize] = useState(sizesArray[0]?.name || ''); // Domyślny rozmiar
  const [price, setPrice] = useState(sizesArray[0]?.price || 0); // Domyślna cena

  console.log("Domyślnie wybrany rozmiar:", selectedSize); // Logi dla domyślnego rozmiaru
  console.log("Domyślna cena:", price); // Logi dla domyślnej ceny

  // Obsługa zmiany rozmiaru
  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = event.target.value;
    console.log("Nowy wybrany rozmiar:", newSize); // Logi dla nowego wybranego rozmiaru
    setSelectedSize(newSize);

    // Znajdź nowy rozmiar i zaktualizuj cenę
    const size = sizesArray.find((size) => size.name === newSize);
    if (size) {
      setPrice(size.price);
      console.log("Zaktualizowana cena dla rozmiaru:", size.name, "Cena:", size.price); // Logi dla zaktualizowanej ceny
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const size = formData.get("size");
    const quantity = formData.get("quantity");

    await fetch("/cart", {
      method: "POST",
      body: JSON.stringify({ productId: product.id, size, quantity }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Możesz dodać odświeżenie koszyka lub inny sposób aktualizacji.
  };


  return (
    <main className="font-serif">
      <div className="p-8 w-full rounded-md">
        <h1 className="text-3xl">{product.name}</h1>
        <div className="mt-4 p-10">
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-80 h-80 object-cover mx-3 my-6"
            />
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div>Cena od: {product.sizes[0]?.price} zł</div>
            </div>
          </div>
        </div>

        {/* Formularz dodawania do koszyka */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="size" className="block font-medium">
              Rozmiar:
            </label>
            <select
              id="size"
              name="size"
              value={selectedSize} // Ustawienie wartości na aktualnie wybrany rozmiar
              onChange={handleSizeChange} // Wywołanie funkcji przy zmianie rozmiaru
              className="border rounded p-2 w-full"
              required
            >
              {product.sizes.map((size) => (
                <option key={size.name} value={size.name}>
                  {size.name} - {size.price} zł
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quantity" className="block font-medium">
              Ilość:
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              defaultValue="1"
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Dodaj do koszyka
          </button>
        </form>
      </div>
    </main>
  );
}