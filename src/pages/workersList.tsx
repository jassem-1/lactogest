import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { MoreVertical, Trash } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import AddWorkerForm from './addWorker/AddWorkerForm';

Modal.setAppElement('#__next'); // To prevent screen readers from reading main content when modal is open

function WorkersList() {
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchdata1() {
      try {
        const res = await fetch('http://localhost:4000/api/workersdata')
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      } catch (err) {
        console.log('Awch', err);
      }
    }
    fetchdata1();
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      <div className="flex-1 flex flex-col p-8 overflow-auto ">
        <div className="col-span-9">
          <header className="flex pb-6 justify-between items-center">
            <h1 className="text-3xl font-bold text-teal-400">
              Liste des employés
            </h1>
            <button
              className="btn btn-primary"
              onClick={() => setModalIsOpen(true)}
            >
              Ajouter un employé
            </button>
          </header>
        </div>
       
        <div className="overflow-x-auto shadow-lg rounded-md border">
          <Table className="overflow-hidden bg-white">
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Matricule</TableHead>
                <TableHead className="whitespace-nowrap">Nom Prenom</TableHead>
                <TableHead className="whitespace-nowrap">
                  Cycle de travail
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  Date de naissance
                </TableHead>
                <TableHead className="whitespace-nowrap">Age</TableHead>
                <TableHead className="whitespace-nowrap">civilite</TableHead>
                <TableHead className="whitespace-nowrap">Droit_CG</TableHead>
                <TableHead className="whitespace-nowrap">
                  Situation_familiale
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  Chef_de_famille
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  CATEGORIE_PROFESSIONNELLE
                </TableHead>
                <TableHead className="whitespace-nowrap text-right">
                  Modifier
                </TableHead>
                <TableHead className="whitespace-nowrap text-right">
                  Supprimer
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((data: any) => (
                <TableRow key={data.MATRICULE}>
                  <TableCell className="whitespace-nowrap">
                    {data.MATRICULE}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.NOM_PRENOM}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.Cycle}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.Date_de_naissance}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.age}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.civilite}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.DROIT_CG}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.Situation_familiale}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.Chef_de_famille}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.CATEGORIE_PROFESSIONNELLE}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-right">
                    <button
                      className="btn btn-sm"
                      onClick={() =>
                        router.push(`/updateWorker/${data.MATRICULE}`)
                      }
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-right">
                    <Trash
                      size={14}
                      onClick={() =>
                        router.push(`/deleteWorker/${data.MATRICULE}`)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Worker Modal"
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto">
          <AddWorkerForm />
          <button
            className="btn btn-secondary mt-4"
            onClick={() => setModalIsOpen(false)}
          >
            Fermer
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default WorkersList;
