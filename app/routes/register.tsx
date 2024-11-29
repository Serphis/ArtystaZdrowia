import { useState } from "react";
import { Form } from "@remix-run/react";
import { json, redirect } from '@remix-run/node';
import { db } from '../services/index.js';  // Assuming you have Prisma setup
import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  fullName: z.string().min(1),
});

export async function action({ request }) {
  const formData = await request.formData();
  const entries = Object.fromEntries(formData.entries());

  const { error, success, data } = emailSchema.safeParse(entries);

  if (!success) {
    return new Response("Invalid data", { status: 400 });
  }

  const { email, password, confirmPassword, fullName } = data;

  if (password !== confirmPassword) {
    return new Response("Passwords do not match", { status: 400 });
  }

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return new Response("User with this email already exists", { status: 400 });
  }

  const newUser = await db.user.create({
    data: {
      email,
      password,
      name: fullName,
    },
  });

  return redirect('/login');
}

export default function Register() {
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Form method="post">
      <main className="flex flex-row justify-center p-8 font-serif">
        <div className="flex flex-col space-y-4 items-left px-10 py-4 w-4/5 md:w-2/5">
          <h1 className="text-3xl mb-6">Rejestracja</h1>
          <p>Imię*</p>
          <input
            type="text"
            name="fullName"
            value={inputs.fullName}
            onChange={handleChange}
            required
            className="border-2 border-black py-1"
          />
          <p>Adres e-mail*</p>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
            className="border-2 border-black py-1"
          />
          <p>Hasło*</p>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            required
            className="border-2 border-black py-1"
          />
          <p>Potwierdź hasło*</p>
          <input
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleChange}
            required
            className="border-2 border-black py-1"
          />
          <button
            type="submit"
            className="px-4 py-2 w-1/3 bg-slate-500 text-white rounded-md"
          >
            Zarejestruj się
          </button>
        </div>
      </main>
    </Form>
  );
}
