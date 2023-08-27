import type { Metadata } from 'next';

import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { Footer } from '@/components/Footer';

import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Films',
  description: 'Conheça os melhores Filmes e Séries',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <Search />
        {children}
        <Footer />
      </body>
    </html>
  );
}
