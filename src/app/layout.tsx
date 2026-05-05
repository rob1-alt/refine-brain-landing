import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const alcyone = localFont({
  src: './fonts/Alcyone-Medium.ttf',
  variable: '--font-alcyone',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Refine — A Company Brain for Customer Acquisition',
  description:
    'Refine builds a Company Brain so every campaign your team runs compounds on top of everything you already know.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${alcyone.variable} ${alcyone.className}`}>{children}</body>
    </html>
  );
}
