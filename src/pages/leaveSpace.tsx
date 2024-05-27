import {
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { MoreVertical, Trash } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function leaveSpace() {
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchdata1() {
      try {
        const res = await fetch('http://localhost:4000/api/workersConge')
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
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col p-8 overflow-auto">
        <div className="col-span-9">
          <header className="flex pb-6 flex-col">
            <h1 className="text-3xl font-bold text-teal-400">Espaces congés</h1>
          </header>
        </div>
        <div className="overflow-x-auto shadow-lg rounded-md border">
          <Table className="overflow-hidden bg-white">
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Matricule</TableHead>
                <TableHead className="whitespace-nowrap">
                  CG Sans Solde
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {' '}
                  CG Exceptionnel{' '}
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  {' '}
                  CG Circonsition
                </TableHead>
                <TableHead className="whitespace-nowrap">CG Marriage</TableHead>
                <TableHead className="whitespace-nowrap">
                  CG Naissance
                </TableHead>
                <TableHead className="whitespace-nowrap">CG Déces</TableHead>
                <TableHead className="whitespace-nowrap">Jcp_Pris</TableHead>
                <TableHead className="whitespace-nowrap">Jour Férier</TableHead>
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
                <TableRow>
                  <TableCell className="whitespace-nowrap">
                    {data.MATRICULE}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.CG_AUT_SANS_SOLDE_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.CONGES_EXCEPTIONNEL_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.CIRCONSITION_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.CG_MAR_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.NAISSANCE_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.DECES_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.JCP_PRIS_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.H_JF_Jour}
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <MoreVertical
                      size={14}
                      onClick={() =>
                        router.push(`/updateWorkerconge/${data.MATRICULE}`)
                      }
                    />
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <Trash
                      size={14}
                      onClick={() =>
                        router.push(`/deleteWorkerconge/${data.MATRICULE}`)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default leaveSpace;
