'use client';

import { useRouter } from 'next/navigation';

export default function DeleteWorkerConge({ id }: any) {
  const router = useRouter();
  const deleteWorkerConge = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:4000/api/workersConge/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={deleteWorkerConge} className="btn btn-error ml-2">
      Delete
    </button>
  );
}
