import './globals.css';

export const metadata = {
  title: 'Community Website',
  description: 'A Next.js starting point for the community website project.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
