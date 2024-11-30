import { createCookieSessionStorage } from "@remix-run/node";

// Konfiguracja sesji
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET], // Twoje tajne klucze
    secure: process.env.NODE_ENV === "production", // Bezpieczne ciasteczka tylko w produkcji
    maxAge: 60 * 60 * 24 * 30, // 30 dni
  },
});

// Funkcja do pobierania sesji
export async function getSession(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  return sessionStorage.getSession(cookieHeader);
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

export { sessionStorage };
