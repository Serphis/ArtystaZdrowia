import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "../services/index";
import { getUserSession } from "../utils/auth.server";
import { ActionFunction, redirect } from "react-router-dom";
import { useState } from "react";
import { addToCart, commitSession, getSession } from "../utils/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const sessionData = await getUserSession(request);
  const session = await getSession(request);
  const products = await db.product.findMany();
  const { productId } = params;
  const sizes = await db.size.findMany({
    where: { productId: productId }
  });

  if (!sessionData || !sessionData.userId) {
    return { userId: null, isAdmin: false, products: [] };
  }

  const user = await db.user.findUnique({
    where: { id: sessionData.userId },
  });

  if (!user) {
    return { userId: null, isAdmin: false, products: [] };
  }

  return { userId: sessionData.userId, isAdmin: user.isAdmin, products, sizes, session, productId };
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const productId = params.toString();
  const sizeId = formData.get("sizeId")?.toString();
  const quantity = parseInt(formData.get("quantity")?.toString() || "1");
  const price = parseFloat(formData.get("price")?.toString() || "0");

  const session = await getSession(request);
  await addToCart(session, productId, quantity, sizeId, price);
  const commit = await commitSession(session);

  return redirect("/cart", {
    headers: {
      "Set-Cookie": commit,
    },
  });
};

export default function ProductInfo() {
  const { userId, isAdmin, products, sizes, productId } = useLoaderData() || { userId: null, isAdmin: false };
  const Product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <main className="font-serif">
      <div className="p-8 w-full rounded-md">
        <div className="flex flex-row flex-wrap gap-5">
          <div key={Product.id}>
            <h1 className="text-3xl">{Product.name}</h1>
            <div className="mt-4 p-10">
              <div className="flex flex-col items-center">
                <img
                  src={Product.image}
                  alt={Product.name}
                  className="w-80 h-80 object-cover mx-3 my-6"
                />
                <div>
                  <h2>{Product.name}</h2>
                  <p>{Product.description}</p>
                  <div className="space-y-4">
                    <form
                      method="post"
                      action={`/cart`}
                      onSubmit={(e) => {
                        e.preventDefault();
                        addToCart(session, productId, quantity, selectedSize, sizes.find(s => s.id === selectedSize)?.price);
                      }}
                    >
                      <div>
                        <input type="hidden" name="productId" value={productId} />
                        <label htmlFor="size" className="block font-medium">
                          Wybierz rozmiar:
                        </label>
                        <select
                          id="size"
                          name="size"
                          onChange={handleSizeChange}
                          className="border rounded p-2 w-full"
                        >
                          {sizes.map((size) => (
                            <option key={size.id} value={size.id}>
                              {size.name}: {size.price} zł
                            </option>
                          ))}
                        </select>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                          Ilość
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          value={quantity}
                          min="1"
                          onChange={(e) => setQuantity(e.target.value)}
                          className="border rounded p-2 w-16 text-center"
                        />
                        <button type="submit">Dodaj do koszyka</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
