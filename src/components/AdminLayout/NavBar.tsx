import { useRouter } from 'next/router';
import { Container } from '../Common';
import { LogIn } from 'lucide-react';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="bg-green-300 w-full border-b fixed">
      <div className="flex flex-wrap items-center justify-between px-8">
        <div className="flex flex-row justify-center items-center">
          <Image
            src="/natilait.png"
            alt="natilait logo"
            className="mr-4"
            width={70}
            height={70}
          />
          <span
            onClick={() => {
              router.pathname.includes('admin')
                ? router.push('/admin')
                : router.push('/');
            }}
            className="self-center text-4xl font-bold text-purple-800 whitespace-nowrap hover:cursor-default"
          >
            {router.pathname.includes('admin')
              ? 'Lactogest - admin'
              : 'Lactogest'}
          </span>
        </div>
      </div>
    </nav>
  );
}
