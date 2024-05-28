import { useEffect, useState } from 'react';

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    // Add other fields as needed
  }
  
const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getAllUsers');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <ul>
      {users.map(user => (
  <li key={user.id}>
    Username: {user.username}, Email: {user.email}, Role: {user.role}, Password : {user.password}
  </li>
))}

      </ul>
    </div>
  );
};

export default UsersPage;
