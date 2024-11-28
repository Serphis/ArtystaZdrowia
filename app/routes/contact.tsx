import { Link } from "@remix-run/react";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Index() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-8">
                <h2 className="text-4xl font-bold m-4 mb-12">Kontakt</h2>
                <h2 className="text-2xl font-bold mx-4 mb-2">
                    Dane firmy:
                </h2>
                <h2 className="text-xl mx-4">
                    ARTYSTA ZDROWIA Sp. z o.o.
                </h2>
                <h2 className="text-xl mx-4">
                    Kuznocin 67
                </h2>
                <h2 className="text-xl mx-4">
                    NIP: 8371881619
                </h2>
                <h2 className="text-xl mx-4 mb-12">
                    96-500 Sochaczew
                </h2>

                <h2 className="text-2xl m-4 font-bold">Kontakt:</h2>
                <h2 className="text-xl m-4 mb-10">
                    Jesteśmy dostępni, aby Ci pomóc i odpowiedzieć na wszelkie pytania.
                    Infolinia (od poniedziałku do piątku, w godzinach 8:00-16:00): 502 007 506
                    Adres e-mail: artystazdrowia@gmail.com
                </h2>

                <h2 className="text-3xl font-bold mx-4 mb-2">Formularz kontaktowy</h2>
                <h2 className="text-l mx-4 mb-4 text-slate-500">Obowiązkowe pola oznaczone są symbolem - *</h2>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col space-y-4 items-left px-10 py-4 w-4/5 md:w-2/5">
                        <p>Imię i nazwisko</p>
                        <input 
                            type="text" 
                            name="fullName" 
                            value={inputs.fullName || ""} 
                            onChange={handleChange}
                            className="border-2 border-black py-1"
                        />
                        <p>Adres e-mail*</p>
                        <input 
                            required
                            type="email" 
                            name="email" 
                            value={inputs.email || ""} 
                            onChange={handleChange}
                            className="border-2 border-black py-1"
                        />
                        <p>Temat</p>
                            <input 
                                type="text" 
                                name="topic" 
                                value={inputs.topic || ""} 
                                onChange={handleChange}
                                className="border-2 border-black py-1"
                            />
                        <p>Wiadomość*</p>
                            <input
                                required 
                                type="text" 
                                name="message" 
                                value={inputs.message || ""} 
                                onChange={handleChange}
                                className="border-2 border-black py-1"
                            />
                        <input type="submit" className="px-4 py-2 w-1/3 md:w-1/4 bg-slate-200" />
                    </div>
                </div>
            </div>
        </form>
    );
}
