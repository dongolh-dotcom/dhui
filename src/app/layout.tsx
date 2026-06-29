<<<<<<< HEAD
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dongolheart-Ui",
  description: "A custom registry for distributing code using shadcn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="luxury" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-luxury bg-base-100 text-base-content">
        {children}
      </body>
    </html>
  );
}
=======
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { Providers } from './providers'; // Import your next-themes wrapper
import Navbar from '@/components/own/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'dongolheart-Ui',
  description: 'Dongolheart-Ui',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-base-200">
        {/* Providers wraps the tree to supply data-theme to the <html> tag */}
        <Providers>
          <RootProvider>
            <Navbar />
            <main className="flex-1 p-6">
              {children}
            </main>
          </RootProvider>
        </Providers>
      </body>
    </html>
  );
}
>>>>>>> 3f53f4b07c0801627c88409563d9fb9495735852
