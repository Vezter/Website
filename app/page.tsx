export default function Home() {
  return (
    <main className="w-full">
      <section id="discover" className="bg-white/90 border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Boligfællesskab i Tilst</p>
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 sm:text-5xl">VÆNGET — tryghed, orden og fællesskab</h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">Et klart struktureret andelsboligfællesskab med 21 rækkehuse, private haver og et fælleshus. Her er hverdagen organiseret omkring både privatliv og fællesskab.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border-t border-slate-200/70 pt-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Boligtyper</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">65–103 m²</p>
                </div>
                <div className="border-t border-slate-200/70 pt-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Lokation</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">Havkærvænget, Tilst</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-[rgba(0,0,0,0.08)] transition hover:bg-[#d9a34c]" href="/contact">Kontakt os</a>
                <a className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500" href="#boligtyper">Se boligtyper</a>
              </div>
            </div>

            <aside className="space-y-6 border-l border-slate-200/70 pl-10">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Nøglefakta</p>
                <div className="mt-4 space-y-3 text-slate-700">
                  <p>21 rækkehuse med private haver og fælleshus.</p>
                  <p>Trygge rammer for fællesskab og hverdag.</p>
                  <p>Godkendte rammer for vedligehold og forbedringer.</p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Stil</p>
                <div className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
                  <div className="border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Fællesskab</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Rolig hverdag</p>
                  </div>
                  <div className="border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Struktur</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Klare rammer</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="boligtyper" className="bg-white/90 border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Boligtyper</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Huse i fire størrelser</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">VÆNGET tilbyder enkle og funktionelle rækkehuse i 65, 75, 86 og 103 m². Boligerne er planlagt med fokus på ensartethed, kvalitet og et roligt udtryk.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">65 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">3 boliger</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">75 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">3 boliger</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">86 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">9 boliger</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">103 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">6 boliger</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/90 border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Fællesskab</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Fællesskab og aktivitet</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">VÆNGET er et beboersamfund med fællesarrangementer og ordnede rammer, der skaber ro og nærvær i hverdagen.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li><strong>Fællesspisning:</strong> cirka en gang om måneden i fælleshuset.</li>
                <li><strong>Årlige aktiviteter:</strong> nytårstaffel, generalforsamling, sommerfest og arbejdsweekend.</li>
                <li><strong>Vedligehold:</strong> naboerne hjælper hinanden og passer området.</li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Regler</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Regler for boligændringer</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">For at bevare områdets ro og sammenhæng godkendes større ændringer, herunder udestuer og overdækkede terrasser.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p><strong>Ansøgning:</strong> Alle større byggerier kræver bestyrelsens tilladelse.</p>
                <p><strong>Harmoni:</strong> Målet er et ensartet og præsentabelt boligmiljø.</p>
                <p><strong>Trivsel:</strong> Fælles ydre værdier beskytter både husene og fællesskabet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/90 border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Priser</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Aktuelle priser</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">Priserne er fastsat pr. 15. april 2026 og kan ændre sig. Kontakt os for at høre om ledige boliger og den aktuelle prisliste.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">65 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">kr. 330.789,-</p>
              <p className="mt-2 text-slate-600">Husleje kr. 4.239,-</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">75 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">kr. 381.680,-</p>
              <p className="mt-2 text-slate-600">Husleje kr. 4.738,-</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">86 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">kr. 437.593,-</p>
              <p className="mt-2 text-slate-600">Husleje kr. 5.288,-</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">103 m²</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">kr. 524.172,-</p>
              <p className="mt-2 text-slate-600">Husleje kr. 6.139,-</p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Interesse</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">Vil du på interesselisten?</p>
            <p className="mt-3 leading-7 text-slate-700">Send en mail til bestyrelsen for at blive opført på interesselisten og få prioriteret information om ledige boliger.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#d9a34c]" href="mailto:webmaster8381@gmail.com">Mail interesselisten</a>
              <a className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500" href="/contact">Se kontaktinfo</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
