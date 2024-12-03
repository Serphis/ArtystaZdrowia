import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css";
import DefaultLayout from "./layouts/DefaultLayout"; // Poprawny import layoutu
import { getUserSession } from "./utils/auth.server";
import { db } from './services/index';  // Adjust path accordingly
import { json, LoaderFunction, redirect } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = async ({ request }) => {
  const sessionData = await getUserSession(request);

  if (!sessionData || !sessionData.userId) {
    return { userId: null, isAdmin: false };
  }

  const user = await db.user.findUnique({
    where: { id: sessionData.userId },
  });

  if (!user) {
    return { userId: null, isAdmin: false };
  }

  return { userId: sessionData.userId, isAdmin: user.isAdmin };
};

export default function App() {
  let userId = null;
  let isAdmin = false;
  
  const user = { userId, isAdmin } = useLoaderData() || { userId: null, isAdmin: false };

  return (
    <html lang="pl">
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {user.userId !== null ? (
          <DefaultLayout userId={user.userId} isAdmin={user.isAdmin}>
            <div className="text-center pt-4">
              <p>Witaj, użytkowniku!</p>
              {user.isAdmin === true && <p>Jesteś administratorem.</p>}
            </div>
            <Outlet />
          </DefaultLayout>
        ) : (
          <DefaultLayout userId={null}>
            <div className="text-center pt-4">
              <p>Musisz się zalogować.</p>
            </div>
            <Outlet />
          </DefaultLayout>
        )}
        <Scripts />
      </body>
    </html>
  );
}
