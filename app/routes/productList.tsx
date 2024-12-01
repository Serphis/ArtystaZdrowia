import { LoaderFunction, json, ActionFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { loadProductData } from '../utils/dataLoader.server'; // Załaduj funkcję z pliku .server.ts
import { db } from '../services/index'; // Baza danych
import { Link } from 'react-router-dom';  // Jeśli używasz React Router (przy założeniu, że Remix wspiera Link)

// import { getCloudinaryImages } from '../utils/uploader.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "ArtystaZdrowia" },
    { name: "description", content: "Candle store" },
  ];
};

export const loader = async ({ request }) => {
    const products = await db.product.findMany();
    // const cloudinaryImages = await getCloudinaryImages();
    return { products };
  };
    
  // export const action: ActionFunction = async ({ request }) => {
  //   const formData = new FormData(request.body);
  //   const name = formData.get('name') as string;
  //   const price = formData.get('price') as string;
  //   const image = formData.get('image') as File;
  
  //   const newProduct = await db.product.create({
  //     data: {
  //       name,
  //       price: parseFloat(price),
  //       image: image ? await uploadImage(image) : null,
  //     },
  //   });
  
  //   return json(newProduct);
  // };
  
  // async function uploadImage(image: File): Promise<string> {
  //   // Tu dodaj kod do uploadu zdjęcia (np. S3, Cloudinary)
  //   return 'url-do-obrazka';
  // }  

export default function ProductList(){
    const { products } = useLoaderData();
    const isAdmin = true; // Zmienna, która sprawdza, czy użytkownik jest administratorem
  
    // const handleDelete = async (id: string) => {
    //     const response = await fetch(`/api/products/${id}`, {
    //       method: 'DELETE',
    //     });
    //     if (response.ok) {
    //       // Odświeżenie listy produktów po usunięciu
    //       window.location.reload();
    //     }
    //   };
    
    return (
      <main className="font-serif">
        <form method="post">
          <div className="p-8 w-full rounded-md">
            <h1 className="text-3xl">
              Produkty
            </h1>
            <div className="mt-4 p-10">
              {/* {isAdmin && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-full mb-4"
                  onClick={() => window.location.href = '/createProduct'} // Przekierowanie do formularza
                >
                  +
                </button>
              )} */}
              {products ? (
                <div className="flex flex-row flex-wrap gap-5">
                  {products.map((Product: Product) => {
                    // Przypisz link z Cloudinary do produktu (np. przez matching public_id)
                    // const imageUrl = cloudinaryImages.find((image) => image.public_id === Product.image)?.secure_url;
  
                    return (
                      <div key={Product.id}>
                        <div className="flex flex-col ring-1 w-60 md:w-80 ring-slate-300 bg-slate-100 text-slate-600 rounded-sm shadow-md">
                          <div className="flex flex-col items-center">
                            <div className="mx-3 my-6">
                              <img src={Product.image} alt="Opis zdjęcia" className='w-80 h-80 object-cover' />
                              {/* {imageUrl ? (
                                <img src={imageUrl} alt={Product.name} className="w-full h-auto rounded-md" />
                              ) : (
                                <div>Brak zdjęcia</div>
                              )} */}
                            </div>
                          </div>
                          <div className="mx-3 my-1 mt-4 flex flex-col justify-left items-left">
                            <div>
                              {Product.name}
                            </div>
                            <div>{Product.price} zł</div>
                          </div>
                          <div className="flex justify-start p-2">
                            <Link
                              to={`/${Product.id}`} // Link do szczegółów produktu
                              className="hover:bg-slate-600 bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-sm shadow-md"
                            >
                              Do koszyka
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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