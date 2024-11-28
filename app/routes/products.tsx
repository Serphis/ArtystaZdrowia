import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { prisma } from "~/prisma.server";
import ProductView from "~/components/productView";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const sort = url.searchParams.get("sort") || "name";
  const order = url.searchParams.get("order") || "asc";
  const search = url.searchParams.get("search") || "";

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: {
      [sort]: order,
    },
  });

  return json({ products });
};

export default function Products() {
  const { products } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    setSearchParams((prev) => {
      prev.set("sort", sort);
      return prev;
    });
  };

  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setSearchParams((prev) => {
      prev.set("order", order);
      return prev;
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchParams((prev) => {
      prev.set("search", search);
      return prev;
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Szukaj..."
          className="border p-2 rounded"
          onChange={handleSearch}
        />
        <select className="border p-2 rounded" onChange={handleSort}>
          <option value="name">Nazwa</option>
          <option value="price">Cena</option>
        </select>
        <select className="border p-2 rounded" onChange={handleOrder}>
          <option value="asc">Rosnąco</option>
          <option value="desc">Malejąco</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}