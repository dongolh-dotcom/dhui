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
