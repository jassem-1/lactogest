import { useEffect, useState } from 'react';

function formatHistoryEntry(entry: never) {
    const { operation_type, table_name, operation_timestamp, operation_details } = entry;
    const timestamp = new Date(operation_timestamp).toLocaleString();

    if (table_name === 'Dim_Employe') {
        if (operation_type === 'CREATE') {
            return `Un employé de matricule ${operation_details.new_values.MATRICULE} a été ajouté à l'instant ${timestamp}.`;
        } else if (operation_type === 'DELETE') {
            return `L'employé de matricule ${operation_details.old_values.MATRICULE} a été supprimé à l'instant ${timestamp}.`;
        } else if (operation_type === 'UPDATE') {
            const changes = Object.keys(operation_details.old_values).map(key => {
                return `${key} a changé de ${operation_details.old_values[key]} à ${operation_details.new_values[key]}`;
            }).join(', ');
            return `L'employé de matricule ${operation_details.old_values.MATRICULE} a été mis à jour: ${changes}. L'instant: ${timestamp}.`;
        }
    } else if (table_name === 'FACT') {
        if (operation_type === 'DELETE') {
            return `L'absence/congé de l'employé de matricule ${operation_details.old_values.MATRICULE} a été supprimé à l'instant ${timestamp}.`;
        } else if (operation_type === 'UPDATE') {
            const changes = Object.keys(operation_details.old_values).map(key => {
                return `${key} a changé de ${operation_details.old_values[key]} à ${operation_details.new_values[key]}`;
            }).join(', ');
            return `Une absence/congé de l'employé de matricule ${operation_details.old_values.MATRICULE} a été mise à jour: ${changes}. L'instant: ${timestamp}.`;
        }
    } else if (table_name === 'Dim_Pointage') {
        if (operation_type === 'DELETE') {
            return `Le pointage de l'id ${operation_details.old_values.ID_Pointage} a été supprimé à l'instant ${timestamp}.`;
        } else if (operation_type === 'UPDATE') {
            const changes = Object.keys(operation_details.old_values).map(key => {
                return `${key} a changé de ${operation_details.old_values[key]} à ${operation_details.new_values[key]}`;
            }).join(', ');
            return `Le pointage de l'id ${operation_details.old_values.ID_Pointage} a été mis à jour: ${changes}. L'instant: ${timestamp}.`;
        }
    }

    return ''; // Chaîne vide si aucune correspondance trouvée
}


function HistoryList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchHistoryData() {
            try {
                const res = await fetch('/api/history');
                const data = await res.json();
                setData(data);
            } catch (err) {
                console.error('Error fetching history data:', err);
            }
        }
        fetchHistoryData();
    }, []);

    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 flex flex-col p-8 overflow-auto">
                <div className="col-span-9">
                    <header className="flex pb-6 justify-between items-center">
                        <h1 className="text-3xl font-bold text-teal-400">
                            Historique des opérations
                        </h1>
                    </header>
                </div>
                <div className="overflow-x-auto shadow-lg rounded-md border bg-white p-4">
                    {data.map((entry, index) => (
                        <p key={index} className="mb-4">
                            {formatHistoryEntry(entry)}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryList;
