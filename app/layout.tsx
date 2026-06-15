import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Audrey | Designed by Odd',
  description: 'Creative hustler • Upcycler • Living life full from Schaffhausen',
  // Favicon set: cream background + clay "A" (Playfair Display style from favicon.io)
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#F8F4F0',
  appleWebApp: {
    title: 'Audrey',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
