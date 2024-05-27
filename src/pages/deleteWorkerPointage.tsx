'use client';

import { useRouter } from 'next/navigation';

export default function deleteWorkerPointage({ id }: any) {
  const router = useRouter();
  const deleteWorkerPointage = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(
        `http://localhost:4000/api/workersPointage/${id}`,
        {
          method: 'DELETE',
        },
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={deleteWorkerPointage} className="btn btn-error ml-2">
      Delete
    </button>
  );
}
