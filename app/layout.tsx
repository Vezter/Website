import './globals.css';

export const metadata = {
  title: 'Community Website',
  description: 'A Next.js starting point for the community website project.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className="bg-[var(--bg-900)] text-slate-900 antialiased">
        <nav className="sticky top-0 z-50 border-b border-slate-300/40 bg-white/80 backdrop-blur-xl shadow-sm">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 sm:px-8">
            <a className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900" href="/">VÆNGET</a>

            <div className="hidden items-center gap-4 sm:flex">
              <a className="text-sm uppercase font-semibold tracking-wide text-slate-700 transition hover:text-slate-900" href="/#discover">Opdag</a>
            </div>

            <a className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-[rgba(0,0,0,0.08)] transition hover:bg-[#d9a34c]" href="/contact">Kontakt</a>
          </div>
        </nav>

        <header className="relative overflow-hidden bg-[rgba(255,255,255,0.92)]">
          <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
            <div className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-[var(--accent)]/15 blur-3xl"></div>
            <div className="absolute right-0 top-28 h-36 w-36 rounded-full bg-slate-900/5 blur-2xl"></div>
            <div className="absolute left-1/2 top-16 h-44 w-44 -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl"></div>
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:items-start">
              <div className="space-y-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">VÆNGET // Boligfællesskab</p>
                <div className="space-y-5">
                  <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 sm:text-5xl">Et hjem der holder sig selv i balance</h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">Et tæt andelsboligfællesskab i Tilst med private haver, fælleshus og klare rammer for hverdagen. Når du bor her, bliver både privatliv og fællesskab en naturlig del af dit liv.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-700">21 rækkehuse</span>
                    <span className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-700">Private haver</span>
                  </div>
                  <div className="flex gap-3">
                    <a className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-[rgba(0,0,0,0.08)] transition hover:bg-[#d9a34c]" href="/#discover">Læs mere</a>
                    <a className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500" href="/contact">Kontakt</a>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Nøglefakta</p>
                  <div className="mt-4 space-y-3 text-slate-700">
                    <p>21 rækkehuse i et hverdagsvenligt boligfællesskab.</p>
                    <p>Stabile rammer for fællesskab og privatliv.</p>
                    <p>Private haver, fælleshus og struktureret vedligehold.</p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Illustration</p>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/50">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Husplan</p>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[0.72rem] uppercase tracking-[0.2em] text-slate-500">
                        <span className="rounded-full bg-slate-100 px-2 py-1">65 m²</span>
                        <span className="rounded-full bg-slate-100 px-2 py-1">75 m²</span>
                        <span className="rounded-full bg-slate-100 px-2 py-1">86 m²</span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-5">
                      <div className="h-28 rounded-[1.4rem] bg-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
