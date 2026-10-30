import './globals.css';
import { SiteHeader } from './components/site-header';

export const metadata = {
  title: 'V\u00c6NGET | Boligf\u00e6llesskab i Tilst',
  description: 'Information om V\u00c6NGET, boligerne og f\u00e6llesskabet i Tilst.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="da"><body><SiteHeader />{children}</body></html>;
}
