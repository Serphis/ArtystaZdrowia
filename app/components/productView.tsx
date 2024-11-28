import { Link } from "@remix-run/react";

export default function ProductView({ product }: { product: any }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-4">{product.price} zł</p>
      <Link
        to={`/products/${product.id}`}
        className="block text-center bg-black text-white px-4 py-2 rounded-md"
      >
        Zobacz więcej
      </Link>
    </div>
  );
}