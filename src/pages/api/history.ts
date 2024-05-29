import pool from '@/utils/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

// Function to fetch history data
const fetchHistoryData = async () => {
    try {
        const client = await pool.connect();
        console.log('database connected');
        const result = await client.query('SELECT * FROM CRUD_History ORDER BY operation_timestamp DESC');
        const data = result.rows;
        console.log('fetch data >>>>', data);
        client.release();
        return data;
    } catch (error) {
        console.error('error fetching DB', error);
        throw error;
    }
};

fetchHistoryData()
    .then((data) => {
        console.log('received data', data);
    })
    .catch((error) => {
        console.error('error fetching', error);
    });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    try {
        let data = await fetchHistoryData();
        console.log('Handler data:', data);

        switch (method) {
            case 'GET':
                res.status(200).json(data);
                break;
            default:
                res.setHeader('Allow', ['GET']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
