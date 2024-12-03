import { useLoaderData } from "@remix-run/react";
import { db } from "../services/index";
import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { getSession, commitSession, addToCart } from "../utils/session.server";
import { useState } from "react";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const cart = session.get("cart") || [];
  const products = await db.product.findMany();
  const sizes = await db.size.findMany();

  if (cart.length === 0) {
    return json({ cart: [], message: "Koszyk jest pusty." });
  }

  const enhancedCart = await Promise.all(
    cart.map(async (item) => {
      const product = await db.product.findUnique({
        where: { id: item.productId },
        select: { name: true, image: true },
      });

      return {
        ...item,
        name: product?.name || "Nieznany produkt",
        image: product?.image || "/placeholder.jpg",
      };
    })
  );

  return { cart: enhancedCart, products, sizes };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const productId = formData.get("productId")?.toString();
  const sizeId = formData.get("size")?.toString();
  const quantity = parseInt(formData.get("quantity")?.toString() || "1", 10);
  const price = parseFloat(formData.get("price")?.toString() || "0");

  if (!productId || !sizeId || isNaN(quantity) || isNaN(price)) {
    console.warn("Brakuje danych w formularzu lub dane są nieprawidłowe.");
  }

  const session = await getSession(request);

  await addToCart(session, productId, quantity, sizeId, price);

  const commit = await commitSession(session);

  return redirect("/cart", {
    headers: {
      "Set-Cookie": commit,
    },
  });
};

export default function Cart() {
  const { cart, message, products, sizes } = useLoaderData();

  // Dopasuj przedmioty w koszyku
  const cartItems = Array.isArray(cart) ? cart : [];

  const updatedCart = cartItems.map((item) => {
    // Znajdź produkt odpowiadający productId w cart
    const product = products.find((p) => p.id === item.productId);
  
    // Znajdź odpowiedni rozmiar na podstawie sizeId z cart
    const size = sizes.find((s) => s.id === item.sizeId);

    return {
      ...item,
      productName: product ? product.name : "Nieznany produkt",
      productImage: product ? product.image : "/placeholder.jpg",
      sizeName: size ? size.name : "Nieznany rozmiar",
      sizePrice: size ? size.price : 0,
    };
  });


  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">Koszyk</h1>
      {updatedCart.length > 0 ? (
        <div className="space-y-4">
          {updatedCart.map((item, index) => (
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
                <p className="text-lg font-bold">{item.sizePrice} zł</p>
                <p className="text-sm text-gray-500">Ilość: {item.quantity}</p>
                <p>Rozmiar: {item.sizeName}</p>
              </div>
              {/* <form method="post" action="/cart">
                <input type="hidden" name="productId" value={item.productId} />
                <input type="hidden" name="size" value={item.sizeId} />
                <button type="submit" className="text-red-500 hover:text-red-700">
                  X
                </button>
              </form> */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">{message || "Twój koszyk jest pusty."}</p>
      )}
    </main>
  );
}