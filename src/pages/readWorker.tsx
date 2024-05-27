// Example usage in a Next.js page to fetch data by ID

import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ReadWorker() {
  //const [id, setId] = useState('');
  const [data, setData] = useState<any>([]);
  const router = useRouter(); //router: Utilisation du hook

  /*const handleChange = (e: any) => {
        setId(e.target.value);
    };*/
  const { id } = router.query;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/workers/${id}`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        const error = await response.json();
        console.error('Failed to fetch data:', error.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return; /*(
        <div>
            <h1>Read Data</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="ID" value={id} onChange={handleChange} /><br />
                <button type="submit">Read Worker</button>
            </form>
            {data && (
                <div>
                    <h2>Data:</h2>
                </div>
            )}
        </div>
    );*/
}
