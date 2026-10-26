import type { Metadata } from 'next';
import { Geist, Fraunces } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'ESSERE — Centro integral de salud',
  description:
    'Un espacio para sentirte bien. Profesionales de distintas disciplinas trabajando cerca, para acompañarte de una manera más humana e integral.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
