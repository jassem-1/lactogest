import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../../utils/auth'; // Adjust the path as necessary

export default function NavBar() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status on component mount and whenever the route changes
    setLoggedIn(isAuthenticated());
  }, [router.asPath]);  // Dependency on the path to re-check when navigating

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    router.push('/');
  };

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
            className="self-center text-4xl font-bold text-purple-800 whitespace-nowrap hover:cursor-pointer"
          >
            {router.pathname.includes('admin')
              ? 'Lactogest - admin'
              : 'Lactogest'}
          </span>
        </div>
        {/* Logout Button */}
        {loggedIn && (
          <button onClick={handleLogout} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
