"use client";
import { useState, type FormEvent } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const to = "giolstpro@gmail.com";
        const subject = encodeURIComponent(`Contact portfolio - ${name}`);
        const body = encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    };

    return (
        <main className="min-h-screen bg-black text-white px-4 py-16 sm:px-6 md:px-10">
            <section className="w-full max-w-2xl mx-auto border border-white/20 rounded-lg p-5 sm:p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Contact</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                            Nom
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            className="w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm outline-none focus:border-orange-500"
                            placeholder="Ton nom"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm outline-none focus:border-orange-500"
                            placeholder="ton@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            required
                            rows={5}
                            className="w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm outline-none focus:border-orange-500"
                            placeholder="Écris ton message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full sm:w-auto px-5 py-2 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white rounded-md transition"
                    >
                        Envoyer
                    </button>
                </form>
            </section>
        </main>
    );
}