import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arden Cole · Principal Full‑Stack Engineer',
  description:
    'Senior full‑stack engineer crafting resilient platforms, design systems, and premium product experiences.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Arden Cole · Principal Full‑Stack Engineer',
    description:
      'Design-forward engineering leadership across cloud, data, and product experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-ink font-body text-mist">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-glow opacity-60" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(28,36,64,0.8),transparent_45%)]" />
        {children}
      </body>
    </html>
  );
}
