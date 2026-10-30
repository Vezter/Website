import Link from 'next/link';
import { siteContent } from '../data/site-content';

export const metadata = { title: 'Fællesskab | VÆNGET', description: 'Læs om fællesskab, aktiviteter og rammer i VÆNGET.' };

export default function CommunityPage() {
  return <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
    <p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">Fællesskab</p>
    <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight">Et fællesskab, der også skal fungere på en tirsdag.</h1>
    <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--color-muted)]">I {siteContent.name} handler fællesskab om nærvær, tydelige aftaler og plads til forskellige hverdage.</p>
    <div className="mt-16 grid gap-5 sm:grid-cols-2"><article className="rounded-3xl bg-white p-7"><p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">Sammen</p><h2 className="mt-4 text-2xl font-semibold">Fællesspisning og aktiviteter</h2><p className="mt-3 leading-7 text-[var(--color-muted)]">Beboerne mødes til fællesspisning, sommerfest, nytårstaffel og andre aktiviteter i løbet af året.</p></article><article className="rounded-3xl bg-white p-7"><p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">Sammen om stedet</p><h2 className="mt-4 text-2xl font-semibold">Vedligehold med omtanke</h2><p className="mt-3 leading-7 text-[var(--color-muted)]">Naboerne hjælper hinanden og passer på de fælles rammer, så området bliver ved med at føles rart.</p></article></div>
    <section className="mt-16 border-t border-[var(--color-line)] pt-10"><h2 className="text-3xl font-semibold">Klare rammer</h2><p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">Større boligændringer kræver bestyrelsens godkendelse. Det beskytter områdets sammenhæng og gør det lettere at bevare et ensartet, præsentabelt boligmiljø.</p><Link className="button mt-7 px-6 py-3" href="/contact">Spørg bestyrelsen</Link></section>
  </main>;
}
