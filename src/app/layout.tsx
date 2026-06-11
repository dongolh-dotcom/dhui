import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import './globals.css';



export const metadata: Metadata = {
  title: 'dongolheart-Ui',
  description: 'Dongolheart-Ui',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // required styles
        className="flex flex-col min-h-screen"
      >
        <RootProvider>
          {children}
          </RootProvider>
      </body>
    </html>
  );
}
