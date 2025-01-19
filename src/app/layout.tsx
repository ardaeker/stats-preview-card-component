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
  title: 'Frontend Mentor - Stats preview card component',
  description:
    'This website is a solution for the Stats preview card component challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.',
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
    title: 'Frontend Mentor - Stats preview card component',
    description:
      'This website is a solution to the Stats preview card component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - Stats preview card component',
    images: [
      {
        url: 'opengraph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://stats-preview-card-component-sage-one.vercel.app',
  },
  icons: {
    icon: '/favicon.png',
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
