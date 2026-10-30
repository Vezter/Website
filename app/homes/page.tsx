import Link from 'next/link';
import { siteContent } from '../data/site-content';

export const metadata = { title: 'Boliger | VÆNGET', description: 'Se boligtyper, priser og husleje i VÆNGET.' };

export default function HomesPage() {
  return <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
    <p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">Boliger</p>
    <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h1 className="text-5xl font-semibold tracking-tight">Fire størrelser. Én rolig ramme.</h1><p className="max-w-sm text-[var(--color-muted)]">Priserne er fastsat pr. 15. april 2026 og kan ændre sig. Kontakt os for aktuelle oplysninger.</p></div>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{siteContent.housing.map((home) => <article className="rounded-3xl border border-[var(--color-line)] bg-white p-6" key={home.size}><p className="text-4xl font-semibold">{home.size} m²</p><p className="mt-4 text-[var(--color-muted)]">{home.homes} boliger</p><dl className="mt-8 space-y-3 border-t border-[var(--color-line)] pt-5"><div className="flex justify-between gap-3"><dt className="text-[var(--color-muted)]">Pris</dt><dd className="font-semibold">{home.price}</dd></div><div className="flex justify-between gap-3"><dt className="text-[var(--color-muted)]">Husleje</dt><dd className="font-semibold">{home.rent}</dd></div></dl></article>)}</div>
    <section className="mt-16 rounded-3xl bg-[var(--color-ink)] p-8 text-white sm:p-10"><h2 className="text-3xl font-semibold">Vil du vide mere?</h2><p className="mt-3 max-w-xl leading-7 text-white/75">Skriv til bestyrelsen, hvis du vil høre om ledige boliger eller blive skrevet op på interesselisten.</p><Link className="button mt-6 px-6 py-3" href="/contact">Kontakt os</Link></section>
  </main>;
}
