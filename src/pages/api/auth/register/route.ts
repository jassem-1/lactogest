import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { query } from '@/utils/postgres'; // Ensure this is the correct path

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request:', req.method, req.body); // Log request method and body

  if (req.method !== 'POST') {
    console.log('Method not allowed');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { username, email, password } = req.body;
    console.log('Request body:', { username, email, password }); // Log parsed request body

    // Basic validation
    if (!username || !email || !password) {
      console.log('Validation failed: Username, email, and password are required');
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    // Check if the user already exists
    const { rows } = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (rows.length > 0) {
      console.log('User already exists:', email);
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password and store the user
    const hashedPassword = await bcrypt.hash(password, 10);
    await query('INSERT INTO users (username, email, password, role, created_at) VALUES ($1, $2, $3, $4, $5)', [
      username,
      email,
      hashedPassword,
      'user',
      new Date(),
    ]);

    console.log('User registered successfully:', email);
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
