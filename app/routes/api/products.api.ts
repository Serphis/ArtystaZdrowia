// products.api.ts
import { db } from '../services/index'; // Baza danych
import { json, LoaderFunction, ActionFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  const products = await db.product.findMany();
  return json(products);
};

export const action: ActionFunction = async ({ request }) => {
  const formData = new FormData(request.body);
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;
  const image = formData.get('image') as File;

  const newProduct = await db.product.create({
    data: {
      name,
      price: parseFloat(price),
      image: image ? await uploadImage(image) : null, // Funkcja do uploadu obrazu
    },
  });

  return json(newProduct);
};

async function uploadImage(image: File): Promise<string> {
  // Tu dodaj kod do uploadu zdjęcia (np. S3, Cloudinary)
  return 'url-do-obrazka';
}

export const deleteProduct: ActionFunction = async ({ request }) => {
  const formData = new FormData(request.body);
  const productId = formData.get('id') as string;

  await db.product.delete({
    where: { id: productId },
  });

  return json({ success: true });
};
