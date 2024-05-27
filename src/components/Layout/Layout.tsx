import NavBar from './NavBar';

import { Inter } from 'next/font/google';

// import { useAppQueryConfig } from '@/hooks/useAppQueryConfig';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  // useAppQueryConfig();

  return (
    <main
      style={{ fontFamily: inter.style.fontFamily }}
      className="flex flex-col min-h-screen max-h-screen bg-white overflow-hidden"
    >
      <NavBar />
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {children}
      </div>
    </main>
  );
}
