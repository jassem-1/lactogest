import { SideBar } from '.';
import NavBar from './NavBar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{ fontFamily: inter.style.fontFamily }}
      className="flex flex-col min-h-screen max-h-screen bg-white overflow-hidden "
    >
      {/*@ts-ignore*/}
      <NavBar />
      <div className="flex flex-1 flex-row overflow-hidden">
        <SideBar />
        <div className="flex-1 pt-16 flex flex-col overflow-hidden bg-emerald-100">
          {children}
        </div>
      </div>
    </main>
  );
}
