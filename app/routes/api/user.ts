// routes/api/user.ts
import { json } from "@remix-run/node";
import { getUserFromSession } from "~/utils/session.server";

export const loader = async ({ request }) => {
  const user = await getUserFromSession(request);
  if (!user) {
    return json({ user: null });
  }
  return json({ user });
};
