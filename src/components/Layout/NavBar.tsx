import Link from 'next/link';

import { Container } from '../Common';
import { useRouter } from 'next/router';
import { Button } from '../ui';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="bg-white w-full border-b">
      <Container
        // type="padding"
        className="flex flex-wrap items-center justify-between py-4"
      >
        <Link href={{ pathname: '/', query: router.query }}>
          <span className="self-center text-2xl font-medium whitespace-nowrap hover:underline">
            tarak zlebya w m5ara9
          </span>
        </Link>
        <div className="flex flex-row gap-4">
          <Button variant={'ghost'}>Acceuil</Button>
          <Button variant={'ghost'}>Pointage</Button>
          <Button variant={'ghost'}>Conjé</Button>
          <Button variant={'ghost'}>about</Button>
        </div>
      </Container>
    </nav>
  );
}
