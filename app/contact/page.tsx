"use client";
import { FormEvent, useState } from 'react';
import { siteContent } from '../data/site-content';

function buildMailto(subject: string, body: string) {
  return `mailto:${siteContent.contactEmail}?${new URLSearchParams({ subject, body }).toString()}`;
}

export default function Contact() {
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [message, setMessage] = useState(''); const [status, setStatus] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) { setStatus('Skriv venligst en besked f\u00f8r du sender.'); return; }
    window.location.href = buildMailto(`Kontakt via ${siteContent.name} hjemmeside`, `Navn: ${name}\nE-mail: ${email}\n\nBesked:\n${message}`);
    setStatus('Mailklienten \u00e5bnes med din besked.');
  }
  return <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
    <div><p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">Kontakt</p><h1 className="mt-3 text-4xl font-semibold">Skriv til os</h1><p className="mt-4 text-lg text-[var(--color-muted)]">Har du sp\u00f8rgsm\u00e5l om V\u00c6NGET eller boligerne? Send en besked til bestyrelsen.</p></div>
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-[var(--color-line)] bg-white p-6 sm:p-8">
      <label className="block">Navn<input className="mt-2 w-full rounded-xl border border-[var(--color-line)] p-3" type="text" value={name} onChange={(event) => setName(event.target.value)} /></label>
      <label className="block">E-mail<input className="mt-2 w-full rounded-xl border border-[var(--color-line)] p-3" type="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
      <label className="block">Besked<textarea className="mt-2 min-h-40 w-full rounded-xl border border-[var(--color-line)] p-3" required value={message} onChange={(event) => setMessage(event.target.value)} /></label>
      {status && <p role="status" className="text-[var(--color-muted)]">{status}</p>}
      <button className="button px-6 py-3" type="submit">Åbn e-mail</button>
    </form>
  </main>;
}
