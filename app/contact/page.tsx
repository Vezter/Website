"use client";

import { FormEvent, useState } from 'react';

const contactEmail = 'webmaster8381@gmail.com';

function buildMailto(subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${contactEmail}?${params.toString()}`;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      setStatus('Skriv venligst en besked før du sender.');
      return;
    }

    const subject = `Kontakt via ABF VÆNGET hjemmeside`;
    const body = `Navn: ${name}\nE-mail: ${email}\n\nBesked:\n${message}`;
    window.location.href = buildMailto(subject, body);
    setStatus('Mailklienten åbnes med din besked.');
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-10 sm:px-8">
      <h1 className="text-3xl font-semibold text-white sm:text-4xl">Kontakt os</h1>

      <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/10">
        <h2 className="text-2xl font-semibold text-white">Bestyrelse og kontakt</h2>
        <p className="mt-4 text-slate-200">Bestyrelsen består af:</p>
        <ul className="mt-4 space-y-2 text-slate-200">
          <li>Formand: Claus Bo Nielsen</li>
          <li>Næstformand: Madeleine Pedersen</li>
          <li>Kasserer & webmaster: Claus Vestergaard</li>
          <li>Bestyrelsesmedlem: Vibeke Olesen</li>
          <li>Bestyrelsesmedlem: Zita Petersen</li>
          <li>Suppleant: Elly Wanninger</li>
        </ul>
        <p className="mt-4 text-slate-200">Som interesseret boligkøber kan du kontakte bestyrelsen på mail og blive tilføjet interesselisten: <a className="text-amber-300 hover:text-amber-200" href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
      </section>

      <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/10">
        <h2 className="text-2xl font-semibold text-white">Skriv til os</h2>
        <p className="mt-4 text-slate-200">Brug formularen herunder for at sende en besked, som bliver sendt til kontaktmailen.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200">Navn</label>
            <input id="name" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Dit navn" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">E-mail</label>
            <input id="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Din e-mail" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200">Besked</label>
            <textarea id="message" className="mt-2 min-h-[160px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Skriv din besked her..." />
          </div>

          {status && <p className="text-slate-400">{status}</p>}

          <button className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-200" type="submit">Send besked</button>
        </form>
      </section>
    </main>
  );
}
