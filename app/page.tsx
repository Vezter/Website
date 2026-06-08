export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-6 pb-16 pt-10 sm:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/10 sm:p-10">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300">DISCOVER</p>
          <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.14em] text-white sm:text-4xl">VÆNGET</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">Et klart struktureret andelsboligfællesskab i Tilst med 21 rækkehuse, private haver og et fælleshus. Her kombineres tryghed, orden og fællesskab i hverdagen.</p>

          <div className="mt-8 space-y-4 text-slate-200">
            <p className="uppercase tracking-[0.28em] text-slate-400">what you get</p>
            <ul className="space-y-3 text-slate-200">
              <li>Tryghed i et veletableret andelsboligmiljø</li>
              <li>Fælles aktiviteter, arbejdslørdage og sociale arrangementer</li>
              <li>Klare rammer for boligændringer og fælles vedligehold</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2">21 rækkehuse</span>
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2">Private haver</span>
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2">Fælleshus</span>
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2">Siden 1992</span>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 sm:p-10">
          <div className="rounded-3xl bg-slate-900/90 p-6 text-slate-200">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">SYSTEM STATUS</p>
            <div className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
              <p>INITIALIZING… 85% complete</p>
              <p>COMMUNITY FRAMEWORK › online</p>
              <p>HOUSING STOCK › 21 units</p>
              <p>ACTIVITIES › active</p>
              <p>CONTACT › webmaster8381@gmail.com</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Key facts</p>
            <div className="mt-4 grid gap-4 text-slate-200 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Boligtyper</p>
                <p className="mt-2 text-lg font-semibold text-white">65–103 m²</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">Havkærvænget, Tilst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 sm:p-10">
        <p className="text-sm uppercase tracking-[0.32em] text-amber-300">BOLIGTYPER</p>
        <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.12em] text-white">Huse i fire størrelser</h2>
        <p className="mt-4 max-w-3xl text-slate-200 leading-8">ABF VÆNGET tilbyder enkle og funktionelle rækkehuse i 65, 75, 86 og 103 m². Boligerne er planlagt med et fælles fokus på ensartethed og kvalitet.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">65 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">3 boliger</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">75 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">3 boliger</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">86 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">9 boliger</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">103 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">6 boliger</p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/10 sm:p-10">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300">COMMUNITY</p>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.12em] text-white">Fællesskab og aktivitet</h2>
          <p className="mt-4 text-slate-200 leading-8">VÆNGET er mere end huse. Det er et beboersamfund, hvor fællesarrangementer og ordnede rammer skaber tryghed og sammenhold.</p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li><strong>Fællesspisning:</strong> cirka en gang om måneden i fælleshuset.</li>
            <li><strong>Årlige aktiviteter:</strong> nytårstaffel, generalforsamling, sommerfest og arbejdsweekend.</li>
            <li><strong>Støtte til vedligehold:</strong> naboerne hjælper hinanden og passer området.</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 sm:p-10">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300">RULES</p>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.12em] text-white">Regler for boligændringer</h2>
          <p className="mt-4 text-slate-200 leading-8">For at bevare områdets ro og sammenhæng skal større ændringer godkendes. Det gælder udestuer, overdækkede terrasser eller strukturelle ændringer.</p>
          <div className="mt-6 space-y-3 text-slate-200">
            <p><strong>Ansøgning:</strong> Alt større byggeri kræver bestyrelsens tilladelse.</p>
            <p><strong>Harmoni:</strong> Målet er et ensartet og præsentabelt boligmiljø.</p>
            <p><strong>Trivsel:</strong> Fælles ydre værdier beskytter både husene og fællesskabet.</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 sm:p-10">
        <p className="text-sm uppercase tracking-[0.32em] text-amber-300">PRICES</p>
        <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.12em] text-white">Aktuelle priser</h2>
        <p className="mt-4 max-w-3xl text-slate-200 leading-8">Priserne er fastsat pr. 15. april 2026 og kan ændre sig. Kontakt os for at høre om ledige boliger og den aktuelle prisliste.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">65 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">kr. 330.789,-</p>
            <p className="mt-2 text-slate-400">Husleje kr. 4.239,-</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">75 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">kr. 381.680,-</p>
            <p className="mt-2 text-slate-400">Husleje kr. 4.738,-</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">86 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">kr. 437.593,-</p>
            <p className="mt-2 text-slate-400">Husleje kr. 5.288,-</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">103 m²</p>
            <p className="mt-3 text-lg font-semibold text-white">kr. 524.172,-</p>
            <p className="mt-2 text-slate-400">Husleje kr. 6.139,-</p>
          </div>
        </div>
        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-slate-200">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300">INTEREST</p>
          <p className="mt-3 text-lg font-semibold text-white">Vil du på interesselisten?</p>
          <p className="mt-3 leading-7 text-slate-200">Send en mail til bestyrelsen for at blive opført på interesselisten og få prioriteret information om ledige boliger.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200" href="mailto:webmaster8381@gmail.com">Mail interesselisten</a>
            <a className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300" href="/contact">Se kontaktinfo</a>
          </div>
        </div>
      </section>
    </main>
  );
}
