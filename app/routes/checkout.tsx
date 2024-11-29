import { useState } from "react";

export default function Checkout() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wyświetlenie danych lub dalsza logika
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <main className="p-8 font-serif">
      <h1 className="text-3xl mb-6">Zakup przedmiotów</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="fullName" className="block mb-2 font-medium">
            Imię i nazwisko*
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={inputs.fullName || ""}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-medium">
            Adres e-mail*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={inputs.email || ""}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 font-medium">
            Adres dostawy*
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={inputs.address || ""}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="product" className="block mb-2 font-medium">
            Przedmiot zakupu*
          </label>
          <input
            id="product"
            name="product"
            type="text"
            required
            value={inputs.product || ""}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="notes" className="block mb-2 font-medium">
            Dodatkowe uwagi
          </label>
          <textarea
            id="notes"
            name="notes"
            value={inputs.notes || ""}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Potwierdź zakup
        </button>
      </form>
    </main>
  );
}