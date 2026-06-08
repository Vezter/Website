import './globals.css';

export const metadata = {
  title: 'Community Website',
  description: 'A Next.js starting point for the community website project.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-sm">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 sm:px-8">
            <a className="text-sm font-semibold uppercase tracking-[0.24em] text-white" href="/">VÆNGET</a>

            <div className="hidden items-center gap-4 sm:flex">
              <a className="text-sm uppercase font-semibold tracking-wide text-slate-200 transition hover:text-white" href="/#discover">Opdag</a>
            </div>

            <a className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-slate-950/20 transition hover:bg-amber-200" href="/contact">Kontakt</a>
          </div>
        </nav>

        <header className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,#071023_0%,#0b1220_100%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">VÆNGET // BOLIGFÆLLESSKAB</p>
                <div className="space-y-3">
                  <h1 className="text-4xl font-semibold uppercase tracking-[0.18em] text-white sm:text-5xl">ANDENSGEMEINSKAB</h1>
                  <h1 className="text-4xl font-semibold uppercase tracking-[0.18em] text-slate-200 sm:text-5xl">FÆLLESSKAB</h1>
                  <h1 className="text-4xl font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-5xl">TRYGHED</h1>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">Et tæt andelsboligfællesskab i Tilst med en klar struktur, private haver og et aktivt fælleshus. Læs videre for at se, hvordan foreningen fungerer og hvad der gør VÆNGET til et særligt sted.</p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-300/30 transition hover:bg-amber-200" href="/#discover">
                    Discover
                    <span className="ml-2 inline-block text-slate-950 animate-blink">|</span>
                  </a>
                  <a className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300" href="/contact">Kontakt</a>
                </div>
              </div>

              <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 text-slate-200 shadow-[0_0_24px_rgba(255,214,92,0.06)] flicker">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-300">SYSTEM STATUS</p>
                  <div className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                    <p>INIT › 85% complete</p>
                    <p>DATA SYNC › online</p>
                    <p>HABITATS › 21 homes</p>
                    <p>COMMUNITY › active</p>
                    <p>CONTACT › webmaster8381@gmail.com</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 p-6 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Key facts</p>
                  <div className="mt-4 grid gap-4 text-slate-200 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Typology</p>
                      <p className="mt-2 text-lg font-semibold text-white">65–103 m²</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</p>
                      <p className="mt-2 text-lg font-semibold text-white">Havkærvænget, Tilst</p>
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
