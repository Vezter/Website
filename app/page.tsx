import Link from 'next/link';
import { siteContent } from './data/site-content';

export default function Home() {
  return <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
    <section className="grid gap-12 lg:grid-cols-[1.4fr_.8fr] lg:items-end">
      <div><p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">{siteContent.name} · Boligfællesskab i Tilst</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">Et hjem med plads til både ro og fællesskab.</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--color-muted)]">Et tæt andelsboligfællesskab med private haver, fælleshus og klare rammer for hverdagen.</p><div className="mt-8 flex flex-wrap gap-3"><Link className="button px-6 py-3" href="/homes">Se boligerne</Link><Link className="rounded-full border border-[var(--color-line)] px-6 py-3 font-semibold" href="/contact">Kontakt os</Link></div></div>
      <aside className="rounded-3xl border border-[var(--color-line)] bg-white p-7"><p className="text-sm uppercase tracking-[.2em] text-[var(--color-muted)]">Nøglefakta</p><ul className="mt-5 space-y-4 text-lg">{siteContent.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></aside>
    </section>
    <section className="mt-24 border-t border-[var(--color-line)] pt-10"><p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">Boligtyper</p><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{siteContent.housing.map((home) => <article className="rounded-2xl border border-[var(--color-line)] bg-white p-5" key={home.size}><p className="text-3xl font-semibold">{home.size} m²</p><p className="mt-3 text-[var(--color-muted)]">{home.homes} boliger</p></article>)}</div></section>
  </main>;
}
