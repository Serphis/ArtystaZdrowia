import { json, type V2_MetaFunction } from "@remix-run/node";
import { redirect } from '@remix-run/node'
import { Form, NavLink, useLoaderData } from "@remix-run/react";
import { db } from '../services/index.js'
import { z } from 'zod'
import { useState } from 'react';
import { Product } from '@prisma/client';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "ArtystaZdrowia" },
    { name: "description", content: "Candle store" },
  ];
};

export async function loader() {
  const products = await db.product.findMany()
  const ratings = await db.rating.findMany()
  return {
      data: products, ratings
  }
}

export const emailSchema = z.object({
  email: z.string().email().min(1)
})

export async function action({ request }){
  const formData = await request.formData()
  const entries = Object.fromEntries(formData.entries())

  const { error, success, data } = emailSchema.safeParse(entries)

  let { _action, ...values } = Object.fromEntries(formData)

  if (!success) {
      throw new Response("Not allowed", {
          status: 400
      })
  }
  
    console.log("wszystkie info---", data)
}

export default function ProductList(){
  const { data: Products } = useLoaderData();
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert("Dodano produkt do koszyka!");
  };

  return (
      <main className="font-serif">
          <form method="post">
            <div className="p-8 w-full rounded-md">
                <h1 className="text-3xl">
                    Produkty
                </h1>
                <div className="mt-4 p-10">
                    {Products ? (
                        <div className="flex flex-row flex-wrap gap-5">
                            {Products.map((Product: Product) => (
                                <div key={Product.id}>
                                    <div className="flex flex-col ring-1 w-60 md:w-80 ring-slate-300 bg-slate-100 text-slate-600 rounded-sm shadow-md">
                                        <div className="flex flex-col items-center">
                                            <div className="mx-3 my-6">
                                                {Product.image}
                                            </div>
                                        </div>
                                        <div className="mx-3 my-1 mt-4 flex flex-col justify-left items-left">
                                            <div>
                                                {Product.name}
                                            </div>
                                            <div>{Product.price} zł</div>
                                        </div>
                                        <div className="flex justify-start p-2">
                                            <button
                                                onClick={() => addToCart(Product)}
                                                className="hover:bg-slate-600 bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-sm shadow-md"
                                                >
                                                Dodaj do koszyka
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
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