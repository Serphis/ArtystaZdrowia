// dataLoader.server.ts
import { db } from '../services/index';
import { getUserSession } from './auth.server'; // Funkcja sesji

export async function loadProductData(request: Request) {
  const sessionData = await getUserSession(request);

  if (!sessionData || !sessionData.userId) {
    return { userId: null, isAdmin: false, products: [] }; // Jeśli brak sesji
  }

  const user = await db.user.findUnique({
    where: { id: sessionData.userId },
  });

  if (!user) {
    return { userId: null, isAdmin: false, products: [] }; // Jeśli brak użytkownika w bazie
  }

  const products = await db.product.findMany(); // Pobierz produkty

  return { userId: sessionData.userId, isAdmin: user.isAdmin, products }; // Zwróć dane
}
