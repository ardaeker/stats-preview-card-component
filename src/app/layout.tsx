import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter, Lexend } from 'next/font/google';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

const lexend = Lexend({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lexend',
});

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0c1c',
};

export const metadata: Metadata = {
  title: 'Arda Eker - Stats preview card component',
  description:
    'An accessible and responsive stats card with semantic HTML and metadata optimization.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'Stats preview card component',
    'Stats preview card component solution',
    'Stats preview card component challenge',
    'Stats preview card component challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL('https://stats-preview-card-component-sage-one.vercel.app/'),
  openGraph: {
    title: 'Arda Eker - Stats preview card component',
    description:
      'An accessible and responsive stats card with semantic HTML and metadata optimization.',
    siteName: 'Arda Eker - Stats preview card component',
    images: [
      {
        url: 'opengraph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://stats-preview-card-component-sage-one.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} antialiased`}>{children}</body>
    </html>
  );
}
