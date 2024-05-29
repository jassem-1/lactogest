"use client";
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const body = JSON.stringify({
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const response = await fetch('/api/auth/register/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      toast.success('Registered successfully!');
      setTimeout(() => {
        router.push('/'); // Redirect to login after a short delay
      }, 2000); // 2000 milliseconds delay
    } else {
      toast.error(result.error || 'Failed to register');
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-auto max-w-md mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <input 
          name="username" 
          type="text" 
          required 
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700" 
          placeholder="Username" 
          disabled={loading} 
        />
        <input 
          name="email" 
          type="email" 
          required 
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700" 
          placeholder="Email" 
          disabled={loading} 
        />
        <input 
          name="password" 
          type="password" 
          required 
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700" 
          placeholder="Password" 
          disabled={loading} 
        />
        <button 
          type="submit" 
          disabled={loading} 
          className={`w-full py-3 rounded-lg text-white ${loading ? 'bg-emerald-300' : 'bg-emerald-500 hover:bg-emerald-600'} transition-colors duration-200 ease-in-out`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </>
  );
}
