import Link from 'next/link';
import { siteContent } from '../data/site-content';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-logo" href="/" aria-label={`${siteContent.name} - forside`}>
          {siteContent.name}
        </Link>

        <nav aria-label="Hovednavigation">
          <ul className="site-navigation">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="button button--small" href="/contact">Kontakt</Link>
      </div>
    </header>
  );
}
