import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import { prisma } from "../utils/prisma.server";
import bcrypt from "bcryptjs";

// Inicjalizacja sessionStorage i authenticator
const authenticator = new Authenticator<any>(sessionStorage);

export async function getUserSession(request: Request) {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));
    const userId = session.get("userId");
    const isAdmin = session.get("isAdmin");

    if (userId !== null) {
      return { userId, isAdmin }; // Zwróć userId, jeśli użytkownik jest zalogowany
    }
    else {
      return null;
    }
}

// Funkcja do pobierania użytkownika na podstawie e-maila
export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user; // Zwróć użytkownika lub null, jeśli nie znaleziono
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw new Error("Błąd bazy danych");
  }
}

// Funkcja do porównania hasła
export async function comparePassword(inputPassword: string, storedPassword: string): Promise<boolean> {
  try {
    const isMatch = await bcrypt.compare(inputPassword, storedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Błąd przy porównywaniu haseł");
  }
}

// Konfiguracja strategii formularza dla logowania
const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get("email") as string;
  const password = form.get("password") as string;

  // Sprawdzanie poprawności danych
  const user = await getUserByEmail(email); // Używamy funkcji do pobierania użytkownika

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Sprawdzanie poprawności hasła
  const passwordsMatch = await comparePassword(password, user.password as string); // Używamy funkcji do porównania hasła

  if (!passwordsMatch) {
    throw new Error("Invalid email or password");
  }

  // Ustawianie sesji po poprawnym logowaniu
  const session = await sessionStorage.getSession();
  session.set("userId", user.id);

  // Zwracamy sesję, aby użytkownik był przekierowany na stronę po zalogowaniu
  return session;
});

authenticator.use(formStrategy, "form");

export { authenticator };