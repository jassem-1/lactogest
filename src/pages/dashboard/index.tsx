import { Label } from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col p-4 overflow-auto">
        <div className="col-span-9">
          <header className="flex pb-4 flex-col">
            <h1 className="text-3xl font-bold text-teal-400">Dashboread</h1>
            <Label className="text-sm ">Bienvenue sur votre dashboread </Label>
          </header>
        </div>
        <iframe
          title="Rapport_LactoGest"
          className="w-full h-full"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDgzYThiNTEtM2Q0Yi00ZjM2LWFkOTYtMDNhOWQxNThmZjgwIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
