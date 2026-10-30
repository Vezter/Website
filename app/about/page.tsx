import Link from 'next/link';
import { siteContent } from '../data/site-content';

export const metadata = { title: 'Om VÆNGET | VÆNGET', description: 'Læs om VÆNGET og fællesskabet i Tilst.' };

export default function AboutPage() {
  return <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
    <p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent-dark)]">Om {siteContent.name}</p>
    <div className="mt-5 grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
      <div><h1 className="text-5xl font-semibold tracking-tight">Et boligfællesskab med klare rammer.</h1><p className="mt-6 text-xl leading-8 text-[var(--color-muted)]">{siteContent.name} er et tæt andelsboligfællesskab i Tilst, hvor privatliv og fællesskab får lov til at fungere side om side.</p></div>
      <aside className="rounded-3xl bg-[var(--color-ink)] p-7 text-white"><p className="text-sm uppercase tracking-[.2em] text-[var(--color-accent)]">Kort fortalt</p><ul className="mt-5 space-y-4">{siteContent.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></aside>
    </div>
    <section className="mt-20 grid gap-6 border-t border-[var(--color-line)] pt-10 sm:grid-cols-3"><div><h2 className="text-xl font-semibold">Privatliv</h2><p className="mt-3 leading-7 text-[var(--color-muted)]">Egen bolig og have giver plads til hverdagen på dine præmisser.</p></div><div><h2 className="text-xl font-semibold">Naboskab</h2><p className="mt-3 leading-7 text-[var(--color-muted)]">Fælles aktiviteter og et fælleshus gør det nemt at mødes.</p></div><div><h2 className="text-xl font-semibold">Ansvar</h2><p className="mt-3 leading-7 text-[var(--color-muted)]">Ordentlige rammer hjælper beboerne med at passe på området.</p></div></section>
    <Link className="button mt-12 px-6 py-3" href="/contact">Kontakt bestyrelsen</Link>
  </main>;
}
