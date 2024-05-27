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

function absentSpace() {
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    //get workers list
    async function fetchdata1() {
      try {
        const res = await fetch('http://localhost:4000/api/workersAbsent')
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
            <h1 className="text-3xl font-bold text-teal-400">
              Espaces absentéismes
            </h1>
          </header>
        </div>
        <div className="overflow-x-auto shadow-lg rounded-md border">
          <Table className="overflow-hidden bg-white">
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Matricule</TableHead>
                <TableHead className="whitespace-nowrap"> H_Absences</TableHead>
                <TableHead className="whitespace-nowrap">
                  {' '}
                  H_Accidents
                </TableHead>
                <TableHead className="whitespace-nowrap">H_Maladie</TableHead>
                <TableHead className="whitespace-nowrap">
                  H_Mise a payer
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  H_Autorisations
                </TableHead>
                <TableHead className="whitespace-nowrap">H_Théo</TableHead>
                <TableHead className="whitespace-nowrap">H_Missions</TableHead>
                <TableHead className="whitespace-nowrap">
                  H_Repos Comensateur
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  Total_Travail
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
                <TableRow>
                  <TableCell className="whitespace-nowrap">
                    {data.MATRICULE}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.H_ABS_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.H_ACC_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.H_MAL_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.H_MAP_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.H_AUTO_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.THEO_NR_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.H_MISS_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.REPOS_COMPENSATEUR_Jour}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.T_TRAVAIL_Jour}
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <MoreVertical
                      size={14}
                      onClick={() =>
                        router.push(`/updateWorkerabsent/${data.MATRICULE}`)
                      }
                    />
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <Trash
                      size={14}
                      onClick={() =>
                        router.push(`/deleteWorkerabsent/${data.MATRICULE}`)
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

export default absentSpace;
