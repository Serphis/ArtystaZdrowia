import { createCookieSessionStorage } from "@remix-run/node";
import { db } from "../services/index"; // Zimportuj bazę danych

// Konfiguracja sesji
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 dni
  },
});

// Funkcja do pobierania sesji
export function getSession(request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

export function commitSession(session: any) {
  return sessionStorage.commitSession(session);
}

// Funkcja do pobierania użytkownika z sesji
export async function getUserFromSession(request: Request) {
  const session = await getSession(request);
  const user = session.get("user");
  if (!user) return null; // Brak użytkownika w sesji
  return user; // Zwraca dane użytkownika
}

// Funkcja do tworzenia nowej sesji
export async function createUserSession(user: any, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set("user", user); // Przechowuje dane użytkownika w sesji
  return new Response(null, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
      Location: redirectTo,
    },
    status: 302,
  });
}

// Funkcja do usuwania sesji
export async function destroyUserSession(request: Request) {
  const session = await getSession(request);
  return new Response(null, {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function addToCart(session: any, productId: string, quantity: number) {
  const cart = session.get("cart") || [];
  const existingProductIndex = cart.findIndex((item) => item.productId === productId);

  if (existingProductIndex !== -1) {
    // Jeśli produkt już w koszyku, zwiększ ilość
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Jeśli produkt nie jest w koszyku, dodaj go
    cart.push({ productId, quantity });
  }

  session.set("cart", cart);
}

export { sessionStorage };
