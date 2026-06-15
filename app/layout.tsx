import type { Metadata, Viewport } from 'next';
import './globals.css';

/**
 * Favicon files live in /public (from favicon.io zip):
 *   favicon.ico, favicon-16x16.png, favicon-32x32.png,
 *   apple-touch-icon.png, android-chrome-*.png, site.webmanifest
 */
export const viewport: Viewport = {
  themeColor: '#F8F4F0',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: 'Audrey | Designed by Odd',
  description: 'Creative hustler • Upcycler • Living life full from Schaffhausen',
  applicationName: 'Audrey',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Audrey',
    statusBarStyle: 'default',
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
