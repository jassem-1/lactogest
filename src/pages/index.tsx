// pages/index.tsx
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/[...nextauth]", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const result = await response.json();
    if (result.token) {
      localStorage.setItem("token", result.token);
      console.error("logged in successfully", result.token);

      router.push("/dashboard");
    } else {
      console.error("Failed to log in:", result.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <input
          name="email"
          type="email"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg text-white bg-emerald-500 hover:bg-emerald-600 transition-colors duration-200 ease-in-out"
        >
          Login
        </button>
        <p className="text-center text-gray-600">
          Dont have an account?{" "}
          <a href="/register" className="text-emerald-500 hover:text-emerald-600">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <>{page}</>; // Do not wrap in the AdminLayout
}
