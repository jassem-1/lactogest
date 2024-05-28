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
      console.error("logged in succefully", result.token);

      router.push("/dashboard");
    } else {
      console.error("Failed to log in:", result.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="email"
        type="email"
        required
        className="border border-black text-black"
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        required
        className="border border-black text-black"
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <p>
        Dont have an account?{" "}
        <a href="/register" className="text-blue-500">
          Sign up
        </a>
      </p>
    </form>
  );
}
Home.getLayout = function getLayout(page: any) {
  return <>{page}</>; // Do not wrap in the AdminLayout
}
