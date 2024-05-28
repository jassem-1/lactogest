// pages/api/data.js

let data: any = [];
import pool from '../../utils/postgres';

const fetchData = async () => {
  try {
    const client = await pool.connect();
    console.log('database connected');
    const result = await client.query('SELECT * FROM public."Dim_Employe"');
    const data = result.rows;
    console.log('fetch data >>>>', data);
    return data;
    client.release();
    //return NextResponse.json(result.rows[1].NOM_PRENOM);
  } catch (error) {
    console.error('error fetching DB', error);
    throw error;
  }
};

fetchData()
  .then((data) => {
    console.log('recevedata', data);
  })
  .catch((error) => {
    console.error('error fetching', error);
  });

export default function handler(req: any, res: any) {
  const { method, body } = req;
  //fetchData().then(data => {console.log("handler data",data)})
  //res.status(200).json({ text: 'Hello' });

  fetchData().then((data) => {
    console.log('handler data', data);

    switch (method) {
      case 'GET':
        res.status(200).json(data);
        break;
      case 'POST':
        const newData = {
          id: data.length + 1,
          text: body.text,
          completed: false,
        };
        data.push(newData);
        res.status(201).json(newData);
        break;
      case 'PUT':
        const { id, text, completed } = body;
        const index = data.findIndex((myData: any) => myData.id === id);
        if (index !== -1) {
          data[index] = { id, text, completed };
          res.status(200).json(data[index]);
        } else {
          res.status(404).json({ message: 'myData not found' });
        }
        break;
      case 'DELETE':
        data = data.filter((myData: any) => myData.id !== body.id);
        res.status(200).json({ message: 'myData deleted successfully' });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  });
}
