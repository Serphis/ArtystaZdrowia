// createProduct.tsx
import { Form } from "@remix-run/react"; // Importowanie komponentu Form z Remix
import { useState } from 'react';

export default function CreateProduct() {
  return (
    <Form method="POST" encType="multipart/form-data">
      <input type="text" name="name" placeholder="Nazwa produktu" required />
      <input type="number" name="price" placeholder="Cena produktu" required />
      <input type="file" name="image" accept="image/*" />
      <button type="submit">Dodaj produkt</button>
    </Form>
  );
}
