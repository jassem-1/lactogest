"use client" ;
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
        <input name="username" type="text" required className="border border-black text-black" placeholder="Username" disabled={loading} />
        <input name="email" type="email" required className="border border-black text-black" placeholder="Email" disabled={loading} />
        <input name="password" type="password" required className="border border-black text-black" placeholder="Password" disabled={loading} />
        <button type="submit" disabled={loading}>Register</button>
      </form>
    </>
  );
}
