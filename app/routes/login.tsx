import { useState } from "react";
import { Link, redirect } from "@remix-run/react";
import { json } from "@remix-run/node";
import { db } from "../services/index.js"; // Ścieżka do twojej konfiguracji Prisma
import bcrypt from "bcryptjs";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config.js"; // Importuj Firebase auth
import { getAuth } from "firebase-admin/auth"; // Firebase Admin SDK

export async function verifyIdToken(token) {
  try {
    const auth = getAuth();
    const decodedToken = await auth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw new Error("Token jest nieprawidłowy lub wygasł.");
  }
}
export async function action({ request }) {
    const formData = new URLSearchParams(await request.text());
    const email = formData.get("email");
    const password = formData.get("password");
  
    // Sprawdzenie, czy dane zostały podane
    if (!email || !password) {
      return json({ error: "Wszystkie pola są wymagane!" }, { status: 400 });
    }
  
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken(); // Pobieramy token z Firebase
    
        // Ustawiamy ciasteczko z tokenem
        const headers = new Headers();
        headers.set("Set-Cookie", `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`);
    
        // Po pomyślnym logowaniu, przekierowujemy na stronę główną
        return redirect("/", { headers });
      } catch (error) {
        return json({ error: "Błąd logowania: " + error.message }, { status: 401 });
      }
      
    // Szukanie użytkownika w bazie danych
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
  
    if (!user) {
      return json({ error: "Niepoprawny e-mail lub hasło." }, { status: 401 });
    }
  
    // Sprawdzanie, czy hasło jest poprawne
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
    if (!isPasswordCorrect) {
      return json({ error: "Niepoprawny e-mail lub hasło." }, { status: 401 });
    }
  
    // Zalogowanie użytkownika (przykład z sesją lub tokenem JWT)
    // Zwróć token JWT lub jakąkolwiek metodę autentykacji
    // Przykładowo: zakładając, że używasz JWT, musiałbyś tutaj dodać kod generujący token
  
    return json({ message: "Zalogowano pomyślnie!" });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Jeśli użytkownik jest zalogowany, np. przekieruj na dashboard
      window.location.href = "/";
    } else {
      // Jeśli użytkownik nie jest zalogowany
      console.log("Użytkownik niezalogowany");
    }
  });

  export default function Login() {
    const [inputs, setInputs] = useState({});
    const [errorMessage, setErrorMessage] = useState(""); // Do obsługi błędów logowania
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = inputs;
  
      // Sprawdzanie poprawności danych (możesz dodać więcej walidacji)
      if (!email || !password) {
        setErrorMessage("Proszę wypełnić wszystkie pola.");
        return;
      }
  
      try {
        // Wykorzystanie Firebase do logowania
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        
        localStorage.setItem("token", token);

        // Jeżeli logowanie się powiedzie, możesz przekierować użytkownika do dashboardu
        window.location.href = "/"; // Możesz przekierować na inną stronę
  
      } catch (error) {
        setErrorMessage(error.message); // Pokazanie błędu (np. "Niepoprawny email lub hasło")
      }
    };
  
    return (
      <main className="flex flex-row justify-center p-8 font-serif">
        <div className="flex flex-col space-y-4 items-left px-10 py-4 w-4/5 md:w-2/5">
          <h1 className="text-3xl mb-6">Logowanie</h1>
          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p> // Błąd logowania
          )}
            <form onSubmit={handleSubmit}> {/* Formularz obsługujący submit */}
                <p>Adres e-mail*</p>
                <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                    required
                    className="border-2 border-black py-1"
                />
                <p>Hasło*</p>
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    required
                    className="border-2 border-black py-1"
                />
                <div className="flex flex-row space-x-4 justify-between">
                    <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-slate-500 text-white rounded-md"
                    >
                    Zaloguj się
                    </button>
                    <Link to="/register">
                    <button
                        type="button"
                        className="px-4 py-2 bg-slate-500 text-white rounded-md"
                    >
                        Zarejestruj się
                    </button>
                    </Link>
                </div>
            </form>
        </div>
      </main>
    );
  }