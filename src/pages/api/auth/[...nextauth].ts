import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { query } from '@/utils/postgres';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_secret_here'; 

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const result = await query('SELECT * FROM users WHERE email = $1', [email]);
      const rows = result.rows as unknown as User[];

      const user = rows[0];

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' } // You can adjust the expiration as needed
          );    
          res.status(200).json({ token, message: `Logged in successfully as ${user.role}` });
          console.log( token, `Logged in successfully as ${user.role}` )

      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {   
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
