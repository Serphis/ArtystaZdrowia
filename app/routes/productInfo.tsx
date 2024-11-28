import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/prisma.server";

export const loader: LoaderFunction = async ({ params }) => {
  const productId = parseInt(params.id || "", 10);

  if (isNaN(productId)) {
    throw new Response("Nie znaleziono produktu", { status: 404 });
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Response("Produkt nie istnieje", { status: 404 });
  }

  return json({ product });
};

export default function ProductInfo() {
  const { product } = useLoaderData<typeof loader>();

  const handleAddToCart = () => {
    alert(`Dodano ${product.name} do koszyka!`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-4">{product.price} zł</p>
      <button
        onClick={handleAddToCart}
        className="bg-black text-white px-6 py-2 rounded-md"
      >
        Dodaj do koszyka
      </button>
    </div>
  );
}
