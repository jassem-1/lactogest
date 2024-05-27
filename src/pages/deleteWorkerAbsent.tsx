'use client';

import { useRouter } from 'next/navigation';

export default function deleteWorkerAbsent({ id }: any) {
  const router = useRouter();
  const deleteWorkerAbsent = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:4000/api/workersAbsent/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
      onClick={deleteWorkerAbsent}
      className="btn btn-error ml-2 text-3xl font-bold text-teal-400"
    >
      Delete
    </button>
  );
}
