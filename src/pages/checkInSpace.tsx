import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { MoreVertical, Trash } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function CheckInSpace() {
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchdata1() {
      try {
        const res = await fetch("http://localhost:4000/api/workersPointage")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      } catch (err) {
        console.log("Awch", err);
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
              Espace pointage
            </h1>
          </header>
        </div>
        <div className="overflow-x-auto shadow-lg rounded-md border">
          <Table className="overflow-hidden bg-white">
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Id_pointage</TableHead>
                <TableHead className="whitespace-nowrap">Entrée</TableHead>
                <TableHead className="whitespace-nowrap">Sortie</TableHead>
                <TableHead className="whitespace-nowrap">Régime</TableHead>
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
                <TableRow key={data.ID_Pointage}>
                  {" "}
                  {/* Added key prop here */}
                  <TableCell className="whitespace-nowrap">
                    {data.ID_Pointage}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.ENTREE_1}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.SORTIE_1}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {data.REGIME}
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <MoreVertical
                      size={14}
                      onClick={() =>
                        router.push(`/updateWorkerpointage/${data.ID_Pointage}`)
                      }
                    />
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <Trash
                      size={14}
                      onClick={() =>
                        router.push(`/deleteWorkerpointage/${data.ID_Pointage}`)
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

export default CheckInSpace;
