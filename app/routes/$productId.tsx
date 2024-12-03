import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "../services/index"; // Zimportuj bazę danych
import { getUserSession } from "../utils/auth.server";
import { useParams } from "react-router-dom";

export const loader: LoaderFunction = async ({ request }) => {
  const sessionData = await getUserSession(request);
  const products = await db.product.findMany();

  if (!sessionData || !sessionData.userId) {
    return { userId: null, isAdmin: false, products: [] };
  }

  const user = await db.user.findUnique({
    where: { id: sessionData.userId },
  });

  if (!user) {
    return { userId: null, isAdmin: false, products: [] };
  }

  return { userId: sessionData.userId, isAdmin: user.isAdmin, products };
};

export default function ProductInfo() {
  let products = [];
  let userId = null;
  let isAdmin = false;

  const data = { userId, isAdmin, products } = useLoaderData() || { userId: null, isAdmin: false };
  const { productId } = useParams();

  const Product = products.find((p) => p.id === productId);

  return (
    <main className="font-serif">
      <div className="p-8 w-full rounded-md">
          <div className="flex flex-row flex-wrap gap-5">
            <div key = {Product.id}>
              <h1 className="text-3xl">
                {Product.name}
              </h1>
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
                    <div>Cena: {Product.price} zł</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}
